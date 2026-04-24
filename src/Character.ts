export type Ability = 'Damage Reduction' | 'Power Strike' | 'Second Wind';

export class Character {
  public readonly name: string;
  public health: number;
  public readonly attackPower: number;
  public readonly defensePower: number;
  public readonly ability: Ability;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.attackPower = this.randomBetween(15, 20);
    this.defensePower = this.randomBetween(10, 15);
    this.ability = this.assignAbility();
  }

  private randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private assignAbility(): Ability {
    const abilities: Ability[] = ['Damage Reduction', 'Power Strike', 'Second Wind'];
    return abilities[Math.floor(Math.random() * abilities.length)] as Ability;
  }

  // returneaza puterea de atac finala si daca s-a activat power strike
  public getEffectiveAttack(): { power: number; activated: boolean } {
    if (this.ability === 'Power Strike' && Math.random() < 0.25) {
      return { power: Math.floor(this.attackPower * 1.5), activated: true };
    }
    return { power: this.attackPower, activated: false };
  }

  // aplica damage-ul si returneaza daca s-a activat o abilitate de aparare
  public takeDamage(incomingAttack: number): boolean {
    let activated = false;

    if (this.ability === 'Damage Reduction' && Math.random() < 0.25) {
      incomingAttack = Math.floor(incomingAttack / 2);
      activated = true;
    }

    const damageTaken = Math.max(0, incomingAttack - this.defensePower);
    this.health = Math.max(0, this.health - damageTaken);

    // second wind se verifica dupa ce damage-ul a fost aplicat
    if (this.ability === 'Second Wind' && this.health < 30 && Math.random() < 0.25) {
      this.health += 5;
      activated = true;
    }

    return activated;
  }

  public isAlive(): boolean {
    return this.health > 0;
  }
}