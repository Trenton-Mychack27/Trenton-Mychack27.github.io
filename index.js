document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".glowing-logo");

    // Toggle the glowing effect on click
    logo.addEventListener("click", () => {
        logo.classList.toggle("glowing-logo");
    });

    // Stop the glow when hovered
    logo.addEventListener("mouseenter", () => {
        logo.style.animation = "none";
    });

    logo.addEventListener("mouseleave", () => {
        logo.style.animation = "glowing 1.5s infinite alternate";
    });
    document.addEventListener("DOMContentLoaded", () => {
        const logo = document.querySelector(".glowing-logo");
    
    // Toggle glow effect on click
    logo.addEventListener("click", () => {
        logo.classList.toggle("glowing-logo");
    });
});
});
