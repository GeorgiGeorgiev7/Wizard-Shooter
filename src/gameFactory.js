function gameFactory() {
    let getState = stateFactory();

    let { wizard } = getState();

    const startScreen = document.querySelector('.start-screen');
    const playScreen = document.querySelector('.play-screen');
    const wizardElement = createWizard(wizard.x, wizard.y);

    playScreen.appendChild(wizardElement);

    let factory = {
        startScreen,
        playScreen,
        wizardElement
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