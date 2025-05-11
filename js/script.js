// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Expand/Collapse Blog Post
const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const postContent = btn.nextElementSibling;
    postContent.classList.toggle("hidden");
    btn.textContent = postContent.classList.contains("hidden")
      ? "Read more"
      : "Show less";
  });
});

// Contact form validation
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill out all fields.";
      formStatus.style.color = "red";
    } else {
      formStatus.textContent = "Message sent successfully!";
      formStatus.style.color = "green";
      form.reset();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate form submission delay
    setTimeout(() => {
      status.classList.remove("hidden");
      form.reset();

      // Optional: Hide message after 5 seconds
      setTimeout(() => {
        status.classList.add("hidden");
      }, 5000);
    }, 1000);
  });
});
