require("dotenv").config();
require("dotenv").config();const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(200).json({ message: "Message saved!" });

  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});