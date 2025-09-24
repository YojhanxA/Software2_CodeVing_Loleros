// index.js
const express = require("express");
const { dbConection } = require("./database/config");
const usersRoutes = require("./routes/users");
const messagesRoutes = require("./routes/messages");
const cors = require("cors"); // 👈 importa cors
require("dotenv").config();

const PORT = process.env.APP_PORT;
const app = express();

// ✅ Configuración CORS
app.use(cors({
  origin: "http://localhost:5173", // frontend con Vite
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Rutas
app.use("/api", usersRoutes);
app.use("/api", messagesRoutes);

// Conexión a MongoDB
dbConection();

app.listen(PORT, () => {
  console.log("express.js app is running at port: " + PORT);
});
