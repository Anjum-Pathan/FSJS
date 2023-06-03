// Debounce function
function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Function to simulate a search API call
function search(query) {
  // Simulating an API call with a predefined list of results
  const results = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Lemon",
    "Mango",
  ];

  const filteredResults = results.filter((result) =>
    result.toLowerCase().includes(query.toLowerCase())
  );

  displayResults(filteredResults);
}

// Function to display search results
function displayResults(results) {
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = "";

  if (results.length === 0 || searchInput.value === "") {
    searchResults.style.display = "none"; // Hide the search results list
  } else {
    searchResults.style.display = "block"; // Show the search results list

    results.forEach((result) => {
      const listItem = document.createElement("li");
      listItem.textContent = result;
      searchResults.appendChild(listItem);
    });
  }
}

// Debounced version of the search function
const debouncedSearch = debounce(search, 500);

// Event listener for search input
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function (event) {
  const query = event.target.value;
  debouncedSearch(query);
});
