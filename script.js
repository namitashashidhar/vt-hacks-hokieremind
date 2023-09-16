async function fetchData() {
    document.addEventListener("DOMContentLoaded", function () {
        // Add a click event listener to the "Fetch Deadlines" button
        document.getElementById("fetchDataButton").addEventListener("click", function () {
          // Call a function to extract and display the data from the current webpage
          extractAndDisplayData();
        });
      });
      
      // Function to extract and display data from the current webpage
      function extractAndDisplayData() {
        const dateElement = document.getElementById("date");
        const areaNameElement = document.getElementById("areaName");
        const latestByElement = document.getElementById("latestBy");
        const deathNewElement = document.getElementById("deathNew");
      
        // Use JavaScript to extract data from the current webpage
        // Replace these selectors with the appropriate ones for your webpage
        const extractedData = {
          date: document.querySelector("#date-selector").textContent,
          country: document.querySelector("#country-selector").textContent,
          confirmed: document.querySelector("#confirmed-selector").textContent,
          deaths: document.querySelector("#deaths-selector").textContent,
        };
      
        // Update the table cells with the extracted data
        dateElement.textContent = extractedData.date;
        areaNameElement.textContent = extractedData.country;
        latestByElement.textContent = extractedData.confirmed;
        deathNewElement.textContent = extractedData.deaths;      
      }
      
}
fetchData();