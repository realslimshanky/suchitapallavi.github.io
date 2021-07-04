let callback = (entries, observer) => {
    entries.forEach(entry => {
        const target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add("fade");
            observer.unobserve(target);
        }
    });
};

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
}
let observer = new IntersectionObserver(callback, options);

document.querySelectorAll(".fade-in").forEach(element => {
    element.style.opacity = 0;
});

window.addEventListener("load", () => {
    document.querySelector("#curtain").classList.add("animate");
    window.setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach(element => observer.observe(element));
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
