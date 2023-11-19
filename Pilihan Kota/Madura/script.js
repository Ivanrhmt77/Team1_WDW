const wisataText = document.querySelector(".title-text .wisata");
const wisataForm = document.querySelector("form.wisata");
const wisataBtn = document.querySelector("label.wisata");
const kulinerBtn = document.querySelector("label.kuliner");
kulinerBtn.onclick = () => {
  wisataForm.style.marginLeft = "-50%";
  wisataText.style.marginLeft = "-50%";
};
wisataBtn.onclick = () => {
  wisataForm.style.marginLeft = "0%";
  wisataText.style.marginLeft = "0%";
};
