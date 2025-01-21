// Select all logos
const logos = document.querySelectorAll('.logo');

// Function to randomize logo positions
function randomizeLogoPositions() {
    logos.forEach(logo => {
        // Randomize the position within the screen width and height
        const randomX = Math.floor(Math.random() * window.innerWidth); // Random X position
        const randomY = Math.floor(Math.random() * window.innerHeight); // Random Y position

        // Apply the random position
        logo.style.left = `${randomX}px`;
        logo.style.top = `${randomY}px`;

        // Optionally, randomize the rotation of the logos
        const randomRotation = Math.floor(Math.random() * 360); // Random rotation between 0° and 360°
        logo.style.transform = `rotate(${randomRotation}deg)`;
    });
}

// Call the function to position logos randomly on page load
randomizeLogoPositions();

// Optional: Re-randomize positions on window resize (to adjust for different screen sizes)
window.addEventListener('resize', randomizeLogoPositions);
