function keyPress(id) {
    screen1 = document.getElementById('first_screen');
    screen2 = document.getElementById('second_screen');
    screen3 = document.getElementById('third_screen');

    firstVal = Number(screen1.value);
    secondVal = screen2.value;
    thirdVal = Number(screen3.value);

    btnVal = document.getElementById(id).value;

    if (isValid(btnVal) == false) {

    }else if(btnVal == "C"){
        screen1.value="";
        screen2.value="";
        screen3.value="";
    }else if(btnVal == "CE"){
        screen1.value="";
    }
     else if (operation(btnVal) == true) {
        screen3.value = screen1.value;
        screen2.value = btnVal;
        screen1.value = "";
    } else if (btnVal == "<--") {
        screen1.value = screen1.value.slice(0,-1);
    }
     else if ((secondVal == "+" && id == "=") && (firstVal != "" && thirdVal != "")) {
        screen3.value = "";
        screen2.value = "";
        screen1.value = addition(firstVal, thirdVal);

    } else if ((secondVal == "-" && id == "=") && (firstVal != "" && thirdVal != "")) {
        screen3.value = "";
        screen2.value = "";
        screen1.value = subtraction(thirdVal, firstVal);

    } else if ((secondVal == "*" && id == "=") && (firstVal != "" && thirdVal != "")) {
        screen3.value = "";
        screen2.value = "";
        screen1.value = multiplication(firstVal, thirdVal);

    } else if ((secondVal == "/" && id == "=") && (firstVal != "" && thirdVal != "")) {
        screen3.value = "";
        screen2.value = "";
        screen1.value = division(firstVal, thirdVal);

    } else if ((secondVal == "%" && id == "=") && (firstVal != "" && thirdVal != "")) {
        screen3.value = "";
        screen2.value = "";
        screen1.value = percentage(firstVal, thirdVal);

    } else if((secondVal =="sqrt" && id =="=") && (firstVal != "" && thirdVal != "")){
        screen3.value ="";
        screen2.value = "";
        screen1.value = square(firstVal);
       
}
     else {
        screen1.value += btnVal;
    }

   
   
}

function isValid(num) {
    try {
        return eval(num);
    } catch (err) {

    }

}

function operation(id) {
    if (id == "+" || id == "-" || id == "*" || id == "/" || id == "%" || id == "sqrt" || id == "1/x") {
        return true;
    } else {
        return false;
    }
}

function addition(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num2 / num1;
}

function percentage(num1, num2) {
    return (num2 / num1) * 100;
}

function square(num1) {
    return Math.sqrt(num1);
}

var zerobtn = document.getElementById('0');
zerobtn.addEventListener('click', function (){
    screen1 = document.getElementById('first_screen');
    var x ='0';
    firstVal = Number(x); 
    screen1.value += firstVal;
});



function myLoop(params) {
    params + 1;
    array.forEach(element => {
        element
    });
}