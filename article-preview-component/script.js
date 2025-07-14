const shareButton = document.getElementById('share-button');
const shareButtonActive = document.getElementById('share-button-active');
const tooltip = document.getElementById('tooltip');
let tooltipActive = false;

shareButton.addEventListener('click', () => {
  if (tooltipActive === false) {
    tooltip.classList.remove('hidden');
    tooltipActive = true;
  } else {
    tooltip.classList.add('hidden');
    tooltipActive = false;
  }
})

shareButtonActive.addEventListener('click', () => {
  tooltip.classList.add('hidden');
  tooltipActive = false;
});