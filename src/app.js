import { gameFactory } from './factory-functions/gameFactory.js';
import { gameLoop } from './loop.js';
import { onKeyDown, onKeyUp } from './keys-actions.js';
import { state } from './factory-functions/stateFactory.js';

export let game = gameFactory();
export let wizardElement = game.createWizard();
export let wizardStats = state.wizardStats;

game.startScreen.addEventListener('click', startGame);

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

function startGame() {
    game.startScreen.classList.add('hidden');
    game.playScreen.classList.remove('hidden');
    window.requestAnimationFrame(gameLoop);
}