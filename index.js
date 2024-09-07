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

// const message = `               burger`;
// console.log(message.length);
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.indexOf(`r`));
// console.log(message.indexOf(`o`));
// console.log(message.includes(`e`));
// console.log(message.startsWith(`b`));
// console.log(message.endsWith(`r`));
// console.log(message.padEnd(9, `!`));
// console.log(message.padStart(9, `!`));
// console.log(message.trim());


// const car = `porschep`;
// console.log(car.endsWith(`e`));
// console.log(car.startsWith(`e`));
// console.log(car.padEnd(9, p));






// lesson 4

// const num = 20;
// const result = num > 10 || num < 10;
// console.log(!true);

// let password = prompt(`enter your password`);
// password.toLowerCase();
// if (password.includes(`q`))
// {
//     console.log(`q=${password.indexOf(`q`)}`);
// }

// else {
//     console.log(`no q`);
    
// }

// if (password.includes(`r`))
// {
//     console.log(`r=${password.indexOf(`r`)}`);
// }
    
// else {
//     console.log(`no r`);
        
// }

// if (password.includes(`w`))
//     {
//         console.log(`w=${password.indexOf(`w`)}`);
//     }
        
//     else {
//         console.log(`no w`);
            
//     }

// if (password.includes(`e`))
//     {
//         console.log(`e=${password.indexOf(`e`)}`);
//     }
        
//     else {
//         console.log(`no e`);
            
//     }

// if (password.includes(`t`))
//     {
//         console.log(`t=${password.indexOf(`t`)}`);
//     }
        
//     else {
//         console.log(`no t`);
            
//     }

// if (password.includes(`y`))
//     {
//         console.log(`y=${password.indexOf(`y`)}`);
//     }
        
//     else {
//         console.log(`no y`);
            
//     }

// if (password.includes(`u`))
//     {
//         console.log(`u=${password.indexOf(`u`)}`);
//     }
        
//     else {
//         console.log(`no u`);
            
//     }

// if (password.includes(`i`))
//     {
//         console.log(`i=${password.indexOf(`i`)}`);
//     }
        
//     else {
//         console.log(`no i`);
            
//     }

// if (password.includes(`o`))
//     {
//         console.log(`o=${password.indexOf(`o`)}`);
//     }
        
//     else {
//         console.log(`no o`);
            
//     }

// if (password.includes(`p`))
//     {
//         console.log(`p=${password.indexOf(`p`)}`);
//     }
        
//     else {
//         console.log(`no p`);
            
//     }

// if (password.includes(`a`))
//     {
//         console.log(`a=${password.indexOf(`a`)}`);
//     }
        
//     else {
//         console.log(`no a`);
            
//     }

// if (password.includes(`s`))
//     {
//         console.log(`s=${password.indexOf(`s`)}`);
//     }
        
//     else {
//         console.log(`no s`);
            
//     }

// if (password.includes(`d`))
//     {
//         console.log(`d=${password.indexOf(`d`)}`);
//     }
        
//     else {
//         console.log(`no d`);
            
//     }

// if (password.includes(`f`))
//     {
//         console.log(`f=${password.indexOf(`f`)}`);
//     }
        
//     else {
//         console.log(`no f`);
            
//     }

// if (password.includes(`g`))
//     {
//         console.log(`g=${password.indexOf(`g`)}`);
//     }
            
//     else {
//         console.log(`no g`);
                
//     }

// if (password.includes(`h`))
//     {
//         console.log(`h=${password.indexOf(`h`)}`);
//     }
            
//     else {
//         console.log(`no h`);
                
//     }

// if (password.includes(`j`))
//     {
//         console.log(`j=${password.indexOf(`j`)}`);
//     }
            
//     else {
//         console.log(`no j`);
                
//     }

// if (password.includes(`k`))
//     {
//         console.log(`k=${password.indexOf(`k`)}`);
//     }
            
//     else {
//         console.log(`no k`);
                
//     }

// if (password.includes(`l`))
//     {
//         console.log(`l=${password.indexOf(`l`)}`);
//     }
            
//     else {
//         console.log(`no l`);
                
//     }

// if (password.includes(`z`))
//     {
//         console.log(`z=${password.indexOf(`z`)}`);
//     }
            
//     else {
//         console.log(`no z`);
                
//     }

// if (password.includes(`x`))
//     {
//         console.log(`x=${password.indexOf(`x`)}`);
//     }
            
//     else {
//         console.log(`no x`);
                
//     }

// if (password.includes(`c`))
//     {
//         console.log(`c=${password.indexOf(`c`)}`);
//     }
            
//     else {
//         console.log(`no c`);
                
//     }

// if (password.includes(`v`))
//     {
//         console.log(`v=${password.indexOf(`v`)}`);
//     }
            
//     else {
//         console.log(`no v`);
                
//     }

// if (password.includes(`b`))
//     {
//         console.log(`b=${password.indexOf(`b`)}`);
//     }
            
//     else {
//         console.log(`no b`);
                
//     }

// if (password.includes(`n`))
//     {
//         console.log(`n=${password.indexOf(`n`)}`);
//     }
            
//     else {
//         console.log(`no n`);
                
//     }

// if (password.includes(`m`))
//     {
//         console.log(`m=${password.indexOf(`m`)}`);
//     }
            
//     else {
//         console.log(`no m`);
                
//     }
// console.log(cost);

// const x = 10;
// if (x!==10) {
//     console.log(`number more than 10 or less 30`);
    
// }

// else {
//     console.log(`number less 10 or more 30`);
    
// }

// const age = prompt(`enter your age 🧐`);
// let type = age>=18 ? alert(`adult😇`) : alert('child💩');

// if (prompt(`Яка “офіційна” назва JavaScript`) === `ECMAScript`) {
//     alert(`correct`)
// }
// else {
//     alert(`Ви не знаєте? ECMAScript!`)
// }

// let a = 1;
// let b = 3;
// let result = (a + b < 4) ? `Нижчe` : `Вище`;
// console.log(result);

// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

// if (isDnd && isFriend && isOnline) {
    
// }

// let x = prompt(`enter your number`)
// if (x>=1) {;
//     alert(1)

// }
// else if (x===0) {
//     alert(0)
// }

// else {
//     alert(-1)
// }

// let type

// if (age >= 18) {
//   type = 'adult';
//   alert(`you can enter to the site 😇`)
  
// } else {
//   type = 'child';
//   alert(`u cant enter to the site, goodbay 💩`)
// }

// lesson 5


// let cost;
// const subscription = prompt(`enter the day of the week`);
// switch (subscription) {
//     case 'monday':
//       cost = `work day, go work!`;
//       break;
//   case 'tuesday':
//     cost = `work day, go work!`;
//     break;
//   case 'wednesday':
//     cost = `work day, go work!`;
//     break;
//     case 'thursday':
//     cost = `work day, go work!`;
//     break;
//     case 'friday':
//     cost = `work day, go work!`;
//     break;
//     case 'saturday':
//     cost = `chill`;
//     break;
//     case 'sunday':
//     cost = `chill`;
//     break;
//   default:
//     console.log('holidays, chill)');
// }
// console.log(cost); // 500


// let random = Math.round(Math.random() * 100);
// let x;
// switch (random) {
//     case (random >= 55 && random <= 99):
//         x ="Число потрапляє в діапазон";
        
//         break;

//     default:
//         x = `Число ${random} не потрапляє в діапазон`;
// }
// console.log(x);

// let day = prompt(`enter the day of week`);
// let x;
// switch (day) {
//     case day = `monday`:
//     x = `go work`;
//     break;

//     case day = `tuesday`:
//     x = `go work`;
//     break;

//     case day = `wensday`:
//     x = `go work`;
//     break;

//     case day = `thursday`:
//     x = `go work`;
//     break;

//     case day = `friday`:
//     x = `go work`;
//     break;

//     case day = `saturday`:
//     x = `chill`;
//     break;

//     case day = `sunday`:
//     x = `chill`;
//     break;
// }

// console.log(x);





// let day = parseInt(prompt("Введіть номер дня тижня (1-7):")); // Отримуємо номер дня від користувача
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Понеділок";
//     console.log("Вибрано день:", dayName);
//     break;
//   case 2:
//     dayName = "Вівторок";
//     console.log("Вибрано день:", dayName);
//     break;
//   case 3:
//     dayName = "Середа";
//     console.log("Вибрано день:", dayName);
//     break;
//   case 4:
//     dayName = "Четвер";
//     console.log("Вибрано день:", dayName);
//     break;
//   case 5:
//     dayName = "П'ятниця";
//     console.log("Вибрано день:", dayName);
//     break;
//   case 6:
//     dayName = "Субота";
//     console.log("Вибрано день:", dayName);
//     break;
//   case 7:
//     dayName = "Неділя";
//     console.log("Вибрано день:", dayName);
//     break;
//   default:
//     dayName = "Невірний номер дня";
//     console.log(dayName);
// }

// console.log("Назва дня:", dayName);




// let day = prompt(`enter the day of the week`)
// let x;

// if (day === `monday`) {
//     x = `go work`;
// } else if (day === `tuesday`) {
//     x = `go work`;
// } else if (day === `wednesday`) {
//     x = `go work`;
// } else if (day === `thursday`) {
//     x = `go work`;
// } else if (day === `friday`) {
//     x = `go work`;
// } else if (day === `saturday`) {
//     x = `chill`;
// } else if (day === `sunday`) {
//     x = `chill`;
// } else {
//     x = `you entered day of the day incorrect`
// }

// console.log(x);

// let x = Math.round(Math.random() * 100);
// let b;

// if (x >= 55 && x <= 99) {
//     b = `число входить`;
    
// } else {
//     b = `число не входить`;
// }
// console.log(b);
// console.log(x);

// let x = Math.round(Math.random() * 100);
// let b;
// // console.log(b);

// switch (x) {
//     case x >= 55 && x <= 99:
//         b = `число входить`;
//         break;
    
//     case x < 55 || x > 99:
//         b = `число не входить`;
//         break;
// }
// console.log(b);

// console.log(x);



// const value = 5;
// if (true) {
//   console.log('Block scope: ', value);
// }
// console.log('Global scope: ', value); 

// if (true) {
//     const value = 5;
//     console.log('Block scope: ', value); // 5 
//   }
//   console.log('Global scope: ', value); // ``   


// const global = 'global';


// if (true) {
//   const blockA = 'block A';


//   Бачимо глобальну + локальну A
//   console.log(global); 
//   'global'
//   console.log(blockA); 
  //   block A
  
  
  /*
  * Змінні blockB і blockC не знайдені в доступних областях видимості.
  * Буде помилка звернення до змінної.
  */
 //  console.log(blockC); 
 //  console.log(blockB);
  
  
//   if (true) {
    
    //   const blockB = 'block B';
    // Бачимо глобальну + внутрішню A + локальну B
    // console.log(global); 
    // global
    // console.log(blockA);
     // block A
    // console.log(blockB); 
    // block B
    /*
     * Змінна blockC не знайдена в доступних областях видимості.
     * Буде помилка звернення до змінної.
     */
    // console.log(blockC); 
    // ReferenceError: blockC is not defined
// }
// }
// if (true) {
//   const blockC = 'block C';
  // Бачимо глобальну + локальну C
//   console.log(global); // global
//   console.log(blockC); // block C
  /*
   * Змінні blockA і blockB не знайдені в доступних областях видимості.
   * Буде помилка звернення до змінної.
   */
//   console.log(blockA); 
  // ReferenceError: blockA is not defined
//   console.log(blockB); 
  // ReferenceError: blockB is not defined
// }
// Бачимо тільки глобальну
// console.log(global); // global
/*
 * Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
 * Буде помилка звернення до змінної.
 */
// console.log(blockA);
 // ReferenceError: blockA is not defined
// console.log(blockB);
 // ReferenceError: blockB is not defined
// console.log(blockC); 
// ReferenceError: blockC is not defined

// const b = 10;


// if (true) {
//     const a = 5;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);


// if (true) {
//   const b = 10;


//   console.log(a);
//   console.log(b);
// }


// console.log(b);