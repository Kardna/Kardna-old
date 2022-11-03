function loader() {
    var x = document.getElementById("loader");
    if (x.style.display === "none") {
      x.style.display = "block";
      console.log('Showing-Loader')
    } else {
      x.style.display = "none";
      console.log('Hiding-Loader')
    }
  }