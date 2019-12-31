export default class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }

  levelUp() {
    if (this.health <= 0) {
      throw Error('Нельзя повысить левел умершего');
    } else {
      this.level += 1;
      this.health = 100;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    }
  }
}
