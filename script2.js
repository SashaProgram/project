"use strict";

alert('Hello')

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

const answers = [];

answers[0] = prompt('Как ваше имя?','');
answers[1] = prompt('Как ваша фамилия?','');
answers[2] = prompt('Сколько вам лет?','');

console.log(typeof(answers));
console.log(typeof(null));


const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";

alert(`Привет, ${user}`);
console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2*4 === 8);

&&

console.log(2+2*2 !== '6');
const isChecked = false,
      isClose = false;
console.log(isChecked || !isClose);