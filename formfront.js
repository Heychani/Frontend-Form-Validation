
let toDo = [newtask];

function myValidation(text){
    document.getElementById(newtask);
    if (newtask == text){
        return "You have successfully added a New Task!"; //ek wil he die task moet in gevul word, as daar nie iets ingevul is nie moet hy se dit moet ingevul word of well done dis ingevul
    }
    return "The task has not been filled in, please fill it in before submitting."
}

toDo.push(toDo);
alert(myValidation(toDo));



// const naam = "Chani";

// function myValidation(){
//     document.getElementById(newtask)="You've added a new task well done!"
//   }

// myValidation();

// function adder(num1, num2) {
//   console.log(num1 + num2);
// }

// adder(2,4)

// function toUpper(text){
//   const upperCased = text.toUpperCase();
//   console.log(upperCased);
// }

// toUpper(naam);

// const toUpper = function(){
//   "another way to write a function"
// }

// const toUpper = () => {
//   "shortest way to write a function";
// }