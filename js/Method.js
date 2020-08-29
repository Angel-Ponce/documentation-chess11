class Method{
    constructor(text,method){
        this.text = document.createElement("div");
        this.text.classList.add("text");
        this.text.innerHTML = text;

        this.code = document.createElement("div");
        this.code.classList.add("textCode");
        this.code.innerHTML = method;

        this.retorno = [this.text,this.code];
    }

    pushElements(where){
        where.push(this.text,this.code);
    }
}