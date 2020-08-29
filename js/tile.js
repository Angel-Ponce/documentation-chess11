class tile {
    constructor() {
      this.container = document.querySelector(".container");
      this.domElement = document.querySelector("#tile");
  
      //Elements into container
      this.containerTile = document.createElement("div");
      this.containerTile.classList.add("index");
    }
    eventClick() {
      this.domElement.addEventListener("click", () => {
          this.container.innerHTML = "";
          this.containerTile.innerHTML = "";

          let title = document.createElement("div");
          title.classList.add("textTitle");
          title.innerHTML = "tile.js";

          let text1 = document.createElement("div");
          text1.classList.add("text");
          text1.innerHTML = "La clase tile también es un pilar fundamental para el juego, un tile es un elemento del DOM pero lógico, tienen información a cerca del HTML, de la pieza que contendra dentro, de la posición del tablero";

          let codeExample1 = document.createElement("div");
          codeExample1.classList.add("textCode");
          let arr1 = ["export class tile {",
                    "--constructor(pos, innerElement) {",
                    `----this.tile = document.createElement("div");`,
                    `----this.pos = pos;`,
                    "----this.tile.id = `tile-${pos}`;",
                    `----this.tile.classList.add("tile");`,
                    "----this.innerElement = innerElement;","}"];
          this.putLinesOfCode(arr1,codeExample1);

          let text2 = document.createElement("div");
          text2.classList.add("text");
          text2.innerHTML = "La propiedad innerElement hace referencia a la pieza que tiene dentro, tiene este nombre para que el codigo no fuera tan confunso en el desarrollo del juego";
          
          let text3 = document.createElement("div");
          text3.classList.add("text");
          text3.innerHTML = "El método removeInnerElement, borrara la información del DOM, en este caso, la imagen que contenga dentro";
           
          let codeExample2 = document.createElement("div");
          codeExample2.classList.add("textCode");
          codeExample2.innerHTML = "removeInnerElement()";

          let text4 = document.createElement("div");
          text4.classList.add("text");
          text4.innerHTML = "El método toEmpty tiene la función de convertir un tile en un tile contenedor de una pieza vacía, se utiliza mucho en el movimiento de las piezas y también en la eliminación de las mismas, cuando se realiza un ataque."
          
          let codeExample3 = document.createElement("div");
          codeExample3.classList.add("textCode");
          codeExample3.innerHTML = "toEmpty()";

          let elements = [title,text1,codeExample1,text2,text3,codeExample2,text4,codeExample3];
          this.putElementsOnContainers(elements,this.containerTile);
          this.container.appendChild(this.containerTile);
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

    putElementsOnContainers(arr,container){
        for(let obj of arr){
            container.appendChild(obj);
        }
    }
  }