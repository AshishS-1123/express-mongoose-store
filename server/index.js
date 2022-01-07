// Setup environment variables
require("dotenv").config({ path: "./config.env" });

const express = require("express")
const app = express();

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

// Static files
app.use(express.static("./public"));
// JSON Middleware
app.use(express.json());



// Not Found Page
app.use(notFound);
// Error Handler
app.use(errorHandler);


// Environment Variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("> Listening at Port", PORT);
})
