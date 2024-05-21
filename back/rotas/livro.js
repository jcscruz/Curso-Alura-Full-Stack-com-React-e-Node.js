const { Router } = require("express")
const { getLivros } = require("../controladores/livros")

const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send("Post funcionou")
})

router.patch('/', (req, res) => {
    res.send("Patch funcionou")
})

router.delete('/', (req, res) => {
    res.send("Delete funcionou")
})

module.exports = router