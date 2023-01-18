function getScore(scoreSheet) {
    let bestScore=0;
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
        bestScore=Math.max(bestScore,currScore);
        totalScore += currScore;
    }
    console.log(bestScore);
    return totalScore;
}
function getBestScore(games){
    let bestScore=-1;
    games.forEach((game)=>{
        bestScore=Math.max(bestScore,getScore(game));
    })
    return bestScore;
}
console.log(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]))
module.exports = {
    getScore: getScore,
    getBestScore:getBestScore
}