process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var time = readLine();

    // split into [ hour, minute, second]
    var timeArray = time.split(':');

    // store elements into variables
    var hour = timeArray.splice(0, 1);
    var minute = timeArray.splice(0, 1);
    var second = timeArray.splice(0, 1);

    // add 12 hours to hour if 1:00:00PM - 11:59:59PM
    if (second[0].includes('PM') && hour != 12) {
        hour = parseInt(hour);
        hour += 12;
    }

    // add 12 hours to hour if 1:00:00PM - 11:59:59PM
    if (second[0].includes('PM') && hour != 12) {
        hour = parseInt(hour);
        hour += 12;
    }

    // subtract 12 hours to hour if 12:00:00AM - 12:59:59AM
    if (second[0].includes('AM') && hour == 12) {
        hour = parseInt(hour);
        hour -= 12;
    }

    if (hour == 24) {
        hour = 0;
    }

    // remove the 'AM' or 'PM' from second
    second[0] = second[0].substr(0, second[0].length-2);

    if(hour >= 0 && hour < 12) {
        hour = '0' + hour;
    }

    console.log(hour + ':' + minute + ':' + second[0]);
}
