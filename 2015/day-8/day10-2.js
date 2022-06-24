let str = "3113322113";

for (let i = 0; i < 50; i++) {
    str = splitarr(str);
}

console.log(str.length);



function splitarr(str) {
    let temparr = str.split("");
    let tempArr2 = [];
    let cnt = 1;


    for (let i = 0; i < temparr.length; i++) {
        if (temparr[i] == temparr[i + 1]) {
            cnt++;

        } else {
            tempArr2.push(cnt);
            tempArr2.push(temparr[i]);
            cnt = 1;
        }

    }

    return tempArr2.join("");

}
