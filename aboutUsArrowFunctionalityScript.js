document.addEventListener('DOMContentLoaded', function () {
    var aboutUsSubText = document.querySelector('.aboutUsSubText');
    var mission1Container = document.querySelector('.mission1Container');
    var whyUsContainer = document.querySelector('.whyUsContainer');
    var contactUsContainer = document.querySelector('.contactUSContainer');
    var mission2Container = document.querySelector('.mission2Container');

    var arrow1 = document.querySelector('.arrow1');
    var arrow2 = document.querySelector('.arrow2');

    var components = [aboutUsSubText, mission1Container, whyUsContainer, contactUsContainer, mission2Container];
    var currentIndex = 0; // Start from the first component

    // Function to hide all components
    function hideAllComponents() {
        components.forEach(function (component) {
            component.classList.add('hidden');
        });
    }

    hideAllComponents(); // Hide all components initially

    function toggleVisibility(element) {
        element.classList.toggle('hidden');
    }

    function showNextComponent() {
        if (currentIndex < components.length) {
            toggleVisibility(components[currentIndex]);
            currentIndex++;
        }
    }

    function hideCurrentComponent() {
        if (currentIndex > 0) {
            currentIndex--;
            toggleVisibility(components[currentIndex]);
        }
    }

    arrow1.addEventListener('click', function () {
        showNextComponent();
    });

    arrow2.addEventListener('click', function () {
        hideCurrentComponent();
    });
});
