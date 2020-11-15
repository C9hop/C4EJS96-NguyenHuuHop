// A.1:
console.log('Bai 1: ')
function finOppositeNumber(n, inputNumber){
    if(inputNumber>=(n/2)){
        console.log(((n/2)+inputNumber)-n);
    }
    else{
        console.log((n/2)+inputNumber);
    }
}
finOppositeNumber(10,2);
finOppositeNumber(10,6);
finOppositeNumber(10,4);
finOppositeNumber(10,5);

// A.2:
console.log('Bai 2: ')
function merge2String(string1, string2) {
    let String = ``;
    let totalLength = 0;
    if (string1.length > string2.length) {
        totalLength = string1.length;
    } else {
        totalLength = string2.length;
    }
    for (let i = 0; i < totalLength; i++) {
        let x = string1[i];
        let y = string2[i];
        if (string1[i] == undefined) {
            x = ``;
        } 
        else if (string2[i] == undefined) {
            y = ``;
        }
        String += x + y;
    }
    return String;
}
console.log(merge2String(`abc`, `123`));
console.log(merge2String(`abc`, `0123`));
console.log(merge2String(`abcd`, `123`));
