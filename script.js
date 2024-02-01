const inputValue = document.querySelector("#inputValue");
const btnGenerate = document.querySelector("#btnGenerate");
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector(".wrapper");
const btnDownload = document.querySelector("#btnDownload");

let valueDefault;

btnGenerate.addEventListener("click", async () => {
  let qrcodeValue = inputValue.value.trim();
  if (!qrcodeValue || qrcodeValue === valueDefault) return;

  valueDefault = qrcodeValue;
  btnGenerate.innerText = "Gerando QR Code...";

  imgQrCode.src = await generateQrCodeWithImage(valueDefault, "./logo.png");

  wrapper.classList.add("active");
  btnGenerate.innerText = "Gerar QR Code";
  btnDownload.disabled = false;
});

btnDownload.addEventListener("click", () => {
  var link = document.createElement("a");
  link.href = imgQrCode.src;
  link.download = "qrcode.png";
  link.target = "_blank";
  link.click();
});
