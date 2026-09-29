import ImageCaptioner from "./imageCaptioner";

async function generateCaption(imgSrc) {
  return ImageCaptioner.generateCaption(imgSrc);
}

async function translate(captionEN) {
  return [{translated_text: captionEN}];
}

export { generateCaption, translate };
