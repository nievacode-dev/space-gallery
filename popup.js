let popUp = document.getElementById("popupAd");
function openPopup() {
  popUp.style.display = 'block';
}
function closePopup() {
  popUp.style.display = 'none';
}
window.onload = setTimeout(openPopup, 1000);