const endpoint = "https://www.omdbapi.com/?apikey=21b1bf27&t=";
const button = document.querySelector("#please");
const clear_storage = document.getElementById("clear_data");
const img = document.getElementById("PosterImg");

button.addEventListener("click", func);
clear_storage.addEventListener("click", clear_data);

window.addEventListener("load", function () {
  const currentposter = localStorage.getItem("current_poster");
  img.src = currentposter;
});

async function func() {
  let title = document.getElementById("search").value;
  let search_title = "";
  for (let i = 0; i < title.length; i++) {
    if (title[i] == " ") {
      search_title += "+";
    } else {
      search_title += title[i];
    }
  }
  console.log(search_title);
  try {
    const response = await fetch(endpoint + search_title);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    if (json["Error"]) {
      alert(json["Error"]);
    } else {
      img.src = json["Poster"];
      localStorage.setItem("current_poster", json["Poster"]);
    }
  } catch (err) {
    console.log(err);
    alert("Failed to get movie");
  }
}

function clear_data() {
  localStorage.clear;
}
