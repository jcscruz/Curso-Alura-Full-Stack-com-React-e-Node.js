const { Router } = require("express")
const { getFavoritos, getFavoritoId, postFavorito, postFavoritoPorId, deleteFavorito } = require("../controladores/favoritos")
const { deleteFavoritoPorId } = require("../servicos/favorito")

const router = Router()

router.get('/', getFavoritos)

router.patch('/:id', getFavoritoId)

router.post('/', postFavorito)

router.post('/:id', postFavoritoPorId)

router.delete('/:id', deleteFavorito)

module.exports = router