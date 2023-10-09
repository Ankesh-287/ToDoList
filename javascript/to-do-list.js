const todolist = [{
    name: 'prem', date: '20-12-2020'}, {
    name: 'raja', date:'29-03-22'}];

save();

function save() {
    let todoHtml = '';

    todolist.forEach((todoObject, index) => {
        const {name, date} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="del-btn">Delete</button>
        `;
        todoHtml += html;
    });
    document.querySelector('.t-l')
    .innerHTML = todoHtml;

    document.querySelectorAll('.del-btn')
    .forEach((delBtn, index) => {
        delBtn.addEventListener('click', () => {
            todolist.splice(index, 1);
            save();
            savetoStorage();
        });
    });
    }

document.querySelector('.add-btn').addEventListener('click', ()=> {
    addTodo();
});
function addTodo() {
    const inputElem = document.querySelector('.input');
    const name = inputElem.value;
    const dateElem = document.querySelector('.date');
    const date = dateElem.value;

    todolist.push({
        // name: name,
        // date: date
        name,
        date
    });
    inputElem.value = '';
    save();
    savetoStorage();
}
function savetoStorage(){
    localStorage.setItem('todolist', JSON.stringify(todolist));
}

// a
// const num = [10, 20, 30];
// num[2] = 99;
// console.log(num);

// b
// function getLastValue(arr){
// const lastIndex = arr.length-1;
// return arr[lastIndex];
// }
// console.log(getLastValue([1, 4, 8, 5, 9]));

// c
// function arrSwap(arr){
// const lastIndex = arr.length-1;
// const fvalue = arr[0];
// const lvalue = arr[lastIndex];

// arr[0] = lvalue;
// arr[lastIndex] = fvalue;

// return arr;
// }
// console.log(arrSwap([987, 4, 8, 5, 1000]));

// d
// for(i = 0; i <= 10; i+=2){
//     console.log(i);
// }

// e
// for(i = 5; i >= 0; i--){
//     console.log(i);
// }

// f
// i = 0;
// while(i<=10){
//     console.log(i);
//     i+=2;
// }

// i=5;
// while(i>=0){
//     console.log(i);
//     i--
// }

// g
// const arr = [99,9,6];
// const total = []; 
// for(let i= 0; i <= arr.length-1; i++){
//     const add = arr[i];
//     total.push(add + 1);
// }
// console.log(total);

// h
// function addOne(arr){
//     const total = []; 
//     for(let i= 0; i < arr.length; i++){
//         total.push(arr[i] + 1);
//     }
//     return total;
// }
// console.log(addOne([4, 5, 7, 9, 8]));

// i
// function addNum(arr, num){
//     const total = [];
//     for(let i=0; i<arr.length; i++){
//         total.push(arr[i] + num);
//     }
//     return total;
// }
// console.log(addNum([7, 8, 28], 2));

// j
// function addArr(arr, arr2){
//     const total = [];
//     for(let i=0; i<arr.length; i++){
//         total.push(arr[i] + arr2[i]);
//     }
//     return total;
// }
// console.log(addArr([7, 8, 28], [13, 12, 22]));

// k
// function addP(arr){
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>0){
//         total++;
//         }
//     }return total;
// }
// console.log(addP([-10, 6, -30, 40, 60]));

// l 
// function minMax(arr){
//     const output ={
//         Min: arr[0],
//         Max: arr[0]
//     };
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i];
//         if(value < output.Min){
//             output.Min = value;
//         }
//         if (value > output.Max){
//             output.Max = value;
//         }
//     }
//     return output;
// }
// console.log(minMax([8, 90, 100, 70, -20]));

// M
// function minMax(arr){
//     const output ={
//         Min : null,
//         Max : null
//     };
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i];
//         if(output.Min === null || value < output.Min){
//             output.Min = value;
//         }
//         if (output.Max === null || value > output.Max){
//             output.Max = value;
//         }
//     }
//     return output;
// }
// console.log(minMax([]));
// console.log(minMax([7]));

// n
// function countWord(words){
//     const result = {};
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];
//         if (!result[word]){
//             result[word] = 1;
//         }else {
//             result[word]++
//         }
//     } return result;
// }
// console.log(countWord(['apple', 'banana', 'chickoo', 'apple', 'chickoo', 'pineapple', 'grapes', 'grapes', 'grapes', 'grapes', 'grapes', 'grapes', 'grapes']))

// o p
// let words = ['banana', 'apple', 'strawberry', 'cherry', 'lemon', 'apple'];
 
// let index = -1;

//     for (let i = 0; i < words.length; i++) {
//         if(words[i] === 'apple'){
//             index = i;
//             break;
//         }   
//     }
//     console.log(index);
//     words = ['not', 'raj'];
//     index = -1;
    
//     for (let i = 0; i < words.length; i++) {
//         if(words[i] === 'apple'){
//             index = i;
//         }  
//     }
//     console.log(index);

// Q
// function findWord(arr, word){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === word){
//             return i;
//         }   
//     }
//     return -1;
// }
// console.log(findWord(['banana', 'apple', 'strawberry', 'cherry', 'lemon', 'apple'], 'apple'));

// r
// function removeItem(food){
//     const result=[];
//     for (let i = 0; i < food.length; i++) {
//         if(food[i] === 'apple'){
//             continue;
//         }result.push(food[i]);
//     }return result;
        
// }console.log(removeItem(['banana', 'apple', 'strawberry', 'cherry', 'lemon', 'apple']));

//s
// function removeItem(food){
//     const result=[];
//     let itemRemoved = 0;
//     for (let i = 0; i < food.length; i++) {
//         if(food[i] === 'apple' && itemRemoved < 2){
//             itemRemoved++
//             continue;
//         }result.push(food[i]);
//     }return result;
        
// }console.log(removeItem(['banana', 'apple', 'strawberry', 'cherry', 'lemon', 'apple','apple', 'apple']))

//t
// function removeItem(food){
//     const removedBack = food.reverse()
//     const result=[];
//     let itemRemoved = 0;
//     for (let i = 0; i < food.length; i++) {
//         if(food[i] === 'apple' && itemRemoved < 2){
//             itemRemoved++
//             continue;
            
//         }result.push(food[i]);
//     }return result.reverse();
        
// }console.log(removeItem(['apple','banana', 'apple', 'strawberry', 'cherry', 'lemon', 'apple', 'apple',]));

//u
// function removeItem(food){
//     const foodCopy = food.slice();
//     const reversedFood = foodCopy.reverse();

//     const result=[];
//     let itemRemoved = 0;

//     for (let i = 0; i < reversedFood.length; i++) {
//         if(food[i] === 'apple' && itemRemoved < 2){
//             itemRemoved++
//             continue;    
//         }
//         result.push(food[i]);
//     }
//     return result.reverse();    
// }
// const food = ['apple','banana', 'apple', 'apple', 'lemon',];
// console.log(removeItem(food));
// console.log(food);

//v
// for(let i =0; i <= 20; i++){
//     const num = i;
//     if (num % 3 === 0 && num % 5 === 0){
//         console.log('finnbuzz');
//     }else if (num % 5 === 0){
//         console.log('buzz');
//     }else if (num % 3 === 0){
//         console.log('finn');
//     }else {
//         console.log(num);
//     }
// }

//w
// function findWord(arr, word){
//         for (let i = 0; i < arr.length; i++) {
//             if(arr[i] === word){
//                 return i;
//             }   
//         }
//         return -1;
//     }
//     function unique(arr){
//         result = [];

//         for(let i = 0; i < arr.length; i++){
//           const word = arr[i]; 
          
//           if (findWord(result, word) === -1){
//               result.push(word);
//             }
//         }
//         return result;
//     }
//     console.log(unique(['banana', 'apple', 'strawberry', 'cherry', 'lemon', 'apple']));