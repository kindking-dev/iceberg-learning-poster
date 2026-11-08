/**
 * Procedural Ocean Ambience Generator using Web Audio API.
 * Synthesizes natural soothing ocean waves and wind without any external audio files.
 */
export class OceanAudio {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private waveGain: GainNode | null = null;
  private lfo: OscillatorNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    this.ctx = new AudioContextClass();

    // Master volume gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Create 5-second buffer of pink-filtered ocean noise
    const bufferSize = this.ctx.sampleRate * 5;
    const noiseBuffer = this.ctx.createBuffer(2, bufferSize, this.ctx.sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const data = noiseBuffer.getChannelData(channel);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    // Dual resonant bandpass filters mimicking wave swell
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    // LFO for rhythmic slow ocean surge (approx 12 seconds per wave period)
    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime); // ~12.5s wave cycle

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

    this.waveGain = this.ctx.createGain();
    this.waveGain.gain.setValueAtTime(0.4, this.ctx.currentTime);

    this.lfo.connect(filter.frequency);
    this.noiseNode.connect(filter);
    filter.connect(this.waveGain);
    this.waveGain.connect(this.masterGain);

    this.noiseNode.start();
    this.lfo.start();
  }

  public toggle(): boolean {
    if (!this.ctx) {
      this.init();
    }
    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      // Fade out smoothly over 1.2s
      this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        if (!this.isPlaying && this.masterGain && this.ctx) {
          this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
        }
      }, 1200);
      this.isPlaying = false;
    } else {
      // Fade in smoothly over 1.5s
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 1.5);
      this.isPlaying = true;
    }

    return this.isPlaying;
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public destroy() {
    try {
      this.noiseNode?.stop();
      this.lfo?.stop();
      this.ctx?.close();
    } catch {
      // ignore
    }
    this.ctx = null;
    this.isPlaying = false;
  }
}

export const oceanAudio = new OceanAudio();
