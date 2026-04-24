import { Character } from './Character';

const player1 = new Character('Character 1');
const player2 = new Character('Character 2');

console.log('--- test initializare ---');
console.log(`${player1.name}: attack = ${player1.attackPower}, defense = ${player1.defensePower}`);
console.log(`${player2.name}: attack = ${player2.attackPower}, defense = ${player2.defensePower}`);