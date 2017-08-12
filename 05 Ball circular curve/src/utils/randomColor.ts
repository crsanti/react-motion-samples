export const getRandomColor = () => (
  `#${Math.floor(Math.random() * parseInt('ffffff', 16)).toString(16)}`
);
