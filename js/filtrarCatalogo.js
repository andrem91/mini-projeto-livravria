function filtrarCatalogoPorPreferencias(catalogo, generoSelecionado) {
    if (!generoSelecionado){
      return catalogo;
    }
    return catalogo.filter(livro => livro.genero == parseInt(generoSelecionado));
}

const select_genero = document.getElementById('select-genero')
select_genero.addEventListener('change', function() {
    const generoSelecionado = select_genero.value;
    const livrosRecomendados = filtrarCatalogoPorPreferencias(catalogo, generoSelecionado);
    exibirCatalogo(livrosRecomendados);
});