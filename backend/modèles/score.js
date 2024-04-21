const db = require('../utiles/databases');

module.exports = class Score {
    constructor(levelId, userId, scoreBTime) {
        this.levelId = levelId;
        this.userId = userId;
        this.scoreBTime = scoreBTime;
    }


    static save(score) {
        return db.execute(
            'INSERT INTO scoreboard (levelId, userId, scoreBTime) VALUES (?, ?, ?)',
            [score.levelId, score.userId, score.scoreBTime]
        );
    }
}