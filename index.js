var Dalidashop = {
    "Lay's" : 400,
    "Cola" : 350,
    "Bubble" : 200,
    "Water" : 150,
    "Bed" : 100000,
    "Clothe" : 1,
    "Mysterious item" : 666
};
let balance = 1000;
let sum = 0;
let afford = new Array();
for(let i in Dalidashop){
    console.log(i + " cost " + Dalidashop[i] + "tg");
}
function check(x) {
    if(balance > x) {
        sum++;
        return 1;
    }
    else{
        return 0;
    }
}
for(let i in Dalidashop){
    if(check(Dalidashop[i]) == 1){
        afford.push(i);
    }
}
afford.sort();
for(let i = 0; i < sum; i++){
    console.log("You have enough money for " + afford[i]);
}
