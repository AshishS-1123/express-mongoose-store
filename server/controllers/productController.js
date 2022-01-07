const getAllProducts = async (req, res) => {
  res.status(200).json({
    message: "All Prods"
  });
}

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({
    message: "Testing All Products"
  });
}

module.exports = {
  getAllProducts,
  getAllProductsStatic
};
