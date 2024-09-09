window.onload = fetchAdvice;

const button = document.querySelector(".btn");

button.addEventListener("click", fetchAdvice);

async function fetchAdvice(){

    try{

    const response = await fetch("https://api.adviceslip.com/advice");

    if(!response.ok){
        throw new Error("Could not fetch resource")
    }

    const data = await response.json();
    const advice = document.getElementById("advice");
    const adviceId = document.getElementById("adviceId");

    advice.textContent = '"' + data.slip.advice + '"';
    adviceId.textContent = data.slip.id;
    }
    catch(error){
    console.log(error);
    }
}