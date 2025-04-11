//your JS code here. If required.
// Function to execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create a new text node with the desired string
    const message = document.createTextNode("DOM load success");

    // Append the text node to the body
    document.body.appendChild(message);
});