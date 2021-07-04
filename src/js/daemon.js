import CharacterMath from './characterMath';

export default class Daemon extends CharacterMath {
  constructor(name) {
    super(name, 'daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
