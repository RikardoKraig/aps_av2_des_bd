module.exports = (() => {

    const grupoAlunosController = require("../controllers/grupo_alunosController")

    let router = require("express").Router();

    router.post("/:id", async(req,res) => {
        const grupo = await grupoAlunosController.store(req.body,req.params.id);
        res.json(grupo)
    })

    router.delete("/:id", async(req,res) => {
        const grupo = await grupoAlunosController.destroy(req.body,req.params.id);
        res.json(grupo)
    })

    return router
})()