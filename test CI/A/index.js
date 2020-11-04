// A.1:
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
function merge2String(String1, String2) {
    let  string = String1.concat(String2);
    let stringg = string.substr(0,3,1,4,2,5,6);
    console.log(stringg);
}
merge2String('abc', '1234');



