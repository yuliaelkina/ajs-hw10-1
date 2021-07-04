import Character from './character';

export default class CharacterMath extends Character {
  set stoned(stat) {
    this._stoned = stat;
  }

  get stoned() {
    return this._stoned;
  }

  get attack() {
    let percentage = 1;
    if (this.distance > 1) {
      percentage -= (this.distance - 1) * 0.1;
    }
    const baseAttack = Math.round(this._attack * percentage);
    let finalAttack = baseAttack;
    if (this.stoned === true) {
      finalAttack = Math.round(baseAttack - Math.log2(this.distance) * 5);
    }
    return finalAttack;
  }

  set attack(attack) {
    this._attack = attack;
  }
}
