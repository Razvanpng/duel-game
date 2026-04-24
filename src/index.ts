import { Character } from './Character';
import { Duel } from './Duel';

const hero = new Character('Hero');
const villain = new Character('Villain');

const duel = new Duel(hero, villain);
duel.start();