import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Mock database (replace with real database later)
const users = [];

// Signup route
app.post("/signup", (req, res) => {
    const { username, password, name } = req.body;
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: "Username already exists" });
    }
    const newUser = { username, password, name };
    users.push(newUser);
    res.status(201).json({ message: "User registered successfully", token: username });
});

// Login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful", token: username });
});

// Profile route
app.get("/profile", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const user = users.find(user => user.username === token);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({ username: user.username, name: user.name, profilePic: "" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));