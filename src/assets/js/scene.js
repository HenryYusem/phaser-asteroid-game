import { Scene } from 'phaser';
import Ship from './ship';
import Keyboard from './keyboard';

export default class AsteroidsScene extends Scene {

  /**
   * Use this function to load images which can be used in sprites
   */
  preload() {
    // loads images which can be used in sprites
    this.load.image('space', 'assets/media/images/deep-space.jpg');
    this.load.image('bullet', 'assets/media/images/bullets.png');
    this.load.image('ship', 'assets/media/images/ship.png');
  }

  /**
   * Create game objects and stuff here
   */
  create() {
    this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.shipSpeedLabel = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    this.ship = new Ship(this, 400, 300);
    this.keyboard = new Keyboard(this);
  }

  /**
   * This is where all the game logic goes. This is similar to the
   * autonomousPeriodic and teleopPeriodic functions in robot code
   */
  update(time, delta) {
this.ship.setAcceleration(0, 0);
this.ship.setAngularVelocity(0);

if (this.keyboard.isLeftPressed()) {
    this.ship.setAngularVelocity(-180);
} 

if (this.keyboard.isRightPressed()) {
    this.ship.setAngularVelocity(180);
} 

if (this.keyboard.isDownPressed()) {

} 

if (this.keyboard.isUpPressed()) {
    let velocity = 25;
    let acceleration = 25;
    this.ship.setForwardVelocity(velocity);
    this.ship.setForwardAcceleration(acceleration);
}
  }

}
