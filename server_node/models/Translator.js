class Translator {
  static translator = null;

  static translate(textEN) {
    return [{ translated_text: `Translating ${textEN}` }];
  }
}

export default Translator;
