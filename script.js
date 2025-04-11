// Function to execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create a new text node with the desired string
    const message = document.createTextNode("DOM load success");

    // Create a new div element to hold the message
    const messageDiv = document.createElement('div');
    messageDiv.appendChild(message);

    // Append the new div to the body
    document.body.appendChild(messageDiv);
});