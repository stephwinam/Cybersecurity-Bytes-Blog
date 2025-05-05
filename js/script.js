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
