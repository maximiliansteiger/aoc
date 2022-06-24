const {
    input
} = require('./readData');

// Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
// Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.

let comet = {
    name: 'Comet',
    speed: 14,
    duration: 10,
    rest: 127,
    distance: 0
};

let dancer = {
    name: 'Dancer',
    speed: 16,
    duration: 11,
    rest: 162,
    distance: 0
};

function getDistanceAfterSeconds(obj, seconds,tempSeconds) {

    if(seconds <= 0){
        return obj.distance
    }

    if(tempSeconds == obj.duration){
        seconds -= obj.duration;
        tempSeconds = 0;
    }else{
        obj.distance += obj.speed
        seconds--;
    }
    tempSeconds++

    console.log(obj.distance);
    getDistanceAfterSeconds(obj, seconds,tempSeconds);

}

let erg = getDistanceAfterSeconds(comet, 1000,0);
console.log(erg);