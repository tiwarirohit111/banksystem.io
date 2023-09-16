// let num1 = 10;
// let num2 = 6;
// let num3 = num1*num2;
// console.log(num3);
// let name = 'Rohit tiwari';

// console.log(str.replace('h','0'));
// let nembool = false;

// console.log(newbool);
// Math.random()*10;
// console.log(Math.log()*10);

/////////////////////////////////////
// function getBoolean (item){
//  return typeof item === "boolean";
// }
// function getString (item){
//     return typeof item === "string"
// }
// function getNumber (item){
//     return typeof item === "number"
// }
// function check (item, rohit){
//     rohit(item);

// }

// console.log(check(true, getBoolean));
// console.log(check(19, getNumber));
// console.log(check(19, getString));
///////////////////////////////////

// function a(fn){
// console.log("i am rohit a");
// fn();
// }
// function b(){
// console.log("i am rohit b");

// }

// a(b);

// //////////////

// function a(){
//     console.log("inside a");
//     function b(){
//         console.log("inside b");
//     }
//     return b;
// }
//  let app = a();
//  console.log(app);
 
////////////////
// for each method
// let student = ['rohit', 'tiwari','sufiya ','praveen'];
// student.forEach(function(item){
//   console.group(item);
// }
// )
// student.forEach(function(item,index){
//     console.log(`index of ${index} ,and name ${item}`);
// }) 
// ///////////////////////
// Map Metohod

// let mark =[10, 20, 30, 40, 50,];
// let newmark = mark.map(function(item){
//      return item*2
    
//     })
//     console.log(mark);
//     console.log(newmark);

// ////////////////////

// let mark = [2,4,5,6,88,9,6,55,4,3,2];
// let newmark = mark.filter(function(item){
//     if(item > 3){
//         return true;

//     }
//         return false;

    
// });

// console.log(mark);
// console.log(newmark);

// let mark = [2,3, 3,77,23,46,78,12,35,90];

// let newmark = mark.sort();
// console.log(newmark);

// function counter(){

//     let count = 0;
//     function getcount(){
//         console.log(count);

//         }
//         return getcount;

//     }
// let counter1 = counter();
// // console.log(counter1.getcount());
// console.log(counter1());

/////////////////////////////// 
// function counter(){

//     let count = 0;
    
//         return {
//             getcount : function(){
//                 return  count;

//             }
//         }

//     }
// let counter1 = counter();
// console.log(counter1.getcount());
//////////////////////////////////////


// function  counter(){
//     let count = 0;
//     return {
//         getcount: function(){
//             return count;


//         },
//         increment : function(){
//                 return count++;

//         },
//         decrement: function(){
//             return count--;

//         },
//         reset: function(){
//             return count = 0;

//         }

//     }
// }
// let counter1 = counter();
// // console.log(counter1);
// console.log(counter1.increment());
//////////////////////


// Prototype

let todo = {
    title :  'buy flower',
    desk : function(){
        return `your task is ${this.title}`
    }

}
console.log(todo.title);
console.log(todo.toString());
