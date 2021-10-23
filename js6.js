// Модуль 6 
// Задание 1

function showResult(){
    let zero=0;
    let zero1=1;
    let str=0;
    let countable=0;
    let uncountable=0;

let arr=[0,1,2,3,4,5,6,7,8,9,10, null,'dog','cat','house']
for(let i=0; i<arr.length; i++){
    if( typeof (arr[i]) =='string') {
        str++
    } else if( typeof arr[i]=== null) {
        zero1++
    } else if( typeof arr[i] === 0) {
        zero++
    } else if( arr[i]%2===0) {
        countable++
    } else {uncountable++}

}

console.log('Нулей в массиве' + zero);
console.log('Нуллов в массиве' + zero1);
console.log('Строк в массиве' + str);
console.log('Четных  в массиве' + countable);
console.log('Нечетных  в массиве' + uncountable);

}
showResult()

//Задание 2

let result= prompt('Введите любое число от 0 до 1000')
function getNumber(){
    if( typeof result === 'number'){
        alert('Данные неверны')
    } else if( result%result ==0 , result<1000){
        alert( `Вы ввели просто число ${result}`)
    } else if( result ===0){
        alert('Вы ввели ноль')
    } else { alert('Данные неверны')}
    console.log(result)
}
getNumber()


//Задание 3


function getSum(a){
    
    return function (b){
        let c = a+b;
        console.log(c);
    }
}

let result = getSum(5);
console.log(result(2));


// Задание 4

let i = 4;
setInterval(function num(a,b){
    a=i+1;
    if(a<=b){
    console.log(a);
    }
    i++
},1000, 5 , 15);

// Задание 5

let x = prompt("Введите любое простое число");
if(x%1===0){
    console.log(x);
} else("Исходные данные неверны")
let n = prompt("Введите любое простое число");
if(n%1===0){
    console.log(n);
} else("Исходные данные неверны")

let sum = (x, n) => Math.pow(x, n);

console.log(sum(x, n));






