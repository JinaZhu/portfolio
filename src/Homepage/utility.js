export const getRandomizedStyle = (styleType) => {
  return styleType[Math.floor(Math.random() * styleType.length)];
};
