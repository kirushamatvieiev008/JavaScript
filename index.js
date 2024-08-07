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

let x = "ми склали про вас таку думку: ви людина";
let y = "якщо ні то нам всеодно і нікуди ви не напишете на цьому сайті :)"
let danni = "ваші данні:";
const userName = prompt('як вас звати?');

console.log(userName);
// const realName = confirm(`чи справді вас звати ${userName}?`)
const userAge = prompt('скільки вам років?☠️');
const mail = prompt(`напишіть вашу пошту`);
const tel = prompt('напишіть ваш номер телефону');
const city = prompt('який ваш населений пункт?');
const login = prompt('придумайте ваш логін');
const password = prompt('придумайте ваш пароль');
let messageFirst = `${danni}, ${userName}, ${userAge}, ${mail}, ${tel}, ${city}, ${login}, ${password}`;
// let message = `ваші данні: ${userNamelName}, ${userAge}, ${mail}, ${tel}, ${city}, ${login}, ${password}.`;
alert(`${messageFirst}`);
// alert(`${x}, ${y}`);