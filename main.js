// Get the checkbox and body elements
const checkbox = document.getElementById("darkModeToggle");
const body = document.body;

// Event listener to toggle dark mode
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.classList.add("dark-mode"); // Add dark mode class
  } else {
    body.classList.remove("dark-mode"); // Remove dark mode class
  }
});
