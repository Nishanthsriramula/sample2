document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');
    const imageDisplay = document.getElementById('image-display');
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg'
    ];
    

    collapsibles.forEach((collapsible, index) => {
        collapsible.addEventListener('click', function() {
            // Close all other collapses
            collapsibles.forEach((item, itemIndex) => {
                if (itemIndex !== index) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.display = 'none';
                }
            });

            // Toggle the clicked collapsible
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }

            // Change the image
            imageDisplay.src = images[index];
        });
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('icon');

    icon.addEventListener('click', function() {
        // Toggle between different icon classes or change the icon's src attribute
        if (icon.src.includes('original-icon.png')) {
            icon.src = 'new-icon.png'; // Change to a different icon image
        } else {
            icon.src = 'original-icon.png'; // Change back to the original icon image
        }
    });
});

