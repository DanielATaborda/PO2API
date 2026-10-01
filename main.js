import { getData } from './fetchPoE.js';
import { renderizarItems } from './render.js';

let ligas = document.getElementById("ligas-ativas");
let categoria = document.getElementById("categoria");
let botaoAtualizar = document.getElementById("botaoAtualizar");

let ligaAtiva = ligas.value;
let categoriaAtiva = categoria.value;

let precos = [];

function estruturarDados(items,linhas){
    return items.map((item, index) => {
        const itemB = linhas[index];
        const valorEmDivine = itemB?.primaryValue || 0;
        
        return valorEmDivine;
    });
}



async function atualizarInterface(liga,categoria){
    const data = await getData(liga,categoria);
    const items = data?.items
    const linhas = data?.lines
    
    if (items && linhas) {
        renderizarItems(items, linhas);

        precos = estruturarDados(items,linhas)
        console.log(precos)
    }
}

atualizarInterface(ligaAtiva,categoriaAtiva)

//ligas.addEventListener('change', async () => {
//    ligaAtiva = ligas.value;
//    categoriaAtiva = categoria.value;
//    console.log(ligaAtiva, categoriaAtiva)
//})


botaoAtualizar.addEventListener('click',async ()=>{
    console.log(botaoAtualizar)
    ligaAtiva = ligas.value;
    categoriaAtiva = categoria.value;
    await atualizarInterface(ligaAtiva,categoriaAtiva);
})



