function calculateDaysNeeded(){
    let inputValue = document.getElementById("pagenum").value;
    let answer = "";
    
    if (inputValue > 0 && inputValue <= 604) {
        answer = Math.round(604 / inputValue);
    }

    if (inputValue <= 0) {
        answer = "Please input a valid Number of pages. (There are only 604 pages)";
    } else if (answer < 30) {
        answer = "If you read " + inputValue + " page(s) a day, you will complete it in about " + answer + " days. Masyaallah, you can complete it in a month! Go for it.";
    } else {
        answer = "If you read " + inputValue + " page(s) a day, you will complete it in about " + answer + " days. Wow, that is not long at all. May you be consistent and khatam in time insyaallah."
    }

    document.getElementById("cardAnswer").innerHTML=answer;
}

function calculatePagesNeeded(){
    let inputValue=document.getElementById("pagenum2").value;
    let answer=Math.round(604/inputValue);
    document.getElementById("card2Answer").innerHTML=answer;
}


