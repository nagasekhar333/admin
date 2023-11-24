document.addEventListener('DOMContentLoaded', function () {
    // Get the button and output elements
    var button = document.getElementById('clickMeButton');
    var output = document.getElementById('outputText');

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Change the text content of the output element
        output.textContent = 'Button clicked! This is a simple JavaScript interaction.';
    });
});

