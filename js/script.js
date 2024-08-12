function revealEmail() {
  const email = "larroche.ben@gmail.com";
  document.getElementById("reveal-email").outerHTML = `<span>${email}</span>`;
}

function revealTel() {
  const tel = "06 95 00 45 70";
  document.getElementById("reveal-tel").outerHTML = `<span>${tel}</span>`;
}
