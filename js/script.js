/* Functions to get the value main purpose to reduce redundancy*/
function getValue(firstNumber, secondNumber){
    x = document.getElementById("firstNumber").value;
    y = document.getElementById("secondNumber").value;
}
/*Function to add two numbers*/
function add() {
    /* Get the value to add numbers*/
    getValue();
    /*The Number() function converts the object argument to a number
      that represents the object's value*/
    sum=Number(x)+Number(y);
    /*print the number after addition*/
    document.getElementById("result").innerHTML =  x+" + "+y+" = "+sum;
}
/*Function to subtract two numbers*/
function sub() {
    /* Get the value to subtract numbers*/
    getValue();
    /*The Number() function converts the object argument to a number
      that represents the object's value*/
    sub=Number(x)-Number(y);
    /*print the number after subtraction*/
    document.getElementById("result").innerHTML = x+" - "+y+" = "+sub;
}
/*Function to multiply two numbers*/
function mul() {
    /* Get the value to multiply numbers*/
    getValue();
    /*The Number() function converts the object argument to a number
      that represents the object's value*/
    mul=Number(x)*Number(y);
    /*print the number after multiplication*/
    document.getElementById("result").innerHTML = x+" * "+y+" = "+mul;
}
/*Function to divide two numbers*/
function div() {
    /* Get the value to divide numbers*/
    getValue();
    /*The Number() function converts the object argument to a number
      that represents the object's value*/
    div=Number(x)/Number(y);
    /*print the number after division*/
    document.getElementById("result").innerHTML = x+" / "+y+" = "+div;
}
function mod() {
    /* Get the value to divide numbers*/
    getValue();
    /*The Number() function converts the object argument to a number
      that represents the object's value*/
    mod=Number(x)%Number(y);
    /*print the number after division*/
    document.getElementById("result").innerHTML = x+" % "+y+" = "+mod;
}

