/*Поиск наибольшего значения среди свойств объекта

Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).
Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач". */

const findBestEmployee = function (employees) {
  'use strict';
  // const keys = Object.keys(developers);
  // let maxValue = 0;
  // let nameBestEmployee = '';
  // for (key of keys) {
  //   if (array[keys] > maxValue) {
  //     nameBestEmployee = key;
  //   }
  // }
  // return nameBestEmployee;
  const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    const entries = Object.entries(employees);
    let maxValue = 0;
    let nameBestEmployee = '';
    for (const entry of entries) {
      const key = entry[0];
      const value = entry[1];

      if (value > maxValue) {
        maxValue = value;
        nameBestEmployee = key;
      }
    }
    return nameBestEmployee;
  };

///С деструктуризацией
  
  /*
  const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const entries = Object.entries(employees);
  let maxValue = 0;
  let nameBestEmployee = '';
  for (const [key, value] of entries) {

    if (value > maxValue) {
      maxValue = value;
      nameBestEmployee = key;
    }
  }
  return nameBestEmployee;
  */
  
  /* C Object.keys
  
const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const names = Object.keys(employees);
  let maxValue = 0;
  let nameBestEmployee = '';

  for (const name of names) {

    if (employees[name] > maxValue) {
      maxValue = employees[name];
      nameBestEmployee = name;
    }
  }
  return nameBestEmployee;
};
  */

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
//console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
//console.log(findBestEmployee(sellers));
// 'lux'
