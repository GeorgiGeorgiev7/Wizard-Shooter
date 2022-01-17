import { wizardElement, wizardStats } from "./app";


export function modifyWizardPos(state, game) {
    let { keys } = state;
    let { playScreen } = game;

    // Gravity
    if (wizardStats.y + wizardStats.gravity < playScreen.offsetHeight - wizardStats.height) {
        wizardStats.y += wizardStats.gravity;
    }

    // Action
    if (keys.KeyW && wizardStats.y > 0) {
        wizardStats.y -= wizardStats.speed;
    }
    if (keys.KeyS &&
        wizardStats.y + wizardStats.height < playScreen.offsetHeight - wizardStats.speed) {
        wizardStats.y += wizardStats.speed;
    }
    if (keys.KeyA && wizardStats.x > 0) {
        wizardStats.x -= wizardStats.speed;
    }
    if (keys.KeyD && wizardStats.x + wizardStats.width < playScreen.offsetWidth - wizardStats.speed) {
        wizardStats.x += wizardStats.speed;
    }

    // Render
    wizardElement.style.top = wizardStats.y + 'px';
    wizardElement.style.left = wizardStats.x + 'px';
}