const express = require("express");
const {
  getAllProducts, getAllProductsStatic
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.route("/")
  .get(getAllProducts)

productRouter.route("/static")
  .get(getAllProductsStatic)

module.exports = productRouter;
