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

  