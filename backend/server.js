const express = require("express");
const cors = require("cors");
require("dotenv").config();
const prisma = require("./prisma");

const app = express();
app.use(cors());
app.use(express.json());

// Test the API (From guide)
app.get("/", (req, res) => {
  res.send("Berthography API is running!");
});

// CREATE: Add a message (From guide)
app.post("/api/contacts", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const contact = await prisma.contact.create({
      data: { name, email, message }
    });
    
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to create message" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});