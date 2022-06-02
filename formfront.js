
let toDo = (newtask);


//ek sukkel om die function en die label te link sodat die function weet ek praat van die labels in HTML
function myValidation(text){
    document.getElementById(newtask);//weet nie of ek even die getelement moet gebruik nie, maar dis al hoe ek dink om dit te connect
    if (newtask == text){
        return "You have successfully added a New Task!"; //ek wil he die task moet in gevul word, as daar nie iets ingevul is nie moet hy se dit moet ingevul word of well done dis ingevul
    }
    return "The task has not been filled in, please fill it in before submitting."
}

toDo.push(toDo);
alert(myValidation(toDo));

// een kleur terwyl mens tik en dan 'n ander kleur wanneer dit ingesit is



// const naam = "Chani";

// function myValidation(){
//     document.getElementById(newtask)="You've added a new task well done!"
//   }

// myValidation();

//Alles van hier af boontoe is vir die To do app

// function adder(num1, num2) {
//   console.log(num1 + num2);
// }

// adder(2,4)

// function toUpper(text){
//   const upperCased = text.toUpperCase();
//   console.log(upperCased);                             //van const naam tot const toUpper was net practice van functions en hoe dit werk.... 
// }

// toUpper(naam);

// const toUpper = function(){
//   "another way to write a function"
// }

// const toUpper = () => {
//   "shortest way to write a function";
// }