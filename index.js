let produtos = []

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
    .then(resposta =>{
        produtos = resposta;
        carregarProdutos(resposta);
    })
}

buscarProdutos();

function carregarProdutos(listaDeProdutos) {
    catalogo.innerHTML = "";    
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

function filtrarPorCategoria(categoria){
    let filtrados = produtos.filter(produto => produto.category == categoria);
    carregarProdutos(filtrados);
}

function ordenar(tipo){
    if(tipo == "avaliacao"){
        let ordenados = produtos.toSorted((produtoA, produtoB) => produtoB.rating.rate - produtoA.rating.rate);
        carregarProdutos(ordenados);
    }
    if(tipo == "preco"){
        let ordenados = produtos.toSorted((produtoA, produtoB) => produtoA.price - produtoB.price);
        carregarProdutos(ordenados);
    }
    if(tipo == "menoravaliacao"){
        let ordenados = produtos.toSorted((produtoA, produtoB) => produtoA.rating.rate - produtoB.rating.rate);
        carregarProdutos(ordenados);
    }
    if(tipo == "maiorpreco"){
        let ordenados = produtos.toSorted((produtoA, produtoB) => produtoB.price - produtoA.price);
        carregarProdutos(ordenados);
    }
}

function pesquisarPeloNome(pesquisa){
    let procurar = produtos.filter(produto => produto.title == pesquisa);

}
