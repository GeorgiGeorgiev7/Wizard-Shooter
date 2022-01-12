function gameFactory() {
    let { wizardStats, bugStats } = stateFactory();

    const startScreen = document.querySelector('.start-screen');
    const playScreen = document.querySelector('.play-screen');
    const wizardElement = createWizard(wizardStats.x, wizardStats.y);

    playScreen.appendChild(wizardElement);

    let factory = {
        startScreen,
        playScreen,
        wizardElement,
        spawnBug: function () {
            let bugElement = document.createElement('div');
            bugElement.classList.add('bug');

            bugElement.style.width = bugStats.width + 'px';
            bugElement.style.height = bugStats.height + 'px';

            bugElement.style.left = playScreen.offsetWidth - bugStats.width  + 'px';
            bugElement.style.top = Math.floor(Math.random() * (playScreen.offsetHeight - bugStats.height)) + 'px';

            playScreen.appendChild(bugElement);
        }
    };

    return factory;
}

function createWizard(posX, posY) {
    let wizardElement = document.createElement('div');
    wizardElement.classList.add('wizard');

    wizardElement.style.top = posY + 'px';
    wizardElement.style.left = posX + 'px';

    return wizardElement;
}
