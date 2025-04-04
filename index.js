function buscarCategorias() {
    fetch("https://fakestoreapi.com/products/categories")
    .then(resposta => resposta.json())
    .then(resposta =>{
        resposta.map(categoria => {
            categorias.innerHTML += `<option>${categoria}</option>`;
        })
    })
}

buscarCategorias();

function buscarProdutos() {
    fetch("https://fakestoreapi.com/products")
    .then(resposta => resposta.json())
    .then(produtos =>{
        carregarProdutos(produtos);
    })
}

buscarProdutos();

function carregarProdutos(listaDeProdutos) {
    listaDeProdutos.map(produto =>{
        catalogo.innerHTML += `
            <div class="card border border-stone-400 rounded p-4">
                <div class="relative">
                    <h6 class="absolute top-0 right-0 bg-black text-white px-2 py-1 font-bold rounded">${produto.rating.rate}</h6>
                    <img src="${produto.image}" alt="" class="h-[250px] object-contain">
                </div>
                <div class="mt-4">
                    <h5 class="line-clamp-1">${produto.title}</h5>
                    <h6 class="font-bold">${produto.category}</h6>
                    <h4 class="text-right text-2xl">${produto.price.toFixed(2)}</h4>
                </div>
            </div>
        `;
    })
}