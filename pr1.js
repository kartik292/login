document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mocking API call to the backend (replace with your actual backend endpoint)
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        // Mocking stock prediction (replace with actual ML model integration)
        fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username }) // Pass username to get personalized prediction
        })
        .then(response => response.json())
        .then(prediction => {
            document.getElementById('predictionResult').innerText = `Today's Stock Prediction: ${prediction.result}`;
        })
        .catch(error => console.error('Error:', error));
    })
    .catch(error => console.error('Error:', error));
});
