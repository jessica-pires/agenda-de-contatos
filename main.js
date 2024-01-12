let form = document.getElementById('form-agenda');
let nomeContato = document.getElementById('nome-contato');
let numeroContato = document.getElementById('numero-contato');
let contatos = [];

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addContato();
    
    
})

function addContato(){
    let tbody = document.querySelector('tbody');
    let linha = document.createElement('tr');
    let colunaNome = document.createElement('td');
    colunaNome.textContent = nomeContato.value;
    
    let colunaNumero = document.createElement('td');
    colunaNumero.textContent = numeroContato.value;
    
    linha.appendChild(colunaNome);
    linha.appendChild(colunaNumero);
    
    tbody.appendChild(linha);
    nomeContato.value = ''
    numeroContato.value = ''

}




