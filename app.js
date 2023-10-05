'use strict';

let barcode = '';
let scanningInterval = null;

const input = document.querySelector('input');

input.addEventListener('input', (event) => {
  event.stopPropagation();

  console.log('INPUT: ' + event.target.value);
})

const handleBarcode = () => {
  const div = document.querySelector('#code');

  div.innerHTML = barcode;
  console.log('BARCODE FINAL: ' + barcode);
};

document.addEventListener('keydown', (event) => {
  event.stopPropagation();

  if (scanningInterval) {
    clearInterval(scanningInterval);
  }

  if (event.code === 'Enter') {
    if (barcode) {
      handleBarcode();

      barcode = '';
      return;
    }
  }

  if (event.key !== 'Shift') {
    barcode += `${event.key}`;
  }

  scanningInterval = setInterval(() => {
    barcode = '';
  }, 20);
});


