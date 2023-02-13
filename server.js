const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

require("./server/config/mongoose.config");
app.use(cors(), express.json(), express.urlencoded({ extended: true }));
require("./server/routes/product.routes")(app);

app.listen(port, () => console.log(`Connection established on port: ${port}`));
