const button = document.getElementById("quoteBtn");
const resultDiv = document.getElementById("result");
const loadingText = document.getElementById("loading");

button.addEventListener("click", getQuote);

function getQuote() {

    // Show loading text
    loadingText.innerText = "Loading...";
    resultDiv.innerHTML = "";

    fetch("https://api.quotable.io/random")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {

            // Hide loading
            loadingText.innerText = "";

            // Display quote
            resultDiv.innerHTML = `
                <p>"${data.content}"</p>
                <p><strong>- ${data.author}</strong></p>
            `;
        })
        .catch(error => {

            loadingText.innerText = "";
            resultDiv.innerHTML = "Error fetching quote. Please try again.";
            console.error("Error:", error);
        });
}
