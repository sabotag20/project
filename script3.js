"use strict";

//Условия

//Пример 1
if (98 == 98) {
    console.log('Ok!');
} else {
    console.log('Error');
}

//Пример 2
const num = 50

if (num < 49) {
    console.log('Error');
} else if(num > 100) {
    console.log('много');
} else {
    console.log('Ok!');
}

//Пример 3(при помощи тернарного оператора)

(num === 50) ? console.log('Ok!') : console.log('Error');

// Пример 4 

const numb = 50

switch (numb) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;

}


//ФУНКЦИИ

//пример1
/* function showFirstMessage() {
    console.log("Hello world!");
}
showFirstMessage(); */


//пример2

 /* function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}
showFirstMessage("Hello world!"); */

//пример 3(выносим глобальную переменную let num и внутри функции можем изменить переменную на 10);
/*  let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10; 
} 

showFirstMessage("Hello world!");
console.log(num); */

//пример 4 

/* function calc(a, b) {
    return (a + b);  //после return ничего не задается внтури функции 
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6)); */


//пример 5
/* function ret() {
    let num = 50;


    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum); */

//пример 6 другая запись функции FUNCTION EXPRESION

/* const logger = function() {
console.log("Hello!");
};

logger();  */

//пример 7 другая запись функции "стрелочная функция"
/* const calc = (a, b) => {
console.log('1');
return a + b;
}; */ // если один аргумент,то пишут const calc = a => a + b;

//Пример 8(из доп урока аргумент)
const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);


 //задача домашнее по функциям
function sayHello(name) {
    return 'Привет, ${name}!'
   }
   sayHello('Body');


   //задача домашнее по функциям
   function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);



//методы и свойства

const str = "test";

console.log(str.length); //в данном примере свойство после точки .length

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world"

console.log(logg.slice(6, 10));

console.log(logg.substr(6, 10));//сколько символов удалить

const num = 12.2;

console.log(Math.round(num)); //округляем число до 12

const test = "12.2px";

console.log(parseInt(test));//преобразов в число 12
console.log(parseInt(test));//преобразов в дробное значение
