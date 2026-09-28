import ImageCaptioner from "./imageCaptioner";

async function generateCaption(imgSrc) {
  return ImageCaptioner.generateCaption(imgSrc);
}

export { generateCaption };
