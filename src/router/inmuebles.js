const express = require("express");
const router = express.Router();
const db = require("../BD/db");



router.get("/", (req, res) => {
  const sql = "SELECT * FROM inmuebles";
  db.query(sql, (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result);
  });
});

// Insertar un nuevo registro.
router.post("/inmuebles", (req, res) => {
  const { direccion, tipo, precio } = req.body;
  const sql = `INSERT INTO inmuebles (direccion, tipo, precio) VALUES ('${direccion}', '${tipo}', '${precio}')`;
  db.query(sql, (error, result) => {
    if (error) {
      throw error;
    }
    res.send("Registro insertado correctamente");
  });
});

// Actualizar un registro.
router.put("/inmuebles/:id", (req, res) => {
  const id = req.params.id;
  const { direccion, tipo, precio } = req.body;
  const sql = `UPDATE inmuebles SET direccion = '${direccion}', tipo = '${tipo}', precio = '${precio}' WHERE id = ${id}`;
  db.query(sql, (error, result) => {
    if (error) {
      throw error;
    }
    res.send("Registro actualizado correctamente");
  });
});

// Eliminar un registro.
router.delete("/inmuebles/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM inmuebles WHERE id = ${id}`;
  db.query(sql, (error, result) => {
    if (error) {
      throw error;
    }
    res.send("Registro eliminado correctamente");
  });
});

module.exports = router;
