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

          
          let elements = [title,text1];
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
    