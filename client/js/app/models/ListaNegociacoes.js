class ListaNegociacoes{


    constructor(){
        this._negociacoes = [];
        //this._armadilha = armadilha;
        this._listeneres = [];
    }

    adicionarNegociacao(negociacao){
        this._negociacoes.push(negociacao);
        //this._armadilha(this);
        this._notificarListenners();
    }

    esvaziarNegociacoes(){
        this._negociacoes = [];
        //this._armadilha(this);
        this._notificarListenners();
    }

    get negociacoes(){
        return Array.from(this._negociacoes);
        //ou [].concat(this._negociacoes);
    }

    get volumeTotal(){
        let volumeTotal = 0;
        this._negociacoes.forEach (negociacao => {volumeTotal += negociacao.volume;});
        return volumeTotal;
    }

    adicionarListener(listener){
        this._listeneres.push(listener);
    }

    _notificarListenners(){
        this._listeneres.forEach(
            (listener => listener.notificar())
        );
    }

}