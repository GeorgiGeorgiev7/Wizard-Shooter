function gameFactory() {
    let getState = stateFactory();
    let { wizard } = getState();

    const startScreen = document.querySelector('.start-screen');
    const playScreen = document.querySelector('.play-screen');
    const wizardElement = createWizard(wizard.x, wizard.y, wizard.height, wizard.width);

    playScreen.appendChild(wizardElement);

    let factory = {
        startScreen,
        playScreen,
        wizardElement
    };
    
    return factory;
}

function createWizard(posX, posY, height, width) {
    let wizardElement = document.createElement('div');
    wizardElement.classList.add('wizard');
    wizardElement.style.top = posY + 'px';
    wizardElement.style.left = posX + 'px';
    wizardElement.style.height = height + 'px';
    wizardElement.style.width = width + 'px';

    return wizardElement;
}