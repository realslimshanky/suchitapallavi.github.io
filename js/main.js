document.querySelector("#curtain").classList.add("animate");

var elementsToSlideFromLeft = document.querySelectorAll(".slide-from-left");
elementsToSlideFromLeft.forEach(element => {
    element.style.display = "float";
    element.style.transform = "translateX(-200%)";
});
var elementsToSlideFromRight = document.querySelectorAll(".slide-from-right");
elementsToSlideFromRight.forEach(element => {
    element.style.display = "float";
    element.style.transform = "translateX(+200%)";
});

function isElementInViewportHeight(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function addAnimationClass() {
    elementsToSlideFromLeft.forEach(element => {
        if (isElementInViewportHeight(element)) {
            element.classList.add("slide-to-original-position");
        }
    });
    elementsToSlideFromRight.forEach(element => {
        if (isElementInViewportHeight(element)) {
            element.classList.add("slide-to-original-position");
        }
    });
}

window.addEventListener("load", () => {
    window.setTimeout(() => {
        addAnimationClass()
        window.addEventListener('scroll', function() {
            addAnimationClass();
        });
    }, 1500);
});


document.querySelector(".mobile-nav-button").addEventListener("click", () => {
    document.querySelector("nav.container").style.display = "flex";
    document.querySelector(".mobile-close-nav-button").style.display = "block";
});

document.querySelector(".mobile-close-nav-button").addEventListener("click", () => {
    document.querySelector("nav.container").style.display = "none";
    document.querySelector(".mobile-close-nav-button").style.display = "none";
});

document.querySelectorAll("nav.container a").forEach(
    (selector) => selector.addEventListener(
        "click", () => {
            if ((window.innerWidth || document.documentElement.clientWidth) <= 800) {
                document.querySelector("nav.container").style.display = "none";
                document.querySelector(".mobile-close-nav-button").style.display = "none";
            }
    })
);
