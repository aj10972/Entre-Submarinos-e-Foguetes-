const avanca = document.querySelectorAll('.btn-proximo');
const reiniciar = document.querySelectorAll('.btn-reiniciar');

// Função para avançar nos passos
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});

// Função para reiniciar e voltar ao primeiro passo
reiniciar.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
       
        atual.classList.remove('ativo');
        document.getElementById('passo-0').classList.add('ativo'); // Volta ao passo inicial (passo-0)
    });
});
