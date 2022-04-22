const express = require("express");
const app = express();
const port = 3000; //localhost:3000

app.get("/", (req, res) => {
  res.send("Hola a todos hfhfhfh");
});

// localhost:3000/launchx
app.get("/launchx", (req, res) => {
  res.send("Bienvenidos a launch x");
});

// localhost:3000/launchx
// curl localhost:3000/node
app.get("/node", (req, res) => {
  const explorer1 = { id: 1, name: "Sara" };
  const explorer2 = { id: 2, name: "Sara" };
  const explorer3 = { id: 3, name: "Sara" };
  res.send([explorer1, explorer2, explorer3]);
});

//localhost:3000/explorers/Sarai
app.get("/explorers/:explorer", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.listen(port, () => {
  console.log("Server listo");
});
