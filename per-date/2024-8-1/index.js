// alert("helluw from external script");

const body = document.body;
const printText = body.querySelector("#print-text");
console.log("[PRINT TEXT]", printText);
const printed = document.getElementById("printed");
console.log("[PRINTED W TEXTCONTENT]", printed.textContent);

console.log("[PRINTED]", printed);
btn.addEventListener("click", () => {
  alert("larangan adalah perintah");
});
const input = document.getElementById("input");
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    alert("Pesan dikirim!");
  }
});
