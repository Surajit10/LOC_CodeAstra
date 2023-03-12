function loadImage(fileName) {
  const imageData = localStorage.getItem(fileName);
  if (imageData) {
    const { file, dataUrl } = JSON.parse(imageData);
    const blob = new Blob([dataUrl], { type: "image/png" });
    const fileUrl = URL.createObjectURL(blob);
    return fileUrl;
  } else {
    console.log(`Image ${fileName} not found in localStorage.`);
    return null;
  }
}

export default loadImage;
