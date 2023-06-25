// Frontend JavaScript code
const blogContainer = document.getElementById("blogContainer");
const blogForm = document.getElementById("blogForm");

// Function to render blogs
function renderBlogs(blogs) {
  blogContainer.innerHTML = "";

  blogs.forEach((blog) => {
    const blogElement = document.createElement("div");
    blogElement.classList.add("blog");
    blogElement.innerHTML = `
      <h2>${blog.title}</h2>
      <p>${blog.content}</p>
      <button class="delete-btn" data-id="${blog.id}">Delete</button>
    `;

    const deleteButton = blogElement.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      deleteBlog(blog.id);
    });

    blogContainer.appendChild(blogElement);
  });
}

// Function to fetch all blogs
async function fetchBlogs() {
  try {
    const response = await fetch("http://localhost:3000/blogs");
    const blogs = await response.json();
    renderBlogs(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
}

// Function to add a new blog
async function addBlog(title, content) {
  try {
    const response = await fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      const newBlog = await response.json();
      fetchBlogs();
      clearForm();
    } else {
      console.error("Error adding blog:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding blog:", error);
  }
}

// Function to delete a blog by ID
async function deleteBlog(blogId) {
  try {
    const response = await fetch(`http://localhost:3000/blogs/${blogId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      fetchBlogs();
    } else {
      console.error("Error deleting blog:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
}

// Function to clear the form fields
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

// Event listener for form submission
blogForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  addBlog(title, content);
});

// Fetch initial blogs
fetchBlogs();
