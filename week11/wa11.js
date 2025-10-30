const endpoint = "http://www.omdbapi.com/?apikey=21b1bf27&"
const button = document.querySelector("#please");

button.addEventListener("click", func);

async function func() {
    try {
        const response = await fetch(endpoint + "t=avengers");
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);
    } catch(err) {
        console.log(err);
        alert('Failed to get new trivia');
    }
}


