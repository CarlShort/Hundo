


//get the values from the page
//starts or controller function
function getValues(){
    //get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    

    //parse into inegers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
    
        //we call generateNumbers
        let numbers = generateNumbers(startValue,endValue);
        //we call displayNumbers
        displayNumbers(numbers);

    }else{
        alert("you must enter integers");
    }
}
    

//generate numbers from the startValue to the endValue
// logic functions(s)
function generateNumbers(startValue, endValue){
    
    let numbers = [];

    //We want to get all numbers from start to end
    for (let index = startValue; index <=endValue; index++) {
       
        numbers.push(index);
        
    }

    return numbers;
}

//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers){

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";
        let number = numbers[index];
        
        if(number % 2 == 0){
            className = "even";
        }else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}