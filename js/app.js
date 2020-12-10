function Exodus() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function Leviticus() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("lev");
  var btnText = document.getElementById("levMyBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function showMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("show");
  var btnText = document.getElementById("MoreMyBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Get Accordion Elements

// buttons
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");

// Text
var text = document.querySelector("#collapseOne");
var textTwo = document.querySelector("#collapseTwo");
var textThree = document.querySelector("#collapseThree");

btnOne.addEventListener("click", function () {
  text.classList.add("show");

  textTwo.classList.remove("show");
  textThree.classList.remove('show');

  btnOne.classList.remove("collapsed");

  btnTwo.classList.add("collapsed");
  btnThree.classList.add("collapsed");
});

btnTwo.addEventListener("click", function () {
  textTwo.classList.add("show");

  btnTwo.classList.remove("collapsed");

  text.classList.remove("show");
  textThree.classList.remove('show');

  btnOne.classList.add("collapsed");
  btnThree.classList.add("collapsed");
});
btnThree.addEventListener("click", function () {
    textThree.classList.add('show');

    btnThree.classList.remove('collapsed');

    text.classList.remove('show');
    textTwo.classList.remove('show');

    btnOne.classList.add('collapsed');
    btnTwo.classList.add('collapsed');
});
