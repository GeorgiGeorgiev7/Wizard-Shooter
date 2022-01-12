function gameFactory() {
    let factory = {};

    const startScreen = document.querySelector('.start-screen');
    const playScreen = document.querySelector('.play-screen');

    Object.defineProperties(factory, {
        startScreen: {
            get: () => startScreen
        },
        playScreen: {
            get: () => playScreen
        },
    })
    return factory;
}
