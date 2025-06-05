/**
 *  @module p5.sound
 *  @submodule p5.sound
 *  @for p5.sound
 */

import { Context as ToneContext } from "tone/build/esm/core/context/Context.js";
import { Gain as ToneGain } from "tone/build/esm/core/context/Gain.js";

/**
 * Generate a gain node to use for mixing and main volume.
 * @class Gain
 * @constructor
 * @example
 * <div>
 * <code>
 * let cnv, soundFile, osc, gain;
 * 
 * function preload() {
 *   soundFile = loadSound('assets/Damscray_DancingTiger.mp3');
 * }
 * 
 * function setup() {
 *   cnv = createCanvas(100, 100);
 *   cnv.mousePressed(playSound);
 * 
 *   gain = new p5.Gain(0.74);
 *   osc = new p5.Oscillator();
 *   osc.amp(0.74);
 *   osc.disconnect();
 *   soundFile.loop();
 *   soundFile.disconnect();
 * 
 *   //connect both sound sources to gain node
 *   soundFile.connect(gain);
 *   osc.connect(gain);
 * }
 * 
 * function playSound() {
 *   soundFile.play();
 *   soundFile.play();
 * }
 * 
 * function draw() {
 *   background(220);
 *   let level = map(mouseX, 0, width, 0, 1);
 *   gain.amp(level);
 * }
 * </code>
 * </div>
 */
class Gain {
  constructor(value = 1) {
    this.gain = new ToneGain(value).toDestination();
  }

  /**
   * Adjust the amplitude of the soundfile.
   * @method amp
   * @for Gain
   * @param {Number, Object} amplitude amplitude value between 0 and 1, or an audio rate signal such as an LFO.
   */
  amp(value) {
    if (typeof value === "object") {
      value.getNode().connect(this.gain.gain);
      return;
    }
    this.gain.gain.rampTo(value, 0.1);
  }

  connect(destination) {
    if(typeof destination.getNode === 'function') {
      this.gain.connect(destination.getNode());
    } else {
      this.gain.connect(destination);
    }
  }

  disconnect() {
    this.gain.disconnect(ToneContext.destination);
  }

  getNode() {
    return this.gain;
  }
}

export default Gain;