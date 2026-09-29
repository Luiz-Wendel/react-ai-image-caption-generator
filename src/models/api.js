import ImageCaptioner from "./imageCaptioner";

async function generateCaption(imgSrc) {
  return ImageCaptioner.generateCaption(imgSrc);
}

async function translate(captionEN) {
  return fetch("http://localhost:3000/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ caption: captionEN }),
  }).then((res) => res.json());
}

export { generateCaption, translate };
