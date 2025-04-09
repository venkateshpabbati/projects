// Optional JS - currently no interaction is required.
// This sets CSS variables dynamically if desired.
document.querySelectorAll(".drop").forEach((drop, index) => {
    drop.style.setProperty("--i", index);
  });
  