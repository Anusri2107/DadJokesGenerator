const btnEle = document.getElementById("btn");
const jokeEle = document.getElementById("joke");

const apiKey = "iV7dSygH0sAMHHPwbuCQtw==Xj8iqbWwmgHVaIZZ";

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: 'GET',
    headers: {'X-Api-Key': apiKey} 
}

async function getJoke(){
    try {
        jokeEle.innerText = "Updating....";
        btnEle.disabled = true;
        btnEle.innerText = "Loading...."

        const response =await fetch(apiURL,options);
        const data =await response.json();

        jokeEle.innerText = data[0].joke;
        btnEle.disabled=false;
        btnEle.innerHTML = "Tell me a joke";
    } catch (error) {
        jokeEle.innerText = "An error occured, try again later.";
        btnEle.innerText = "Tell me a joke";
        btnEle.disabled = false;
    }
}

btnEle.addEventListener('click',getJoke);