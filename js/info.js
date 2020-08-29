class info {
  constructor() {
    this.container = document.querySelector(".container");
    this.domElement = document.querySelector("#info");

    //Elements into container
    this.containerInfo = document.createElement("div");
    this.containerInfo.classList.add("info");
  }
  eventClick() {
    this.domElement.addEventListener("click", () => {
        this.container.innerHTML = "";
        this.containerInfo.innerHTML = "";
        let img = document.createElement("img");
        img.src = "./images/angel.jpg";
        img.id = "myPhoto";
        let text = document.createElement("div");
        text.classList.add("text");
        text.innerHTML =
            "Hola mi nombre es Angel Ponce, estudiante de ingeniería en sistemas en la Universidad San Carlos de Guatemala, tengo 19 años de edad. Me gusta desarrollar webapps y también programas desktop, algunas de mis especialidades son: Java, HTML, SCSS, JavaScript, y bases de datos relacionales en MySQL y postgreSQL. Esta es la documentación de uno de los mejores proyectos que he realizado en mi experiencia como desarrollador, se trata de un Ajedrez, el cuál realicé en web y tiene 2 diferentes tipos de modalidades de juego, para un solo jugador (juega contra la pc) y para dos jugadores (en la misma pc) en esta documentación encontrarás información acerca de los metodos y clases que utilice en el proyecto. El diseño de las piezas se lo agradezco a Dojo Estudios, una gran empresa de desarrollo gráfico, dirigida por un amigo mio.";
        let divGH  = document.createElement("div");
        divGH.classList.add("gh");
        let imgCat = document.createElement("img");
        imgCat.src = "./images/cat.png";
        let linkA = document.createElement("a");
        linkA.href = "https://github.com/Angel-Ponce/chess-11";
        linkA.target = "_blank";
        linkA.appendChild(imgCat);
        divGH.appendChild(linkA);
        this.containerInfo.appendChild(img);
        this.containerInfo.appendChild(text);
        this.container.appendChild(this.containerInfo);
        this.container.appendChild(divGH);
    });
  }

  allReady() {
    this.eventClick();
  }
}
