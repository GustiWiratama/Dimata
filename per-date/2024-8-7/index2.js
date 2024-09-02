const inputHaram = ["undefined", "boolean"];

const input = 10;
console.log(inputHaram.includes("John"));
console.log(typeof input);

function stayHalal(array) {
  if (inputHaram.includes(array)) {
    console.log("cihuyyy");
  } else {
    console.log("yyyuhiC");
  }
}
