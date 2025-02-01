document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.5s";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
