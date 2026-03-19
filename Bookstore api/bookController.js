const bookModel = require("./bookModel");

// add book
const addProduct = async (req, res) => {
  const data = await bookModel.create(req.body);
  res.send(data);
};

// get book
// const getProducts = async (req, res) => {
//   const products = await Product.find();
//   res.send(products);
// };
const getProducts = async (req, res) => {
  const products = await bookModel.find();
  res.send(products);
};

// delete book
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const data = await bookModel.findByIdAndDelete(id);
  res.send(data);
};

// update book
const editProduct = async (req, res) => {
  const id = req.params.id;
  const data = await bookModel.findByIdAndUpdate(id, req.body, { new: true });
  res.send(data);
};

module.exports = { addProduct, getProducts, deleteProduct, editProduct };