import { IAbility } from './Ability';

export class DamageReduction implements IAbility {
  name = 'Damage Reduction';

  public modifyAttack(power: number) {
    return { power, activated: false };
  }

  public modifyDefense(damage: number) {
    if (Math.random() < 0.25) {
      return { damage: Math.floor(damage / 2), activated: true };
    }
    return { damage, activated: false };
  }

  public onPostDamage(health: number) {
    return { health, activated: false };
  }

  public onAttackLanded(attackerHealth: number, _damageDealt: number) {
    return { health: attackerHealth, activated: false };
  }
}