const express = require("express")
const router = express.Router() 
const {indexController, vistaGeneral, vistaUnica, busqueda, crearItem, editarItem, elimirItem} = require("../controller/controller")
const {validar} = require("../middleware/validarId")
const {check} = require("express-validator") 




//get
router.get('/', indexController) 
router.get('/ver', vistaGeneral)
router.get('/ver/:id', validar, vistaUnica)
router.get('/buscar/:name', busqueda)

//post
router.post('/crear',[
    check("name").not().isEmpty().withMessage("se tiene que cargar un nombre"),
    check("price").not().isEmpty().withMessage("se tiene que cargar un precio").isLength({min:0}).withMessage("precio invalido"),
    check("stock").not().isEmpty().withMessage("se tiene que cargar si esta en stock")
],crearItem)

//put
router.put('/editar/:id',validar,[
    check("name").not().isEmpty().withMessage("se tiene que cargar un nombre"),
    check("price").not().isEmpty().withMessage("se tiene que cargar un precio").isLength({min:0}).withMessage("precio invalido"),
    check("stock").not().isEmpty().withMessage("se tiene que cargar si esta en stock")
],editarItem)

//delete
router.delete('/eliminar/:id', validar, elimirItem)



module.exports = router