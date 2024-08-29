document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');

    // Initially hide all images except the first one
    images.forEach((img, index) => {
        if (index !== 0) {
            img.style.display = 'none';
        }
    });

    setInterval(() => {
        images[currentIndex].style.display = 'none'; // Hide current image
        currentIndex = (currentIndex + 1) % images.length; // Move to the next image
        images[currentIndex].style.display = 'block'; // Show the next image
    }, 3000); // Change image every 3 seconds
});
