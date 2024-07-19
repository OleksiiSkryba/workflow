// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// https://api.sampleapis.com/futurama/characters

// 1
// let number = 3275;

// let string = number.toString();
// let newString = '';

// for (let i = 0; i < string.length; i++) {
// let step = string.length - i -1;
// let element = string[i];
// for (let z = 0; z < step; z++) {
//   element+='0';
// }
// step?element += (' + '):element;
// newString += element;
// }
// console.log(newString);

// // 2

// let arr = [1,2,3,4,5,2,4,1,3];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
// let count = 0;
//   for (let b = 0; b < arr.length; b++) {
//     const elem = arr[b];
//  element==elem?count+=1:false;
//   }
//   count%2?console.log(element):false;
// }

// 3

// let word = 'ANAGRAM';
// let word1 = 'MGANRAA';
// let wordArr = [];
// let wordArr1 = [];
// for (const i of word) {
//   wordArr.push(i);
// }
// for (const i of word1) {
//   wordArr1.push(i);
// }
// let sorted = wordArr.sort();
// let sorted1 = wordArr1.sort();

// let string = sorted.reduce((a, b)=>a+b);
// let string1 = sorted1.reduce((a, b)=>a+b);
// string==string1?console.log('true'):console.log('false');

// 4

// let num = 2048;
// while (num%2==0&&num>=1) {
//  num= num/2
// }
//  console.log(num);
// num==1?console.log('Четное'):console.log('Нечетное');

// 5
// let word ='deified';

// let halb = Math.floor(word.length/2);
// console.log(halb);
// let slised = word.slice(0, halb);
// let reversed =  word.split('').reverse().join('');
// let slised1 = reversed.slice(0,halb);
// slised==slised1?console.log('true'):console.log('folse');

// 6
// let num=217649194758610011;
// let l = 0;
// str = num.toString();
// console.log(str);
// for (let i = 0; i < str.length; i++) {
//   let old ;const element = str[i];
//   if(  old == '0' && element=='0'){
// break
// }else
// element==1?l=l+1:false;
// old=element; }
//  console.log(l);

//  7

// let arr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'],[1, 3, 'Hello', 'Wordd', 9, 6, 1, 'oops', 9]];
// let newArr = [];
// for(let i of arr) {
//   if (typeof(i)!=="this") {
//     newArr.push(i)
//   } else {

// for(let i of arr) {
//   if (typeof(i)!=="this") {
//     newArr.push(i)
//   } else {

// for(let i of arr) {
//   if (typeof(i)!=="this") {
//     newArr.push(i)
//   }
// }
//   }
// }
//   }
// }

// console.log(newArr);

// 8

// let arr = [1,6,9,0,17,88,4,7];
// let big = arr.reduce((a,b)=> {b>a?a=b:false; return a}, 0);
// console.log(big);

// 9

// 0.1

// function Client (id, name, surname , email, phone){
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }

// let Clients = [];
//  let vasia = new Client(0,'Vasia','Pupkin','qwe@asd','12345678');
//  let petia = new Client(01,'Petia','Sidorov','tyu@hjk',8876554);
//  let lesia = new Client(02, 'Lesia', 'Pupkina', 'zxc@mnb',98474689);
//  let lioha = new Client(03, 'Liosha', 'skryba','poi@ytr',6543328);
//  let dasha = new Client(04, 'Dashenka', 'Kazakova','jhgf@dfgjh', '558930030568');
//  let goga = new Client(05, 'Goga','Shvili', 'xmv@dlg', 6078-74);
//  let petia1 = new Client(06,'Petia','Sidorov','tyu@hjk',8876554);
//  let lesia1 = new Client(07, 'Lesia', 'Pupkina', 'zxc@mnb',98474689);
//  let lioha1 = new Client(08, 'Liosha', 'skryba','poi@ytr',6543328);
//  let dasha1 = new Client(09, 'Dashenka', 'Kazakova','jhgf@dfgjh', '558930030568');
//  let goga1 = new Client(10, 'Goga','Shvili', 'xmv@dlg', 6078-74);
// Clients.push(vasia, petia, lesia, lioha, dasha, goga, petia1,lesia1,lioha1, dasha1, goga1);

// // 02
// let dubl = Clients.filter((Client)=>Client.id%2==0);
// console.log(dubl);

// // 03
// let idArr = Clients.sort((a, b)=>b.id-a.id);
// console.log(idArr);
// 4
// class Client{
// constructor( id, name, surname , email, phone, order=[] ){
//   this.id = id
//   this.name = name
//   this.surname = surname
//   this.email = email
//   this.phone = phone
//   this.order = order
// }
// }
// let clients = [];

//  let petia = new Client(1,'Petia','Sidorov','tyu@hjk',8876554, ['bred']);
//  let lesia = new Client(2, 'Lesia', 'Pupkina', 'zxc@mnb',98474689, ['bred', 'milk']);
//  let lioha = new Client(3, 'Liosha', 'skryba','poi@ytr',6543328, ['bred', 'milk', 'buter']);
//  let dasha = new Client(4, 'Dashenka', 'Kazakova','jhgf@dfgjh', '558930030568', ['bred', 'milk', 'buter', 'bumer']);
//  let goga = new Client(5, 'Goga','Shvili', 'xmv@dlg', 6078-74, ['bred', 'milk', 'buter', 'silk', 'butter']);
//  let petia1 = new Client(6,'Petia','Sidorov','tyu@hjk',8876554, ['bred', 'milk', 'buter','bred', 'milk', 'buter']);
//  let lesia1 = new Client(7, 'Lesia', 'Pupkina', 'zxc@mnb',98474689, ['bred', 'milk', 'buter','bred', 'milk', 'buter','bred']);
//  let lioha1 = new Client(8, 'Liosha', 'skryba','poi@ytr',6543328, ['bred', 'milk', 'buter','bred', 'milk', 'buter','bred', 'milk']);
//  let dasha1 = new Client(9, 'Dashenka', 'Kazakova','jhgf@dfgjh', '558930030568', ['bred', 'milk', 'buter','bred', 'milk', 'buter','bred', 'milk', 'buter']);
//  let goga1 = new Client(10, 'Goga','Shvili', 'xmv@dlg', 6078-74, ['bred', 'milk', 'buter','bred', 'milk', 'buter','bred', 'milk', 'buter','bred', 'milk', 'buter']);
// clients.push(petia, lesia, lioha, dasha, goga, petia1,lesia1,lioha1, dasha1, goga1);

// console.log(clients);
// let sorted = clients.sort((a,b)=>b.order.length - a.order.length);
// console.log(sorted);
// // 5
// class Car {
//   constructor(model, dev, year, speed, cub){
//     this.model=model;
//     this.dev=dev;
//     this.year=year;
//     this.speed=speed;
//     this.cub=cub;
//     this.driver={};
//   }
//    drive () {
//     console.log( `їдемо зі швидкістю ${this.speed} на годину`);
//    }
//    info (){
//     for (const key in this) {
//       if (this.hasOwnProperty.call(this, key)) {
//         const element = this[key];
//         console.log(`${key}  -  ${element}`);
//       }
//     }
//    }
//    increaseMaxSpeed (newSpeed =10) {
//     this.speed = this.speed+newSpeed;
//    }
//    changeYear (newValue) {
//     this.year = newValue;
//    }
//    addDriver (driver) {
//     this.driver=driver;
//    }
// }
// let carlik = new Car('zhuk','volcwagen',2024,120,50);
// carlik.addDriver(lioha);
// carlik.info();
// carlik.drive();
// carlik.increaseMaxSpeed(20)
// carlik.drive();
// carlik.changeYear(2025);
// console.log(carlik);
// 6
// let money = 150;

// function goWork(isJobDone) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isJobDone) {
//         money += 100;
//         console.log("Gud job!");
//         resolve(money);
//       } else {
//         reject("no way");
//       }
//     }, 2000);
//   });
// }

// function bayStuf(moneyForNothing) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (moneyForNothing > 200) {
//         moneyForNothing -= 200;
//         console.log("I bay stuf");
//         resolve(moneyForNothing);
//       } else {
//         reject("No money - no honey!");
//       }
//     }, 1500);
//   });
// }

// function goEat(moneyForEat) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (moneyForEat > 150) {
//         moneyForEat -= 150;
//         console.log("Nom-nom-nom");
//         resolve(moneyForEat);
//       } else {
//         reject("i am hungry!");
//       }
//     }, 500);
//   });
// }

// goWork(false)
//   .then((value) => {
//     console.log(value);
//     return bayStuf(money);
//   })
//   .then((moneyForNothing) => {
//     console.log(moneyForNothing);
//     return goEat(moneyForNothing);
//   })
//   .then((moneyForEat) => {
//     console.log(moneyForEat);
//   })
//   .catch((reason) => {
//     console.log("*********************");
//     console.log(reason);
//     console.log("*********************");
//   });

let smart = 0;
let time = 180;

function scrum(isTrue) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 5) {
        time -= 5;
        smart += 1;
        console.log(`smart value is ${smart}`);
        resolve(time);
      } else {
        reject("scrum error");
      }
    }, 500);
  });
}

function eng(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 20) {
        time -= 20;
        smart += 10;
        console.log(`smart value is ${smart}`);
        resolve(time);
      } else {
        reject("eng error");
      }
    }, 2000);
  });
}

function html(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 10) {
        time -= 10;
        smart += 5;
        console.log(`smart value is ${smart}`);
        resolve(time);
      } else {
        reject("html error");
      }
    }, 1000);
  });
}

function js(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 15) {
        time -= 15;
        smart += 10;
        console.log(`smart value is ${smart}`);
        resolve(time);
      } else {
        reject("js error");
      }
    }, 1500);
  });
}

function react(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 25) {
        time -= 25;
        smart += 15;
        console.log(`smart value is ${smart}`);
        resolve(time);
      } else {
        reject("react error");
      }
    }, 1500);
  });
}

function node(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 25) {
        time -= 25;
        smart += 15;
        console.log(`smart value is ${smart}`);
        resolve(time);
      } else {
        reject("node error");
      }
    }, 1000);
  });
}

// scrum(true)
//   .then((time) => {
//     console.log(`осталось ${time} !`);
//     return eng(time);
//   })
//   .then((time1) => {
//     console.log(`осталось ${time1} !`);
//     return html(time1);
//   })
//   .then((time2) => {
//     console.log(`осталось ${time2} !`);
//     return js(time2);
//   })
//   .then((time3) => {
//     console.log(`осталось ${time3} !`);
//     return react(time3);
//   })
//   .then((time4) => {
//     console.log(`осталось ${time4} !`);
//     return node(time4);
//   })
//   .then((time5) => {
//     console.log(`осталось ${time5} !`);
//   })
//   .catch((reason) => {
//     console.log(`**************************`);
//     console.log(reason);
//     console.log(`***************************`);
//   }).finally(()=>{
//     console.log(`Finaly skils - ${smart}%. Go work after ${time}. `);
//   })
  async function lern() {
    try {
          let scrum1 = await scrum(true);
    console.log(`осталось ${scrum1} !`);
    let eng1 = await eng(scrum1);
    console.log(`осталось ${eng1} !`);
    let html1 = await html(eng1);
    console.log(`осталось ${html1} !`);
    let js1 = await js(html1);
    console.log(`осталось ${js1} !`);
    let react1 = await react(js1);
    console.log(`осталось ${react1} !`);
    let node1 = await node(react1);
 console.log(`Finaly skils - ${smart}%. Go work after ${node1} day. `);
    } catch (error) {
      console.log(error);
    }
  }
  lern();
  
                        