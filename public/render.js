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
        console.log()
        const listando = document.createElement("li");
        listando.className = "card-item"
        listando.id = "card"
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
                <p class="preco-unitario">Preço unitário</p>
                <p class="valorEmDivine"><strong>${valorEmDivine} Divine</strong><img src="https://web.poecdn.com//gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2986e220b3/CurrencyModValues.png" alt="" srcset="" width="20%"></p>
                <p class="taxaInversa">1 Divine = <strong>${taxaInversa} unidades</strong></p>
            </div>
        </div>
        <svg class="mais-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M17 8h-2v5.59l-6.29-6.3-1.42 1.42 6.3 6.29H8v2h9z"></path>
</svg>
        `
        container.append(listando)   
    });
}