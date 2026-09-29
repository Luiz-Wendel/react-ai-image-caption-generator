import Translator from "./Translator.js";

async function translate(textEN) {
  return Translator.translate(textEN);
}

export { translate };
