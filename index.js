// if(confirm('JavaScript появился в 1995 году?') === true) {
//     alert('Верно')
// } else {
//     alert('Неверно! JavaScript появился в 1995 году')
// }

// if(confirm('Спецификация JavaScript называется ECMAScript?') === true) {
//     alert('Верно')
// } else {
//     alert('Неверно! Спецификация JavaScript называется ECMAScript')
// }

// if(confirm('JavaScript был создан за 1 месяц?') === true) {
//     alert('Неверно! JavaScript был создан за 10 дней')
// } else {
//     alert('Верно')
// }

// Задание
// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//        alert(`Добро пожаловать, ${newStudent}!`)
//     }
//  }

// let i = 0;
// while(i < 3) {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`)
//     }
//     i += 1
// }


// let i = 0;
// do {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//     alert(`Добро пожаловать, ${newStudent}!`)
// }
//     i += 1
// } while(i < 3)


// let sum = 0;
// for (let i = 0; i <= 100; i += 1) {
//     sum += i;
// }
// alert(sum);

// sum += 1 - sum = sum + i одно и тоже 


// Программа скидок работает следующим образом:
// Если клиент потратил от 100$ до 300$, то скидка 10%;
// Если клиент потратил от 300$ до 500$, то скидка 20%;
// Если клиент потратил от 500$, то скидка 30%;

// const clientName = prompt('Введите имя клиента')
// let clientSpentForAllTime = prompt('Сколько клиент потратил сегодня?')
// let clientSpentToday = prompt('Сколько клиент потратил за все время?')

// let discount = 0

// if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//     discount = 10 
// } else if(clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//     discount = 20 
// } else if(clientSpentForAllTime >= 500) {
//     discount = 30
// }

// alert(`Вам предоставляется скидка в ${discount}%!`)

// clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100)
// clientSpentForAllTime += clientSpentToday

// alert(`К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)



// const clientName = 'Магомед-Али'

// let discount = 0
// let buyProduct = prompt('Выберите какой пакет будете выбирать! Если клиент потратил от 100$ до 300$, то скидка 10%! Если клиент потратил от 300$ до 1000$, то скидка 20%! Если клиент потратил от 1000$, то скидка 30%!')

// if (buyProduct >= 100 && buyProduct < 300) {
//     discount = 10
// } else if (buyProduct >= 300 && buyProduct < 1000) {
//     discount = 20
// } else if (buyProduct >= 1000) {
//     discount = 30
// }

// alert(`Вам предоставляется скидка в размере ${discount}%!`)


// Задание
// Для clientName сообщение в prompt должно быть “Введите имя клиента”, 
// clientSpentToday - “Сколько клиент потратил сегодня?”, 
// clientSpentForAllTime - “Сколько клиент потратил за все время?”.

// const clientName = prompt('Введите имя клиента')
// let clientPassword = prompt('Введите пароль')
// let clientSpentToday = prompt('Сколько клиент потратил сегодня?')
// let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?')

// clientSpentForAllTime = Number(clientSpentForAllTime)
// clientSpentToday = Number(clientSpentToday)

// let discount = 0

// if (!clientSpentForAllTime || !clientSpentToday) {
//     alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')
// } else {
//     if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//         discount = 10;
//     } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//         discount = 20;
//     } else if (clientSpentForAllTime >= 500) {
//         discount = 30;
//     }
//     alert(`Вам предоставляется скидка в ${discount}%!`)

//     clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
//     clientSpentForAllTime += clientSpentToday;

//     alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
// }


// Пароль должен удовлетворять следующим условиям:

// Длина пароля должна быть минимум 3 символа и не больше 20 символов (включая 20).
// Пароль должен содержать минимум 1 прописную (большую) букву.
// Пароль должен содержать минимум 1 цифру.
// Если все условия удовлетворены, то выведите при помощи alert сообщение “Пароль валидный. Добро пожаловать в аккаунт!”, иначе - 
// “Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.”

// Посмотрите на несколько возможных результатов:

// “1234f” - не удовлетворяет условиям
// “123456”  - не удовлетворяет условиям
// “1234F” - удовлетворяет условиям
// “12” - не удовлетворяет условиям
// “JavaScript”- не удовлетворяет условиям
// “JavaScript123”  - удовлетворяет условиям


// const password = prompt("Введите пароль");
// const errorMessage =
//   "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.";
// const successMessage = "Пароль валидный. Добро пожаловать в аккаунт!";

// if (password === null || password.length < 3 || password.length > 30) {
//   alert(errorMessage);
// } else {
//   let hasBigSymbol = false;
//   let hasNumbers = false;
//   for (let i = 0; i < password.length; i += 1) {
//     const symbol = password[i];
//     const isNumberSymbol = !isNaN(parseInt(symbol));
//     if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
//       hasBigSymbol = true;
//     }
//     if (isNumberSymbol) {
//       hasNumbers = true;
//     }
//   }

//   if (!hasBigSymbol || !hasNumbers) {
//     alert(errorMessage);
//   } else {
//     alert(successMessage);
//   }
// }




const userName = prompt('Введите ваше новое пользовательское имя')
const userLastName = prompt('Введите вашу фамилию')

function userNewPassword(userPassword, getUserPassword) {
    const password = prompt(userPassword)
    const oldGetPassword = prompt(getUserPassword)

     if(password === oldGetPassword) {
        alert('Ваш пароль действителен')
    } else {
        alert('Ваш пароль не действителен')
    }
}

userNewPassword('Создайте ваш пароль', 'Введите ваш пароль')

function getInfoUser() {
    if(userName && userLastName && userLastName.password !== null) {
        alert(`Добро пожаловать ${userLastName} ${userName} в нашу группу Вконтакте`)
    }
}

getInfoUser()


let window1 = document.location.href = 'https://vk.com'

if (getInfoUser !== null) {
    onclick(window1)
}