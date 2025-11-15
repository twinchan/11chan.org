const gifs = [
  '1.jpg',
  '2.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '16.jpg',
  '17.jpg'
];

let currentIndex = 0;
const gifImg = document.querySelector('.random-anime');

function updateGif() {
  gifImg.src = `/assets/prog/${gifs[currentIndex]}`;
  currentIndex = (currentIndex + 1) % gifs.length; 
}

setInterval(updateGif, 2000);

updateGif();