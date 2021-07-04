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
      console.log(percentage);
    };
    const baseAttack = this._attack * Math.round(percentage);
    console.log(baseAttack);
    let finalAttack = baseAttack;
    if (this.stoned === true) {
      finalAttack = baseAttack - Math.round(Math.log2(this.distance) * 5);
    }
    return finalAttack;
  }

  set attack(attack) {
    this._attack = attack;
  }
}
