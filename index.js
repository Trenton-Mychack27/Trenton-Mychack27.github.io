document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Example function to change the text of an element with id 'example'
    function changeText() {
        const element = document.getElementById('example');
        if (element) {
            element.textContent = 'Text has been changed!';
        }
    }

    // Call the function when the button with id 'changeTextButton' is clicked
    const button = document.getElementById('changeTextButton');
    if (button) {
        button.addEventListener('click', changeText);
    }
});