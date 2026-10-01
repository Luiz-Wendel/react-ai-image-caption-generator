from scipy.io import wavfile

def save_audio(audio, sample_rate, file_id):
    path = f"src/server_python/audio/{file_id}.wav"
    audio = audio.cpu().numpy().squeeze()  # .cpu() ensures this works on GPU or CPU

    wavfile.write(path, rate=sample_rate, data=audio)
