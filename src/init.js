function gameFactory() {
    let factory = {};

    const startScreen = document.querySelector('.start-screen');
    const playScreen = document.querySelector('.play-screen');
    const wizardElement = createWizard(100, 200);

    playScreen.appendChild(wizardElement);

    Object.defineProperties(factory, {
        startScreen: {
            get: () => startScreen
        },
        playScreen: {
            get: () => playScreen
        },
        wizardElement
    });
    return factory;
}

function createWizard(posX, posY) {
    let wizardElement = document.createElement('div');
    wizardElement.classList.add('wizard');
    wizardElement.style.top = posY + 'px';
    wizardElement.style.left = posX + 'px';

    return wizardElement;
}