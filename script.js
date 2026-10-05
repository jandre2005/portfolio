// Automatically update footer year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Simple reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Scroll progress bar
const progress = document.createElement("div");
progress.className = "scroll-progress";
document.body.prepend(progress);

window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${window.scrollY / max})`;
}, { passive: true });


// Cursor spotlight on project cards
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
});