const express = require("express");
const app = express();
const patientRoutes = require("./routes/patientRoutes");

app.use(express.json()); // ACTS AS A MIDDLEWARE

app.use("/patients", patientRoutes);

app.get("/", (req, res) => {
  res.send("Medicare Hospital API Running");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
