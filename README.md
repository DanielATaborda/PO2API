<div align="center">

# 💰 PoE 2 Economia App

**Acompanhe a economia de Path of Exile 2 direto do seu desktop: preços de itens e moedas em Divine Orb, por categoria e por liga.**

![Electron](https://img.shields.io/badge/Electron-44-47848F?style=for-the-badge&logo=electron&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)
![Licença](https://img.shields.io/badge/licença-ISC-blue?style=for-the-badge)

</div>

---

> ⚠️ **Projeto em desenvolvimento.** A versão **1.0** ainda não foi lançada. Funcionalidades e estrutura podem mudar.

## 📖 Sobre o projeto

O **PoE 2 Economia App** consome os dados de mercado do [poe.ninja](https://poe.ninja/poe2) para **Path of Exile 2** e mostra, em uma interface escura e dourada inspirada no jogo, quanto vale cada item ou moeda da liga, tudo convertido em **Divine Orb**.

O app roda como aplicativo **Electron**: ao abrir, ele sobe um servidor Express local (que funciona como proxy para o poe.ninja) e carrega a interface na janela do desktop, sem problemas de CORS.

Além de ser uma ferramenta útil para quem joga, o projeto também é um espaço de estudo e portfólio, com planos de migrar a interface para **React** no futuro.

## ✨ Funcionalidades

**✅ Já funcionando**

- [x] App desktop com **Electron** (servidor e janela sobem juntos com `npm start`)
- [x] **Proxy Express** para o poe.ninja de PoE 2
- [x] Lista de itens em **cards**, com ícone, nome, selo da categoria e preço em Divine
- [x] Seleção de **liga** (Standard, Runes of Aldur, Forbidden Rites) e de **categoria**
- [x] Botão **Atualizar** para recarregar os dados
- [x] **Card que expande** ao clicar, com detalhes do item
- [x] **Mini gráfico de linha** (SVG feito à mão) com a variação de preço, em verde para alta e vermelho para queda

**🚧 Para a versão 1.0**

- [ ] Ordenação por **menor e maior preço**
- [ ] **Busca por nome**
- [ ] Estados de **loading**, **erro** e "nenhum item encontrado"
- [ ] **Cores dos selos** por categoria (15 categorias)
- [ ] Detalhes do card expandido ligados aos dados reais
- [ ] Fontes locais (para funcionar offline), tratamento de porta ocupada, cache e limites no proxy
- [ ] Nome final, ícone e **instalador** (electron-builder)

**💡 Ideias futuras:** telas de Liga e Ladder, rotas, preferências do app e migração da interface para React. Veja o [roadmap completo](docs/PROJETO.md).

## 🎮 Categorias disponíveis

`Currency` · `Fragments` · `Abyss` · `UncutGems` · `LineageSupportGems` · `Essences` · `SoulCores` · `Idols` · `Runes` · `Ritual` · `Expedition` · `Delirium` · `Breach` · `Verisium`

## 🏗️ Como funciona

```
Electron (processo principal)
   │ 1. inicia o servidor e espera ele subir
   ▼
server.js (Express, porta 3000)
   ├── serve a pasta public/ (interface)
   └── /api/poe2/exchange ──► poe.ninja (PoE 2)
   ▲
   │ 2. abre a janela em http://localhost:3000
Janela do Electron ── a interface chama a API na mesma origem (sem CORS)
```

A interface **nunca** chama o poe.ninja diretamente: todas as requisições passam pelo proxy local.

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
| :--- | :---: | :--- |
| [Electron](https://www.electronjs.org/) | `^44.5.1` | Aplicativo desktop |
| [Express](https://expressjs.com/) | `^5.2.1` | Servidor local e proxy |
| [Axios](https://axios-http.com/) | `^1.20.0` | Requisições ao poe.ninja |
| [CORS](https://github.com/expressjs/cors) | `^2.8.6` | Controle de acesso entre origens |
| JavaScript (ES Modules) | n/a | Lógica da interface, sem build |
| CSS puro | n/a | Tema escuro dourado, variáveis CSS |

**Planejado:** React, Vite, React Router, TanStack Query e electron-builder.

## 📁 Estrutura do projeto

```
PO2API/
├── docs/
│   └── PROJETO.md        # Documentação completa, roadmap e decisões
├── electron/
│   └── main.js           # Processo principal: sobe o servidor e abre a janela
├── public/               # Interface (servida pelo Express)
│   ├── index.html
│   ├── style.css
│   ├── graph.css         # Estilo do mini gráfico
│   ├── main.js           # Orquestração da tela
│   ├── fetchPoE.js       # Acesso ao proxy local
│   ├── render.js         # Montagem dos cards
│   ├── sparkline.js      # Mini gráfico em SVG
│   └── sort.js           # Ordenação (em desenvolvimento)
├── server.js             # Servidor Express + proxy
└── package.json
```

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/DanielATaborda/PO2API.git

# 2. Entre na pasta do projeto
cd PO2API

# 3. Instale as dependências
npm install

# 4. Abra o app no Electron
npm start
```

**Só o servidor, no navegador:**

```bash
node server.js
# depois acesse http://localhost:3000
```

> 💡 Se a janela não abrir ou aparecer `Cannot GET /`, confira se não há outro processo usando a **porta 3000** (por exemplo, um `node server.js` esquecido aberto).

## 🔌 API do proxy

| Item | Valor |
| :--- | :--- |
| **Rota** | `GET /api/poe2/exchange` |
| **Parâmetros** | `league` (nome da liga) e `type` (categoria) |
| **Destino** | `poe.ninja/poe2/api/economy/exchange/current/overview` |
| **Resposta** | JSON do poe.ninja, repassado sem alterações |

Exemplo de teste no navegador:

```
http://localhost:3000/api/poe2/exchange?league=Standard&type=Currency
```

## ⚠️ Avisos importantes

- Os dados vêm do **poe.ninja** por um endpoint **não oficial**, que pode mudar ou ser limitado sem aviso.
- As imagens dos itens pertencem à **Grinding Gear Games** e são carregadas de `web.poecdn.com`.
- Este é um projeto de fã, **não afiliado nem endossado** pela Grinding Gear Games nem pelo poe.ninja.

## 🗺️ Roadmap

- [x] Protótipo funcional com proxy e lista de itens
- [x] Casca do Electron
- [x] Card expansível e mini gráfico
- [ ] Ordenação e busca
- [ ] Loading e tratamento de erro
- [ ] Cores dos selos
- [ ] Revisão para lançamento (fontes locais, porta dinâmica, cache)
- [ ] Instalador e publicação da **v1.0** no GitHub Releases
- [ ] Migração para React *(a confirmar)*

Acompanhe o detalhamento em [`docs/PROJETO.md`](docs/PROJETO.md).

## 🤝 Contribuindo

Sugestões e contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie sua branch: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m "feat: minha feature"`
4. Envie para o seu fork: `git push origin minha-feature`
5. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença **ISC**.

## 👤 Autor

Feito com 💜 por **Daniel A. Taborda**

[![GitHub](https://img.shields.io/badge/GitHub-DanielATaborda-181717?style=for-the-badge&logo=github)](https://github.com/DanielATaborda)

---

<div align="center">

⭐ Se curtiu o projeto, deixe uma estrela no repositório!

</div>
