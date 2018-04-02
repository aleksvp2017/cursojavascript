class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();
        
        console.log(this._data.value);

        let negociacao = new Negociacao(
            new Date(this._data.value.replace(/-/g, ',')), 
            this._quantidade.value, 
            this._valor.value);
        
        console.log(negociacao);
    }
    
}