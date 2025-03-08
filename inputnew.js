const p = document.querySelector("p");
function searchText() {
  let input = document.getElementById("newSearch").value;
  
  if (input !== "") {
    let regExp = new RegExp(input, "gi");
  p.innerHTML = (p.textContent).replace(regExp, "<mark>$&</mark>");
  } else {
    alert("No result.");
  }
}