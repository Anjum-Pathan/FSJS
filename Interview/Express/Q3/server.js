require = require("esm")(module);
const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// Create a new lowdb instance
const adapter = new FileSync("db.json");
const db = low(adapter);

// Set up default data in the database
db.defaults({ blogs: [] }).write();

app.use(express.json());

// Get all blogs
app.get("/blogs", (req, res) => {
  const blogs = db.get("blogs").value();
  res.json(blogs);
});

// Get a single blog by ID
app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const blog = db.get("blogs").find({ id }).value();
  res.json(blog);
});

// Create a new blog
app.post("/blogs", (req, res) => {
  const { title, content } = req.body;
  const newBlog = { id: uuidv4(), title, content };
  db.get("blogs").push(newBlog).write();
  res.json(newBlog);
});

// Update a blog by ID
app.put("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.get("blogs").find({ id }).assign({ title, content }).write();
  res.json({ message: "Blog updated successfully" });
});

// Delete a blog by ID
app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  db.get("blogs").remove({ id }).write();
  res.json({ message: "Blog deleted successfully" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
