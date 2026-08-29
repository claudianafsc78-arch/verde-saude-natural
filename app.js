/* =======================================================================
   Verde e Saúde Natural — Front-End (HTML/CSS/JS puro)
   Sprint 1: RF03 Catálogo | RF04 Carrinho | RF05 Pagamento
   ======================================================================= */

// ---------- "Banco de dados" simulado (produtos do catálogo) ----------
const produtos = [
  { id: 1, nome: "Tomate Orgânico",  detalhe: "R$ 8,00 /kg · João Silva",   preco: 8.00,  emoji: "🍅" },
  { id: 2, nome: "Alface Orgânica",  detalhe: "R$ 4,50 /un · Teresa Maria", preco: 4.50,  emoji: "🥬" },
  { id: 3, nome: "Cenoura Orgânica", detalhe: "R$ 5,00 /kg · Ana Souza",    preco: 5.00,  emoji: "🥕" },
  { id: 4, nome: "Banana Orgânica",  detalhe: "R$ 6,50 /kg · Carlos Lima",  preco: 6.50,  emoji: "🍌" },
  { id: 5, nome: "Ovos Caipira",     detalhe: "R$ 18,00 /dz · Sítio Boa Vida", preco: 18.00, emoji: "🥚" },
  { id: 6, nome: "Cheiro Verde",     detalhe: "R$ 3,00 /maço · Teresa Maria", preco: 3.00, emoji: "🌿" },
];

// ---------- Estado da aplicação (em memória, some ao recarregar) ----------
let usuarioLogado = null;
let carrinho = {}; // { produtoId: quantidade }
const TAXA_ENTREGA = 5.00;

// ---------- Navegação entre telas ----------
function irPara(idTela) {
  document.querySelectorAll(".tela").forEach(t => t.classList.remove("ativa"));
  document.getElementById(idTela).classList.add("ativa");

  if (idTela === "tela-catalogo") renderizarCatalogo();
  if (idTela === "tela-carrinho") renderizarCarrinho();
  if (idTela === "tela-pagamento") renderizarPagamento();
}

// ---------- RF01 / Login e Cadastro (simulados, sem back-end ainda) ----------
function fazerLogin() {
  const email = document.getElementById("login-email").value.trim();
  const senha = document.getElementById("login-senha").value.trim();
  const erro = document.getElementById("login-erro");

  if (!email || !senha) {
    erro.textContent = "Preencha e-mail e senha para continuar.";
    return;
  }
  erro.textContent = "";
  usuarioLogado = { email };
  irPara("tela-catalogo");
}

function fazerCadastro() {
  const nome = document.getElementById("cad-nome").value.trim();
  const email = document.getElementById("cad-email").value.trim();
  const telefone = document.getElementById("cad-telefone").value.trim();
  const endereco = document.getElementById("cad-endereco").value.trim();
  const senha = document.getElementById("cad-senha").value.trim();
  const erro = document.getElementById("cadastro-erro");

  if (!nome || !email || !telefone || !endereco || !senha) {
    erro.textContent = "Todos os campos são obrigatórios.";
    return;
  }
  erro.textContent = "";
  usuarioLogado = { nome, email, telefone, endereco };
  irPara("tela-catalogo");
}

// ---------- RF03: Visualização do catálogo de produtos ----------
function renderizarCatalogo() {
  const termo = (document.getElementById("busca-produto")?.value || "").toLowerCase();
  const lista = document.getElementById("lista-produtos");
  lista.innerHTML = "";

  const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));

  if (filtrados.length === 0) {
    lista.innerHTML = `<p class="carrinho-vazio">Nenhum produto encontrado.</p>`;
    return;
  }

  filtrados.forEach(p => {
    const div = document.createElement("div");
    div.className = "cartao-produto";
    div.innerHTML = `
      <div class="produto-info">
        <span class="produto-emoji">${p.emoji}</span>
        <div>
          <div class="produto-nome">${p.nome}</div>
          <div class="produto-detalhe">${p.detalhe}</div>
        </div>
      </div>
      <button class="btn-add" onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
    `;
    lista.appendChild(div);
  });

  atualizarBadgeCarrinho();
}

// ---------- RF04: Adicionar produtos ao carrinho ----------
function adicionarAoCarrinho(idProduto) {
  carrinho[idProduto] = (carrinho[idProduto] || 0) + 1;
  atualizarBadgeCarrinho();
}

function alterarQuantidade(idProduto, delta) {
  if (!carrinho[idProduto]) return;
  carrinho[idProduto] += delta;
  if (carrinho[idProduto] <= 0) delete carrinho[idProduto];
  renderizarCarrinho();
}

function atualizarBadgeCarrinho() {
  const badge = document.getElementById("badge-carrinho");
  if (!badge) return;
  const totalItens = Object.values(carrinho).reduce((soma, qtd) => soma + qtd, 0);
  badge.textContent = totalItens;
}

function calcularSubtotal() {
  return Object.entries(carrinho).reduce((soma, [id, qtd]) => {
    const produto = produtos.find(p => p.id === Number(id));
    return soma + (produto ? produto.preco * qtd : 0);
  }, 0);
}

function formatarMoeda(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

function renderizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";

  const itens = Object.entries(carrinho);

  if (itens.length === 0) {
    lista.innerHTML = `<p class="carrinho-vazio">Seu carrinho está vazio.<br>Volte ao catálogo e adicione produtos! 🥬</p>`;
  } else {
    itens.forEach(([id, qtd]) => {
      const produto = produtos.find(p => p.id === Number(id));
      const div = document.createElement("div");
      div.className = "item-carrinho";
      div.innerHTML = `
        <div class="produto-info">
          <span class="produto-emoji">${produto.emoji}</span>
          <div>
            <div class="produto-nome">${produto.nome}</div>
            <div class="produto-detalhe">${formatarMoeda(produto.preco)} cada</div>
          </div>
        </div>
        <div class="qtd-controle">
          <button onclick="alterarQuantidade(${produto.id}, -1)">-</button>
          <span>${qtd}</span>
          <button onclick="alterarQuantidade(${produto.id}, 1)">+</button>
        </div>
      `;
      lista.appendChild(div);
    });
  }

  const subtotal = calcularSubtotal();
  const total = itens.length > 0 ? subtotal + TAXA_ENTREGA : 0;

  document.getElementById("carrinho-subtotal").textContent = formatarMoeda(subtotal);
  document.getElementById("carrinho-entrega").textContent = itens.length > 0 ? formatarMoeda(TAXA_ENTREGA) : formatarMoeda(0);
  document.getElementById("carrinho-total").textContent = formatarMoeda(total);

  atualizarBadgeCarrinho();
}

function irParaPagamento() {
  if (Object.keys(carrinho).length === 0) {
    alert("Adicione ao menos um produto ao carrinho antes de continuar.");
    return;
  }
  irPara("tela-pagamento");
}

// ---------- RF05: Efetuar o pagamento do pedido ----------
function renderizarPagamento() {
  const subtotal = calcularSubtotal();
  const total = subtotal + TAXA_ENTREGA;
  document.getElementById("pagamento-total").textContent = formatarMoeda(total);
}

function confirmarPagamento() {
  const erro = document.getElementById("pagamento-erro");
  const formaPagamento = document.querySelector('input[name="pagamento"]:checked');

  if (!formaPagamento) {
    erro.textContent = "Selecione uma forma de pagamento.";
    return;
  }
  if (Object.keys(carrinho).length === 0) {
    erro.textContent = "Seu carrinho está vazio.";
    return;
  }

  erro.textContent = "";

  const totalItens = Object.values(carrinho).reduce((soma, qtd) => soma + qtd, 0);
  const totalPedido = calcularSubtotal() + TAXA_ENTREGA;

  document.getElementById("pedido-numero").textContent = "Pedido #001";
  document.getElementById("pedido-itens").textContent = totalItens + (totalItens === 1 ? " item" : " itens");
  document.getElementById("pedido-total-status").textContent = formatarMoeda(totalPedido);

  document.getElementById("status-vazio").classList.add("escondido");
  document.getElementById("status-pedido").classList.remove("escondido");

  carrinho = {};
  atualizarBadgeCarrinho();

  irPara("tela-status");
}

// ---------- Inicialização ----------
document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo();
});
