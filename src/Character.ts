import { IAbility } from './abilities/Ability';
import { DamageReduction } from './abilities/DamageReduction';
import { PowerStrike } from './abilities/PowerStrike';
import { SecondWind } from './abilities/SecondWind';
import { VampiricStrike } from './abilities/VampiricStrike';

// lista tuturor abilitatilor disponibile
const ALL_ABILITIES: IAbility[] = [
  new DamageReduction(),
  new PowerStrike(),
  new SecondWind(),
  new VampiricStrike(),
];

export class Character {
  public readonly name: string;
  public health: number;
  public readonly attackPower: number;
  public readonly defensePower: number;
  public ability: IAbility;

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

  public assignAbility(): IAbility {
    this.ability = ALL_ABILITIES[Math.floor(Math.random() * ALL_ABILITIES.length)] as IAbility;
    return this.ability;
  }

  public resetHealth(): void {
    this.health = 100;
  }

  public getEffectiveAttack(): { power: number; activated: boolean } {
    return this.ability.modifyAttack(this.attackPower);
  }

  public takeDamage(incomingAttack: number): { activated: boolean; damageDealt: number } {
    const { damage, activated: defenseActivated } = this.ability.modifyDefense(incomingAttack);

    const damageTaken = Math.max(0, damage - this.defensePower);
    this.health = Math.max(0, this.health - damageTaken);

    const { health: newHealth, activated: postActivated } = this.ability.onPostDamage(this.health);
    this.health = newHealth;

    return {
      activated: defenseActivated || postActivated,
      damageDealt: damageTaken,
    };
  }

  // aplica efectul post-atac al atacatorului
  public applyAttackLanded(damageDealt: number): boolean {
    const { health: newHealth, activated } = this.ability.onAttackLanded(this.health, damageDealt);
    this.health = newHealth;
    return activated;
  }

  public isAlive(): boolean {
    return this.health > 0;
  }
}