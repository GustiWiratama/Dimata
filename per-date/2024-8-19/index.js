const a = 1;
const b = 2;
const c = 3;

console.log(a);
console.log(b);
console.log(c);

let janji = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

janji
  .then((hasil) => {
    console.log("[INI HASIL]", hasil);
  })
  .catch((error) => {
    console.log("[INI ERROR]", srror);
  });

function fetchDadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error! Status: $(response.status}");
        return response.json();
      }
    })
    .then((data) => {
      console.log("Dad Joke: $(data.joke)");
    })
    .catch((error) => {
      console.error("Error fetching dad joke:", error);
    });
}
