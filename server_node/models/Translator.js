class Translator {
  static translator = null;

  static async getInstance() {
    if (!this.translator) {
      const { pipeline } = await import("@huggingface/transformers");

      // this is taking an eternity to load
      this.translator = await pipeline(
        "translation",
        "Xenova/nllb-200-distilled-600M",
        { dtype: "q8" },
      );
    }

    return this.translator;
  }

  static async translate(textEN) {

    return this.getInstance().then((translator) => translator(textEN, {
      src_lang: "eng_Latn",
      tgt_lang: "por_Latn",
    }));
  }
}

export default Translator;
