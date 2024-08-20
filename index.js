// let y = 5;
// let x = 21;

// let p = x + y;

// console.log(p);


// let x = "Українізація москалів";
// let y = 7;
// let p = true;
// let q = false;
// let t = null;
// let i;
// console.log(i);
// typeof використовується для отримання типу змінної
// console.log(typeof i);
// alert можна виводити якийсь текст у маленьке вiконце з однією кнопкою ок
// alert(x)

// const username = "Kiril";
// console.log("username is", username)

// отримання данних
// const hotel = confirm("чи справдi ви хочете забронювати номер?")

// const hotelName = prompt('напишіть будьласка назву готелю')
// console.log(hotelName)


// Реєстрація користувача

// let x = "ми склали про вас таку думку: ви людина";
// let y = "якщо ні то нам всеодно і нікуди ви не напишете на цьому сайті :)"
// let danni = "ваші данні:";
// const userName = prompt('як вас звати?');

// console.log(userName);
// const realName = confirm(`чи справді вас звати ${userName}?`)
// const userAge = prompt('скільки вам років?☠️');
// const mail = prompt(`напишіть вашу пошту`);
// const tel = prompt('напишіть ваш номер телефону');
// const city = prompt('який ваш населений пункт?');
// const login = prompt('придумайте ваш логін');
// const password = prompt('придумайте ваш пароль');
// let messageFirst = `${danni}, ${userName}, ${userAge}, ${mail}, ${tel}, ${city}, ${login}, ${password}`;
// let message = `ваші данні: ${userNamelName}, ${userAge}, ${mail}, ${tel}, ${city}, ${login}, ${password}.`;
// alert(`${messageFirst}`);
// alert(`${x}, ${y}`);

// const delivery = 6;
// const backand = 9;
// let total = backand + delivery;
// total = delivery + backand + 1;
// console.log(total);

// математичні оператори

// const x = 10;
// const y = 5;
// console.log((x + y) * 2);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(y % x);
// let value = 5;
// value += 10;
// console.log(value);

// оператори порівняння

// const x = 5;
// const y = 10;
// const q = "5";
// console.log("x > y:", x > y);
// console.log("x < y:", x < y);
// console.log("x < q:", x < q);
// console.log("x <= q:", x <= q);
// console.log("x = q:", x == q);
// console.log("x !== q:", x !== q);

// const valueA = "5";
// console.log(valueA);
// console.log(Number(valueA));
// console.log(typeof Number(valueA));
// const valueB = "red";
// console.log(Number(valueB));

// console.log(Number.parseInt("5px"));
// console.log(Number.parseInt("5pxvcdkjbajsdvbjkvkjvjkfvkjdafnkjavkjvjkv39r90438903489038257893847"));
// console.log(Number.parseInt("pxvcdkjbajsdvbjkvkjvjkfvkjdafnkjavkjvjkvr"));


// console.log(Number.parseFloat("12.46kfmwkrbwren21654685"));

// const validNumber = Number("52");
// console.log(Number.isNaN(validNumber));
// const invalidNumber = Number("hjhjn");
// console.log(Number.isNaN(invalidNumber));


// console.log(0.1 + 0.3);

// певертає найбільше ціле число до 15 символа після коми (заокруглює до меншого)
// console.log(Math.floor(7.99999999999));

// повертає найменше ціле число (якщо число дробове то в консоль пише наступне ціле число)
// console.log(Math.ceil(1.0000000001));


//  заокруглює до найближчого цілого числа
// console.log(Math.round(1.5));


// виводить максимальне число з наведених чисел
// console.log(Math.max(1.26, 20 , 39, 104.09, 321645));


// виводить мінімальне число з наведених чисел
// console.log(Math.min(3, 5 ,59498498745, 1, 0.00001, 0.254258778));

// геометрична прогресія (зведення в ступінь) {2, 4, 8, 16 (показує четверте число)} 
// console.log(Math.pow(2, 4));// 16
// console.log(Math.random());

// let x = Math.random();
// let num = Number.parseInt(x);
// console.log(num)


// const min = 1;
// const max = 10;
// const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomInteger);




// const randomNumber = Math.random();
//  Генерує випадкове число між 0 і 1
// const roundedNumber = Math.round(randomNumber * 10);
//  Округлює до найближчого цілого числа
// console.log(roundedNumber);










// lesson 3


// const message = `i love ` + `my city ` + `Bucha`;
// console.log(message);
// let resoult;
// resoult = 5 + 10;
// console.log(resoult);
// let resoult2 = Number(`5`) + Number(`10`);
// console.log(resoult2);

const message = `burger`;
console.log(message.length);
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.indexOf(`r`));
console.log(message.indexOf(`o`));
console.log(message.includes(`e`));
console.log(message.startsWith(`r`));
console.log(message.endsWith(`r`));
console.log(message.padEnd(9, `!`));
console.log(message.padStart(9, `!`));
