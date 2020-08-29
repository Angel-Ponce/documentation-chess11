class constants {
    constructor() {
      this.container = document.querySelector(".container");
      this.domElement = document.querySelector("#constants");
  
      //Elements into container
      this.containerConstants = document.createElement("div");
      this.containerConstants.classList.add("index");
    }
    eventClick() {
      this.domElement.addEventListener("click", () => {
          this.container.innerHTML = "";
          this.containerConstants.innerHTML = "";
          let title = document.createElement("div");
          title.classList.add("textTitle");
          title.innerHTML = "constants.js"

          let text1 = document.createElement("div");
          text1.classList.add("text");
          text1.innerHTML = "No es una clase como tal, pero reserva las direcciones directas para las imágenes de las piezas y demás.";
        
          let arr1 = ["export const queenBlack = `./images/pieces/queenBlack.png`;",
          "export const kingWhite = `./images/pieces/kingWhite.png`;",
          "export const dot = `./images/pieces/selection.png`;",
          "export const empty = `./images/pieces/empty.png`;",
          "export const turnB1 = `./images/turnB1.png`;"];
          let codeExample = document.createElement("div");
          codeExample.classList.add("textCode");
          this.putLinesOfCode(arr1,codeExample);
          
          let text2 = document.createElement("div");
          text2.classList.add("text");
          text2.innerHTML = "De esta manera podemos crear una constante, que representa la dirección directa de una imagén en el proyecto, se utiliza principalmente para no estar escribiendo toda la dirección a lo largo del desarrollo del juego."

          this.containerConstants.appendChild(title);
          this.containerConstants.appendChild(text1);
          this.containerConstants.appendChild(codeExample);
          this.containerConstants.appendChild(text2);
          this.container.appendChild(this.containerConstants);
      });
    }
  
    allReady() {
      this.eventClick();
    }

    putLinesOfCode(lines,cont){
        for(let line of lines){
            let li = document.createElement("p");
            li.innerHTML = line;
            cont.appendChild(li);
        }
    }
  }
  