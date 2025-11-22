// server.js

const express = require("express");
const app = express();

// Your required information:
const fullName = "Macaisa, John Michae L.";
const classSection = "BSIT - BA - 4102";
const quote = "Success is not final; failure is not fatal: It is the courage to continue that counts.";

app.get("/", (req, res) => {
  res.send(`
    <h1>Simple Node.js App</h1>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Class Section:</strong> ${classSection}</p>
    <p><strong>Quote:</strong> "${quote}"</p>
  `);
});

// Render will automatically use PORT from environment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
