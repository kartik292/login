// js
function getStockPrediction(stockData) {
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'stock_data': stockData }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the prediction response here
        displayPrediction(data.prediction);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// html css

<input type="text" id="stockData" placeholder="Enter stock data">
<button onclick="predictStock()">Predict</button>
<div id="predictionResult"></div>
function predictStock() {
    const stockData = document.getElementById('stockData').value;
    getStockPrediction(stockData);
}

function displayPrediction(prediction) {
    const resultDiv = document.getElementById('predictionResult');
    resultDiv.innerHTML = `Predicted stock: ${prediction}`;
}
