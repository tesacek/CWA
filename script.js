const textElement = document.getElementById('bouncingText');
let growing = true;

const originalSize = parseFloat(window.getComputedStyle(textElement).fontSize);
const maxSize = 50; 

window.onload = function() {
  textElement.textContent = 'Nazdar';
};

function bounce() {
  let currentSize = parseFloat(window.getComputedStyle(textElement).fontSize);
  let scaleValue = 1 + (currentSize - originalSize) / originalSize;

  if (growing) {
    currentSize += 1; 
    if (currentSize >= maxSize) growing = false; 
  } else {
    currentSize -= 1;
    if (currentSize <= originalSize) growing = true; 
  }

  textElement.style.fontSize = currentSize + 'px';
  textElement.style.transform = `scale(${scaleValue})`; 
}

setInterval(bounce, 50);
