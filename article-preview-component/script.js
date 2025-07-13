const buttonShare = document.getElementById('share');
const buttonShareActive = document.getElementById('share-active');

const shareSection = document.getElementById('share-section');
const avatarSection = document.getElementById('avatar-section');

buttonShare.addEventListener('click', () => {
  shareSection.classList.remove('hidden');
  avatarSection.classList.add('hidden');
})

buttonShareActive.addEventListener('click', () => {
  shareSection.classList.add('hidden');
  avatarSection.classList.remove('hidden');
});