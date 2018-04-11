    class NegociacaoView extends View {

        template(modelo){
            return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody id="dadosIncluidos">
                        ${modelo.negociacoes.map (negociacao => {
                            return `
                                <tr>
                                    <td>${DateHelper.converterDataParaTexto(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                    <td>${negociacao.volume}</td>
                                </tr>
                            `
                        }).join('')}
                    </tbody>
                    <tfoot>
                        <td colspan="3"></td>
                        <td>${modelo.volumeTotal}</td>
                    </tfoot>
                </table>            
            
            `;
        }

    }