const starRating = document.querySelector(".star-rating");
const stars = document.querySelectorAll(".star");

let currentRating = 0;
starRating.addEventListener("mouseover", (e) => {
  const star = e.target;
  if (star.classList.contains("star")) {
    const rating = parseInt(star.dataset.rating, 10);
    highlightStars(rating);
  }
});
starRating.addEventListener("mouseleave", () => {
  highlightStars(currentRating);
});
starRating.addEventListener("click", (e) => {
  const star = e.target;
  if (star.classList.contains("star")) {
    currentRating = parseInt(star.dataset.rating, 10);
    starRating.setAttribute("data-rating", currentRating);
    highlightStars(currentRating);
    alert(`you rater ${currentRating} stars`);
  }
});

function highlightStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("highlight");
    } else {
      star.classList.remove("highlight");
    }
  });
}
