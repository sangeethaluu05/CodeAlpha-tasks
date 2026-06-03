console.log("Portfolio Loaded Successfully");

document.querySelectorAll(".project-card").forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-10px)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0)";
});

});