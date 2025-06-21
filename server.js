const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const db = require("./db");

app.use(cors());
app.use(express.static("public"));
app.use(express.json())

//routes
//app.use('/api/messages', require('./router/messageRouters'))
app.use('/api/products', require('./routes/routesProduct'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});