class piece {
    constructor() {
      this.container = document.querySelector(".container");
      this.domElement = document.querySelector("#piece");
  
      //Elements into container
      this.containerPiece = document.createElement("div");
      this.containerPiece.classList.add("index");
    }
    eventClick() {
      this.domElement.addEventListener("click", () => {
          this.container.innerHTML = "";
          this.containerPiece.innerHTML = "";

          let title = document.createElement("div");
          title.classList.add("textTitle");
          title.innerHTML = "piece.js";

          let text1 = document.createElement("div");
          text1.classList.add("text");
          text1.innerHTML = "La clase piece es una de la más fundamentales, define las propiedades de lo que es una pieza de ajedrez, tales como su equipo, el nombre de la pieza, la posición en la que se encuentra, la imagen que la representa y el estado vulnerable de la misma";

          let codeExample1 = document.createElement("div");
          codeExample1.classList.add("textCode");
          let arr1 = ["export class piece {",
                    "--constructor(name, team, pos) {",
                    "----this.name = name;",
                    "----this.team = team;",
                    "----this.image = topic.empty;",
                    "----this.pos = pos;",
                    "----this.vulnerate = false;",
                    "----this.chooseImage();",
                    "}"];
          this.putLinesOfCode(arr1,codeExample1);

          let text2 = document.createElement("div");
          text2.classList.add("text");
          text2.innerHTML = "El metodo chooseImage() es un método que utiliza el la propiedad name del objeto para escoger su imagen, acá se hace uso del arhivo constants.js siendo importado como topic."

          let codeExample2 = document.createElement("div");
          codeExample2.classList.add("textCode");
          codeExample2.innerHTML = "chooseImage()";

          let text3 = document.createElement("div");
          text3.classList.add("text");
          text3.innerHTML = "El método no recibe ningún parametro, dado que utiliza directamente la propiedad name";

          let codeExample3 = document.createElement("div");
          codeExample3.classList.add("textCode");
          let arr3 = [`if (this.team == "black") {`,
                     `--if (this.name == "tower") {`,
                     `----this.image = topic.towerBlack;`,
                        "..."];
          this.putLinesOfCode(arr3,codeExample3);

          this.containerPiece.appendChild(title);
          this.containerPiece.appendChild(text1);
          this.containerPiece.appendChild(codeExample1);
          this.containerPiece.appendChild(text2);
          this.containerPiece.appendChild(codeExample2);
          this.containerPiece.appendChild(text3);
          this.containerPiece.appendChild(codeExample3);
          this.container.appendChild(this.containerPiece);

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