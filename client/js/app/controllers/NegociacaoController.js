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
        //this._listaNegociacoes = new ListaNegociacoes(modelo => this._negociacaoView.update(modelo)); 

        /*
        Essa foi uma solução que criei, usando esquema de listeneres.
        O listener recebe como parametro a funcao que deve chamar e os parametros (no caso é um só).
        A solução ainda não é a ideal pois no modelo, lista de negociacao, voce tem a lista de listeners
        e seu acionamento, que não têm nada a ver com negociações.*/
        /*this._listaNegociacoes = new ListaNegociacoes(); 
        this._listaNegociacoes.adicionarListener(
            new NegociacaoListener(modelo => this._negociacaoView.update(modelo), 
                                    [].concat(this._listaNegociacoes)));
            */
        
        /*  
        Solução via Proxy. Não precisa ter nenhum código sobre atualização de view no modelo, que fica
        mais reutilizável.
        A ideia é criar um objeto que encapsula o real, o Proxy, e interceptar as chamadas que interessam
        incluindo código de atualização da view nele. 
        O construtor do proxy recebe o objeto que se quer encapsular, e um trecho de código que será chamado
        durante algum get ou set. O detalhe é que no Javascript, uma chamada de método é sempre um get seguido
        de um aply, logo, para injetar comportamento na chamada do método, colocamos num get.
        arguments é uma variável implicita que o Javascript disponibiliza com os parametros de um método. 
        Como o get também será chamado ao setar propriedades, tem que ser checado se é um dos métodos que
        se deseja interceptar. 
        No final do get, se for uma propriedade, chama-se o get do objeto injetado, sendo uma funcao,
        retorna-se uma funcao e deve-se chamaar a do objeto injetado.
        */
        let self = this;
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), 
            {
                get: function(objeto, propriedade, proxy){
                    if (['adicionarNegociacao', 'esvaziarNegociacoes'].includes(propriedade)){
                        return function() {
                            Reflect.apply(objeto[propriedade], objeto, arguments);
                            let msg = "";
                            msg = (propriedade == "adicionarNegociacao" ? 
                                "Negociação incluída": "Negociações apagadas");
                            self._atualizarViews(msg);
                        }
                    }
                    else{
                        return Reflect.get(objeto, propriedade, proxy);    
                    }
                }
                
            });
    }

    adicionarNegociacao(event){
        event.preventDefault();

        this._listaNegociacoes.adicionarNegociacao(this._criarNegociacao());
        this._limparFormulario();
    }

    apagarNegociacoes(event){
        event.preventDefault();
        this._listaNegociacoes.esvaziarNegociacoes();
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
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagemView.update(new Mensagem(mensagem));        
    }
}