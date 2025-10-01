function toggleForms() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}

// Optional: validation for register form
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      const passwords = registerForm.querySelectorAll("input[type='password']");
      if (passwords[0].value !== passwords[1].value) {
        e.preventDefault();
        alert("Passwords do not match!");
      }
    });
  }
});
