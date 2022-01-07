const express = require("express")
const app = express();


// Environment Variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("> Listening at Port", PORT);
})
