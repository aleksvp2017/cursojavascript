class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adicionar(event){
        event.preventDefault();
        
        console.log(this._data.value);

        let negociacao = this.criarNegociacao();
        console.log(negociacao);

        this.limparFormulario();
        console.log(negociacao);
    }

    criarNegociacao(){
        let negociacao = new Negociacao(
            new Date(this._data.value.replace(/-/g, ',')), 
            this._quantidade.value, 
            this._valor.value);
        return negociacao;
    }

    limparFormulario(){
        this._data.value = '';
        this._quantidade = 0;
        this._valor = 0.0;
    }
    
}