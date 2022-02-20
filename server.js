const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const authRoutes = require("./routes/Auth");
const coreRoutes = require("./routes/Core");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = "";
const password = "";
const database = "";
const server = `mongodb+srv://${user}:${password}@cluster0.94tuo.mongodb.net/${database}?retryWrites=true&w=majority`;
const config = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(server, config).then(() => {
  console.log("Database connection successfully!");
});

const port = 3333;
const version = 0;

app.use(`/api/V${version}/auth`, authRoutes);
app.use(`/api/V${version}/core`, coreRoutes);

http://localhost:3333/api/V0/core

app.listen(port, () => {
  console.log("Servidor rodando na porta", port);
});
