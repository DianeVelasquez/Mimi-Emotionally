import librosa
import numpy as np
from scipy.stats import skew, kurtosis, entropy

def extract_features_from_audio(filepath, sr=22050):
    y, sr = librosa.load(filepath, sr=sr)

    if len(y) < sr * 5:
        raise ValueError("El audio es muy corto. Se requieren al menos 5 segundos.")

    # 1. RMS Energy
    rms = librosa.feature.rms(y=y)[0]
    rms_mean = float(np.mean(rms))

    # 2. Low Energy (proporción de frames con RMS por debajo de la media)
    low_energy = float(np.mean(rms < np.mean(rms)))

    # 3. Fluctuation (desviación estándar del RMS)
    fluctuation = float(np.std(rms))

    # 4. Tempo
    tempo, _ = librosa.beat.beat_track(y=y, sr=sr)
    tempo = float(tempo)

    # 5-17. MFCCs
    mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
    mfcc_means = [float(np.mean(m)) for m in mfcc]

    # 18-19. Roughness y su pendiente
    diff = np.abs(np.diff(y))
    roughness_mean = float(np.mean(diff))
    roughness_slope = float(np.polyfit(np.arange(len(diff)), diff, 1)[0])

    # 20. Zero Crossing Rate
    zcr = librosa.feature.zero_crossing_rate(y)[0]
    zcr_mean = float(np.mean(zcr))

    # 21-22. Attack Time y su pendiente (estimados usando envergadura RMS)
    envelope = rms
    attack_time = np.argmax(envelope > np.mean(envelope))
    attack_time_slope = float(np.polyfit(np.arange(len(envelope)), envelope, 1)[0])

    # 23. Rolloff
    rolloff = librosa.feature.spectral_rolloff(y=y, sr=sr)[0]
    rolloff_mean = float(np.mean(rolloff))

    # 24. Event Density (número de beats por segundo)
    onset_env = librosa.onset.onset_strength(y=y, sr=sr)
    times = librosa.times_like(onset_env, sr=sr)
    event_density = float(len(times) / (len(y)/sr))

    # 25. Pulse Clarity
    pulse_clarity = float(np.std(onset_env))

    # 26. Brightness (proporción del espectro por encima de un umbral de frecuencia)
    S = np.abs(librosa.stft(y))
    freqs = librosa.fft_frequencies(sr=sr)
    brightness = float(np.sum(S[freqs > 2000]) / np.sum(S))

    # 27-30. Centroid, Spread, Skewness, Kurtosis
    centroid = librosa.feature.spectral_centroid(y=y, sr=sr)[0]
    spread = librosa.feature.spectral_bandwidth(y=y, sr=sr)[0]
    sk = skew(S.flatten())
    kurt = kurtosis(S.flatten())

    centroid_mean = float(np.mean(centroid))
    spread_mean = float(np.mean(spread))

    # 31. Flatness
    flatness = librosa.feature.spectral_flatness(y=y)[0]
    flatness_mean = float(np.mean(flatness))

    # 32. Entropy of Spectrum
    ps = np.abs(S) ** 2
    ps_norm = ps / np.sum(ps, axis=0, keepdims=True)
    entropy_spec = float(np.mean(entropy(ps_norm + 1e-6, axis=0)))

    # 33-44. Chroma
    chroma = librosa.feature.chroma_stft(y=y, sr=sr)
    chroma_means = [float(np.mean(chroma[i])) for i in range(12)]

    # 45-50. Harmonic Change Detection Function stats
    hcdf = librosa.onset.onset_strength(y=librosa.effects.harmonic(y), sr=sr)
    hcdf_mean = float(np.mean(hcdf))
    hcdf_std = float(np.std(hcdf))
    hcdf_slope = float(np.polyfit(np.arange(len(hcdf)), hcdf, 1)[0])
    hcdf_fft = np.fft.fft(hcdf)
    power = np.abs(hcdf_fft) ** 2
    freqs_hcdf = np.fft.fftfreq(len(hcdf))
    peak_freq = freqs_hcdf[np.argmax(power[1:]) + 1]
    peak_amp = np.max(power)
    entropy_hcdf = float(entropy(power + 1e-6))

    features = np.array([
        rms_mean,
        low_energy,
        fluctuation,
        tempo,
        *mfcc_means,
        roughness_mean,
        roughness_slope,
        zcr_mean,
        attack_time,
        attack_time_slope,
        rolloff_mean,
        event_density,
        pulse_clarity,
        brightness,
        centroid_mean,
        spread_mean,
        sk,
        kurt,
        flatness_mean,
        entropy_spec,
        *chroma_means,
        hcdf_mean,
        hcdf_std,
        hcdf_slope,
        peak_freq,
        peak_amp,
        entropy_hcdf
    ], dtype=np.float32)

    return features.reshape(1, -1)
