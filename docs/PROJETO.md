## [ROADMAP] Roadmap e checklist
 
Marque `[x]` ao concluir. Agentes: trabalhem na **primeira fase com itens pendentes**.
 
> **Frentes ativas (definidas pelo dev em 2026-09-30):** (1) ✅ **Electron** integrado (casca concluída em 2026-09-30); (2) **ordenação** por menor e maior preço; (3) **busca (filtro) por nome**; (4) testar **tamanhos de card**; (5) testar **modal** e **card que expande** para os detalhes. Itens extras que o dev lembrar serão adicionados aqui.
>
> **Próximos passos sugeridos (2026-09-30; substituídos pela ordem recomendada do escopo da v1.0 abaixo):** (a) fazer um commit do estado atual; (b) lista unificada (item e preço no mesmo objeto), que sustenta ordenação, busca e detalhes; (c) ordenação por menor/maior preço; (d) busca por nome; (e) detalhes ao clicar (modal ou card que expande); (f) estados de loading e erro; (g) cores dos selos.
 
### 🎯 Versão 1.0 — primeiro lançamento (escopo definido pelo dev em 2026-09-30)
 
Funcionalidades:
- [ ] 🚧 *(passo 1 entregue em 2026-09-30; o dev ainda não aplicou. Aplicar por edições pontuais, sem substituir o `render.js` inteiro, porque o dev já adicionou o bloco de detalhes do card)* Lista unificada (item e preço no mesmo objeto; casar por id se o JSON permitir). **Pré-requisito** de ordenação, busca e detalhes
- [ ] Ordenação **crescente e decrescente** por preço *(o select só tem "Menor Preço"; faltam as opções de maior preço)*
- [ ] **Busca (filtro) por nome** *(o `<input>` ainda não tem `id` e está com `type="Procure aqui"`, que é inválido; ajustar para `type="search"` e dar um `id`)*
- [ ] 🚧 *(a expansão já funciona ao clicar no card, com a troca do `MutationObserver` por um clique no container concluída; layout novo a definir pelo dev (A e B descartados); depois, ligar os valores reais e fazer o gráfico (estilo aprovado))* **Card que expande** com detalhes. Conteúdo proposto, com campos de `lines` já disponíveis: variação em 7 dias, mini gráfico (`sparkline`), volume e moeda de maior volume (ver `[API]` e `[PENDENCIAS]`) *(gráfico em SVG já feito pelo dev; o traço ainda não aparece, correção indicada em 2026-09-30)*
- [ ] **Cores dos selos** (15 categorias; ver `[API]`)
- [ ] **Loading e erro** (e mensagem de "nenhum item encontrado")
Lançamento:
- [ ] **Fontes locais**: baixar a Cinzel (e a Roboto, se for usada) e servi-las pela pasta `public/`, para o app funcionar offline
- [ ] **Porta 3000**: tratar a porta ocupada em app instalado (porta dinâmica ou outra porta livre)
- [ ] **Aviso do sistema**: decidir sobre a assinatura digital do instalador ou documentar o aviso (ex: Windows SmartScreen) para os usuários
- [ ] Revisão restante: remover o Boxicons não usado, título e idioma do `index.html`, cache e limites no proxy, User-Agent honesto (ver `[MELHORIAS]` e `[RISCOS]`)
- [ ] Nome final do app, ícone e número da versão
- [ ] **Instalador** com electron-builder (confirmar o sistema alvo; ver `[PENDENCIAS]`)
- [ ] Testar o instalador em uma máquina limpa
- [ ] Créditos e aviso (dados do poe.ninja; app não afiliado à Grinding Gear Games)
- [ ] **Publicar a v1.0** (ex: GitHub Releases) com um README
Ordem **confirmada pelo dev em 2026-09-30**: lista unificada → ordenação → busca → loading e erro → card que expande → cores dos selos → revisão para lançamento (fontes locais, porta, cache e User-Agent) → nome e ícone → instalador → aviso do sistema → créditos → teste em máquina limpa → publicar.
 
### Fase 0 — Protótipo em JS puro — ✅ concluída
- [x] Servidor Express como proxy para o poe.ninja PoE 2 (`server.js`, porta 3000)
- [x] Cliente de dados `fetchPoE.js`
- [x] Lista de itens com preço em Divine (`render.js`)
- [x] Layout base escuro com selects de liga, categoria, ordenação e botão Atualizar
### Fase 1 — Fundamentos de React — ⏸️ aguardando decisão (ver `[PENDENCIAS]`)
- [ ] Criar projeto com `npm create vite@latest` (template React)
- [ ] Entender componentes e props
- [ ] Praticar `useState`
- [ ] Praticar `useEffect` buscando dados
- [ ] Renderizar listas com `key`
- [ ] Reescrever a lista de Economia como componentes (`ItemCard`, `ListaEconomia`)
### Fase 2 — Rotas
- [ ] Instalar e configurar React Router
- [ ] Layout com navegação fixa e `<Outlet />`
- [ ] Rota dinâmica (`/economia/:categoria`)
- [ ] Página 404
### Fase 3 — Consumo da API ⭐ — 🚧 parcialmente feito
- [x] Mapear fonte e endpoint de economia (poe.ninja PoE 2)
- [x] Preencher a tabela em `[API]`
- [ ] Conferir o JSON real *(parcial: `lines[].id`, `primaryValue` e os campos de volume e `sparkline` já conhecidos, ver `[API]`; falta confirmar `id` em `items[]` e o significado dos campos de volume)*
- [ ] Tratar loading, erro e vazio (`[MELHORIAS]` #2)
- [ ] Cache e proteção contra excesso de requisições (`[MELHORIAS]` #5)
- [ ] Integrar com TanStack Query (só depois da migração para React)
### Fase 4 — Telas do app
- [x] Economia: lista de preços por categoria e liga (sem loading/erro ainda)
- [ ] Economia: **busca (filtro) por nome** (prioridade)
- [ ] Economia: **ordenação por menor preço e maior preço** (prioridade)
- [x] Economia: cards menores (primeira versão feita pelo dev)
- [x] Melhorias visuais feitas pelo dev (título dourado com degradê, ícone do Divine ao lado do preço, seta no card, linha com degradê no cabeçalho)
- [ ] Economia: testar outros tamanhos de card (menores e maiores) e escolher o melhor
- [ ] Economia: **15 cores** (as 14 categorias + Vaal, que fica dentro de Currency), aplicadas **só no selo** (o card não muda de cor); manter uma cor padrão de segurança caso a API traga um valor novo
- [ ] Economia: **card que expande** com detalhes (escolhido pelo dev em 2026-09-30; a expansão já funciona; faltam os valores e o gráfico; ver `[PENDENCIAS]`)
- [ ] Tela de informações da liga
- [ ] Demais telas de `[ROTAS]`
### Fase 5 — Electron — ✅ casca concluída em 2026-09-30; itens gerais ainda pendentes
 
Plano para a "casca" do Electron, **adaptado ao código real** (arquivos reenviados em 2026-09-30):
> Ordem recomendada a partir do passo 3: **4 → 5 → 3 → 6...**. O passo 5 só depende dos passos 2 e 4; o passo 3 só é necessário para o Electron.
- [x] 1. Mover os arquivos do front (`index.html`, `style.css`, `main.js`, `fetchPoE.js`, `render.js`, `sort.js`) para uma pasta `public/`. O `server.js` e o `package.json` ficam fora dela, para não serem expostos pelo servidor
- [x] 2. `server.js`: servir a pasta `public/` como arquivos estáticos *(confirmado em 2026-09-30: `http://localhost:3000` entrega o front)*
- [x] 3. `server.js`: transformar o `listen` em uma função que devolve uma Promise e é exportada (continua funcionando com `node server.js`). No Express 5, o callback do `app.listen` recebe o erro (ex: porta em uso), então a Promise deve rejeitar nesse caso *(confirmado em 2026-09-30: com a porta ocupada a Promise rejeitou com `EADDRINUSE`, como esperado)*
- [x] 4. `fetchPoE.js`: trocar a URL absoluta (`http://localhost:3000/...`) por relativa (`/api/poe2/exchange?...`). Manter os `%20` das ligas como estão por enquanto (sem `encodeURIComponent`, para não codificar duas vezes; correção em `[MELHORIAS]` #7)
- [x] 5. Testar no navegador: `node server.js` e abrir `http://localhost:3000`; confirmar que a lista carrega *(confirmado em 2026-09-30: a lista carrega com a URL relativa em `http://localhost:3000`)*
- [x] 6. Instalar o Electron como dependência de desenvolvimento (`axios`, `cors` e `express` continuam como dependências normais) *(confirmado em 2026-09-30: `electron` aparece em `devDependencies`)*
- [x] 7. Criar o arquivo do Electron (ex: `electron/main.js`): inicia o servidor, espera ele subir e abre a janela em `http://localhost:3000` (tamanho, tamanho mínimo, título, fundo preto, menu oculto)
- [x] 8. `package.json`: campo `main` (hoje `index.js`) apontando para o arquivo do Electron e um script `start` com `electron .`
- [x] 9. Testar com `npm start` (com o servidor avulso fechado) e fazer commit
- Fora desta etapa: instalador (electron-builder), ícone final e atualização automática.
> ✅ **Casca do Electron concluída e confirmada em 2026-09-30:** `npm start` abre a janela e o servidor sobe junto com ela, sem problemas.
 
Itens gerais da fase:
- [x] Rodar o app dentro de uma janela Electron
- [ ] Definir a "cara" da janela desktop (tamanho, título, ícone, menu) *(parcial: tamanho, tamanho mínimo, título, fundo preto e menu oculto definidos; falta o ícone)*
- [ ] Configurar preload + `contextBridge`
- [ ] Decidir: manter o proxy Express ou mover as requisições para o main process via IPC
- [ ] Revisar segurança (`contextIsolation`, sem `nodeIntegration`)
### Fase 6 — Polimento e empacotamento
- [ ] Acessibilidade (tamanhos de fonte, contraste)
- [ ] Fontes locais (funcionar offline)
- [ ] Cache local
- [ ] Gerar instalador com electron-builder
### Fase 7 — Carreira
- [ ] Migrar para TypeScript
- [ ] Publicar no GitHub com README bom (prints, como rodar, stack)
## [IDEIAS] Ideias de funcionalidades futuras
 
Sugestões, **não compromissos**. Quando o dev decidir fazer uma, mover para `[ROADMAP]` e registrar em `[DECISOES]`. Esforço: 🟢 baixo, 🟡 médio, 🔴 alto.
 
| # | Ideia | O que faz | Depende de | Esforço |
|---|-------|-----------|------------|---------|
| 1 | Favoritos | Marcar itens com uma estrela e filtrar só os favoritos | armazenamento local | 🟢 |
| 2 | Atualização automática | Atualiza sozinho a cada X minutos e mostra "atualizado há N min" | cache e limites do poe.ninja (`[RISCOS]`) | 🟢 |
| 3 | Tamanho do card configurável | Alternar entre card compacto e confortável (resolve o teste de tamanhos deixando o usuário escolher) | preferências salvas localmente | 🟢 |
| 4 | Atalhos de teclado | Foco na busca com Ctrl+K, trocar categoria sem mouse | — | 🟢 |
| 5 | Calculadora/conversor de moedas | Converter quantidades entre Divine e outras moedas | dados da categoria Currency | 🟢 a 🟡 |
| 6 | Cache offline | Abrir sem internet mostrando o último dado salvo, com aviso | armazenamento local | 🟡 |
| 7 | Histórico próprio de preços | Salvar o preço a cada atualização para ter histórico além dos 7 pontos da `sparkline` da API | armazenamento local | 🟡 |
| 8 | Maiores altas e quedas | Destacar os itens que mais subiram ou caíram | `sparkline.totalChange` (já vem da API) | 🟢 |
| 9 | Alertas de preço | Notificação do sistema quando um item passar de um valor definido | Electron + ideias 1 e 2 | 🟡 |
| 10 | Comparar ligas | Ver o mesmo item na Standard e na liga atual lado a lado | duas chamadas à API | 🟡 |
| 11 | Modo mini / sempre no topo | Janelinha compacta que fica sobre as outras para consultar preço durante o jogo | Electron | 🟡 |
| 12 | Exportar | Exportar a lista filtrada em CSV ou copiar um preço | — | 🟢 |
| 13 | Ícone na bandeja e atualização automática do app | Minimizar para a bandeja; o app se atualiza sozinho | Electron + electron-builder | 🔴 |
| 14 | Detalhes ricos no card *(entra na v1.0)* | Variação de 7 dias, mini gráfico, volume e moeda de maior volume no card expandido | campos de `lines` já disponíveis (`[API]`) | 🟡 |
| 15 | Ordenar por variação e por volume | Opções extras no select de ordenação: maior alta, maior queda, maior volume | `sparkline.totalChange` e `volumePrimaryValue` | 🟢 |
| 16 | Filtro de volume mínimo | Esconder itens com pouca negociação, cujo preço é menos confiável | `volumePrimaryValue` | 🟢 |
