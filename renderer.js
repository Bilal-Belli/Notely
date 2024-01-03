const { ipcRenderer } = require('electron');

function loadPDF() {
  const pdfInput = document.getElementById('pdfInput');
  const pdfFrame = document.getElementById('pdfFrame');

  if (pdfInput.files.length > 0) {
    const filePath = pdfInput.files[0].path;
    pdfFrame.src = `file://${filePath}`;
  } else {
    alert('Please select a PDF file.');
  }
}