import { IAbility } from './Ability';

export class SecondWind implements IAbility {
  name = 'Second Wind';

  public modifyAttack(power: number) {
    return { power, activated: false };
  }

  public modifyDefense(damage: number) {
    return { damage, activated: false };
  }

  public onPostDamage(health: number) {
    if (health < 30 && Math.random() < 0.25) {
      return { health: health + 5, activated: true };
    }
    return { health, activated: false };
  }

  public onAttackLanded(attackerHealth: number, _damageDealt: number) {
    return { health: attackerHealth, activated: false };
  }
}