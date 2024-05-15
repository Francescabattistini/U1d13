/* function faiCose(parametroUno, parametroDue) {
  const area = parametroUno * parametroDue;
  console.log(area);
} */
/* function richiamaIlBottone() {
  console.log(document.body);
}
richiamaIlBottone();  */ //chiama la funzione
/* const form = document.getElementById("inputContainer");
console.log(form); */
const form = document.getElementById("inputContainer");

form.addEventListener("submit", function (event) {
  // Impedisce il comportamento predefinito del modulo di inviare i dati al server
  event.preventDefault();

  // Invia il modulo
  this.submit();
});

/* const button = document.querySelector("#addButton");

button.addEventListener("click", function () {
  alert("Hai cliccato sul pulsante!");
});
 */
