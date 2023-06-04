// JavaScript code here
const blogContainer = document.getElementById("blogContainer");
const blogForm = document.getElementById("blogForm");

// Sample data
let blogs = [
  {
    id: 1,
    title: "First Blog",
    content: "This is the content of the first blog.",
  },
  {
    id: 2,
    title: "Second Blog",
    content: "This is the content of the second blog.",
  },
];

// Function to render blogs
function renderBlogs() {
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
    deleteButton.addEventListener("click", (event) => {
      const blogId = parseInt(event.target.getAttribute("data-id"));
      deleteBlog(blogId);
    });

    blogContainer.appendChild(blogElement);
  });
}

// Function to add a new blog
function addBlog(title, content) {
  const newBlog = {
    id: blogs.length + 1,
    title,
    content,
  };

  blogs.push(newBlog);
  renderBlogs();
  clearForm();
}

// Function to delete a blog
function deleteBlog(blogId) {
  blogs = blogs.filter((blog) => blog.id !== blogId);
  renderBlogs();
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

// Initial rendering of blogs
renderBlogs();
