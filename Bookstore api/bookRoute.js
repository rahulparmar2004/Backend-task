const express = require("express");

const {
    addProduct,
    getProducts,
    deleteProduct,
    editProduct
} = require("./bookController");

const router = express.Router();

// Add book
router.post("/add", addProduct);

// Get all book
router.get("/", getProducts);

// Delete book
router.delete("/:id", deleteProduct);

// Update book
router.patch("/:id", editProduct);

module.exports = router;