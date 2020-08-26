'use strict';
let main = document.querySelector('main');
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
    newElem.textContent = prompt('Введите текст');
  } else if (this.selector[0] === '#') {
    newElem = document.createElement('p');
    newElem.id = this.selector.slice(1);
    newElem.textContent = prompt('Введите текст');
  }
  newElem.style.cssText = `height: ${this.height};
  width: ${this.width};
  background: ${this.bg};
  fontSize: ${this.fontSize};`;

  return newElem;
};
let elem1 = new DomElement('.block', '30px', '100%', 'grey', '20px');
main.append(elem1.createElem());
let elem2 = new DomElement('#block', '30px', '50%', 'yellow', '16px');
main.append(elem2.createElem());
