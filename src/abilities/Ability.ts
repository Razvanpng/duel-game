export interface IAbility {
  name: string;
  modifyAttack(power: number): { power: number; activated: boolean };
  modifyDefense(damage: number): { damage: number; activated: boolean };
  onPostDamage(health: number): { health: number; activated: boolean };
  // apelat pe atacator dupa ce damage-ul a fost confirmat
  onAttackLanded(attackerHealth: number, damageDealt: number): { health: number; activated: boolean };
}