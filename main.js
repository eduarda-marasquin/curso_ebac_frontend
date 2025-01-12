const form = document.getElementById('formulario');

function comparaAB(a,b){
    return Number(b)>Number(a);
}

form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();

    const numeroA = document.getElementById('number-a');
    const numeroB = document.getElementById('number-b');
    const mensagemSucesso = 'Formulário enviado com sucesso!';
    const mensagemErro = 'O número A deve ser menor que o número B!'

    formValido = comparaAB(numeroA.value, numeroB.value);

    if(formValido){
        const containerMensagemSucesso = document.querySelector('.message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    }
    else{
        const containerMensagemErro = document.querySelector('.message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
})
