export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|gif|webp|jpeg|jpg|svg|jpg|bmp|)$",
      "i",
    );
    return pattern.test(url);
  }
};
