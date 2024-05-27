// ! 1 - Задача
let arr_1 = [101, 202, 303, 404, 505] 
let arr_2 = [606, 707, 808, 909]

let superArr = [...arr_1, ...arr_2]

console.log(superArr);


// ! 2 - Задача
let smallerNumber = Math.min(...superArr)

console.log(smallerNumber);


// ! Дан объект obj со свойствами width: 300 и heigth: 550. Создайте новый объект, который будет копией obj, но будет иметь еще и метод area(), который должен вернуть произведение свойств width и height;
let obj = {
    width: 300,
    heigth: 550
}

let Newobj = {
    ...obj,
    area(){
        console.log(this.width * this.heigth);
    }
}

console.log(Newobj.area());


// ! Создайте функцию которая принимает произвольное количество параметров и возвращает их сумму.
function numbers(a, b, c) {
    return a + b + c
}
console.log(numbers(1,2,3));


// ! Получить узел html
let html = document.documentElement
console.log(html);


// ! Поменять фоновый цвет всего документа на синий
document.body.style.backgroundColor = 'blue';


// ! Пользуясь узлом document.body получить узлы <b> и <i>.
let body = document.body

let Bteg = body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling

console.log(Bteg);


// ! Поменять текст в обоих узлах
let сhangeText = Bteg.innerHTML = 'Жирный шрифт'


// ! Задайте тегу <b> класс bold
const replacingTag = document.querySelector('b')
replacingTag.classList.add('active')


// ! Получить текстовый узел Линкод находящийся внутри тега <title>, и поменять его на 'Lincode’.
const myTitle = document.getElementById("demo").innerHTML = 'Lincode'


// ! Удалить узел <b>
Bteg.remove()    


// ! Создайте промис, который возвращает случайное число от 1 до 10. Затем обработайте этот промис, чтобы вывести результат в консоль.
const randomNumberPromise = new Promise((resolve, rejected) => {
    const randomNumber = Math.round(Math.random() * 10)
    resolve(randomNumber)
})

randomNumberPromise.then(result => {
    console.log('Случайное число', result);
}).catch(error => {
    console.error("Ошибка:", error);
});


// ! Создайте функцию, которая принимает на вход число и возвращает промис. Если число меньше 10, то промис должен быть выполнен успешно,
// ! иначе — с ошибкой. В случае успешного выполнения промиса выведите сообщение «Успех!», в противном случае — «Ошибка!».
function newPromise(numbers){
    return new Promise((resolve, rejected) => {
        if(numbers <= 10){
            resolve('Успех')
        }else {
            rejected('Упс')
        }
    })
}
newPromise(9)
.then(result => console.log(result))
.catch(error => console.log(error))


// ! Создайте новый Promise, который сразу же переходит в состояние "resolved". Выведите в консоль результат обработки этого Promise с помощью метода then().
const promiseNew = new Promise((resolve, rejected) => {
    resolve(1 + 1)
})

promiseNew.then(result => {
    console.log(result);
})


// ! Создайте Promise, который использует функцию `setTimeout` для имитации асинхронной операции Задайте таймер на 2 секунды. Выведите в консоль результат обработки этого Promise с помощью метода `then()`.
const promiseSetTime = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('successfully')
    }, 7000)
})

promiseSetTime.then(result => {
    console.log(result);
})


// ! Создайте два Promise, которые используют функцию setTimeout. Используйте Promise.all, чтобы выполнить оба Promise одновременно.
const promiseONE = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('Promise.all - выводид одновременно')
    }, 1000);
}) 

const promiseTWO = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('Promise.all - выводид одновременно')
    }, 3000);
}) 

Promise.all([promiseONE, promiseTWO])
    .then(([One, Two]) => {
    console.log(One)
    console.log(Two)
    })



// ! Создайте два Promise, которые используют функцию `setTimeout`. Задайте таймер на 1 и 3 секунды соответственно.
// ! Используйте Promise.race, чтобы выполнить оба Promise и получить результат выполнения самого первого завершенного Promise.
    const promisThreeSec = new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve('Promise.race - выводит самый быстрый Promise ')
        }, 3000);
    }) 
    
    const promiseFiveSec = new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve('Promise.race - выводит самый быстрый Promise')
        }, 5000);
    }) 

Promise.race([promisThreeSec, promiseFiveSec])
    .then((firstPromise) => {
        console.log(firstPromise);
    })



// ! Создайте массив `numbers` с элементами `[1, 2, 3]`. Используйте деструктуризацию, чтобы создать три переменные `a`, `b` и `c` и присвоить им значения из массива `numbers`.
const newArray = [1,2,3]

let [a,b,c] = newArray

console.log(a,b,c);



// ! Создайте объект `person` со свойствами `name`, `age` и `city` Используйте деструктуризацию, чтобы создать переменные `name`, `age` и `city` и присвоить им значения из объекта `person`
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

let {name, age, city} = person

console.log(name, age, city);



// ! Создайте массив `letters` с элементами `['a', 'b', 'c', 'd', 'e']` Используйте деструктуризацию, чтобы создать переменные `first`, `second` и `rest` и присвоить им значения из массива `letters` Выведите переменные `first`, `second` и `rest` в консоль.
const letters = ['a', 'b', 'c', 'd', 'e']

const [first, second, ...rest] = letters

console.log(first, second, ...rest);


// ! Создайте объект `student` со свойствами `name`, `age` и `address`, где `address` является объектом с полями `city` и `country` Используйте деструктуризацию, чтобы создать переменные `name`, `age`, `city` и `country`, присвоив им значения из объекта `student`.
const student = {
    Name: 'Pushcin',
    age1: 50,
    address: {
        cityy: 'Mayami',
        country: 'USA'
    }
}
const {Name, age1, address: {cityy, country} } = student;


console.log(Name, age1);
console.log(cityy, country);
