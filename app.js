'use strict';

let barcode = '';
let scanningInterval = null;

const handleBarcode = () => {
  const div = document.querySelector('#code');

  div.innerHTML = barcode;
};

document.addEventListener('keydown', (event) => {
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
    console.log({ barcode });
  }

  scanningInterval = setInterval(() => {
    barcode = '';
  }, 100);
});
