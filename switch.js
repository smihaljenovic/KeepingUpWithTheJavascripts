let timeString = {
    singular: ["second", "minute", "hour", "day"],
    plural: ["seconds", "minutes", "hours", "days"]
};
let timeConversion = {
    second: {
      second:   1,
      minute:   0.016666666666667,
      hour:   0.000277777777778,
      day:   0.000011574074074
    },
    minute: {
        second: 60,
        minute: 1,
        hour: 0.016666666666667,
        day: 0.000694444444444
    },
    hour: {
        second: 3600,
        minute: 60,
        hour: 1,
        day: 0.041666666666667
    },
    day: {
        second: 86400,
        minute: 1440,
        hour: 24,
        day: 1
    }
};

function checkLabel(label) {
    let response;
    switch (label) {
        case "second":
        case "seconds":
        case "minute":
        case "minutes":
        case "hour":
        case "hours":
        case "day":
        case "days":
            response = true;
            break;
        default:
            response = false;
            break;
    }
    return response;
}

function checkValue(value) {
    let response;
    switch (true) {
        case !isNaN(value) && value > 0:
            response = true;
            break;
        default:
            response = false;
            break;
    }
    return response;
}


function timeAdder(value1, label1, value2, label2) {
    // validate value inputs
    if (!checkValue(value1) || !checkLabel(label1) || !checkValue(value2) || !checkLabel(label2)) return false;
    if ((!timeString.singular.includes(label1) && !timeString.plural.includes(label1)) || (!timeString.singular.includes(label2) && !timeString.plural.includes(label2))) return false;
    if ((value1 > 1 && timeString.singular.includes(label1)) || (value2 > 1 && timeString.singular.includes(label2))) return false;
    if ((value1 === 1 && timeString.plural.includes(label1)) || (value2 === 1 && timeString.plural.includes(label2))) return false;

    let timeString1 = label1.endsWith('s') ? label1.substring(0, label1.length - 1) : label1;
    let timeString2 = label2.endsWith('s') ? label2.substring(0, label2.length - 1) : label2;

    let calculate = (value1 * timeConversion[timeString1].minute) + (value2 * timeConversion[timeString2].minute);


    return [parseFloat(calculate.toFixed(2)), 'minutes'];
}

let test = timeAdder(1, "minute", 3, "seconds");
console.log(test);
