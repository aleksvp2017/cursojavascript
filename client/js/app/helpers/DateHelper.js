class DateHelper{

    constructor(){
        throw new Error("DateHelper não pode ser instanciada, seus métodos são todos estáticos");
    }
   
    static converterTextoParaData(texto){
        DateHelper.checarFormatoTextoParaData(texto);

        return new Date(...
            texto.split('-')
            .map((item, indice) => item - indice % 2)
        );
    }

    static checarFormatoTextoParaData(texto){
        //console.log(texto);
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error("Formato da data deve ser yyyy-mm-dd");
        }
    }
    
    static converterDataParaTexto(data){
        return `$data.getDate() /  ($data.getMonth() + 1) / $data.getFullYear()`;
    
    }

    
}