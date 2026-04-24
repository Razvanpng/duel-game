import { Character } from './Character';

export class Duel {
  private fighter1: Character;
  private fighter2: Character;

  constructor(fighter1: Character, fighter2: Character) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
  }

  start(): void {
    console.log(`${this.fighter1.name}: attack = ${this.fighter1.attackPower}, defense = ${this.fighter1.defensePower}`);
    console.log(`${this.fighter2.name}: attack = ${this.fighter2.attackPower}, defense = ${this.fighter2.defensePower}`);
    console.log('');

    // alegem aleator cine ataca primul
    let attacker = Math.random() < 0.5 ? this.fighter1 : this.fighter2;
    let defender = attacker === this.fighter1 ? this.fighter2 : this.fighter1;

    let round = 1;

    while (this.fighter1.isAlive() && this.fighter2.isAlive()) {
      console.log(`Round ${round}:`);
      console.log(`${attacker.name} attacks`);
      console.log('No ability activated');

      defender.takeDamage(attacker.attackPower);
      console.log(`${defender.name} has ${defender.health} health`);
      console.log('');

      // schimbam rolurile pentru runda urmatoare
      [attacker, defender] = [defender, attacker];
      round++;
    }

    const winner = this.fighter1.isAlive() ? this.fighter1 : this.fighter2;
    console.log(`${winner.name} won!`);
  }
}