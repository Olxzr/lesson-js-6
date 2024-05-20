let a = document.head

let pere = document.head.firstChild.nextSibling.nextSibling

console.log(a)

console.log(pere)


// ! 1 - Задача

let arr_1 = [101, 202, 303, 404, 505] 
let arr_2 = [606, 707, 808, 909]

let superArr = [...arr_1, ...arr_2]

console.log(superArr);

// ! 2 - Задача

let smallerNumber = Math.min(...superArr)

console.log(smallerNumber);












function myFanc(...a){
    console.log(a);
}

myFanc(12,2,84,64,65)
