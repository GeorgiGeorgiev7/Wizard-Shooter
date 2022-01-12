function stateFactory() {
    let state = {
        gameOver: false,
        wizardStats: {
            x: 170,
            y: 170,
            width:  82,
            height: 100,
            speed: 4
        },
        bugStats: {
            nextBugCreation: 0,
            maxCreationInterval: 2000,
            width: 52,
            height: 52,
            speed: 3
        },
        keys: {}, 
        config: {
        }
    };
    return state;
}