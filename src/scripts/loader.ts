export const pageLoader = () => {
  window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) loader.style.display = 'none';
  });
};
