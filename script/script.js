'use strict';
let body = document.querySelector('body');
function DomElement (selector, height, width, bg, fontSize) {
  this.selector = selector; 
  this.height = height; 
  this.width = width; 
  this.bg = bg; 
  this.fontSize = fontSize;
}

DomElement.prototype.createElem = function () {
  let newElem;
  if (this.selector[0] === '.') {
    newElem = document.createElement('div');
    newElem.classList.add(this.selector.slice(1));
  } else if (this.selector[0] === '#') {
    newElem = document.createElement('p');
    newElem.id = this.selector.slice(1);
  }
  newElem.style.height = this.height;
  newElem.style.width = this.width;
  newElem.style.background = this.bg;
  newElem.style.fontSize = this.fontSize;
  return newElem;
};

function draw (x, y) {
  this.style.left = 10 * x + 'px';
  this.style.top = 10 * y + 'px';
}

let square = new DomElement('#block', '100px', '100px', 'lime').createElem();
square.style.position = 'absolute';
body.append(square);
let x = 0, y = 0;
window.onkeydown = (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      x--;
      draw.apply(square, [x, y]);
      break;

    case 'ArrowRight':
      x++;
      draw.apply(square, [x, y]);
      break;

    case 'ArrowDown':
      y++;
      draw.apply(square, [x, y]);
      break;

    case 'ArrowUp':
      y--;
      draw.apply(square, [x, y]);
      break;
  }
};
