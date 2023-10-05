'use strict';

let barcode = '';
let scanningInterval = null;

const handleBarcode = (barcodeFinal) => {
  const div = document.querySelector('#code');

  div.innerHTML = barcodeFinal;
  console.log('BARCODE FINAL: ' + barcodeFinal);
};

document.addEventListener('keydown', (event) => {
  input.blur();

  if (scanningInterval) {
    clearInterval(scanningInterval);
  }

  console.log('typing!')

  if (event.code === 'Enter') {
    if (barcode) {
      handleBarcode(barcode);

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


