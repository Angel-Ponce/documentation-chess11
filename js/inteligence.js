class ingeligence {
    constructor() {
      this.container = document.querySelector(".container");
      this.domElement = document.querySelector("#inteligence");
  
      //Elements into container
      this.containerInteligence = document.createElement("div");
      this.containerInteligence.classList.add("index");
    }
    eventClick() {
      this.domElement.addEventListener("click", () => {
            this.container.innerHTML = "";
            this.containerInteligence.innerHTML = "";
            let elements = [];

            let title = document.createElement("div");
            title.classList.add("textTitle");
            title.innerHTML = "inteligence.js";
            elements.push(title);

            let text1 = document.createElement("div");
            text1.classList.add("text");
            text1.innerHTML = "El módulo inteligence.js se utiliza para la inteligencia del juego en el modo '1 jugador', cabe resaltar que para la inteligencia de las piezas también se necesita validar los movimientos, dado que no guarda jugadas diseñadas si no se acopla al juego real. \
            Utiliza todos los métodos de validacion descritos anteriormente con pequeñas modificaciones, debido que ahora se tiene mejor el control de clickeo, ya que la inteligencia la controla el programa y no el usuario, para todos los métodos de validación el cambio es que ahora las piezas inteligentes \
            no dibujaran dots ni vulnerates, simplemente atacarán o se moveran, y para saber la información de movimiento, en cada validación de una pieza, se guardan todas aquellas posiciones del tablero en las cuales se considere un movimiento válido, así que ahora todos los métodos de validación retornan un arreglo de posiciones válidas para cualquier pieza inteligente.";
            elements.push(text1);

            let text2 = document.createElement("div");
            text2.classList.add("text");
            text2.innerHTML = "";
            elements.push(text2);

            let element1 = new Method("El método 'fakeClick()' tiene la función de elegir la posición inicial y posición final de las piezas negras, para generar un movimiento inteligente. Los parámetros que recibe son: tiles como los tiles lógicos de la clase board, wayUp-wayDown-wayLeft-wayRight las posibles restricciones de movimiento que tengan las piezas inteligentes.",
            "export function fakeClick(tiles,wayUp,wayDown,wayLeft,wayRight)");
            element1.pushElements(elements);

            let element2 = new Method("El método 'secondClick' se encarga de elegir alguna posición válida de movimiento de alguna pieza inicial seleccionada por el método fakeClick(), realiza la validación de la pieza de la que se quiere saber los posibles movimientos. Parametros: tile, del elemento del que se quiere saber las posibles posiciones validas, tiles como los tiles lógicos de la clase board, wayDown-wayUp-wayLeft-wayRight son las posibles restricciones que tenga una pieza inteligente",
            "export function secondClick(tile,tiles,wayUp,wayDown,wayLeft,wayRight)");
            element2.pushElements(elements);

            this.putElementsOnContainers(elements,this.containerInteligence);
            this.container.appendChild(this.containerInteligence);
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
    