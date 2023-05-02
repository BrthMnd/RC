const express = require('express');
const router = express.Router();

const router_dePrueba = require("./tabla_prueba");
const Inmueble = require("./inmuebles");
router.use("/rutaPrueba", router_dePrueba);


router.use("/inmueble",Inmueble);

module.exports = router;