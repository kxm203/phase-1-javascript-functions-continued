// code your solution here
function saturdayFun(activity = "roller-skate") {
    //console.log(`"This Saturday, I want to ${activity}!"`);
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (work = "go to the office") {
    //console.log(`"This Monday I will ${work}."`);
    return `This Monday, I will ${work}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(symbol) {
    const part1 = "You are";
    return function (emphatic) {
        console.log(`${part1} ${symbol} ${emphatic} ${symbol}!`);
        return `${part1} ${symbol}${emphatic}${symbol}!`
    }
}
wrapAdjective("%")(" a dedicated programmer ");