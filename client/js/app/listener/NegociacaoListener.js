class NegociacaoListener{


    constructor(notificarAtualizacaoNegociacao, parametros){
        this._notificarAtualizacaoNegociacao = notificarAtualizacaoNegociacao;
        this._parametros = parametros;
    }

    notificar(){
        //console.log('Listener notificado');
       // console.log(this._parametros);
        this._notificarAtualizacaoNegociacao(...this._parametros);
    }

}