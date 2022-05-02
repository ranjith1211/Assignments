
// Accessing buttons by their ids

let object = document.getElementById('objects');
let arrays = document.getElementById('arrays');
let functions = document.getElementById('functions');
let strings = document.getElementById('strings');
let numbers = document.getElementById('numbers');
let nil = document.getElementById('nil');
let final = document.getElementById('final');

//  Added onclick event to all buttons
object.onclick = function(){
    let text = document.querySelector('.text');
    text.style.listStyle = "circle";
    document.getElementById('one').textContent = `Objects are data types which store elements in terms of key-value pairs seperated by a colon.syntax: var object_name = {key:value},example: const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`;

    document.getElementById('two').textContent = `Values in objects are accessed by using dot(.) or bracket[] notation, ie. person.age. The keys are also called as Properties`;

  document.getElementById('two').textContent = `We can also assign a function as a value to a key, which is known as method, ie. const person = {sayHi: function(){
      console.log("Hi);
  }};`;

  document.getElementById('three').textContent = `The objects are non-primitive data types, where the values are stored by their addresses. The addresses are stored in stack where as values are stored in heap due its flexible behaviour.`;

  document.getElementById('four').textContent = `The objects are mutable in nature which means values can be altered. By using the locations we can modify value ie. person.age = 36;`;

    document.getElementById('five').textContent = `If we want to avoid this mutable property then by Object.freeze() object method we can freeze it from being mutable.
    ie, Object.freeze(person)`;

}

arrays.onclick = function(){
    let text = document.querySelector('.text');
    text.style.listStyle = "circle";
    document.getElementById('one').textContent = `Array is data types Used to store a multiple items seperated by commas(,) written within square brackets[]. Example: let cars = ["Saab", "Volvo", "BMW"];`;

    document.getElementById('two').textContent = `Values in an array can be accessed using bracket notation []`;

  document.getElementById('two').textContent = `In array each item is assigned with an index starting from zero ending with one less than total array length. ie, 0, 1, 2....n-1`;

  document.getElementById('three').textContent = `The arrays are non-primitive data types, where the values are stored by their addresses. The addresses are stored in stack where as values are stored in heap due its flexible behaviour.`;

  document.getElementById('four').textContent = `The arrrays are mutable in nature which means values can be altered. By using the locations we can modify value ie. cars[0] = "Tata";`;

    document.getElementById('five').textContent = `If we want to avoid this mutable property then by Object.freeze() object method we can freeze it from being mutable.
    ie, Object.freeze(cars)`;

}

functions.onclick = function(){
    let text = document.querySelector('.text');
    text.style.listStyle = "circle";
    document.getElementById('one').textContent = `Function is a block of code written to do the particular tasks wheneve required. Syntax:
    function name(arguments){
        // code block
        return result;
    }`;

    document.getElementById('two').textContent = `Function can also return a value which can be used as a value to an varible. Varibale defined within function are having local scope due to which then cant be accessed from out of the function.`;


  document.getElementById('three').textContent = `In order to use function we need to call or invoke them ie, nameOfFunction(). The functions are non-primitive data types, where the values are stored by their addresses. The addresses are stored in stack where as values are stored in heap due its flexible behaviour.`;

  document.getElementById('four').textContent = `The functions are mutable in nature which means values can be altered.`;

    document.getElementById('five').textContent = `If we want to avoid this mutable property then by Object.freeze() object method we can freeze it from being mutable.
    ie, Object.freeze(functionName)`;

}

strings.onclick =  function(){
    let text = document.querySelector('.text');
    text.style.listStyle = "circle";
    document.getElementById('one').textContent = `String is data type used to store a sequence of characters written within single or double quotes. Syntax: var stringName= "Hello".`;

    document.getElementById('two').textContent = `Strings are generally represents text form of data`;


  document.getElementById('three').textContent = `Each character in a string having its index startig from zero to one less than string length. ie, 1, 2, 3, 4, .... n - 1`;

  document.getElementById('four').textContent = `The strings are primitive data types where values are stored by their actual values. values are stored in stack.`;

    document.getElementById('five').textContent = `These are immutable in nature, as the actual values cant be altered.`;

}

numbers.onclick =  function(){
    let text = document.querySelector('.text');
    text.style.listStyle = "circle";
    document.getElementById('one').textContent = `Numbers represents any integer or decimal value. syntax: var name = 55`;

    document.getElementById('two').textContent = `Used mainly for mathemetical operatons and calculations.`;


  document.getElementById('three').textContent = `Ex: let x = "100";
let y = "10";`;

  document.getElementById('four').textContent = `The numbers are primitive data types where values are stored by their actual values. values are stored in stack.`;

    document.getElementById('five').textContent = `These are immutable in nature, as the actual values cant be altered.`;

}

nil.onclick = function(){
    let text = document.querySelector('.text');
    text.style.listStyle = "circle";
    document.getElementById('one').textContent = `Null is a data type which represents an empty value, or nothing value. Ex: let name = null.`;

    document.getElementById('two').textContent = `Used mainly for wiping out data of any value.`;


  document.getElementById('three').textContent = `Ex: let x = "100";
x= null.`;

  document.getElementById('four').textContent = `The null is also a primitive data types where values are stored by their actual values. values are stored in stack.`;

    document.getElementById('five').textContent = `These are immutable in nature, as the actual values cant be altered.`;

}

final.onclick = function(){
    let text = document.querySelector('.text');
    text.style.listStyle = "circle";
    document.getElementById('one').textContent = `Undefined is a data type which represents a variable which has no value after its declaration. Syntax: var a; var u;`;

    document.getElementById('two').textContent = `Used to represent no value assigned to a varible.`;


  document.getElementById('three').textContent = `Ex: let x;`;

  document.getElementById('four').textContent = `The undefined is also a primitive data types where values are stored by their actual values. values are stored in stack.`;

    document.getElementById('five').textContent = `These are immutable in nature, as the actual values cant be altered.`;

}