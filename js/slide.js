

const carts = $(".cartBtn");
for (let cart of carts) {
  console.log({cart});
  cart.onclick = function () {
    cart.innerHTML = "Added";
    cart.style.background = "rgba(184, 142, 47, 1)";
    cart.style.color = "#fff";
  };
}

let watchList = $(".watchList");

function onChooseImage(index) {
  console.log(watchList[index].src);
  $("#watchZoom").attr("src", watchList[index].src);
}
