const express = require("express");
const app = express();

// Example posts data
const posts = [
  { id: 1, title: "Post 1", content: "Lorem ipsum dolor sit amet" },
  { id: 2, title: "Post 2", content: "Consectetur adipiscing elit" },
  // ... other posts
];

/// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  // Check if user is authenticated (e.g., by checking a session or token)
  const token = req.headers.authorization;

  // Example token validation (replace with your own authentication logic)
  if (token === "YOUR_AUTHENTICATION_TOKEN") {
    // User is authenticated, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, send a response indicating unauthorized access
    res.status(401).json({ error: "Unauthorized access" });
  }
};

// Endpoint to get posts (requires authentication)
app.get("/posts", isAuthenticated, (req, res) => {
  // Send the posts data as the response
  res.json(posts);
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
