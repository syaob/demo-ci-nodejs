const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World MAJ DE L'API!");
});

app.get("/status", (req, res) => {
  res.json({ status: "API is running" });
});

app.get("/date", (req, res) => {
  const currentDate = new Date();
  res.send(`Current date and time is: ${currentDate}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
