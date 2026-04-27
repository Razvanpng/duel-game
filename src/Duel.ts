import { Character } from './Character';

export class Duel {
  private fighter1: Character;
  private fighter2: Character;
  private isDynamic: boolean;

  constructor(fighter1: Character, fighter2: Character, isDynamic: boolean = false) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.isDynamic = isDynamic;
  }

  public start(silent: boolean = false): Character {
    if (!silent) {
      console.log(`${this.fighter1.name}: attack = ${this.fighter1.attackPower}, defense = ${this.fighter1.defensePower}`);
      console.log(`${this.fighter2.name}: attack = ${this.fighter2.attackPower}, defense = ${this.fighter2.defensePower}`);
      console.log('');
    }

    let attacker = Math.random() < 0.5 ? this.fighter1 : this.fighter2;
    let defender = attacker === this.fighter1 ? this.fighter2 : this.fighter1;

    let round = 1;

    while (this.fighter1.isAlive() && this.fighter2.isAlive()) {
      if (this.isDynamic) {
        this.fighter1.assignAbility();
        this.fighter2.assignAbility();
      }

      const { power, activated: attackActivated } = attacker.getEffectiveAttack();
      const { activated: defenseActivated, damageDealt } = defender.takeDamage(power);
      const vampiricActivated = attacker.applyAttackLanded(damageDealt);

      if (!silent) {
        console.log(`Round ${round}:`);
        console.log(`${attacker.name} attacks`);

        if (attackActivated || vampiricActivated) {
          console.log(`${attacker.name} activates ${attacker.ability.name}`);
        }
        if (defenseActivated) {
          console.log(`${defender.name} activates ${defender.ability.name}`);
        }
        if (!attackActivated && !defenseActivated && !vampiricActivated) {
          console.log('No ability activated');
        }

        console.log(`${defender.name} has ${defender.health} health`);
        console.log('');
      }

      [attacker, defender] = [defender, attacker];
      round++;
    }

    const winner = this.fighter1.isAlive() ? this.fighter1 : this.fighter2;
    if (!silent) {
      console.log(`${winner.name} won!`);
    }

    return winner;
  }
}