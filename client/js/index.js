var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

console.log(campos); //mostra no console do navegador

var volumeTotal = 0;

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); //evita que a página seja recarregada ao submeter o formulário, que é o comportamento padrão
    
    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    var tdVolume = document.createElement('td');
    var volume = campos[1].value * campos[2].value;
    tdVolume.textContent = volume;
    tr.appendChild(tdVolume);

    document.querySelector('#dadosIncluidos').appendChild(tr);
    //também poderia ser
    //document.querySelector('table tbody').appendChild(tr);

    atualizarVolumeTotal(volume);

    limparCampos();

    campos[0].focus();
  });


  function limparCampos(){
    campos[0].value = '';
    campos[1].value = 0;
    campos[2].value = 0.1;
  }

  function atualizarVolumeTotal(volume){
    var linha = document.querySelector('#volumeTotal');
    if (linha){
        linha.remove();
    }
    
    volumeTotal += volume;

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.setAttribute('id', 'volumeTotal');
    td.setAttribute('colspan', 4);
    td.setAttribute('style', 'text-align : right');
    td.textContent = volumeTotal;
    tr.appendChild(td);
    document.querySelector('#dadosIncluidos').appendChild(tr);

  }