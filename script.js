let lastScrollTop = 0;

function showScrollDown() {
    document.getElementById('scroll-down').style.display = 'block';
}

function hideScrollDown() {
    document.getElementById('scroll-down').style.display = 'none';
}

function handleScroll() {
    if (window.scrollY > 0) {
        hideScrollDown();
    } else {
        showScrollDown();
    }
}

window.addEventListener('scroll', handleScroll);

document.getElementById('back-button').addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});


document.addEventListener("DOMContentLoaded", function() {
    
});

///image slideshow////
