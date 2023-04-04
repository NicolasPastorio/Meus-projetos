// input de busca
let inputBuscarFilme = document.querySelector("#input-buscar-filme")
// Botão
let btnBuscarFilme = document.querySelector('#btn-buscar-filme')

//chave da ap http://www.omdbapi.com/?i=tt3896198&apikey=147c4f5d

btnBuscarFilme.onclick = () => {
  if(inputBuscarFilme.value.length > 0){
    let filmes = new Array()
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=147c4f5d&s="+inputBuscarFilme.value, {mode: "cors"})
    .then((resp) => resp.json())
    .then((resp) => {
      resp.Search.forEach((item) => {
        // console.log(item)
        let filme = new Filme(
          item.imdbID,
          item.Title,
          item.Year,
          null,
          null,
          null,
          item.Poster,
          null,
          null,
          null,
          item.Awards,
          null
        )
        filmes.push(filme)
      })
      listarFilmes(filmes)
    })
  }
  return false
}

let listarFilmes = async (filmes) => {
  let listaFilmes = await document.querySelector("#lista-filmes")
  listaFilmes.innerHTML = ""

  //Toggle
  document.querySelector("#mostrar-filme").innerHTML = ""
  document.querySelector("#mostrar-filme").style.display = "none"

  if(filmes.length > 0){
    filmes.forEach(async(filme) => {
      listaFilmes.appendChild(await filme.getCard())
      document.querySelector(".btnDetalhesFilme").onclick = () => {
        detalhesFilme(filme.id)
      }
    })
  }
}

let detalhesFilme = async (id) => {
  fetch("http://www.omdbapi.com/?apikey=147c4f5d&i="+id)
  .then((resp) => resp.json())
  .then((resp) => {
    // console.log(resp)
    let filme = new Filme(
      resp.imdbID,
      resp.Title,
      resp.Year,
      resp.Genre.split(","),
      resp.Runtime,
      resp.plot,
      resp.Poster,
      resp.Director,
      resp.Actors.split(","),
      resp.Awards,
      resp.imdbRating
    )
    console.log(filme)
    document.querySelector('#mostrar-filme').innerHTML = filme.getDetalhesFilme()
  })
}
