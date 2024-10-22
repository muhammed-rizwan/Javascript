
FOR/WHILE/DO/FOR IN/FOR OF

//syntax for

// for (initialization;condition;update){
//     code
// }

//example

// for(let i=0;i<=5; i++){
//     console.log(i)
// }

//-------------

//syntax while
// while(Condition){

// }

//example

// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

//-----------

//syntax do
// do{

// }
// while(condition)


//example

// let i=0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=5);

//----------

//syntax for in
// for(let key in object){

// }

//example

// const person = { name:"jon",age:30};
// for(let key in person){
//     console.log(key+ ":"+ person[key])
// }


//-----------

//syntax for of
// for(let element of itrable){

// }

//example
// const fruits =[ "apple","banana","orange"];
// for(let fruit of fruits){
//     console.log(fruit)
// }

//------------

//multiple times
// const persons = [
//     {name:"john",age:67},
//     {name:"joy",age:65},
//     {name:"jos",age:23},
// ]
// for(let person of persons){
//     for(let key in person){
//         console.log(key+ ":"+ person[key])
//     }
// }
