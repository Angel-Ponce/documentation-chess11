class movements {
    constructor() {
      this.container = document.querySelector(".container");
      this.domElement = document.querySelector("#movements");
  
      //Elements into container
      this.containerMovements = document.createElement("div");
      this.containerMovements.classList.add("index");
    }
    eventClick() {
      this.domElement.addEventListener("click", () => {
            this.container.innerHTML = "";
            this.containerMovements.innerHTML = "";
            let elements = [];

            let title = document.createElement("div");
            title.classList.add("textTitle");
            title.innerHTML = "movements.js";
            elements.push(title);

            let text1 = document.createElement("div");
            text1.classList.add("text");
            text1.innerHTML = "El módulo movements.js se encarga de la validación de todas las piezas, se exporta hacia la clase 'board' como la keyword 'use', de manera que todas las variables y elementos que se manejan en movements.js representan exactamente a los elementos y variables de la clase board";
            elements.push(text1);


                

            this.putElementsOnContainers(elements,this.containerMovements);
            this.container.appendChild(this.containerMovements);
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
    