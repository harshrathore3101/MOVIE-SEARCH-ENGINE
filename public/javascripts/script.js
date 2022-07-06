var input = document.querySelector("#in");
input.addEventListener("input", function () {
  if (this.value.length <= 0) {
    clutter = "";
    document.querySelector("#result").innerHTML = clutter;
  } else {
    axios.get(`/drop/${this.value}`).then(function (response) {
      console.log(response.data.length);
      if (response.data.length == 0) {
        clutter = '<div class="elm"><a>Not found</a></div>';
        document.querySelector("#result").innerHTML = clutter;
      } else {
        clutter = "";
        response.data.forEach((ele) => {
            console.log(ele)
          clutter += `<div class="elm"><a  href="/read/${ele._id}" >${ele.name}</a></div>`;
        });
        document.querySelector("#result").innerHTML = clutter;
      }
    });
  }
});
