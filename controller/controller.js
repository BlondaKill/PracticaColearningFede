const {Gamer} = require("../models/tienda")

const {validationResult} = require("express-validator")

const indexController = (req, res) => {
    res.send('Hello World!')
  }

const vistaGeneral = async (req, res) =>{
    const item = await Gamer.find()
    res.status(200).json({ item })
}

const vistaUnica = async (req, res) =>{
  const item = await Gamer.findById(req.params.id)
  res.status(200).json({ item })
}

const busqueda = async (req, res) =>{
  const item = await Gamer.findOne({name: req.params.name})
  res.status(200).json({ item })
}



const crearItem = async (req, res) =>{
    try {
      const err = validationResult(req)
      if (err.isEmpty()) {
          const item = new Gamer(req.body)
          await item.save()
          res.status(201).json({item})
        
      } else {
          res.status(501).json(err)
      }
        
    } catch (error) {
      res.status(501).json({error})

    }
}

  module.exports = {indexController, vistaGeneral, vistaUnica, busqueda, crearItem}