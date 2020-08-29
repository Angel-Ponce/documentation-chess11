class index {
    constructor() {
      this.container = document.querySelector(".container");
      this.domElement = document.querySelector("#index");
  
      //Elements into container
      this.containerIndex = document.createElement("div");
      this.containerIndex.classList.add("index");
    }
    eventClick() {
      this.domElement.addEventListener("click", () => {
          this.container.innerHTML = "";
          this.containerIndex.innerHTML = "";
          let title = document.createElement("div");
          title.classList.add("textTitle");
          title.innerHTML = "Index.js"
          let text = document.createElement("div");
          text.classList.add("text");
          text.innerHTML = "Se utiliza para crear una instancia de un tablero de juego, con todos los compoenentes listos para funcionar."
          let codeExample = document.createElement("div");
          codeExample.classList.add("textCode");
          let arr1 = ["let board1 = new board(64);",
                    "board1.createBoard();",
                    "board1.singleGame();",
                    "board1.multiGame();"];
          this.putLinesOfCode(arr1,codeExample);
          let text2 = document.createElement("div");
          text2.classList.add("text");
          text2.innerHTML = "El constructor de la clase board necesita especificar el tamaño del tablero 64x64, también se debe indicar el inicio de creación del tablero y los modos de juego, con los métodos correspondientes";
          this.containerIndex.appendChild(title);
          this.containerIndex.appendChild(text);
          this.containerIndex.appendChild(codeExample);
          this.containerIndex.appendChild(text2);
          this.container.appendChild(this.containerIndex);
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