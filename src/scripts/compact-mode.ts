export const compactMode = (id: string) => {
  const button = document.getElementById(id);

  if (!button) return;

  const handleButtonClick = () => document.documentElement.classList.toggle('compact');

  button.addEventListener('click', handleButtonClick);
};
