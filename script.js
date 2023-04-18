let resultEle = document.getElementById("result");
let btn = document.getElementById("btn");
let spinnerEle=document.getElementById("spinner");

resultEle.style.display="none";

btn.onclick = function () {
    resultEle.style.display="none";
    
    spinnerEle.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";

    let options = {
        method: "GET"
    }


    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (text) {
            let { value } = text
            
            dispalyresult(value)
        })
}


function dispalyresult(value) {
    
    setTimeout(function(){
        spinnerEle.classList.toggle("d-none");
        resultEle.style.display="block";
        resultEle.textContent = value;
    },1000)  
    
}




