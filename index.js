// ASSIGNMENT 02 TASK 01 //

// function createAdder(num) {
//     return function(x) {
//       return num + x;
//     }
//   }
//   const addFive = createAdder(5);
// const result = addFive(10);
// console.log(result); 

// ASSIGNMENT 02 TASK 02 //

// function searchArray(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     }

//     if (arr[0] === val) {
//       return true;
//     }

//     return searchArray(arr.slice(1), val);
//   }

//   const arr = [1, 2, 3, 4, 5];
//   console.log(searchArray(arr, 8)); 
//   console.log(searchArray(arr, 4)); 

// ASSIGNMENT 02 TASK 03 //


// function addParagraph(text) {
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = text;
//     document.body.appendChild(newParagraph);
// }


// ASSIGNMENT 02 TASK 04 //


// function addListItem(text) {
//     const newListItem = document.createElement('li');
//      newListItem.textContent = text;
//     const unorderedList = document.querySelector('ul');
//     unorderedList.appendChild(newListItem);
//   }


// ASSIGNMENT 02 TASK 05 //

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }

//   function changeColor() {
//       const body = document.querySelector('body');
//       changeBackgroundColor(body, 'blue');
//   }

// ASSIGNMENT 02 TASK 06 //

// let local = localStorage;
// setData = ()=> {
//   let data = {
//     "fistName" :prompt ("Enter First Name") ,
//     "LastName" : prompt ("Enter Last Name") ,
//     "age" : prompt ("Enter Age") ,
//   }
//   local.setItem("user-info", JSON.stringify(data));
//   console.log('user-info', JSON.stringify(data))
// }

// ASSIGNMENT 02 TASK 07, TASK 08 //

//   getData = () =>{
//     let data = local.getItem('user-info');
//     console.log(data);
//   }