function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        id: 1,
        name: "anjum pathan",
        email: "anjumpathan@example.com",
      };
      resolve(data);
    }, 2000);
  });
}
//Usage of the promise
fetchDataFromAPI()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("API request completed.");
  });
