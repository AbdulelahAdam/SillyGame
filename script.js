
function submitValidation(){
var result1, result2, result3, result4, result5;
result1 = document.getElementById("Number1").value;
result2 = document.getElementById("Number2").value;
result3 = document.getElementById("Number3").value;
result4 = document.getElementById("Number4").value;
result5 = document.getElementById("Number5").value;
if(result1 == 4 && result2 == 3 && result3 == 10 && result4 == 10 && result5 == 5){
    alert("Nice Job!!");
}

else{
    alert("Please answer all of them correctly!");
}

}
