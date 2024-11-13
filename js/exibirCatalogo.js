function exibirCatalogo(catalogo) {
    const row = document.getElementById("row-catalogo");
    let cards = "";

    catalogo.forEach(livro => {
        cards += `
            <div class="col">
                <div class="card h-100">
                    <a href="">
                        <img class="img-fluid card-img-top p-3" src="${livro.imagem}" alt="${livro.titulo}">
                    </a>
                    <div class="card-body">
                        <a class="link-info link-offset-2 text-center" href="">
                            <h5 class="card-title">${livro.titulo}</h5>
                            <p class="card-text">R$ ${livro.preco.toFixed(2)}</p>
                        </a>
                    </div>
                </div>
            </div>
        `
    });

    row.innerHTML = cards;
}

exibirCatalogo(catalogo);