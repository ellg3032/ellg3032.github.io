const endpoint = "https://www.omdbapi.com/?apikey=21b1bf27&s=";
const endpoint2 = "https://www.omdbapi.com/?apikey=21b1bf27&t=";
const button = document.querySelector("#searchbtn");

const result1 = document.getElementById("result1");

const result2 = document.getElementById("result2");

const result3 = document.getElementById("result3");

const result4 = document.getElementById("result4");

const result5 = document.getElementById("result5");

const result6 = document.getElementById("result6");

const result7 = document.getElementById("result7");

const result8 = document.getElementById("result8");

const result9 = document.getElementById("result9");

const result10 = document.getElementById("result10");

const results = [
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
  result7,
  result8,
  result9,
  result10,
];

button.addEventListener("click", func);
addEventListener("keydown", checkKey);

function checkKey(e) {
  if (e.key == "Enter") {
    func();
  }
}

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
  try {
    const response = await fetch(endpoint + search_title);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    //console.log("original json");
    //console.log(json["Search"][3]);
    if (json["Error"]) {
      alert(json["Error"]);
    } else {
      for (let i = 0; i < 10; i++) {
        const response2 = await fetch(
          endpoint2 +
            json["Search"][i]["Title"] +
            "&y=" +
            json["Search"][i]["Year"] +
            "&type=" +
            json["Search"][i]["Type"]
        );
        const json2 = await response2.json();
        json["Search"][i] = json2;
      }
      loadresults(json);
      showresults(json);
    }
  } catch (err) {
    console.log(err);
    alert("Failed to get movie");
  }
}

function showresults(json) {
  document.getElementById("results").classList.add("shown");
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("titles").classList.add("shown");
  document.getElementById("titles").classList.remove("hidden");
  document.getElementById("titlebar").classList.add("shown");
  document.getElementById("titlebar").classList.remove("hidden");
  document.getElementById("titleh1").classList.add("shown");
  document.getElementById("titleh1").classList.remove("hidden");
  for (let i = 0; i < 10; i++) {
    if (json["Search"][i]["Error"]) {
      results[i].classList.remove("shown");
      results[i].classList.add("hidden");
    } else {
      results[i].classList.add("shown");
      results[i].classList.remove("hidden");
    }
  }
}

function loadresults(json) {
  for (let i = 0; i < 10; i++) {
    results[i].children[0].children[0].src = json["Search"][i]["Poster"];
    results[i].children[0].children[1].children[0].children[0].textContent = json["Search"][i]["Title"];
    results[i].children[0].children[1].children[1].children[0].textContent =
      json["Search"][i]["Year"];
    results[i].children[0].children[1].children[1].children[2].textContent =
      json["Search"][i]["Rated"];
    if (json["Search"][i]["Type"] == "series") {
      results[i].children[0].children[1].children[1].children[3].textContent =
        "TV Series";
      results[i].children[0].children[1].children[1].children[1].classList.add(
        "hidden"
      );
      results[
        i
      ].children[0].children[1].children[1].children[1].classList.remove(
        "shown"
      );
    } else {
      results[i].children[0].children[1].children[1].children[3].textContent =
        json["Search"][i]["Metascore"] + " Metascore";
      results[i].children[0].children[1].children[1].children[1].classList.add(
        "shown"
      );
      results[
        i
      ].children[0].children[1].children[1].children[1].classList.remove(
        "hidden"
      );
      results[i].children[0].children[1].children[1].children[1].textContent =
        json["Search"][i]["Runtime"];
    }
    results[i].children[0].children[1].children[2].children[0].textContent =
      json["Search"][i]["imdbRating"] + " Stars";
  }
}
