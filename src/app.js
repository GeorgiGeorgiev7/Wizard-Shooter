import { gameLoop } from "./loop";
import { onKeyDown, onKeyUp } from './keys-actions';


export let game = gameFactory();
export let wizardElement = game.createWizard();
export let wizardStats = state.wizardStats;

game.startScreen.addEventListener('click', startGame);
console.log(game.startScreen);

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

function startGame() {
    game.startScreen.classList.add('hidden');
    game.playScreen.classList.remove('hidden');
    window.requestAnimationFrame(gameLoop);
}