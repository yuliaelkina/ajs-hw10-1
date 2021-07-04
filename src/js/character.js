export default class Character {
  constructor(name, type) {
    const characterTypes = ['magician', 'daemon'];
    if (name.length > 11 || name.length < 2) {
      throw new Error('Имя героя должно содержать от 2х до 10 символов');
    }
    if (!characterTypes.includes(type)) {
      throw new Error('Выбранного типа героя не существует');
    }
    this.distance;
    this.name = name;
    this.stoned = false;
    this.health = 100;
    this.level = 1;
    this.type = type;
  }
}
