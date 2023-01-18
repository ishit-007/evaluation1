function getScore(frames){
    let totalScore=0;
    let state=0;
    // state=0      normal scoring
    // state=1      spare scoring
    // state=2      strike scoring
    for(let i=0;i<frames.length;){
        console.log(frames[i]+" ");
        if(state===0){
            let thisFrameScore=0;
            if(frames[i]==10){
                //this is strike
                thisFrameScore=10;
                if(i+1<frames.length){
                    thisFrameScore+=frames[i+1];
                }
                if(i+2<frames.length){
                    thisFrameScore+=frames[i+2];
                }
                i++;
            }
            else if(i+1<frames.length && frames[i]+frames[i+1]==10){
                //this is spare
                thisFrameScore=10;
                if(i+2<frames.length){
                    thisFrameScore+=frames[i+2];
                }
                i+=2;
            }
            else{
                thisFrameScore=frames[i]+frames[i+1];
                i+=2;
            }
            totalScore+=thisFrameScore;
        }
        else if(state==1){

        }
        else{

        }
    }
    return totalScore;
}

module.exports={
    getScore:getScore
}