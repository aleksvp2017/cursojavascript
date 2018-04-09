class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacaoView = new NegociacaoView($('#negociacoesView'));
        this._mensagemView = new MensagensView($('#mensagensView'));
    }

    adicionarNegociacao(event){
        event.preventDefault();

        this._listaNegociacoes.adicionarNegociacao(this._criarNegociacao());
        this._limparFormulario();
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagemView.update(new Mensagem("Negociação incluída com sucesso"));
    }

    _criarNegociacao(){
        let negociacao = new Negociacao(DateHelper.converterTextoParaData(this._data.value), 
            this._quantidade.value, 
            this._valor.value);
        return negociacao;
    }

    _limparFormulario(){
        this._data.value = '';
        this._quantidade.value = 0;
        this._valor.value = 0.0;
    }
    
}