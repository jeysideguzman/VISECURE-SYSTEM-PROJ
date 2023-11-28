document.addEventListener("DOMContentLoaded", function () {
    var missionTextContainer = document.querySelector(".missionTextContainer");
    var visionTextContainer = document.querySelector(".visionTextContainer");

    missionTextContainer.addEventListener("click", function () {
        missionTextContainer.style.backgroundColor = "#8EC2E3";
    });

    visionTextContainer.addEventListener("click", function () {
        visionTextContainer.style.backgroundColor = "#8ECD69";
    });
});
