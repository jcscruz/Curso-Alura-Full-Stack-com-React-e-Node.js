const fs = require("fs")
const { getTodosFavoritos, getFavoritoPorId, insereFavorito, insereFavoritoPorId, deleteFavoritoPorId } = require("../servicos/favorito.js")

function getFavoritos (req, res){
    try{
        livros =  getTodosFavoritos()
        res.send(livros)        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function getFavoritoId(req, res){
    try{
        const id = req.params.id

        if(id && Number(id)){
            livros =  getFavoritoPorId(id)
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

function postFavorito(req, res){
    try{
        if(req.body.nome){
            const novoLivro = req.body
            insereFavorito(novoLivro)
            res.status(201)
            res.send("Favorito inserido com sucesso.")  
        }else{
            res.status(422)
            res.send("O campo nome é obrigatório")
        }      
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postFavoritoPorId(req, res){
    try{
        if(id && Number(id)){
            const id = req.params.id
            insereFavoritoPorId(id)
            res.status(201)
            res.send("Favorito inserido com sucesso.")   
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

function deleteFavorito(req, res){
    try{
        if(id && Number(id)){
            const id = req.params.id
            livros =  deleteFavoritoPorId(id)
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
    getFavoritos,
    getFavoritoId,
    postFavorito,
    postFavoritoPorId,
    deleteFavorito
}