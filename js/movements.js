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

            let element1 = new Method("El método 'towerValidationAhead()' es un método recursivo que valida las posiciones frontales de una torre, recibe de parámetros: pos, la posición donde se generó el click, wayUp son las posibles restricciones de la pieza al moverse al frente, tiles como el conjunto de tiles lógicos de la clase board y staticPos que será la posición original del click",
            "export function towerValidationAhead(pos, wayUp, tiles, staticPos)");
            element1.pushElements(elements);

            let element2 = new Method("El método 'towerValidationBack()' es un método recursivo que valida las posiciones traseras de una torre, recibe de parámetros: pos, la posición donde se generó el click, wayDonw son las posibles restricciones de la pieza al moverse hacia atras, tiles como el conjutno de tiles lógicos de la clase board y staticPos que será la posición original del click",
            "export function towerValidationBack(pos, wayDown, tiles, staticPos)");
            element2.pushElements(elements);

            let element3 = new Method("El método 'towerValidationRight()' es un método recursivo que valida las posiciones derechas de una torre, recibe de parámetros: pos, la posición donde se generó el click, wayRight son las posibles restricciones de la pieza al moverse hacia atras, tiles como el conjutno de tiles lógicos de la clase board y staticPos que será la posición original del click",
            "export function towerValidationRight(pos, wayRight, tiles, staticPos)");
            element3.pushElements(elements);

            let element4 = new Method("El método 'towerValidationLeft()' es un método recursivo que valida las posiciones izquierdas de una torre, recibe de parámetros: pos, la posición donde se generó el click, wayLeft son las posibles restricciones de la pieza al moverse hacia atras, tiles como el conjutno de tiles lógicos de la clase board y staticPos que será la posición original del click",
            "export function towerValidationLeft(pos, wayLeft, tiles, staticPos)");
            element4.pushElements(elements);

            let element5 = new Method("El método 'pawnValidation()' es un método que valida las posiciones de movimiento de cualquier peón, recibe de parámetros: piece, que es la pieza donde se generó el click, tiles como el conjunto de tiles lógicos de la clase board, wayUp-wayDown-wayLeft-wayRight son las posibles restricciones que tenga un peón y staticPos será la posición original del click",
            "export function pawnValidation(piece,tiles,wayUp,wayDown,wayLeft,wayRight,staticPos)");
            element5.pushElements(elements);

            let element6 = new Method("El método 'horseValidation()' es un método que valida las posiciones de movimiento de cualquier caballo, recibe de parámetros: pos, la posición donde se generó el click, tiles como el conjunto de tiles lógicos de la clase board, y staticPos será la posición original del click",
            "export function horseValidation(pos, tiles, staticPos)");
            element6.pushElements(elements);

            let element7 = new Method("El método 'bishopValidationUL()' se encarga de validar las posiciones de movimiento de cualquier alfil que quiera avanzar hacia arriba y hacia la izquierda, recibe de parámetros: pos, la posición donde se origino el click, wayDown-wayLeft son las posibles restricciones de movimiento de la pieza, tiles como el conjunto de tiles lógicos de la clase board y staticPos es la posición original del click",
            "export function bishopValidationUL(pos, wayDown, wayLeft, tiles, staticPos)");
            element7.pushElements(elements);

            let element8 = new Method("El método 'bishopValidationUR()' se encarga de validar las posiciones de movimiento de cualquier alfil que quiera avanzar hacia arriba y hacia la derecha, recibe de parámetros: pos, la posición donde se origino el click, wayDown-wayRight son las posibles restricciones de movimiento de la pieza, tiles como el conjunto de tiles lógicos de la clase board y staticPos es la posición original del click",
            "export function bishopValidationUR(pos, wayDown, wayRight, tiles, staticPos)");
            element8.pushElements(elements);

            let element9 = new Method("El método 'bishopValidationDL()' se encarga de validar las posiciones de movimiento de cualquier alfil que quiera avanzar hacia abajo y hacia la izquierda, recibe de parámetros: pos, la posición donde se origino el click, wayUp-wayLeft son las posibles restricciones de movimiento de la pieza, tiles como el conjunto de tiles lógicos de la clase board y staticPos es la posición original del click",
            "export function bishopValidationDL(pos, wayUp, wayLeft, tiles, staticPos)");
            element9.pushElements(elements);

            let element10 = new Method("El método 'bishopValidationDR()' se encarga de validar las posiciones de movimiento de cualquier alfil que quiera avanzar hacia abajo y hacia la derecha, recibe de parámetros: pos, la posición donde se origino el click, wayUp-wayRight son las posibles restricciones de movimiento de la pieza, tiles como el conjunto de tiles lógicos de la clase board y staticPos es la posición original del click",
            "export function bishopValidationDR(pos, wayUp, wayRight, tiles, staticPos)");
            element10.pushElements(elements);

            let element11 = new Method("El método 'emtpyToDot()' es la función recursiva utilizada por los métodos descritos anteriormente, se encarga de indicarle al usuario las posicoines válidas de movimiento, realiza un cambio de propiedad innerElement en los tiles que encuentre empty o vacios los transforma en piezas de tipo 'dot'. Los parámetros que recibe son: pos, la posición que se quiere estudiar, wayArray son las posibles restricciones de la pieza, tiles como el conjunto de tiles lógicos de la clase board, recursiveFunction es la función recursiva que se volvera a llamar dependiendo las condiciones, pieceName es el nombre de la pieza principal, y staticPos será la posición original del click",
            "export function emptyToDot(pos,wayArray,tiles,recursiveFunction,pieceName,staticPos)");
            element11.pushElements(elements);

            let element12 = new Method("El método 'emtpyToDotForBishops()' cumple la misma función que el método emtpyToDot pero específicamente para los alfiles, dado que estos requieren más restricciones locales que otras piezas, los parámetros que recibe son: pos, la posición que se quiere estudiar, wayArray-wayArray2 son las posibles restricciones de la pieza, tiles como el conjunto de tiles lógicos de la clase board, recursiveFunction es la función recursiva que se volvera a llamar dependiendo las condiciones, pieceName es el nombre de la pieza principal, y staticPos será la posición original del click",
            "export function emptyToDotForBishops(pos,wayArray,wayArray2,tiles,recursiveFunction,pieceName,staticPos)");
            element12.pushElements(elements);

            let element13 = new Method("El método 'emtpyToDotForHorses()' cumple la misma función que el método emtpyToDot pero específicamente para los caballos, dado que estos requieren más restricciones y este a diferencia de los demás no es recursivo, los parámetros que recibe son: posis, las posiciones que se quieren estudiar, wayNull es un arreglo vacio solo para llenar el parámetro, tiles como el conjunto de tiles lógicos de la clase board, funNull es la función recursiva que se volvera a llamar dependiendo las condiciones (en este caso es vacía),  y staticPos será la posición original del click",
            "export function emptyToDotForHorses(posis, wayNull, tiles, funNull, staticPos)");
            element13.pushElements(elements);

            let element14 = new Method("El método 'removeDots()', es un método muy útil, se utiliza para eliminar todas las piezas de tipo 'dot' que se encuentren en el tablero cuando ya no sean necesarias, las convierte en piezas emtpy. Recibe parámtros: tiles como los tiles lógicos de la clase board",
            "export function removeDots(tiles)");
            element14.pushElements(elements);

            let element15 = new Method("El método 'seePieces()' es un método escencial en el trabajo de recursión, debido a que este delimita cuando la recursividad deberá parar, se utiliza para ver si en el camino de posiciones posibles de una pieza se encuentra alguna otra pieza diferente de empty, acá es donde se decide cuando se puede avanzar, cuando no se puede avanzar, o cuando se puede comer. Recibe parámetros: pos, la posición en la que se quiere ver, y tiles como los tiles lógicos de la clase board",
            "export function seePieces(pos, tiles)");
            element15.pushElements(elements);

            let element16 = new Method("El método 'removeVuls()' elimina todos los tiles vulnerables, un tile vulnerable es un tile que le indica al usuario cuando una pieza se puede comer, se identifica por tener el background verde. Recibe de parámetros los tiles lógicos de la clase board",
            "export function removeVuls(tiles)");
            element16.pushElements(elements);

            let element17 = new Method("El método 'removePiecesVulnerates()' hace que todas las piezas tengan su propiedad vulnerate = false, cuando una pieza es vista por un enemigo su propiedad vulnerate cambia a true y esto indica que puede ser eliminada. Los parámetros que recibe son los tiles lógicos de la clase board",
            "export function removePiecesVulnerates(tiles)");
            element17.pushElements(elements);

            let element18 = document.createElement("div");
            element18.classList.add("text");
            element18.classList.add("textFinal");
            element18.innerHTML = "Los métodos de validación para el Rey es la combinación de los métodos de validación de la torre y del alfil, pero sin recursión. Los métodos de validación de la Reina son exactamente los mismos métodos del Rey pero con recursión incluida";
            elements.push(element18);

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
    