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
            width: 52,
            height: 52,
            speed: 4
        },
        keys: {}, 
        config: {
        }
    };
    return state;
}