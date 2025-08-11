'use strict';

// write code here
const listOfEmployees = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function sortList(list) {
  const sortedList = [...list].sort(
    (obj1, obj2) =>
      dataToNumber(obj2.dataset.salary) - dataToNumber(obj1.dataset.salary),
  );

  return sortedList;
}

function getEmplyees(list) {
  const employees = [...list].map((person) => {
    return {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: Number(person.dataset.salary.slice(1).replace(/,/g, '')),
      age: Number(person.dataset.age),
    };
  });

  return employees;
}

function dataToNumber(dataAttribute) {
  return Number(dataAttribute.slice(1).replace(/,/g, ''));
}

const sortedEmployess = sortList(listOfEmployees);

sortedEmployess.forEach((element) => {
  ul.append(element);
});
getEmplyees(listOfEmployees);
sortList(listOfEmployees);
