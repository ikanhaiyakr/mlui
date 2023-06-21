// script.js

// Get the form element
const form = document.querySelector('form');

// Add event listener to the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Perform any necessary validation or data processing here

  // Simulate a loading state
  const button = form.querySelector('button');
  button.disabled = true;
  button.innerHTML = 'Loading...';

  // Simulate a delay before displaying the result
  setTimeout(function() {
    const predictionText = form.parentNode.querySelector('h4');
    predictionText.innerHTML = 'Prediction result: X% of the population has heart disease';

    // Reset the form
    form.reset();

    // Restore the submit button
    button.disabled = false;
    button.innerHTML = 'Predict percent population with heart disease';
  }, 2000);
});

