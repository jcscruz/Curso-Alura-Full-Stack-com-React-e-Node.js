const { json } = require("express")
const fs = require("fs")

function getTodosLivros(){

    return JSON.parse(fs.readFileSync("livros.json"))

}

function getLivroPorId(id){

    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livro = livros.filter(livro => livro.id === id)[0]

    return livro
}

function insereLivro(novoLivro){

    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [...livros, novoLivro]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))

}

function alteraLivro(modificacoes, id){

    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))

    const indiceElementoModificar = livrosAtuais.findIndex(livro => livro.id === id)

    const livroModificado = { ...livrosAtuais[indiceElementoModificar], ...modificacoes }

    livrosAtuais[indiceElementoModificar] = livroModificado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}

function deleteLivroPorId(id){

    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const listaLivro = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(listaLivro))

}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    alteraLivro,
    deleteLivroPorId
}