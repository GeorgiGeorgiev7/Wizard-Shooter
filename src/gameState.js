function stateFactory() {
    let state = {
        gameOver: false,
        wizard: {
            x: 100,
            y: 200,
            width:  82,
            height: 100,
            speed: 10
        },
        keys: {}, 
        config: {

        }
    };
    return function () {
        return state;
    };
}