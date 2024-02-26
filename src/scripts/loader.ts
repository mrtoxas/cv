export const pageLoader = () => {
  window.addEventListener('load', () => {
    const page = document.getElementById('page');
    page?.classList.remove('is-loading');
  });
};
