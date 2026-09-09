/* =======================================================================
   Verde e Saúde Natural — Front-End (HTML/CSS/JS puro)
   Sprint 1: RF03 Catálogo | RF04 Carrinho | RF05 Pagamento | RF07 Entregador
   ======================================================================= */

// ---------- Ícones dos produtos ----------
const icones = {
  tomate: `<svg viewBox="0 0 40 40"><path d="M20 8c-1.5-2-3.5-3-3.5-3s.5 2.5 2 4" stroke="#3F6B44" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 8c1.5-2 3.5-3 3.5-3s-.5 2.5-2 4" stroke="#3F6B44" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="20" cy="23" rx="13" ry="12" fill="#E4453B"/><ellipse cx="16" cy="19" rx="4" ry="3" fill="#F2685F" opacity="0.7"/></svg>`,

  alface: `<svg viewBox="0 0 40 40"><path d="M20 32c-8 0-13-6-13-13 0-5 3-9 7-11-1 3 0 6 2 8-2-4-1-9 3-12 0 4 1 7 3 9 0-4 2-8 5-10-1 4 0 8 2 11 2-3 5-4 8-4-3 2-5 5-5 9 3-1 6 0 8 2-4 0-7 2-8 5 3 0 5 2 6 4-8 3-12 12-18 12z" fill="#3F9142"/><path d="M20 32c-6 0-10-4-11-9" stroke="#2E6B30" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,

  cenoura: `<svg viewBox="0 0 40 40"><path d="M15 6l3 6M20 5l1 7M25 6l-3 6" stroke="#3F9142" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M20 13c6 0 9 5 8 11-1 7-5 12-8 15-3-3-7-8-8-15-1-6 2-11 8-11z" fill="#F0842E"/><path d="M20 17v18M15 20l2 12M25 20l-2 12" stroke="#D9701F" stroke-width="1.2" opacity="0.6"/></svg>`,

  banana: `<svg viewBox="0 0 40 40"><path d="M11 27c-1 3 1 6 4 6 9 0 17-7 18-16 0-2-1-4-3-4-1 0-2 1-2 2-1 8-8 14-16 14-1 0-1-1-1-2z" fill="#F4C338"/><path d="M11 27c0-1 0-2 1-3" stroke="#D9A82B" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M28 9c1 1 2 3 2 4" stroke="#7A5A1E" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`,

  ovos: `<svg viewBox="0 0 40 40"><ellipse cx="16" cy="24" rx="7" ry="9" fill="#F2E4C9"/><ellipse cx="25" cy="21" rx="7.5" ry="9.5" fill="#FFF8E8" stroke="#EDE0C0" stroke-width="1"/></svg>`,

  cheiroverde: `<svg viewBox="0 0 40 40"><path d="M20 33V12" stroke="#3F9142" stroke-width="2" stroke-linecap="round"/><path d="M20 14c-3-3-8-3-8-3s1 5 5 7M20 18c-3-3-8-3-8-3s1 5 5 7M20 22c3-3 8-3 8-3s-1 5-5 7M20 26c3-3 8-3 8-3s-1 5-5 7" stroke="#4CAF50" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`,

  mel: `<svg viewBox="0 0 40 40"><path d="M14 11h12l1 5H13z" fill="#8B5A2B"/><path d="M13 16h14l-1.5 16a2 2 0 0 1-2 1.8h-7a2 2 0 0 1-2-1.8z" fill="#F5B93F"/><path d="M13 22h14M13 27h14" stroke="#D89A22" stroke-width="1.2"/><rect x="17" y="6" width="6" height="5" rx="1" fill="#8B5A2B"/></svg>`,

  pimentao: `<svg viewBox="0 0 40 40"><path d="M19 8c0-1.5 1-3 2.5-3s1.5 1.5 0 2.5" stroke="#3F9142" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M18 9c3-1 5 0 6 1" stroke="#3F9142" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 11c7 0 10 6 9 13-1 6-5 10-9 10s-8-4-9-10c-1-7 2-13 9-13z" fill="#E23B3B"/><path d="M16 15c-1 3-1 7 0 10" stroke="#F26B5B" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.6"/></svg>`,

  cebola: `<svg viewBox="0 0 40 40"><path d="M20 9c1-2 3-4 3-4" stroke="#3F9142" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M20 9c-1-2-3-4-3-4" stroke="#3F9142" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M20 10c6 0 9 6 9 12 0 6-4 10-9 10s-9-4-9-10c0-6 3-12 9-12z" fill="#C77DC2"/><path d="M20 10v22M15 14c-1 5-1 12 0 17M25 14c1 5 1 12 0 17" stroke="#A85AA3" stroke-width="1" opacity="0.6"/></svg>`,

  acerola: `<svg viewBox="0 0 40 40"><path d="M18 10c1-2 3-3 3-3s0 2.5-1 4" stroke="#3F9142" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="15" cy="20" r="6.5" fill="#E4453B"/><circle cx="24" cy="18" r="7" fill="#EF5350"/><circle cx="19" cy="27" r="6" fill="#E4453B"/></svg>`
};


// ---------- Produtos ----------
const produtos = [
  { id: 1, nome: "Tomate Orgânico", detalhe: "João Silva", preco: 8.00, unidade: "kg", icone: icones.tomate, categoria: "legumes" },
  { id: 2, nome: "Alface Orgânica", detalhe: "Teresa Maria", preco: 4.50, unidade: "un", icone: icones.alface, categoria: "hortalicas" },
  { id: 3, nome: "Cenoura Orgânica", detalhe: "Ana Souza", preco: 5.00, unidade: "kg", icone: icones.cenoura, categoria: "legumes" },
  { id: 4, nome: "Banana Orgânica", detalhe: "Carlos Lima", preco: 6.50, unidade: "kg", icone: icones.banana, categoria: "frutas" },
  { id: 5, nome: "Ovos Caipira", detalhe: "Sítio Boa Vida", preco: 18.00, unidade: "dz", icone: icones.ovos, categoria: "outros" },
  { id: 6, nome: "Cheiro Verde", detalhe: "Teresa Maria", preco: 3.00, unidade: "maço", icone: icones.cheiroverde, categoria: "hortalicas" },
  { id: 7, nome: "Mel Puro", detalhe: "Sítio Boa Vida", preco: 22.00, unidade: "un", icone: icones.mel, categoria: "outros" },
  { id: 8, nome: "Pimentão", detalhe: "Ana Souza", preco: 7.00, unidade: "kg", icone: icones.pimentao, categoria: "legumes" },
  { id: 9, nome: "Cebola Roxa", detalhe: "João Silva", preco: 6.00, unidade: "kg", icone: icones.cebola, categoria: "legumes" },
  { id: 10, nome: "Acerola", detalhe: "Carlos Lima", preco: 9.50, unidade: "kg", icone: icones.acerola, categoria: "frutas" }
];

const categorias = [
  { id: "todos", nome: "Todos" },
  { id: "hortalicas", nome: "Hortaliças" },
  { id: "legumes", nome: "Legumes" },
  { id: "frutas", nome: "Frutas" },
  { id: "outros", nome: "Outros" }
];

let usuarioLogado = null;
let carrinho = {};
let categoriaAtiva = "todos";
const TAXA_ENTREGA = 5.00;


// ======================================================
// NAVEGAÇÃO PROTEGIDA
// ======================================================

function irPara(idTela) {

  // Telas que só podem ser acessadas depois do cadastro/login
  const telasProtegidas = [
    "tela-catalogo",
    "tela-carrinho",
    "tela-pagamento",
    "tela-status"
  ];

  // Se tentar entrar sem estar logado
  if (telasProtegidas.includes(idTela) && !usuarioLogado) {

    alert("Você precisa criar uma conta ou entrar antes de acessar os produtos.");

    // Envia para a tela de cadastro
    document.querySelectorAll(".tela").forEach(t => {
      t.classList.remove("ativa");
    });

    const cadastro = document.getElementById("tela-cadastro");

    if (cadastro) {
      cadastro.classList.add("ativa");
    } else {
      document.getElementById("tela-login").classList.add("ativa");
    }

    window.scrollTo(0, 0);
    return;
  }

  // Mostra a tela solicitada
  document.querySelectorAll(".tela").forEach(t => {
    t.classList.remove("ativa");
  });

  const tela = document.getElementById(idTela);

  if (!tela) return;

  tela.classList.add("ativa");

  window.scrollTo(0, 0);

  // Atualizações específicas de cada tela
  if (idTela === "tela-catalogo") {
    renderizarCatalogo();
  }

  if (idTela === "tela-carrinho") {
    renderizarCarrinho();
  }

  if (idTela === "tela-pagamento") {
    renderizarPagamento();
  }

  if (idTela === "tela-entregador") {
    renderizarEntregas();
  }
}


// ======================================================
// LOGIN
// ======================================================

function fazerLogin() {

  const email = document.getElementById("login-email").value.trim();
  const senha = document.getElementById("login-senha").value.trim();
  const erro = document.getElementById("login-erro");

  if (!email || !senha) {
    erro.textContent = "Preencha e-mail e senha para continuar.";
    return;
  }

  erro.textContent = "";

  usuarioLogado = {
    email: email
  };

  alert("Login realizado com sucesso!");

  irPara("tela-catalogo");
}


// ======================================================
// CADASTRO
// ======================================================

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

  // Cria o usuário
  usuarioLogado = {
    nome: nome,
    email: email,
    telefone: telefone,
    endereco: endereco
  };

  alert("Cadastro realizado com sucesso!");

  // Depois do cadastro, libera o catálogo
  irPara("tela-catalogo");
}


// ======================================================
// CATEGORIAS
// ======================================================

function filtrarCategoria(idCategoria) {

  if (!usuarioLogado) {
    alert("Faça seu cadastro ou login para acessar os produtos.");
    irPara("tela-cadastro");
    return;
  }

  categoriaAtiva = idCategoria;

  renderizarCatalogo();
}


function renderizarCategoriasSidebar() {

  const container = document.getElementById("lista-categorias");

  if (!container) return;

  container.innerHTML = categorias.map(c => `
    <button
      class="item-categoria ${c.id === categoriaAtiva ? 'ativo' : ''}"
      onclick="filtrarCategoria('${c.id}')">
      ${c.nome}
    </button>
  `).join("");
}


// ======================================================
// CATÁLOGO PROTEGIDO
// ======================================================

function renderizarCatalogo() {

  // Segurança extra
  if (!usuarioLogado) {

    alert("Você precisa criar uma conta ou entrar para acessar o catálogo.");

    document.querySelectorAll(".tela").forEach(t => {
      t.classList.remove("ativa");
    });

    const cadastro = document.getElementById("tela-cadastro");

    if (cadastro) {
      cadastro.classList.add("ativa");
    }

    window.scrollTo(0, 0);

    return;
  }

  renderizarCategoriasSidebar();

  const termo = (
    document.getElementById("busca-produto")?.value || ""
  ).toLowerCase();

  const grade = document.getElementById("grade-produtos");

  if (!grade) return;

  grade.innerHTML = "";

  const filtrados = produtos.filter(p => {

    const bateNome =
      p.nome.toLowerCase().includes(termo);

    const bateCategoria =
      categoriaAtiva === "todos" ||
      p.categoria === categoriaAtiva;

    return bateNome && bateCategoria;
  });

  if (filtrados.length === 0) {

    grade.innerHTML = `
      <p class="carrinho-vazio">
        Nenhum produto encontrado.
      </p>
    `;

    return;
  }

  filtrados.forEach(p => {

    const card = document.createElement("div");

    card.className = "produto-card";

    card.innerHTML = `
      <div class="produto-card-icone">
        ${p.icone}
      </div>

      <div class="produto-card-nome">
        ${p.nome}
      </div>

      <div class="produto-card-detalhe">
        ${p.detalhe}
      </div>

      <div class="produto-card-preco">
        ${formatarMoeda(p.preco)}
        <span>/${p.unidade}</span>
      </div>

      <button
        class="btn-adicionar-card"
        onclick="adicionarAoCarrinho(${p.id})">
        Adicionar
      </button>
    `;

    grade.appendChild(card);
  });

  atualizarBadgeCarrinho();
}


// ======================================================
// CARRINHO
// ======================================================

function adicionarAoCarrinho(idProduto) {

  if (!usuarioLogado) {

    alert("Faça seu cadastro ou login antes de adicionar produtos.");

    irPara("tela-cadastro");

    return;
  }

  carrinho[idProduto] =
    (carrinho[idProduto] || 0) + 1;

  atualizarBadgeCarrinho();
}


function alterarQuantidade(idProduto, delta) {

  if (!usuarioLogado) {
    alert("Faça seu cadastro ou login para acessar o carrinho.");
    irPara("tela-cadastro");
    return;
  }

  if (!carrinho[idProduto]) return;

  carrinho[idProduto] += delta;

  if (carrinho[idProduto] <= 0) {
    delete carrinho[idProduto];
  }

  renderizarCarrinho();
}


function atualizarBadgeCarrinho() {

  const badge =
    document.getElementById("badge-carrinho");

  if (!badge) return;

  const totalItens =
    Object.values(carrinho)
      .reduce((soma, qtd) => soma + qtd, 0);

  badge.textContent = totalItens;

  badge.style.display =
    totalItens > 0 ? "flex" : "none";
}


// ======================================================
// CÁLCULOS
// ======================================================

function calcularSubtotal() {

  return Object.entries(carrinho)
    .reduce((soma, [id, qtd]) => {

      const produto =
        produtos.find(p => p.id === Number(id));

      return soma +
        (produto ? produto.preco * qtd : 0);

    }, 0);
}


function formatarMoeda(valor) {

  return "R$ " +
    valor.toFixed(2).replace(".", ",");
}


// ======================================================
// RENDERIZAR CARRINHO
// ======================================================

function renderizarCarrinho() {

  if (!usuarioLogado) {
    irPara("tela-cadastro");
    return;
  }

  const lista =
    document.getElementById("lista-carrinho");

  if (!lista) return;

  lista.innerHTML = "";

  const itens =
    Object.entries(carrinho);

  if (itens.length === 0) {

    lista.innerHTML = `
      <p class="carrinho-vazio">
        Seu carrinho está vazio.<br>
        Volte ao catálogo e adicione produtos! 🥬
      </p>
    `;

  } else {

    itens.forEach(([id, qtd]) => {

      const produto =
        produtos.find(p => p.id === Number(id));

      if (!produto) return;

      const div =
        document.createElement("div");

      div.className =
        "item-carrinho";

      div.innerHTML = `
        <div class="item-carrinho-icone">
          ${produto.icone}
        </div>

        <div class="item-carrinho-info">
          <strong>${produto.nome}</strong>
          <small>
            ${formatarMoeda(produto.preco)}
            /${produto.unidade}
          </small>
        </div>

        <div class="qtd-controle">

          <button
            onclick="alterarQuantidade(${produto.id}, -1)"
            aria-label="Diminuir">
            −
          </button>

          <span>${qtd}</span>

          <button
            onclick="alterarQuantidade(${produto.id}, 1)"
            aria-label="Aumentar">
            +
          </button>

        </div>
      `;

      lista.appendChild(div);
    });
  }

  const subtotal =
    calcularSubtotal();

  const total =
    itens.length > 0
      ? subtotal + TAXA_ENTREGA
      : 0;

  document.getElementById(
    "carrinho-subtotal"
  ).textContent =
    formatarMoeda(subtotal);

  document.getElementById(
    "carrinho-entrega"
  ).textContent =
    itens.length > 0
      ? formatarMoeda(TAXA_ENTREGA)
      : formatarMoeda(0);

  document.getElementById(
    "carrinho-total"
  ).textContent =
    formatarMoeda(total);

  atualizarBadgeCarrinho();
}


// ======================================================
// PAGAMENTO
// ======================================================

function irParaPagamento() {

  if (!usuarioLogado) {

    alert("Faça seu cadastro ou login antes de continuar.");

    irPara("tela-cadastro");

    return;
  }

  if (Object.keys(carrinho).length === 0) {

    alert(
      "Adicione ao menos um produto ao carrinho antes de continuar."
    );

    return;
  }

  irPara("tela-pagamento");
}


function renderizarPagamento() {

  if (!usuarioLogado) {
    irPara("tela-cadastro");
    return;
  }

  const subtotal =
    calcularSubtotal();

  const total =
    subtotal + TAXA_ENTREGA;

  const elemento =
    document.getElementById("pagamento-total");

  if (elemento) {
    elemento.textContent =
      formatarMoeda(total);
  }
}


function confirmarPagamento() {

  if (!usuarioLogado) {

    alert("Faça seu cadastro ou login antes de realizar o pagamento.");

    irPara("tela-cadastro");

    return;
  }

  const erro =
    document.getElementById("pagamento-erro");

  const formaPagamento =
    document.querySelector(
      'input[name="pagamento"]:checked'
    );

  if (!formaPagamento) {

    erro.textContent =
      "Selecione uma forma de pagamento.";

    return;
  }

  if (Object.keys(carrinho).length === 0) {

    erro.textContent =
      "Seu carrinho está vazio.";

    return;
  }

  erro.textContent = "";

  const totalItens =
    Object.values(carrinho)
      .reduce(
        (soma, qtd) => soma + qtd,
        0
      );

  const totalPedido =
    calcularSubtotal() + TAXA_ENTREGA;

  document.getElementById(
    "pedido-numero"
  ).textContent =
    "Pedido #001";

  document.getElementById(
    "pedido-itens"
  ).textContent =
    totalItens +
    (totalItens === 1 ? " item" : " itens");

  document.getElementById(
    "pedido-total-status"
  ).textContent =
    formatarMoeda(totalPedido);

  document.getElementById(
    "status-vazio"
  ).classList.add("escondido");

  document.getElementById(
    "status-pedido"
  ).classList.remove("escondido");

  carrinho = {};

  atualizarBadgeCarrinho();

  irPara("tela-status");
}


// ======================================================
// ENTREGAS
// ======================================================

let entregas = [
  {
    id: 1,
    pedido: "#0038",
    cliente: "Maria Oliveira",
    endereco: "Rua das Flores, 120 - Centro",
    itens: 4,
    total: 42.50,
    status: "pendente"
  },

  {
    id: 2,
    pedido: "#0039",
    cliente: "José Ferreira",
    endereco: "Av. Piauí, 55 - São José",
    itens: 2,
    total: 18.00,
    status: "a_caminho"
  },

  {
    id: 3,
    pedido: "#0040",
    cliente: "Ana Beatriz",
    endereco: "Rua Nova, 300 - Centro",
    itens: 6,
    total: 67.30,
    status: "pendente"
  },

  {
    id: 4,
    pedido: "#0035",
    cliente: "Paulo Sousa",
    endereco: "Rua da Paz, 12 - Vila Nova",
    itens: 3,
    total: 29.90,
    status: "entregue"
  }
];


const iconeLocal = `
<svg
  viewBox="0 0 24 24"
  width="13"
  height="13"
  fill="none"
  stroke="currentColor"
  stroke-width="2">

  <path
    d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/>

  <circle
    cx="12"
    cy="10"
    r="2.5"/>

</svg>
`;


const filtrosEntrega = [
  {
    id: "ativas",
    nome: "Ativas"
  },

  {
    id: "entregue",
    nome: "Concluídas"
  }
];


let filtroEntregaAtivo = "ativas";


const textoStatus = {
  pendente: "Pendente",
  a_caminho: "A caminho",
  entregue: "Entregue"
};


const textoAcao = {
  pendente: "Aceitar entrega",
  a_caminho: "Marcar como entregue"
};


// ======================================================
// FILTROS DE ENTREGA
// ======================================================

function filtrarEntregas(idFiltro) {

  filtroEntregaAtivo =
    idFiltro;

  renderizarEntregas();
}


function renderizarChipsEntrega() {

  const container =
    document.getElementById(
      "chips-status-entrega"
    );

  if (!container) return;

  container.innerHTML =
    filtrosEntrega.map(f => `

      <button
        class="chip ${f.id === filtroEntregaAtivo ? 'chip-ativo' : ''}"
        onclick="filtrarEntregas('${f.id}')">

        ${f.nome}

      </button>

    `).join("");
}


// ======================================================
// RENDERIZAR ENTREGAS
// ======================================================

function renderizarEntregas() {

  renderizarChipsEntrega();

  const lista =
    document.getElementById(
      "lista-entregas"
    );

  if (!lista) return;

  const filtradas =
    entregas.filter(e =>
      filtroEntregaAtivo === "ativas"
        ? e.status !== "entregue"
        : e.status === "entregue"
    );

  if (filtradas.length === 0) {

    lista.innerHTML = `
      <p class="carrinho-vazio">
        Nenhuma entrega
        ${
          filtroEntregaAtivo === "ativas"
            ? "pendente"
            : "concluída"
        }
        no momento.
      </p>
    `;

    return;
  }

  lista.innerHTML =
    filtradas.map(e => `

      <div class="cartao-entrega">

        <div class="entrega-topo">

          <div>

            <div class="entrega-pedido">
              Pedido ${e.pedido}
            </div>

            <div class="entrega-cliente">
              ${e.cliente} · ${e.itens} itens
            </div>

          </div>

          <span
            class="status-badge status-${e.status}">
            ${textoStatus[e.status]}
          </span>

        </div>


        <div class="entrega-endereco">

          ${iconeLocal}

          <span>
            ${e.endereco}
          </span>

        </div>


        <div class="entrega-rodape">

          <span class="entrega-valor">
            ${formatarMoeda(e.total)}
          </span>

          ${
            e.status !== "entregue"

              ? `
                <button
                  class="btn-entrega-acao"
                  onclick="avancarStatusEntrega(${e.id})">

                  ${textoAcao[e.status]}

                </button>
              `

              : `
                <span class="produto-detalhe">
                  ✔ Concluída
                </span>
              `
          }

        </div>

      </div>

    `).join("");
}


// ======================================================
// AVANÇAR STATUS DA ENTREGA
// ======================================================

function avancarStatusEntrega(id) {

  const entrega =
    entregas.find(e => e.id === id);

  if (!entrega) return;

  if (entrega.status === "pendente") {

    entrega.status = "a_caminho";

  } else if (
    entrega.status === "a_caminho"
  ) {

    entrega.status = "entregue";
  }

  renderizarEntregas();
}
