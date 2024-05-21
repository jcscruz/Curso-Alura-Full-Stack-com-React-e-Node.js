const fs = require("fs")
const { getTodosLivros } = require("../servicos/livro.js")

function getLivros (req, res){
    try{
        livros =  getTodosLivros()
        res.send(livros)        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
}