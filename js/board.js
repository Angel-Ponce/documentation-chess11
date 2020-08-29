class board {
    constructor() {
      this.container = document.querySelector(".container");
      this.domElement = document.querySelector("#board");
  
      //Elements into container
      this.containerBoard = document.createElement("div");
      this.containerBoard.classList.add("index");
    }
    eventClick() {
      this.domElement.addEventListener("click", () => {
          this.container.innerHTML = "";
          this.containerBoard.innerHTML = "";

          let title =  document.createElement("div");
          title.classList.add("textTitle");
          title.innerHTML = "board.js";

          let text1 = document.createElement("div");
          text1.classList.add("text");
          text1.innerHTML = "La clase board literalmente hace referencia al tablero de juego, en donde se desarrolla toda la lógica y manipulación del mismo.";

          let codeExample1 = document.createElement("div");
          codeExample1.classList.add("textCode");
          let arr1 = ["export class board {",
                    "--constructor(size) {",
                    "----this.size = size;",
                    `----this.main = document.querySelector(".main");`,
                    `----this.deathBlack = document.querySelector("#blacks");`,
                    `----this.deathWhite = document.querySelector("#whites");`,
                    `----this.singleplayer = document.querySelector(".singleplayer");`,
                    `----this.multiplayer = document.querySelector(".multiplayer");`,
                    `----this.turnDer = document.querySelector("#der");`,
                    `----this.turnIzq = document.querySelector("#izq");`,
                    `----this.tiles = [];`,
                    "----this.tilesDB = [];",
                    "----this.tilesDW = [];",
                    "----this.wayDown = [0, 1, 2, 3, 4, 5, 6, 7];",
                    "----this.wayUp = [56, 57, 58, 59, 60, 61, 62, 63];",
                    "----this.wayLeft = [0, 8, 16, 24, 32, 40, 48, 56];",
                    "----this.wayRight = [7, 15, 23, 31, 39, 47, 55, 63];",
                    "----this.click = 0;",
                    "----this.pInicial;",
                    "----this.pFinal;",
                    "----this.turn = 'white';",
                    "----this.modal = 'multi';","}"];
          this.putLinesOfCode(arr1,codeExample1);

          let text2 = document.createElement("div");
          text2.classList.add("text");
          text2.innerHTML = "Esta clase tiene más propiedades del DOM que las demás, debido a que por ser el tablero principal del juego necesita acceso a los elementos principales del index.html, de manera que la lógica pueda reservarse en esta clase. \
          También guarda propiedades mismas del juego, tal como los límites de restricción para algunas piezas, la modalidad del juego, el control de clicks, el control de intercambio de pieza al movimiento, etc.";
          
          let text3 = document.createElement("div");
          text3.classList.add("text");
          text3.innerHTML = "El método 'createSpaceOfDeaths' recibe como parámetros la propiedad de los tiles, puede des tileDB o tileDW, que serán los tiles lógicos para el espacio de las piezas que sean eliminadas en un juego \
          el siguiente parámetro es el elemento del DOM donde se deberán dibujar, puede ser deathBlack o deathWhite";

          let codeExample2 = document.createElement("div");
          codeExample2.classList.add("textCode");
          codeExample2.innerHTML = "createSpaceOfDeahts(tilesName,deathName)";

          let elements = [title,text1,codeExample1,text2,text3,codeExample2];
          this.putElementsOnContainers(elements,this.containerBoard);
          this.container.appendChild(this.containerBoard);
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
    