document.addEventListener('DOMContentLoaded', () => {	
  const images = [
    { src: './assets/images/hero.png', alt: 'Carros de corrida saindo da garagem' },
    { src: './assets/images/hero2.jpg', alt: 'Carro de corrida na pista' },
    { src: './assets/images/hero3.jpg', alt: 'Carros de corrida disputando' },
    { src: './assets/images/hero4.jpeg', alt: 'Carros de corrida disputando' },
  ];
  const img = document.getElementById('imagemPrincipal');
  let counter = 0;
  const mudar = () => {
      img.src = images[counter].src;
      img.alt = images[counter].alt;
  
      if (counter < images.length - 1) {
        counter++;
      } else {
        counter = 0;
      }
    setTimeout(() => {
      mudar();
    }, 3500);
  }

  mudar();
});