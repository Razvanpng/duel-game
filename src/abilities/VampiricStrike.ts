import { IAbility } from './Ability';

export class VampiricStrike implements IAbility {
  name = 'Vampiric Strike';

  public modifyAttack(power: number) {
    return { power, activated: false };
  }

  public modifyDefense(damage: number) {
    return { damage, activated: false };
  }

  public onPostDamage(health: number) {
    return { health, activated: false };
  }

  // vindeca atacatorul cu 50% din damage-ul efectiv aplicat
  public onAttackLanded(attackerHealth: number, damageDealt: number) {
    if (Math.random() < 0.25) {
      const heal = Math.floor(damageDealt * 0.5);
      return { health: Math.min(100, attackerHealth + heal), activated: true };
    }
    return { health: attackerHealth, activated: false };
  }
}