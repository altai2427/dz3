for (let i = 1; i <= 20; i++) {
    console.log(i);
}
 let number = 20;

 while(number != 0){
    console.log(number);
    number--;
 }
 
 for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}
let sum = 0;
for (let i = 1; i <=100; i++){
    if (i % 2 !== 0){
        continue;
    }
    sum +=i;
}
console.log(sum);

for (let i = 1; i <= 10; i++){
    let kvadrat = i * i;
     console.log(`Квадрат ${i} - ${kvadrat}`);
    
}
for (let i = 1; i <= 10; i++) {
    let result = 5 * i;
    console.log("5 * " + i +  " = " + result);
}
sum = 0;
 for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    sum +=i;
}
console.log(sum);

for (let i = 5; i <=100; i += 5){
    console.log(i);
    
}
let count = 0;
 for (let i = 1; i <= 100; i++){
    if (i % 7 === 0){
        count++;
    }
}
console.log(count);

const user = {
    name: 'test',
    age: 54,
    city: 'Bishkek'
};

console.log('Before', user);
user.age= 25;
console.log('after', user);
user.phone = '+99667148822852';
delete user.city;
console.log(user);
if ('email' in user) {
    console.log("email есть");
} else {
    console.log("не нету");
}
for (let key in user) {
    console.log(key);
}
let objectCount = 0;
for (let key in user){
    objectCount++;
}
console.log("Кол во свойств : " + objectCount);
const array = [100,300,200,500,214]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
let arraySum = 0; 
for (let i = 0; i < array.length; i++) {
    arraySum += array[i]; 
}
console.log("Сумма : " + arraySum); 

let max = array[0]; 
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]; 
    }
}
console.log("Максимальный : " + max); 

let min = array[0]; 
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i]; 
    }
}
console.log("Минимальный : " + min); 
let arrayLength = 0;
for (let i = 0; i < array.length; i++) {
    arrayLength++;
}
console.log("Кол во элементовв: " + arrayLength);
let evenSum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenSum += array[i];
    }
}
console.log("Сумма четных: " + evenSum);
let negativeCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeCount++;
    }
}
console.log("Количество отрицательных : " + negativeCount);
let product = 1;
for (let i = 0; i < array.length; i++) {
    product *= array[i];
}
console.log("Произведение элементов: " + product);
let maxIndex = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
        maxIndex = i;
    }
}
console.log("индекс максимального элемента: " + maxIndex);
let minIndex = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] < array[minIndex]) {
        minIndex = i;
  }
}
console.log("индекс минимального элемента: " + minIndex);
let hasTen = false;
for (let i = 0; i < array.length; i++) {
 if (array[i] === 10) {
  hasTen = true;
     break;
    }
}
console.log("есть ли число 10 : " + hasTen);
let sevensCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
        sevensCount++;
    }
}
console.log("Сссёколько раз встречается число 7: " + sevensCount);

let lastPositive = null;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        lastPositive = array[i];
    }
}
console.log("последнее положительное число: " + lastPositive);

let totalSum = 0;
for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
}
let average = totalSum / array.length;
console.log("скреднее арифметическое: " + average);











