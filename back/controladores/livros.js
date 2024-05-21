const fs = require("fs")
const { getTodosLivros, getLivroPorId, insereLivro, alteraLivro, deleteLivroPorId } = require("../servicos/livro.js")

function getLivros (req, res){
    try{
        livros =  getTodosLivros()
        res.send(livros)        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res){
    try{
        const id = req.params.id
        livros =  getLivroPorId(id)
        res.send(livros)        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try{
        const novoLivro = req.body
        insereLivro(novoLivro)
        res.status(201)
        res.send("Livro inserido com sucesso.")        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try{
        const id = req.params.id
        const modificacoes = req.body
        alteraLivro(modificacoes, id)
        res.status(201)
        res.send("Livro alterado com sucesso.")        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try{
        const id = req.params.id
        livros =  deleteLivroPorId(id)
        res.send("Livro apagado com sucesso.")         
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}