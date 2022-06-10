const screen = document.querySelectorAll('.screen img');

let index = 0;

setInterval(() => {
  index === screen.length - 1 ? (index = 0) : index++;

  screen.forEach((img) => {
    img.classList.remove('ativo');
  });
  screen[index].classList.add('ativo');
}, 3000);

const btn = document.querySelector('#btn');
