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

// let clientCounter = 18;
// const maxClients = 25;


// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// if (clientCounter === maxClients) {
//   confirm(`too much`)
// } 



// Генеруємо випадкове число від 1 до 10
// const secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess;
// let attempts = 0;
// const maxAttempts = 3;

// Цикл while, що працює, поки користувач не вгадає або не закінчаться спроби
// while (guess !== secretNumber && attempts < maxAttempts) {
//   guess = parseInt(prompt("Вгадайте число від 1 до 10: "));
  
//     if (guess === secretNumber) {
//         console.log("Вітаємо! Ви вгадали число.");
//     } else {
//         console.log("Неправильно, спробуйте ще раз.");
//         attempts++;
//     }
// }

// Перевірка, чи закінчилися спроби
// if (attempts === maxAttempts && guess !== secretNumber) {
//     console.log(`Ви не вгадали число. Правильна відповідь: ${secretNumber}`);
// }


// let tri = 3;
// let usedTry = 0;
// let guess;
// let randNum = Math.floor(Math.random() * 10);


// while (usedTry <= tri && guess != randNum)

// let password;
// do {
//   password = prompt(`enter ur email`);
// } while (!password.includes(`@`));
// console.log(`u wrote this password`);

// const max = 10;
// for (let i = 0; i <= max; i += 1) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//   sum += i;
  //  1 + 2 + 3
// }
// console.log(sum);

// for (let i = 0; i < 10; i += 1) {
//   if (i === 5) {
//     console.log(i);
//       break;
//   }
// }

// const number = 10;
// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
// }


// let message= `welcome, to Kyiv`;

// console.log(message.split(','));


// let megapolises = [`New York`, `Tokyo`, `Laswegas`, `Bucha`, `Odessa`, `Lviv`, `Kyiv`, `Pekin`];

// console.log(megapolises.join(`, `));
// let nums = [5, 4, 8, 19, 54, 30, 2];
// let r = Math.floor(Math.random() * 10);

// for (i = 0; i < 100; i += 1) {
//   let q = Math.floor(Math.random() * 10)
//   if (q > 7) {
//     for (i = 0; i < 100; i += 1) {
//       let z = Math.floor(Math.random() * 10);
//       if (z > 7) {
//         continue
//       }

//       if (z < 2) {
//         continue
//       }

      // if (z > 2 && z < 7) {
      //   let c = q - z;
      //   console.log(r - c);
      //   // console.log(15);
        
        
      //   break
      // }

      // console.log(c);
      
      // console.log(z);
//     }
//     break
        
//   }

//   if (r < 7) {
//     break
    
//   }
  
//   console.log(r);
  
// }

// console.log(r);


// if (r > 7) {
//   r - Math.floor(Math.random() * 10);
//   console.log(r);
  
// }

// for (i = 0; i < 2; i += 1) {
//   r - Math.floor(Math.random() * 10);
//   console.log(r);
  
// }

// for (i = 0; )
// console.log(nums[r]);

// let random = Math.floor(Math.random() * nums.length + 1);
// let randomNum = nums[random]
// console.log(randomNum);


// for (i = 0; i <= 9; i += 1) {
//   if (nums.includes(random)) {
//     console.log(nums.indexOf(random) + 1);
     
//   }
// }


// const redFruits = ['chili', `tomato`, 'cherry', 'apple'];
// const fruit = `apple`;

// if (redFruits.includes(fruit)) {
//   redFruits.pop()
  
//   console.log(redFruits);
// }
  
//   else {
//     // console.log(`we dont have this fruit in our base of data`);
    
//   }

//   console.log(redFruits);
  
// console.log(`sfwrb wrbwrbt`);


// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// // Поверне новий масив в якому будуть елементи з індексами від 1 до 2
// console.log(clients.slice(0, 3));

// Припустимо, у нас є масив оцінок, який містить п'ять чисел від 1 до 5.
// const scores = [1, 2, 3, 4, 5];


// // Наступна операція видаляє три елементи масиву,
// // починаючи з першого елемента (індекс 0).
// const deletedScores = scores.splice(0, 3);


// // Тепер масив scores містить два елементи.
// console.log(scores); // [4, 5]


// Припустимо, що у вас є масив з назвами квітів у вигляді рядків.
// const colors = ['red', 'green', 'blue'];

// // Наступна операція поміщає один новий елемент перед другим елементом.
// colors.splice(3, 0, 'purple');

// // Тепер масив квітів містить чотири елементи з новим елементом, вставленим в другу позицію.
// console.log(colors); // ["red", "green", "purple", "blue"]


// // a, b, c це параметри
// const add = function(a, b, d) {
//   return a + b * d;
// }; 

// // 1, 2, 3 це аргументи
// const result = add(1, 2, 90);

// console.log(add(1));
// const onCard = 2000;
// const howMuch = +prompt(`how much money do you want to take`);

// const withdraw = function(howMuch, onCard) {
//   /*
//    * Перевіряється умова. Якщо воно виконується, відбувається
//    * console.log і вихід з функції. Код йде після тіла if
//    * не виконається.
//    */
//   if (howMuch === 0) {
//     console.log('Для проведення операції введіть суму більше нуля.');
//     let x = 6;
    
//     return;
    
//   } 
//   /*
//    * Якщо умова першого if не виконалася, його тіло пропускається
//    * і інтерпретатор доходить до цього if.  Перевіряється умова. Якщо воно         виконується, відбувається  console.log і вихід з функції. Код йде після тіла if
//    * не виконається.
//    */
//   if (howMuch > onCard) {
//     console.log('Недостатньо коштів на рахунку.');
//     return;
//   } 
//   /*
//    * Якщо жоден з попередніх if не виконався, інтерпретатор доходить до цього коду і виконує його.
//    */
//   console.log('Операція зняття коштів проведена.');
// }; 

// withdraw(howMuch, onCard); // Операція зняття коштів проведена.
// console.log(x);


// const fnA = function() {
//     console.log('Почала виконуватися [fnA]');
//     fnB();
//     console.log('Продовжила виконуватися [fnA] після виходу з [fnB]');
//   }; 
//   const fnB = function() {
//     console.log('Виконується [fnB]');
//   }; 
//   console.log('Почав виконання [main]');
//   fnA();
//   console.log('Продовжив виконуватися [main] після виходу з [fnA]'); 

// const numbers = function(a, b, c = 5) {
//   return a * b * c;
// }

// console.log(numbers(1, 3));

// const sum = function() {
//   let total = 0; 
//   for (const argument of arguments) {
//     total += argument;
//   } 
//   return total;
// }; 
// console.log(sum(1, 2, 3));

// const fn = function() {
//   const args = Array.from(arguments);
// };

// function findMaxNumber(array) {
//   let max = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//       }
//       return max;
  
// }


// let array = [1, 3, 2, 5, 45];
// let max = findMaxNumber(array);
// console.log(max); // 5

// const withdraw1 = function(amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведення операції введіть суму більше нуля.');
//   } else if (amount > balance) {
//     console.log('Недостатньо коштів на рахунку.');
//   } else {
//     console.log('Операція зняття коштів проведена.');
//   }
// }; 
// withdraw1(0, 300);



// const withdraw = function(amount, balance) {

//   if (amount === 0) {
//     console.log('Для проведення операції введіть суму більше нуля.');
//     return;
//   } 
  
//   if (amount > balance) {
//     console.log('Недостатньо коштів на рахунку.');
//     return;
//   } 

//   console.log('Операція зняття коштів проведена.');
// }; 

// withdraw(0, 300);

// const griting = function(name) {
//   console.log(`hello, ${name}`);
  
// }

// griting('Kiril');

// const add = function(a, b, c) {
//   return a + b + c;
// }


// const add = (a, b, c) => a + b + c;
// console.log(add(1, 2, 3));

// const add = (...args) => {
//   console.log(args);
  
// };
// add(1, 2, 5);

// const bar = function () {
//   console.log('bar');
// };

// const baz = function () {
//   console.log('baz');
// };

// const foo = function () {
//   bar();
//   baz();
//   console.log('foo');
// };

// foo();

// const myNewArrow = (...add) => {
//   console.log(add);
  
// }

// myNewArrow(1, 3, 4, 5, 8);

// const hello = () => {
//   console.log(`hello_JS`);
// return;

// }

// // console.log(hello[]);
// hello()



// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };



// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   greetIn() {
//     console.log('Welcome!');
//   },
// };

// hotel.greetIn();

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName();
// hotel.changeCapacity(200);
// console.log(hotel.capacity);

// const restourant = {
//   tables: 15,
//   menu: [`carbonara`, `pesto`, `Margaritta`, `cesar`, `cakes`, `napoleon`],
//   work: `from 9 to 23`,
//   freeTables: true,
//   allTables(value) {
//     this.tables = value;
//   },

//   canTakeTablet() {
//     this.freeTables = false;
//   }
// }

// restourant.allTables(20);
// console.log(restourant.tables);
// restourant.canTakeTablet();
// console.log(restourant.freeTables);



// const airport = {
//   name: `zhulyany`,
//   planes: 26,
//   teamates: 270,
//   flight: 20,
//   visitours: 500,
//   inUkraine: true,
//   newTeamates(value) {
//     this.teamates = value;

//   }
// }

// airport.newTeamates(200);
// console.log(airport.teamates);

// const airport_2 = {
//   name: `Brovary`,
//   planes: 23,
//   teamates: 180,
//   flight: 17,
//   visitours: 700,
//   inUkraine: true,
//   newTeamates(value) {
//     this.teamates = value;

//   }
// }

// const person = {
//   name: `westSide`,
//   tracks: 30,
//   albom: 13,
//   concerts: 20,
//   repers: 10,
//   // newTracks(value) {
//   //   this.tracks = value;
//   // }

// }

// for (const words in person) {
//   console.log(words);
  
// }

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); 
// const values = Object.values(hotel);
// const entries = Object.entries(hotel);

// console.log(entries);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];


// console.log(housesInDebt);

// const a = { x: 1, : 2 };
// const b = { x: 0, z: 3 };


// const c = Object.assign({}, a, b);
// console.log(c);


// const d = { ...a, ...b };
// console.log(d);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.entries(hotel);
// console.log(keys);


// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

// const first = [1, 2, 4, 3, 6, 7];
// const second = [5, 8, 9, 0];

// let third = [...first, ...second];

// console.log(third);


// const products = [
//   {
//     nameProducts: `apple`,
//     price: 50,
//     category: `fruits`,
//     stock: 5,
//   },
//   {
//     nameProducts: `grape`,
//     price: 70,
//     category: `fruits`,
//     stock: 10,
//   },
//   {
//     nameProducts: `potato`,
//     price: 40,
//     category: `vegetables`,
//     stock: 15,
//   },
//   {
//     nameProducts: `candles`,
//     price: 110,
//     category: `decorations`,
//     stock: 15,
//   },
//   {
//     nameProducts: `bakery`,
//     price: 60,
//     category: `bakery`,
//     stock: 3,
//   }
// ];

// // const q = prompt(`napushit categoriyu (bakery, decorations, vegetables, fruits)`);

// function getvalue(products, category) {
//   let total = 0;
//   for (const product of Object.values(products)) {
//     if (product.category === category && product.stock > 0) {
//       total += product.price * product.stock;
      
//     }
//   }
//   return  total
// }


// // console.log(getvalue(products, ));

// const q = prompt(`qwerty`); 
// const totalValue = getvalue(products, q);
// console.log(`Загальна вартість товарів у категорії "${q}": ${totalValue}`);


// const hotel = {
//   nameHotel: `Ukraine`,
//   stars: 5,
//   location: `бульвар Лесі Українки`,

// }

// const yet = {
//   nameYet: `colorful`,
//   place: `citchen`,
//   howMany: 12,

// // }

// let massuv = [
//   5, 2, 7, 10
// ];

// let massuvEnouther = [
//   1, 3, 4, 6, 8, 9
// ];


// let allTogether = [
//   ...massuv, ...massuvEnouther
// ];

// console.log(allTogether);


// const keys = Object.entries(hotel);

// for (const key in hotel) {
//   console.log(keys);
  
// }

// let x;

// const first = {
//   name: `jnkjbkj`,
//   place: `kbjbjbj`,
//   starsFirst: 4,
//   qofivnqkjeefvb: `kjbkjvjhv`,

// }

// function getObjectLength(obj) {
//   return Object.keys(obj).length;

// }

// console.log(getObjectLength(first));



// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Оголосимо змінні і дамо їм значення з об'єкта
// const { name, stars, capacity } = hotel;

// console.log(name, stars, capacity);


// const cafee = {
//   name: `Котокава`,
//   waiter: `Oleksiy`,
//   animals: `Pixel, Mike, Marcus`,
//   tables: 4,
//   inUkraine: true,
//   menu: [`late`, `capuchino`, `shefkava`, `americanno`],
//   lateConsists: {
//     ingridient1: `milk`,
//     ingridient2: `cacao`,
//   }
// }

// const {name, menu: [item1, item2, item3, item4], lateConsists: {ingridient1, ingridient2: x}} = cafee;
// // waiter = `Sasha`;

// console.log(x);
// console.log(cafee.wisitors);


// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // деструктуризація разбита на декілька рядків для розуміння
// const {
//   size: { // покладемо size сюди
//     width,
//     height
//   },
//   items: [item1, item2], // додамо елементи до items
//   title = "Menu" // відсутня в об'єкті (використовується значення за замовчуванням)
// } = options;

// console.log(title);

// const rgb = [200, 255, 100];


// const [red, green, blue] = rgb;


// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// let num1 = Math.round(Math.random() * 10);
// // console.log(num1);



// if (num1 > 7) {
//   for ()
// // }

// let string = function (name_w, surname_w, age_w) {
//   console.log(`Мене звати ${name_w} ${surname_w} і мені ${age_w} років`);
//   return 
  
// }



// const person = {
//   name: 'Nelli',
//   surname: 'Laroy',
//   age: 25,
// };

// const {name, surname, age} = person;
// string(name, surname, age);

let x;

const totalClothes = function(nameClothe, priceClothe, quantityClothe) {
  return console.log(`ви купили ${nameClothe} котра коштує ${priceClothe} а кількість становить${quantityClothe} шт. вартість ${priceClothe * quantityClothe}`);
  
}

const calculate = function(clotheFirst, clotheSecond, clotheThird) {
  return x = clotheFirst + clotheSecond + clotheThird;
}

const totalTotal = function(total) {
  return console.log(`ви придбали речей на таку суму: ${total}`);
  
}




const items = [
  { name: 'Футболка', price: 250, quantity: 2 },
  { name: 'Джинси', price: 800, quantity: 1 },
  { name: 'Кросівки', price: 1200, quantity: 1 }
];



// console.log(calculateTotalCost(items));



function calculateTotalCost(item) {
  let totalCost = 0;

  for (let i = 0; i < item.length; i++) {
    const { price, quantity } = item[i];
    totalCost += price * quantity;
  }

  console.log(totalCost);
  return totalCost;
  
}

calculateTotalCost(items);
// console.log(totalCost);


