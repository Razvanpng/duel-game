import { IAbility } from './Ability';

export class PowerStrike implements IAbility {
  name = 'Power Strike';

  public modifyAttack(power: number) {
    if (Math.random() < 0.25) {
      return { power: Math.floor(power * 1.5), activated: true };
    }
    return { power, activated: false };
  }

  public modifyDefense(damage: number) {
    return { damage, activated: false };
  }

  public onPostDamage(health: number) {
    return { health, activated: false };
  }

  public onAttackLanded(attackerHealth: number, _damageDealt: number) {
    return { health: attackerHealth, activated: false };
  }
}