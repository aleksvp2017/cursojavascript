class MensagensView{

        constructor(elemento){
            this._elemento = elemento;
        }

        _template(modelo){
            return `<b>${modelo.texto}</b>`;
        }

        update(modelo){
            this._elemento.innerHTML = this._template(modelo);
        }


}