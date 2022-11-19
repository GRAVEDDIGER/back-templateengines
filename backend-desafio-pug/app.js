const express = require("express");
const routes = require("./routes/products");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use("/", routes);
app.set("views", "./views");
app.set("view engine", "pug");
app.get("/", (req, res) => res.render("home"));
app.listen(8080, () => console.log("Server Up on port 8080"));
