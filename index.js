var Dalidashop = {
    "Lay's": 400,
    Cola: 350,
    Bubble: 200,
    Water: 150,
    Bed: 100000,
    Clothe: 1,
    "Mysterious item": 666
  };
  let balance = 666;
  let sum = 0;
  let afford = new Array();
  for (let i in Dalidashop) {
    console.log(i + " cost " + Dalidashop[i] + "tg");
  }
  let ok = 0;
  function check(x) {
      ok = 0;
    if (balance == x){
      sum++;
      ok = 2;
    }
    else if (balance > x) {
      sum++;
      ok = 1;
    } else {
      ok = 0;
    }
  }
  for (let i in Dalidashop) {
    check(Dalidashop[i])
    if (ok === 1) {
      afford.push(i);
    }
    if (ok == 2) {
        let res = i.toUpperCase();
      console.log("YOU SO LUCKY. YOU HAVE THE EXACT AMOUNT OF MONEY AS " + res);
    }
  }
  afford.sort();
  for (let i = 0; i < sum; i++) {
    console.log("You have enough money for " + afford[i]);
  }
  