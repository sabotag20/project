"use strict";

//alert('Hello');

const result = confirm("Are you here?");
console.log(result);

//const answer = prompt("Вам есть 18?", "18");
//console.log(answer);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

//document.write(answers); или консоль лог

console.log(typeof(answers));

const category = 'toys';

//console.log('https://someurl.com/' + category +'/' + '4') если через + писать будет добавлять значение,выходит https://someurl.com/toys. 
console.log(`https://someurl.com/${category}/5`); //для ИНТЕРПОЛЯЦИИ брать в такие кавычки ` и после ссылки ставть знак доллара и фигурные скобки в них переменная,затем через слеш


const user ="Ivan";

alert(`Привет, ${user}`);

let incr = 10,
    decr = 10;


    //префиксные
    //++incr;
   // --decr;

    //постфиксные
    //incr++;
    //decr--;

    console.log(incr);
    console.log(decr);

    console.log(5%2);