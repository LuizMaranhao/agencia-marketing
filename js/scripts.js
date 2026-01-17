// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Função para mudar o fundo do header ao scrollar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = '#ffffff';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'transparent'; // Deixa o banner brilhar no topo
        }
    });

    console.log("Sistema da Agência Criativa 2.0 Iniciado!");
});