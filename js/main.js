document.querySelector(".mobile-nav-button").addEventListener("click", () => {
    document.querySelector("nav.container").style.display = "flex";
    document.querySelector(".mobile-close-nav-button").style.display = "block";
});

document.querySelector(".mobile-close-nav-button").addEventListener("click", () => {
    document.querySelector("nav.container").style.display = "none";
    document.querySelector(".mobile-close-nav-button").style.display = "none";
});
