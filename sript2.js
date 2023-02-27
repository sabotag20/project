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




const vehicleBodyWidth = 5000;
const vehicleBodyLength = 4000;

console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

//<!-- Типы данных-->//
let number = 4.6;
console.log(10 * 9);
 

const persone ="Alex";
 //можно также с цифрой в строке,но это уже не будет считать как число а будет текст//const persone ="1"; 

const bool = false;

console.log(something); 

let und;
console.log(und);

//объекты//

const obj = {
    name: "John"
    age: 25,
    isMarried: false
  };
  
  console.log(obj.name);//еще можно вместо точки как в примере (obj.name) сделать console.log(obj ["name"]);

  //запись списка картинок которые хранятся на сервере через массив
  let arr =['plum.png', 'orange.jpg', 6, 'apple.bmp1', {}]; // нумерация в программировании начинают с 0 не с единицы,если хочу получить 'orange.jpg' значит в консоле 1.
  console.log(arr[1]);

  //разницамассивов и обьектов
  const arr = [1, 2, 3]; //массив
    //const obj = {a: 1, b:2}; // обьект
  const obj = {
    'Anna': 500,
    'Alice': 800
  };

  //создаем обьект с переменной и к ней свойство b с значением 123,для обращения к свойству вставляем в скобки []
  const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
  }

  arrObj.b = '123'

  console.log(arrObj['b']);
  
  //пример придуманній чтобі увидеть какое по порядку в результате будет придуманное свойство arr[3] = '12573791';
  const arr = ['a', 'b', 'c'];

  arr[3] = '12573791';

  console.log(arr);

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

    //ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
//пример 1
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
} else {
    console.log('неверно ничего');
}

console.log((hamburger && fries));

console.log( 5 === 5 && 3 > 1 || 5); */

//логические операторы


//Циклы

let num =  50;

//пример 1
//while (num < 55) {
  //  console.log(num);
    //num++;
//}

//пример 2
//do {
//  console.log(num);
//    num++;  
//}
//while (num < 55);

// пример 3

//for (let i = 1; i < 8; i++) {
//    console.log(num);
//    num++;
//}

//пример 4
//for (let i = 1; i < 8; i++) {
// console.log(num);
// num++;
// }

for (let i = 1; i < 10; i++) {
if (i === 6) {
    break;
    continue;
 }    
 console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }

}

//задача на формирование фигуры
let result ='';
const length = 12;

for (let i =1; i < length; i++) {

    for (let j =0; j < i; j++) {
        result += "*";

    }

    result +='\n';
}

console.log(result);



//При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
     console.log(i);
        }


//При помощи цикла for выведите чётные числа от 2 до 10 включительно
for (let i = 2; i < 11; i++) {
    if (i%2 === 0) {
     console.log(i);
        }
}

//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

let i = 2;

while ( i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}


//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;


    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length;i++) {
        result [i] = arr[i];
    }
    
    console.log(result);
    
    return result;


    function secondTask() {
        const data = [5, 10, 'Shopping', 20, 'Homework'];
    
        for (let i = 0; i < data.length; i++) {
            if (typeof(data[i]) === 'number') {
                data[i] = data[i] * 2;
            } else if (typeof(data[i]) === 'string') {
                data[i] = `${data[i]} - done`;
            }
        }
    
        console.log(data);
        return data;

    }

    
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    return result;



    const lines = 5;
    let result = '';
    
    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
        }
        result += "\n";
    }
    
    console.log(result)