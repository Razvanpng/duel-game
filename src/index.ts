import { Character } from './Character';
import { Duel } from './Duel';

const isDynamic = process.argv.includes('--dynamic');
const isSimulate = process.argv.includes('--simulate');

const player1 = new Character('Character 1');
const player2 = new Character('Character 2');
const duel = new Duel(player1, player2, isDynamic);

if (isSimulate) {
  const SIMULATION_COUNT = 1000;

  console.log('=== Simulation Configuration ===\n');
  console.log(`${player1.name}: attack = ${player1.attackPower}, defense = ${player1.defensePower}, ability = ${player1.ability}`);
  console.log(`${player2.name}: attack = ${player2.attackPower}, defense = ${player2.defensePower}, ability = ${player2.ability}`);
  console.log('');

  let player1Wins = 0;
  let player2Wins = 0;

  for (let i = 0; i < SIMULATION_COUNT; i++) {
    player1.resetHealth();
    player2.resetHealth();

    const winner = duel.start(true);

    if (winner === player1) {
      player1Wins++;
    } else {
      player2Wins++;
    }
  }

  const player1Rate = ((player1Wins / SIMULATION_COUNT) * 100).toFixed(1);
  const player2Rate = ((player2Wins / SIMULATION_COUNT) * 100).toFixed(1);

  console.log(`=== Results after ${SIMULATION_COUNT} simulations ===\n`);
  console.log(`${player1.name} won ${player1Wins} times (${player1Rate}%)`);
  console.log(`${player2.name} won ${player2Wins} times (${player2Rate}%)`);
} else {
  duel.start();
}