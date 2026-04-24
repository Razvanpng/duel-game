export class Character {
  public readonly name: string;
  public health: number;
  public readonly attackPower: number;
  public readonly defensePower: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.attackPower = this.randomBetween(15, 20);
    this.defensePower = this.randomBetween(10, 15);
  }

  private randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public takeDamage(incomingAttack: number): void {
    // prevenim damage-ul sau viata negativa folosind Math.max
    const damageTaken = Math.max(0, incomingAttack - this.defensePower);
    this.health = Math.max(0, this.health - damageTaken);
  }

  public isAlive(): boolean {
    return this.health > 0;
  }
}