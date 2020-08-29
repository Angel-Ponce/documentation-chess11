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
          text3.innerHTML = "El método 'createSpaceOfDeaths()' recibe como parámetros la propiedad de los tiles, puede des tileDB o tileDW, que serán los tiles lógicos para el espacio de las piezas que sean eliminadas en un juego \
          el siguiente parámetro es el elemento del DOM donde se deberán dibujar, puede ser deathBlack o deathWhite";

          let codeExample2 = document.createElement("div");
          codeExample2.classList.add("textCode");
          codeExample2.innerHTML = "createSpaceOfDeahts(tilesName,deathName)";

          let text4 = document.createElement("div");
          text4.classList.add("text");
          text4.innerHTML = "El método 'createBoard()' tiene la función de crear un tablero virtual en el DOM creando objetos de tipo tile, y de tipo piece, también se encarga de crear la alternación de los colores del tablero y acá se llama al método createSpaceOfDeaths(), para que se dibujen en el DOM al mismo tiempo, también se hace llamada al método buildTeams()";

          let codeExample3 = document.createElement("div");
          codeExample3.classList.add("textCode");
          codeExample3.innerHTML = "createBoard()";

          let elements = [title,text1,codeExample1,text2,text3,codeExample2,text4,codeExample3];
          
          let element1 = new Method("El método 'buildTeams()' tienen la tarea de construir a los equipos del ajedrez, organizar su posición y todas las propiedades innerElement de cada tile, aca se hace la llamada a initialPositions()",
                  "buildTeams()");
          element1.pushElements(elements);

          let element2 = new Method("El método 'initialPositions()' se encarga de dibujar en el DOM las piezas en el tablero con las posiciones correctas al inicio de una partida de ajedrez, también se encarga de poner las piezas tipo 'empty', también se hace la llamada al método eventClick()",
                  "initialPositions()");
          element2.pushElements(elements);

          let element3 = new Method("El método 'eventClick()' como su nombre lo indica, es el encargado de darles el oyente de acción a los tiles, para saber cuando el usuario ha dado un click en el tablero, dentro de cada evento se hace la llamada al método change()",
                  "eventClick()");
          element3.pushElements(elements);

          let element4 = new Method("El método 'change()' se encarga de realizar la validación de moviemientos y el movimiento de las piezas, claramente utiliza métodos externos para validar, pero su fin principal es que en cada click realice esta operación, también es el encargado de controlar los clicks y los turnos, recibe de parámetro un tile, para estudiar su posición y demás propiedades",
                  "change(tile)");
          element4.pushElements(elements);

          let element5 = new Method("El método 'move()' recibe 2 parámetros, la posición final y la posición inicial, pero se le pasan 2 piezas con esta información, a partir de esto, realiza un movimiento de la pieza inicial hacia la pieza final.",
                  "move(pInicial, pFinal)");
          element5.pushElements(elements);

          let element6 = new Method("El método 'validate()' recibe de parámetro una pieza, la cuál deberá estudiar para validar sus posibles movimientos en el tablero, utliza funciones externas para tal validación",
                  "validate(piece)");
          element6.pushElements(elements);

          let element7 = new Method("El método 'alternTurn()' se encarga de alternar el turno, cuando un movimiento fue aceptado, también hace otra función que es indicarle al jugador en que turno esta el juego mediante la variables turnDer y tunrIzq",
                  "alternTurn()");
          element7.pushElements(elements);

          let element8 = new Method("El método 'killed()' se encarga de la acción al eliminar una pieza, la pieza que sea eliminada pasas al espacio de muertos del tablero, y de esta transición se encarga este método. Recibe como parámetro la pieza que será eliminada",
                  "killed(death)");
          element8.pushElements(elements);

          let element9 = new Method("El método 'singleGame()' no es un método utilizado en el juego, pero sirve para darle la propiedad a un botón del DOM de cambiar el modo de juego a 'Un solo jugador', se reinicia el tablero y empieza en modal=single",
                  "singleGame()");
          element9.pushElements(elements);

          let element10 = new Method("El método 'multiGame()' realiza lo mismo que el método singleGame pero pone la propiedad modal en multi, para iniciar un nuevo juego a '2 jugadores'",
                  "multiGame()");
          element10.pushElements(elements);
        
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
    