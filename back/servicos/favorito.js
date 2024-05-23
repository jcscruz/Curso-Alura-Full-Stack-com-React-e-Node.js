const { json } = require("express")
const fs = require("fs")

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function insereFavorito(novoFavorito){

    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const novaListaDeLivros = [...livros, novoLivro]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivros))

}

function getFavoritoPorId(id){

    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const livro = livros.filter(livro => livro.id === id)[0]

    return livro
}

function deleteFavoritoPorId(id){

    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const listaLivro = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("favoritos.json", JSON.stringify(listaLivro))

}

function insereFavoritoPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}


module.exports = {
    getTodosFavoritos,
    insereFavoritoPorId,
    deleteFavoritoPorId,
    insereFavorito,
    getFavoritoPorId
}


