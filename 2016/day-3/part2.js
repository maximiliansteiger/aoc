const {
    input
} = require('./readData');

let arr = input.split("\r\n");

let cnt = 0;
arr = arr.map(element => {

    let elements = element.split("  ").map(Number);
    elements.shift();
    return elements.filter(elem => elem != "").map(Number)

});

console.log(arr);

for (let i = 0; i < arr.length-1;) {

    let first = is_possible([arr[i][0],arr[i+1][0],arr[i+2][0]])
    let second = is_possible([arr[i][1],arr[i+1][1],arr[i+2][1]])
    let third = is_possible([arr[i][2],arr[i+1][2],arr[i+2][2]])
    if(first == false || second == false || third == false){
        cnt++
    }
    i+=3
}


function is_possible(tri) {
    return (
        (tri[0] + tri[1] > tri[2]) &&
        (tri[1] + tri[2] > tri[0]) &&
        (tri[2] + tri[0] > tri[1])
    );
}



console.log(cnt);