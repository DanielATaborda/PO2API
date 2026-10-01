export function renderizarItems(items,linhas){
    let listaOrdenada = [];
    const container = document.getElementById("container");
    container.innerHTML = "";
    
    items.forEach((item, index) => {        
        const itemB = linhas[index]
        
        // Lógica para conversão //
        //Se 1 Chaos = 0.1072 Divine, então 1 Divine = 1 / 0.1072 Chaos
        const valorEmDivine = itemB.primaryValue || 0;
        //Usamos .toFixed(2) para não ficar com muitas casas decimais
        const taxaInversa = valorEmDivine > 0 ? (1 / valorEmDivine).toFixed(2) : "0.00"
        // Fim Lógica //
        
        const listando = document.createElement("li");
        listando.className = "card-item"
        listando.innerHTML = 
        `
        <div class="card-item-nome">
            <img src="https://web.poecdn.com/${item.image}" alt="" srcset="" width="2%">
            <div class="card-item-descricao">
                <h3>${item.name}</h3>
                <p>${item.category}</p>
            </div>
        </div>
        
        <div class="card-item-categoria">
        <hr class="linha-vertical">
            <div class="card-item-precos">
                <p>Preço unitário: <strong>${valorEmDivine} Divine</strong></p>
                <p>1 Divine = <strong>${taxaInversa} unidades</strong></p>
            </div>
        </div>
        
        `
        container.append(listando)   
    });
}