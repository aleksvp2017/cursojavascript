class ListaNegociacoes{


    constructor(armadilha){
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adicionarNegociacao(negociacao){
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    esvaziarNegociacoes(){
        this._negociacoes = [];
        this._armadilha(this);
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

}