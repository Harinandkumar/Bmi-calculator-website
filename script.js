function calculate(){

var height = document.getElementById("height").value;
var weight = document.getElementById("weight").value;
 var result = parseFloat(weight)/(parseFloat(height)/100)**2;

 result = result.toFixed(4);
 if(!isNaN(result)){
    document.getElementById("result").innerHTML = result;
    if(result<15.5){
        document.getElementById("resultvalue").innerHTML = result;
        document.getElementById("result").innerHTML = "You are  underweight";
    }
    else if(result < 25){
        document.getElementById("resultvalue").innerHTML = result;
        document.getElementById("result").innerHTML = " You are Healthy";
    } 
    else if(result < 30){

        document.getElementById("resultvalue").innerHTML = result;
        document.getElementById("result").innerHTML = " You are overweight";

    }
    else{
        document.getElementById("result").innerHTML = " obesity";
        document.getElementById("resultvalue").innerHTML = result;
    }
 }
}






