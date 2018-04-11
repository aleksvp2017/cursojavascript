class View {

    constructor(elemento){
        this._elemento = elemento;
    }

    template(modelo){
        throw new Error("Método template deve ser sobreescrito.");
    }

    update(modelo){
        this._elemento.innerHTML = this.template(modelo);
    }
}