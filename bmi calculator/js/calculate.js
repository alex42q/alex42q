function calc(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var submit = document.getElementById("submit");
    var result = document.getElementById("result"); 

    var bmi = weight/(height * height);

    if(bmi<=18.5){
        var apo = result.innerText = "underweight";
    }else if(bmi>= 18.5 && bmi<=24.9){
        var apo =result.innerText = "normal";
    }else if(bmi>=25 && bmi<=29.9){
        var apo =result.innerText = "overweight";
    }else if(bmi>=30){
        var apo =result.innerText = "obesity";
    }
    result.innerText ="your BMI is "+ Math.floor(bmi) + ", " + " and your weight is " + apo;
    console.log(bmi)
}



