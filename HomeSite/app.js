const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "250px"; // Justera bredd för att visa sidebar
}

// Stäng overlay
function closeNav(event) {
  // Stäng bara om du klicka utanför div.
  const overlayContent = document.querySelector(".overlay-content");
  if (
    event.target === overlayContent ||
    !event.target.closest(".overlay-content")
  ) {
    document.getElementById("myNav").style.width = "0"; // Gömma
  }
}
