/**
 * Subtle sci-fi sound effects using Web Audio API synthesis.
 * Safe, zero external assets, won't break if audio is blocked.
 */

let audioCtx: AudioContext | null = null;
let soundEnabled = false; // default off/opt-in to avoid annoying users

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
  if (enabled && !audioCtx) {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    } catch {
      // AudioContext not supported or blocked
    }
  }
}

export function playTechClick(freq = 800, duration = 0.05): void {
  if (!soundEnabled || !audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // Ignore audio errors
  }
}

export function playSuccessChime(): void {
  if (!soundEnabled || !audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C, E, G, C
    notes.forEach((freq, idx) => {
      const osc = audioCtx!.createOscillator();
      const gain = audioCtx!.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx!.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.06, audioCtx!.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx!.currentTime + idx * 0.08 + 0.3);

      osc.connect(gain);
      gain.connect(audioCtx!.destination);

      osc.start(audioCtx!.currentTime + idx * 0.08);
      osc.stop(audioCtx!.currentTime + idx * 0.08 + 0.35);
    });
  } catch {
    // Ignore audio errors
  }
}
