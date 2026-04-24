import { Character } from './Character';
import { Duel } from './Duel';

// verificam daca flagul --dynamic este prezent in terminal
const isDynamic = process.argv.includes('--dynamic');

const player1 = new Character('Character 1');
const player2 = new Character('Character 2');

const match = new Duel(player1, player2, isDynamic);
match.start();