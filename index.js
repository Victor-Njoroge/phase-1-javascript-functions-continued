// code your solution here
function saturdayFun( activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("play-Fifa")

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork('Attend a meeting');



function wrapAdjective(adjective1="*"){
    return function(adjective2="special"){
        return `You are ${adjective1 +adjective2+adjective1}!`
    }
}
const encouragingPromptFuntion = wrapAdjective();
console.log(encouragingPromptFuntion("a dedicated programmer"));