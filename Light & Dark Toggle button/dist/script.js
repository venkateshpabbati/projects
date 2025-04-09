const checkbox = document.getElementById("checkbox");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  checkbox.checked = true;
} else if (savedTheme === "light") {
  document.body.classList.remove("dark");
  checkbox.checked = false;
} else {
  // Optionally detect system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    checkbox.checked = true;
  }
}

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
