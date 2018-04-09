class ListaNegociacoes{


    constructor(){
        this._negociacoes = [];
    }

    adicionarNegociacao(negociacao){
        this._negociacoes.push(negociacao);
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