function getScore(scoreSheet) {
    if(!Array.isArray(scoreSheet)){
        throw new TypeError();
    }
    let totalScore = 0;
    let frameCount = 1;
    for (let i = 0; i < scoreSheet.length && frameCount <= 10; frameCount++) {
        let currScore = 0;
        if (scoreSheet[i] == 10) {
            //this is strike
            currScore = 10;
            if (i + 1 < scoreSheet.length) {
                currScore += scoreSheet[i + 1];
            }
            if (i + 2 < scoreSheet.length) {
                currScore += scoreSheet[i + 2];
            }
            i++;
        }
        else if (i + 1 < scoreSheet.length && scoreSheet[i] + scoreSheet[i + 1] == 10) {
            //this is spare
            currScore = 10;
            if (i + 2 < scoreSheet.length) {
                currScore += scoreSheet[i + 2];
            }
            i += 2;
        }
        else {
            currScore = scoreSheet[i] + scoreSheet[i + 1];
            i += 2;
        }
        totalScore += currScore;
    }
    return totalScore;
}
console.log(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]))
module.exports = {
    getScore: getScore
}