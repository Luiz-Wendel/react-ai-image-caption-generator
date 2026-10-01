import ImageCaptioner from "./imageCaptioner";

// to increase "timeout" for fetch native function
const controller = new AbortController();

const timeout = setTimeout(() => {
  controller.abort();
}, 480_000);

async function generateCaption(imgSrc) {
  return ImageCaptioner.generateCaption(imgSrc);
}

async function translate(captionEN) {
  try {
    return fetch("http://localhost:3000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ caption: captionEN }),
      signal: controller.signal,
    }).then((res) => res.json());
  } catch(error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again later.', error?.message);
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function convertTextToAudio(captionPTBR) {
  try {
    return fetch("http://localhost:5000/text-to-audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: captionPTBR }),
      signal: controller.signal,
    }).then((res) => res.json());
  } catch(error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again later.', error?.message);
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

export { generateCaption, translate, convertTextToAudio };
