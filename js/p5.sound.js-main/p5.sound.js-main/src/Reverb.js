/**
 *  @module p5.sound
 *  @submodule p5.sound
 *  @for p5.sound
 */

import { Context as ToneContext } from "tone/build/esm/core/context/Context.js";
import { Reverb as ToneReverb } from "tone/build/esm/effect/Reverb.js";

/**
 * Add reverb to a sound.
 * @class Reverb
 * @constructor
 * @param {Number} [decayTime] Set the decay time of the reverb
 * @example
 * <div>
 * <code>
 * let noise, osc, env, reverb;
 * let randomTime = 0;
 * 
 * function setup() {
 *   let cnv = createCanvas(100, 100);
 *   cnv.mousePressed(playSound);
 *   noise = new p5.Noise();
 *   env = new p5.Envelope();
 *   reverb = new p5.Reverb();
 *   noise.disconnect();
 *   noise.connect(env);
 *   env.disconnect();
 *   env.connect(reverb);
 *   noise.start();
 *   textAlign(CENTER);
 * }
 * 
 * function playSound() {
 *  randomTime = random(0.1, 3);
 *  reverb.set(randomTime); 
 *  env.play();
 * }
 * 
 * function draw() {
 *   background(220);
 *   text('click to play', width/2, 20);
 *   text('decay ' + round(randomTime, 2), width/2, 40);
 *   describe('Click to play a sound with a random decay time.');
 * }
 * </code>
 * </div>
 */
class Reverb {
  constructor(decayTime) {
    this.decayTime = decayTime || 1;
    this.reverb = new ToneReverb(this.decayTime).toDestination();
  }

  /**
   * Set the decay time of the reverb.
   * @method set
   * @for Reverb
   * @param {Number} time Decay time of the reverb in seconds.
   */
  set(t) {
    this.reverb.decay = t;
  }

  /**
   * Adjust the dry/wet value.
   * @method drywet
   * @for Reverb
   * @param {Number} mix The desired mix between the original and the affected signal. A number between 0 and 1. 0 is all dry, 1 is completely affected.
   */
  drywet(t) {
    this.reverb.wet.value = t;
  }

  connect(destination) {
    if(typeof destination.getNode === 'function') {
      this.reverb.connect(destination.getNode());
    } else {
      this.reverb.connect(destination);
    }
  }
  
  disconnect() {
    this.reverb.disconnect(ToneContext.destination);
  }

  getNode() {
    return this.reverb;
  }
}

export default Reverb;