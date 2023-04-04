class Filme{
  constructor(
    id, titulo, ano, genero, duracao, sinopse, cartaz, direcao,
    elenco, classificacao, avaliacao
  ){
    this.id = id
    this.titulo = titulo
    this.ano = ano
    this.genero = genero
    this.duracao = duracao
    this.sinopse = sinopse
    this.cartaz = cartaz
    this.direcao = direcao
    this.elenco = elenco
    this.classificacao = classificacao
    this.avaliacao = avaliacao
    this.btnDetalhes = null
  }

  getCard = async () => {
    let card = document.createElement('div')
    card.setAttribute('class', 'card col-xl-3  col-lg-4 col-md-6 col-sm-12')
     
    card.innerHTML = `
      <img class="card-img-top" src="${this.cartaz}" alt="Imagem de capa do card">
      <div class="card-body">
        <h5 class="card-title">${this.titulo}</h5>
        <p class="card-text">Ano: ${this.ano}</p>
        <!-- <a href="#" class="btn btn-success">Favoritar</a> -->
        <a href="#" id="${this.id}" class="btn btn-success btnDetalhesFilme">Detalhes</a>
      </div>`

    return card
  }

  getDetalhesFilme = () => {
    return `<div class="card mb-3 shadow-lg" style="width: 90%;">
      <div class="row pl-0 g-0">
        <div class="col-md-4">
          <img src="${this.cartaz}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${this.titulo}</h5>
            <p class="card-text">${this.sinopse}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a href="#" class="btn btn-success">Salvar</a>
            <a href="#" class="btn btn-danger">Fechar</a>
          </div>
        </div>
      </div>
    </div>`
  }
}
