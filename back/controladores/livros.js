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

        if(id && Number(id)){
            livros =  getLivroPorId(id)
            res.send(livros)   
        }else
        {
            res.status(422)
            res.send("Id inválido.")
        }

       
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try{
        if(req.body.nome){
            const novoLivro = req.body
            insereLivro(novoLivro)
            res.status(201)
            res.send("Livro inserido com sucesso.")  
        }else{
            res.status(422)
            res.send("O campo nome é obrigatório")
        }      
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try{
        if(id && Number(id)){
            const id = req.params.id
            const modificacoes = req.body
            alteraLivro(modificacoes, id)
            res.status(201)
            res.send("Livro alterado com sucesso.")   
        }else
        {
            res.status(422)
            res.send("Id inválido.")
        }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try{
        if(id && Number(id)){
            const id = req.params.id
            livros =  deleteLivroPorId(id)
            res.send("Livro apagado com sucesso.") 
        }else
        {
            res.status(422)
            res.send("Id inválido.")
        }
        
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