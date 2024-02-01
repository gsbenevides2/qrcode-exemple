/**
 * Gera o QR Code com a imagem passada
 * @param {string} text Texto para gerar o QR Code
 * @param {string} imgPath Caminho da imagem
 * @returns {Promise<string>} Retorna a URL do QR Code Gerado
 */
async function generateQrCodeWithImage(text, imgPath) {
  return new Promise((resolve, reject) => {
    const fakeObje = document.getElementById("invisibleDiv");
    const qrCodeObj = new QRCode(fakeObje, {
      text: text,
      width: 250,
      height: 250,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
      logo: imgPath,
      onRenderingEnd:(options, dataUrl)=>{
        console.log({options, dataUrl})
        resolve(dataUrl);
      }
    });
  });
}
