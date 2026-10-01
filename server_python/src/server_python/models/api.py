from .text_to_audio import TextToAudio

# Load the model once at startup, not on every request.
# BarkModel is ~1.5 GB and takes 30–120 s to load — re-loading it per
# request blocks Werkzeug's single-threaded server and causes crashes/ECONNRESET.
_tts = TextToAudio()

def convert_text_to_audio(text):
    return _tts.convert(text)
