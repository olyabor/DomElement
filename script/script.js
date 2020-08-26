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
  newElem.style.cssText = `height: ${this.height};
  width: ${this.width};
  background: ${this.bg};
  fontSize: ${this.fontSize};`;
  return newElem;
};

function draw (x, y) {
  this.style.cssText += `left: ${10 * x}px;
  top: ${10 * y}px;`;
}

let square = new DomElement('#block', '100px', '100px', 'lime').createElem();
square.style.cssText += `position: absolute; left: 0; top: 0;`;
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
