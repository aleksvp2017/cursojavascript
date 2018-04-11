class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._negociacaoView = new NegociacaoView($('#negociacoesView'));
        this._mensagemView = new MensagensView($('#mensagensView'));

        /*Isso foi feita dessa forma, para garantir que ao alterar o modelo, a view seja automaticamente atualizada,
        sem isso o desenvolvedor precisa lembrar de chamar o _atualizarView
        É preciso passar o this, por causa do seu uso na function e no javascript this sempre depende
        do contexto, ou seja, para que quando a função seja executada, substitua o objeto correto pelo this.
        */
        this._listaNegociacoes = new ListaNegociacoes(modelo => this._negociacaoView.update(modelo));        
        
    }

    adicionarNegociacao(event){
        event.preventDefault();

        this._listaNegociacoes.adicionarNegociacao(this._criarNegociacao());
        this._limparFormulario();
        this._atualizarViews("Negociação incluída");
    }

    apagarNegociacoes(event){
        event.preventDefault();

        this._listaNegociacoes.esvaziarNegociacoes();
        this._atualizarViews("Negociações apagadas");
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
    

    _atualizarViews(mensagem){
        //this._negociacaoView.update(this._listaNegociacoes);
        this._mensagemView.update(new Mensagem(mensagem));        
    }
}