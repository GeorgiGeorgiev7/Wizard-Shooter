import { state } from './factory-functions/stateFactory.js';
import { game } from './app.js';
import { modifyWizardPos } from './wizard-movement.js';
import { checkForCollision } from './collision-checker.js';
import { wizardElement } from './app.js';


export function gameLoop(timestamp) {
    modifyWizardPos(state, game);
    let { bugStats, fireballStats } = state;

    // Throw fireball
    if (state.keys.Space) {
        wizardElement.style.backgroundImage = 'url("/src/images/wizard-fire.png")';

        // Spawn fireball
        if (fireballStats.nextFireballCreation < timestamp) {
            game.throwFireball();
            fireballStats.nextFireballCreation = timestamp + fireballStats.creationInterval;
        }

    } else {
        wizardElement.style.backgroundImage =
            'url("../images/wizard.png")';
    }

    // Move fireballs
    for (let fireball of document.querySelectorAll('.fireball')) {
        let currentPos = parseInt(fireball.style.left);
        if (currentPos >= game.playScreen.offsetWidth - fireballStats.width - fireballStats.speed) {
            fireball.remove();
        } else {
            fireball.style.left = currentPos + fireballStats.speed + 'px';
        }
    };

    // Spawn bug
    if (bugStats.nextBugCreation < timestamp) {
        game.spawnBug();
        bugStats.nextBugCreation = timestamp + Math.floor(Math.random() * bugStats.maxCreationInterval);
    }

    // Move bugs
    for (let bug of document.querySelectorAll('.bug')) {
        let currentPos = parseInt(bug.style.left);
        if (currentPos <= -bugStats.width - 200) {
            bug.remove();
        } else {
            bug.style.left = currentPos - bugStats.speed + 'px';
        }

        // check collision                
        if (checkForCollision(bug, wizardElement) == true) {
            state.gameOver = true;
            break;
        };

        document.querySelectorAll('.fireball').forEach(fireball => {
            if (checkForCollision(bug, fireball) == true) {
                state.score += state.pointsPerShot;
                bug.remove();
            };
        });
    };

    // Increase bugs speed
    if (bugStats.speed <= bugStats.maxSpeed) {
        bugStats.speed += 0.002;
    }
    if (bugStats.maxCreationInterval >= bugStats.minCreationInterval) {
        bugStats.maxCreationInterval -= 1;
    }

    // Check for Game Over
    if (state.gameOver) {
        game.playScreen.classList.add('hidden');
        game.endScreen.classList.remove('hidden');
    } else {
        state.score += 7;
        game.scoreScreen.textContent = 'Score ' + state.score + ' pts.';
        window.requestAnimationFrame(gameLoop);
    }
}