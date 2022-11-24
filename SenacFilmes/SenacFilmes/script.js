const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=1e922667481ab207d642450b0efb461e"

let filmes

async function carregarFilmes() {
    let resposta = await fetch(url)
    let json = await resposta.json()
    filmes = json.results
    filmes.forEach(filme =>
        document.querySelector("#filmes-em-alta").innerHTML =
        document.querySelector("#filmes-em-alta").innerHTML + card(filme)
    )
}


function card(filme) {
    let element = `<div class="card"><span class="material-symbols-outlined icone-favorito">favorite</span>
    <img src="https://image.tmdb.org/t/p/w200/${filme.poster_path}" alt="Pôster Doutor Estranho no Multiverso da Loucura">
    <p>${filme.title}</p><p>⭐ ${filme.vote_avenrage}</p><a class="botao" href="detalhesDoutorEstranho.html">detalhes</a></div>`
    return element
}


carregarFilmes()