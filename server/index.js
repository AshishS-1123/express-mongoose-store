// Setup environment variables
require("dotenv").config({ path: "./config.env" });

const express = require("express")
const app = express();

const productRouter = require("./routes/productRouter");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/configDB");

// Static files
app.use(express.static("./public"));

// JSON Middleware
app.use(express.json());

// Routes
app.use("/api/v1/products", productRouter);

// Not Found Page
app.use(notFound);

// Error Handler
app.use(errorHandler);

// Environment Variables
const PORT = process.env.PORT || 3000;

// Server
const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to Database ...");

    app.listen(process.env.PORT || 80, () => {
      console.log("Listen on Port ", process.env.PORT);
    })
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

startServer();
