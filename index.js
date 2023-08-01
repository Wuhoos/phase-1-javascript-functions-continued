function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style = '*'){
    return function(adj = 'special'){
        return `You are ${style}${adj}${style}!`
    }
}