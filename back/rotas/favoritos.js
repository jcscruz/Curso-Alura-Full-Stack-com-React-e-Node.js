const { Router } = require("express")
const { getFavoritos, getFavoritoId, postFavorito, postFavoritoPorId, deleteFavorito } = require("../controladores/favoritos")

const router = Router()

router.get('/', getFavoritos)

router.patch('/:id', getFavoritoId)

router.post('/', postFavorito)

router.post('/:id', postFavoritoPorId)

router.patch('/:id', deleteFavorito)

module.exports = router