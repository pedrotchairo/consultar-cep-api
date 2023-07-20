function consultaEndereco(){

    let cep = document.querySelector('#cep').value

    if(cep.length !== 8){
        alert('Cep Inválido!!');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarEndereco(data)
        })
    })
}

function mostrarEndereco(dados){
    let resultado = document.querySelector('#res');

    resultado.innerHTML = 
    `<p>Endereço: ${dados.logradouro}</p>
    <p>Localidade: ${dados.localidade}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>UF: ${dados.uf}</p>
    <p>DDD: ${dados.ddd}</p>`
    
}