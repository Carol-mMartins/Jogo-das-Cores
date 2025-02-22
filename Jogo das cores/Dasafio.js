let contador = 0

const botao = document.getElementById('botao');
const botaoEnviar = document.getElementById('enviar');
const botaoDefault = document.getElementById('default');
const contadorDisplay = document.getElementById('contador');
const inputTexto = document.getElementById('texto'); 

botao.addEventListener('click', ()=> {
    const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = corAleatoria;

    contador++;
    contadorDisplay.textContent = `A cor foi mudada ${contador} vezes!`;
});

botaoDefault.addEventListener('click', () => {
    const corOriginal = '#261a6d';

    document.body.style.backgroundColor = corOriginal;

    contador = 0;
    contadorDisplay.textContent = `A cor foi mudada ${contador} vezes.`;
});

botaoEnviar.addEventListener('click', () => {
    const textoInput = inputTexto.value.trim();

    if (textoInput === '') {
        alert('Não seja tímido, nos conte sua cor favorita!');

        inputTexto.classList.add('erro');
        inputTexto.focus();
        
        setTimeout(() => {
            inputTexto.classList.remove('erro');
        }, 500);

    } else {
        alert('Excelente Escolha!');

        inputTexto.value = '';
    };
});