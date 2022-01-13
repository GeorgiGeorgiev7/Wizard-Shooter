var state = {
    score: 0,
    pointsPerShot: 5000,
    gameOver: false,
    wizardStats: {
        x: 170,
        y: 170,
        width: 82,
        height: 100,
        speed: 5,
        gravity: 2
    },
    bugStats: {
        width: 40,
        height: 40,
        speed: 3,
        maxSpeed: 7,
        nextBugCreation: 0,
        minCreationInterval: 400,
        maxCreationInterval: 2000
    },
    fireballStats: {
        width: 30,
        height: 30,
        speed: 7,
        nextFireballCreation: 0,
        creationInterval: 400
    },
    keys: {}
};