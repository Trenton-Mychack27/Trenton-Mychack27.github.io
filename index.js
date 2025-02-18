document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Smooth Scrolling for Navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.background = '#333';
    darkModeToggle.style.color = '#fff';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Set Dark Mode CSS
    const style = document.createElement('style');
    style.textContent = `
        .dark-mode {
            background-color: #222;
            color: #fff;
        }
        .dark-mode .content {
            background-color: #333;
            color: #ddd;
        }
    `;
    document.head.appendChild(style);
});
