const ratingNumbers = document.querySelectorAll('.rating-number');
const submitRatingButton = document.querySelector('.submit-rating');
const nextRatingContainer = document.querySelector('#next-rating-container');
const selectedRatingMessage = document.querySelector('.selected-rating-message');
const thankYouMessage = document.querySelector('.thank-you-message');

function selectRating(number) {
  const selectedRating = document.querySelector('.rating-number.selected');
  if (selectedRating) {
    selectedRating.classList.remove('selected');
  }
  number.classList.add('selected');
  submitRatingButton.disabled = false;
  selectedRatingMessage.textContent = `You selected ${number.dataset.rating} out of 5`;
}

ratingNumbers.forEach(number => {
  number.addEventListener('click', () => {
    selectRating(number);
  });
});

submitRatingButton.addEventListener('click', () => {
  const selectedRating = document.querySelector('.rating-number.selected');
  if (selectedRating) {
    const rating = selectedRating.dataset.rating;

    const selectedRatingMessage = document.createElement('h3');
    /* selectedRatingMessage.textContent = `You selected ${rating} out of 5`; */
    const thankYouMessageContainer = thankYouMessage.parentNode;
    thankYouMessageContainer.insertBefore(selectedRatingMessage, thankYouMessage.nextSibling);
    // Show next rating container
    nextRatingContainer.style.display = 'block';
    // Hide current rating container
    const ratingContainer = document.querySelector('.rating-container');
    ratingContainer.style.display = 'none';
  }
});