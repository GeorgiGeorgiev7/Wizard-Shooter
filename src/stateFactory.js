var state = {
    score: 0,
    gameOver: false,
    wizardStats: {
        x: 170,
        y: 170,
        width: 82,
        height: 100,
        speed: 4,
        gravity: 2
    },
    bugStats: {
        nextBugCreation: 0,
        minCreationInterval: 400,
        maxCreationInterval: 2000,
        width: 40,
        height: 40,
        speed: 2
    },
    fireballStats: {
        width: 30,
        height: 30
    },
    keys: {}
};