function srBtn() {
  const searchI = document.getElementById("search");
  let searchValue = searchI.value;
    if (searchValue !== "") {
      window.location.href = "http://localhost:7700/spacegallery.html#:~:text=" + searchValue;
      searchI.value = "";
    } else {
      alert("Search do not empty!");
    }
}