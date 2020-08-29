class onArray {
  constructor() {
    this.container = document.querySelector(".container");
    this.domElement = document.querySelector("#onArray");

    //Elements into container
    this.containerOnArray = document.createElement("div");
    this.containerOnArray.classList.add("index");
  }
  eventClick() {
    this.domElement.addEventListener("click", () => {
      this.container.innerHTML = "";
      this.containerOnArray.innerHTML = "";

      let title = document.createElement("div");
      title.classList.add("textTitle");
      title.innerHTML = "onArray.js";

      let text1 = document.createElement("div");
      text1.classList.add("text");
      text1.innerHTML = "Es una herramienta externa de validación, se utiliza para confirmar si un elemento se encuentra dentro de un arreglo de elementos";

      let codeExample = document.createElement("div");
      codeExample.classList.add("textCode");
      let arr1 = ["export function onArray(array, element) {",
        "--let valor = false;","--for (let it of array) {",
        "----if (element == it) {","------valor = true;",
        "----}","--}","--return valor;","}"];
      this.putLinesOfCode(arr1,codeExample);

      this.containerOnArray.appendChild(title);
      this.containerOnArray.appendChild(text1);
      this.containerOnArray.appendChild(codeExample);
      this.container.appendChild(this.containerOnArray);
    });
  }

  allReady() {
    this.eventClick();
  }

  putLinesOfCode(lines, cont) {
    for (let line of lines) {
      let li = document.createElement("p");
      li.innerHTML = line;
      cont.appendChild(li);
    }
  }
}
