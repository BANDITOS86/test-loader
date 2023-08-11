const loadingSpinner = document.querySelector('.loading__spinner');
const loadingTexts = document.querySelectorAll('.loading__text');
const message = document.querySelector('.message');
const loadingContainer = document.querySelector('.loading__container');

function showLoadingText(index) {
  loadingTexts[index].style.display = 'block';
}

function hideLoadingTexts() {
  loadingTexts.forEach(text => text.style.display = 'none');
}

function showMessage() {
  // loadingSpinner.style.display = 'none';
  hideLoadingTexts();
  message.style.display = 'block';
}

function simulateLoading() {
  loadingContainer.style.display = 'block';

  setTimeout(() => showLoadingText(0), 1000);
  setTimeout(() => showLoadingText(1), 2000);
  setTimeout(() => showLoadingText(2), 3000);
  setTimeout(() => {
    showMessage();
    setTimeout(() => loadingContainer.style.display = 'none', 3000);
  }, 4000);
}

simulateLoading();
