/*Задача 2 - 9
Есть массив logins с логинами пользователей.
Напиши скрипт добавления логина в массив logins.Добавляемый логин должен:

проходить проверку на длину от 4 до 16 - ти символов включительно
быть уникален, то есть отсутствовать в массиве logins
Разбей задачу на подзадачи с помощью функций.
Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, 
попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.

Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, 
возвращая true если такого логина еще нет и false если логин уже используется.

Напиши функцию addLogin(allLogins, login) которая:

Принимает новый логин и массив всех логинов как параметры
Проверяет валидность логина используя вспомогательную функцию isLoginValid
Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
🔔 Принцип единственной ответственности функции - каждая функция делает что - то одно.
Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

Предикатные функции возвращают только true или false.Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
isLoginValid только проверяет валидный ли логин и возвращает true или false.
addLogin добавляет или не добавляет логин в массив.При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.*/

function isLoginValid(login, min = 4, max = 16) {
  const isValid = login.length >= min && login.length <= max;
  return isValid;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  if (!isLoginValid(login)) {
    message = ERROR;
    return message;
  }
  if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;
    return message;
  }
  allLogins.push(login);
  message = SUCCESS;
  return message;
}
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

/*
const isValid = true;

if (isValid) {
  // ...
}

// тоже самое что

if (isValid === true) {
  // ...
}

// И вот это

if (!isValid) {
  // ...
}

// аналогично

if (isValid === false) {
  // ...
}
*/

//Дополнительные пояснения
/*
function isLoginValid(login, min = 4, max = 16) {
	// Это:
  return login.length >= min && login.length <= max;

	// равно этому:
  let loginValid = false;
  if (login.length >= min && login.length <= max) {
    loginValid = true;
  }
  return loginValid;

	// или равно этому:
  if (login.length >= min && login.length <= max) {
    return true;
  } else {
    return false;
  }

	// или равно этому:
  if (login.length >= min && login.length <= max) {
    return true;
  }
  return false;


	// Вот это никогда не надо использовать:
  return login.length >= min && login.length <= max ? true : false;
}


function isLoginUnique(allLogins, login) {
	// Это:
  return !allLogins.includes(login);

	// равно этому:
  let loginUnique = true;
  if (allLogins.includes(login)) {
    loginUnique = false;
  }
  return loginUnique;

	// или равно этому:
  let loginUnique = false;
  if (!allLogins.includes(login)) {
    loginUnique = true;
  }
  return loginUnique;

	// или равно этому:
  if (!allLogins.includes(login)) {
    return true;
  } else {
    return false;
  }

	// или равно этому:
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }

	// или равно этому:
  if (allLogins.includes(login)) {
  	return false;
  }
  return true;


	// или равно этому:
  if (!allLogins.includes(login)) {
  	return true;
  }
  return false;


	// Вот это никогда не надо использовать:
  return !allLogins.includes(login) ? true : false;
	// или вот это
  return allLogins.includes(login) ? false : true;
}

*/
