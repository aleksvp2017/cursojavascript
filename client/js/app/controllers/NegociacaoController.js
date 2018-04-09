class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacaoView = new NegociacaoView($('#negociacoesView'));
    }

    adicionarNegociacao(event){
        event.preventDefault();

        let negociacao = this._criarNegociacao();
        //console.log('Negociação criada: ' + DateHelper.converterDataParaTexto(negociacao.data));

        this._listaNegociacoes.adicionarNegociacao(negociacao);
        //console.log(this._listaNegociacoes.negociacoes);

        //tentando apagar tudo
        this._listaNegociacoes.negociacoes.length = 0;

        //tentando adicionar de outro jeito
        this._listaNegociacoes.negociacoes.push(this._criarNegociacao());
        //console.log(this._listaNegociacoes.negociacoes);

        this._limparFormulario();

        this._negociacaoView.update(this._listaNegociacoes);
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