
var display = document.getElementById("display");
var displayTo = document.getElementById("display2");
var zero = 0;

document.onkeyup = (e) =>{
    if(Number(e.key) || e.key == '0'){
        numbers(e.key)
    }
    if(e.key == '+'){
        plus()
    }
    if(e.key == '-'){
        minus()
    }
    if(e.key == '*'){
        multiplication()
    }
    if(e.key == '/'){
        division()
    }
    if(e.key == 'Enter'){
        result()
    }
    if(e.key == 'Backspace'){
        deleteValue()
    }
    if(e.key == '%'){
        percent()
    }
    if(e.key == 'Delete'){
        reset()
    }
    if(e.key == ','){
        point()
    }
}

function numbers(a){
    if(display.value == "0"){
        display.value = a;
    }else{
        display.value += a;

    }

    if(displayTo.value == "0"){
        displayTo.value = a;
    }else{
        displayTo.value += a;
    }
    
    if(a == "0"){
        zero = 1;  
    } 
}

const floor = num =>{
    return Math.floor((num+0.00001) * 100)/100
}

var symbols = 0;

var number = 0;

var plusMinus = 0;

var multiDivision;

function plus(...poer){
    let num1 = Number(display.value);
    let num2 = Number(displayTo.value);
    if(displayTo.value != 0){

    }else{
        return alert("Введіть число");
    }

    if(display.value != 0){
        display.value += "+";
    }else{
        return alert("Введіть число");
    }

        if(symbols == 0){
            number = num1;
            displayTo.value = 0;
        }

        if(symbols == 2){
           let minus = number - num2;
           number = minus;
           displayTo.value = 0;
        }
        
        if(symbols == 3){
            let multiplication = multiDivision * num2;
            if(plusMinus == 1){
                let multiPlus = multiplication + number;
                number = multiPlus;
            }
            if(plusMinus == 2){
                let multiMinus = number - multiplication;
                number = multiMinus;
            }
            displayTo.value = 0;
        }
        
        if(symbols == 4){
            let multiplication = multiDivision / num2;
            if(plusMinus == 1){
                let multiPlus = multiplication + number;
                number = multiPlus;
            }
            if(plusMinus == 2){
                let multiMinus = number - multiplication;
                number = multiMinus;
            }
            displayTo.value = 0;
        }
        
    if(symbols == 1){
        let plus = number + num2;
        number = plus;
        displayTo.value = 0;
    }
     
    symbols = 1;
    plusMinus = 1;
}

function minus(){
    let num1 = Number(display.value);    
    let num2 = Number(displayTo.value);
    if(displayTo.value != 0){

    }else{    
        return alert("Введіть число");
    }
    if(display.value != 0){
        display.value += "-";
    }else{
        return alert("Введіть число");
    }
        if(symbols == 0){
            number = num1;
            displayTo.value = 0;
        }
        
        if(symbols == 1){
            let plus = number + num2;
            number = plus;
            displayTo.value = 0;
        }
        if(symbols == 3){
            let multiplication = multiDivision * num2;
            if(plusMinus == 1){
                let multiPlus = multiplication + number;
                number = multiPlus;
            }
            if(plusMinus == 2){
                let multiMinus = number - multiplication;
                number = multiMinus;
            }
            displayTo.value = 0;
        }
            
       if(symbols == 4){
           let division = number / num2;
           number = division;
           displayTo.value = 0;
       }
        
    
    if(symbols == 2){
        let minus = number - num2;
        number = minus;
        displayTo.value = 0;
    }
    symbols = 2;
    plusMinus = 2;
}

function multiplication(){
    var num1 = Number(display.value)
    var num2 = Number(displayTo.value)
    if(displayTo.value != 0){

    }else{    
        return alert("Введіть число");
    }
    if(display.value != 0){
        display.value += "*";
    }else{
        return alert("Введіть число");
    }

    if(symbols == 0){
        number = num1;
        displayTo.value = 0;
    }
    if(symbols == 1 || symbols == 2){
        multiDivision = num2;
        displayTo.value = 0;
    }
    
    if(symbols == 4){
        var division = number / num2;
        number = division;
        displayTo.value = 0;
    }
        
    if(symbols == 3){
        if(plusMinus == 0){ 
            let multiplication = number * num2;
            number = multiplication;
            displayTo.value = 0;
        }
        if(plusMinus == 1){
            let multiplication = multiDivision * num2;
            let multiPlus = multiplication + number;
            number = multiPlus;
            displayTo.value = 0;
            plusMinus = 0;
        }
        if(plusMinus == 2){
            let multiplication = multiDivision * num2;
            let multiMinus = number - multiplication;
            number = multiMinus;
            displayTo.value = 0;
            plusMinus = 0;
        }
    }
    symbols = 3;
}

function division(){
    let num1 = Number(display.value);
    let num2 = Number(displayTo.value);
    console.log(number)
    if(displayTo.value != 0){

    }else{    
        return alert("Введіть число");
    }
    if(display.value != 0){
        display.value += "/";
    }else{
        return alert("Введіть число");
    }
    if(symbols == 0){
        number = num1;
        displayTo.value = 0;
    }
    if(symbols == 1 || symbols == 2){
        multiDivision = num2;
        displayTo.value = 0;
    }
    if(symbols == 3){
    var multiplication = multiDivision * num2;
        if(plusMinus == 1){
            var multiPlus = multiplication + number;
            number = multiPlus;
        }
        if(plusMinus == 2){
            var multiMinus = number - multiplication;
            number = multiMinus;
        }
        plusMinus = 0;
}
        
    if(symbols == 4){
        var division = number / num2;
        number = division;
        displayTo.value = 0;
    }
    symbols = 4;
}

function result(){
    var num = displayTo.value;
    var numResult = Number(num);
//plus
     if(symbols == 1){
        let result = number + numResult;
        display.value = floor(result);
        number = 0;
        symbols = 0;
    } 

//minus 
    if(symbols == 2){
        let result = number - numResult;
        display.value = floor(result);
        number = 0;
        symbols = 0;
    }

//multiplication
    if(symbols == 3){
        if(plusMinus == 0){
            let result = number * numResult;
            display.value = floor(result);
            number = 0;
            symbols = 0;
        }
        if(plusMinus == 1){
            console.log(multiDivision)
            console.log(numResult)
            let multiplication = multiDivision * numResult;
            let result = multiplication + number;
            display.value = floor(result);
            number = 0;
            symbols = 0;
        }
        if(plusMinus == 2){
            let multiplication = multiDivision * numResult;
            let result = number - multiplication;
            display.value = floor(result);
            number = 0;
            symbols = 0;
        }if(plusMinus == 3){

        }
    }

//division
    if(symbols == 4){
        if(plusMinus == 0){
            let result = number / numResult;
            display.value = floor(result);
            number = 0;
            symbols = 0;
        }
        if(plusMinus == 1){
            console.log(multiDivision)
            console.log(numResult)
            let multiplication = multiDivision / numResult;
            let result = multiplication + number;
            display.value = floor(result);
            number = 0;
            symbols = 0;
        }
        if(plusMinus == 2){
            let multiplication = multiDivision / numResult;
            let result = number - multiplication;
            display.value = floor(result);
            number = 0;
            symbols = 0;
        }if(plusMinus == 3){

        }
    }
    
    plusMinus = 0;
    display.style.color = "red";
    setTimeout(backBlack, 400);
}

function backBlack(){
    display.style.color = "black";
}

function percent(){
    var numDisp1 = display.value;
        numDisp1 = parseInt(numDisp1); 
    display.value = numDisp1 / 100;
}

function doubleZero(){
    if(display.value != 0){
        display.value += "00";
        displayTo.value += "00";
    }
}


function point(){
    if(displayTo.value == "0"){
    
        if(zero == 1){
           display.value += ".";
           displayTo.value += "."; 
        }else{
            alert("Введіть число або 0");
        }
        
    }else{
        display.value += ".";
        displayTo.value += ".";
    }
    
}

function reset(){
    symbols = 0;
    number = 0;
    display.value = 0;
    displayTo.value = 0;
    plusMinus = 0;
}

function deleteValue(){
    let str = display.value;
    let val = str.substring(0, str.length - 1);
    let strTo = displayTo.value;
    let valTo = strTo.substring(0, strTo.length - 1);

    if(str.length == 1){
        display.value = 0;
    }else{
        display.value = val;
    }
    if(strTo.length == 1){
        displayTo.value = 0;
    }else{
        displayTo.value = valTo;
    }
    
}

