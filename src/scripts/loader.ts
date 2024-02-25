export const pageLoader = () => {
  window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');

    if (!loader) return;

    loader.classList.add('page-loader-hide');
    loader.onanimationend = () => loader.remove();
  });
};
