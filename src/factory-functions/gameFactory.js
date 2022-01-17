import { state } from './stateFactory.js';

export function gameFactory() {
    let { wizardStats, bugStats, fireballStats } = state;

    // screens
    const startScreen = document.querySelector('.start-screen');
    const playScreen = document.querySelector('.play-screen');
    const scoreScreen = document.querySelector('.score-screen');
    const endScreen = document.querySelector('.end-screen');

    let factory = {
        startScreen,
        playScreen,
        scoreScreen,
        endScreen,
        createWizard: function () {
            let wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');

            wizardElement.style.width = wizardStats.width + 'px';
            wizardElement.style.height = wizardStats.height + 'px';

            wizardElement.style.top = wizardStats.y + 'px';
            wizardElement.style.left = wizardStats.x + 'px';

            playScreen.appendChild(wizardElement);
            return wizardElement;
        },
        spawnBug: function () {
            let bugElement = document.createElement('div');
            bugElement.classList.add('bug');

            bugElement.style.width = bugStats.width + 'px';
            bugElement.style.height = bugStats.height + 'px';

            bugElement.style.left = playScreen.offsetWidth - bugStats.width + 'px';
            bugElement.style.top = Math.floor(Math.random() * (playScreen.offsetHeight - bugStats.height)) + 'px';

            playScreen.appendChild(bugElement);
        },
        throwFireball: function () {
            let fireballElement = document.createElement('div');
            fireballElement.classList.add('fireball');

            fireballElement.style.width = fireballStats.width + 'px';
            fireballElement.style.height = fireballStats.height + 'px';

            fireballElement.style.left = wizardStats.x + wizardStats.width + 'px';
            fireballElement.style.top = wizardStats.y + wizardStats.width / 2.5 + 'px';

            playScreen.appendChild(fireballElement);
        }
    };

    return factory;
}
