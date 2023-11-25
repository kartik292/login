function predictStock() {
    // Here you can write code to fetch stock data and perform predictions
    // For simplicity, let's just display a sample prediction for demonstration
  
    const stockInput = document.getElementById('stockInput').value;
    const predictionOutput = document.getElementById('predictionOutput');
  
    // Simulated prediction result
    const prediction = Math.random() > 0.5 ? 'Positive' : 'Negative';
  
    predictionOutput.innerHTML = `<p>Prediction for ${stockInput}: ${prediction}</p>`;
  }
  