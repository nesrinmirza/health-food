//change img on click
const tabimg = document.querySelectorAll(".tabcontent");
const tabs = document.querySelectorAll(".tabheader__item");

hidealltabs()

function hidealltabs() {
  tabimg.forEach((tabimg) => {
    tabimg.classList.add("hide")
  })
  tabs.forEach((tabb) => {
    tabb.classList.remove("tabheader__item_active")
  })
}

tabimg[0].classList.replace("hide", "show")
tabs[0].classList.add("tabheader__item_active")

tabs.forEach((tab, i) => {
  tab.addEventListener("click", function (e) {
    hidealltabs()
    tabimg[i].classList.replace("hide", "show")
    tabs[i].classList.add("tabheader__item_active")

  })

})


//scroll img
let current1 = 1;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

const current = document.querySelector("#current")

function currentSlide(n) {
  showSlides(slideIndex = n);
}

let prev = document.querySelector(".offer__slider-prev")
let next = document.querySelector(".offer__slider-next")
prev.addEventListener("click", function () {
  plusSlides(-1)

})

next.addEventListener("click", function () {
  plusSlides(1)

})
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("offer__slide");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

}

//Modal

const modal = document.querySelector(".modal")

const btnwhite = document.querySelector(".btn_white")
const btndark = document.querySelector(".btn_dark")
const modalclose = document.querySelector(".modal__close")

function block() {
  modal.style.display = "block";
}

function none() {
  modal.style.display = "none"
}

btnwhite.onclick = function () {
  block()
}

btndark.onclick = function () {
  block()
}


modalclose.onclick = function () {
  none()
}

window.onclick = function (event) {
  if (event.target == modal) {
    none()
  }
}

window.onscroll = function (ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    none()
  }
};


//calculator

const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const age = document.querySelector("#age")
const kkal = document.querySelector(".calculating__result span")
const female = document.querySelector("#female")
const male = document.querySelector("#male")
const inputs = document.querySelectorAll(".calculating__choose input")
const low = document.querySelector("#low");
const small = document.querySelector("#small");
const medium = document.querySelector("#medium");
const high = document.querySelector("#high");
const activity = document.querySelectorAll(".calculating__choose_big .calculating__choose-item")
const gender = document.querySelectorAll("#gender .calculating__choose-item")
const activeclass = document.querySelector(".calculating__choose-item_active")




hideactive()
// female.classList.remove("calculating__choose-item_active");

function hideactive() {
  activity.forEach((act) => {
    act.classList.remove("calculating__choose-item_active")
  })
  gender.forEach(gend => {
    gend.classList.remove("calculating__choose-item_active")
  })
}



female.addEventListener("click", function () {
  hideactive()
  female.classList.add("calculating__choose-item_active");

  let result = 0;
  height.addEventListener("input", function () {
    const heightcal = Number(height.value) * 1.850
    result = parseInt(heightcal)
    kkal.innerHTML = result

  })
  weight.addEventListener("input", function () {
    const weightcal = Number(weight.value) * 9.563
    result = parseInt(weightcal)
    kkal.innerHTML = result

  })

  age.addEventListener("input", function () {
    const agecal = Number(age.value) * 4.676
    result = result - parseInt(agecal)
    kkal.innerHTML = result

  })

  low.addEventListener("click", function () {
    hideactive()
    kkal.innerHTML = result - 161 * 1.2
    low.classList.add("calculating__choose-item_active")
  })

  small.addEventListener("click", function () {
    hideactive()
    kkal.innerHTML = result - 161 * 1.375
    small.classList.add("calculating__choose-item_active")
  })

  medium.addEventListener("click", function () {
    hideactive()
    kkal.innerHTML = result - 161 * 1.55
    medium.classList.add("calculating__choose-item_active")
  })
  high.addEventListener("click", function () {
    hideactive()
    kkal.innerHTML = result - 161 * 1.725
    high.classList.add("calculating__choose-item_active")
  })
})





male.addEventListener("click", function () {
  hideactive()
  male.classList.add("calculating__choose-item_active");
  

  let result = 0;

  height.addEventListener("input", function () {
    const heightcal = Number(height.value) * 5.003
    result = parseInt(heightcal)
    kkal.innerHTML = result

  })
  weight.addEventListener("input", function () {
    const weightcal = Number(weight.value) * 13.75
    result = parseInt(weightcal)
    kkal.innerHTML = result

  })

  age.addEventListener("input", function () {
    const agecal = Number(age.value) * 6.755
    result = result - parseInt(agecal)
    kkal.innerHTML = result

  })

  //activity

  low.addEventListener("click", function () {
    hideactive()
    kkal.innerHTML = result - 161 * 1.2
    low.classList.add("calculating__choose-item_active")
  })

  small.addEventListener("click", function () {
    hideactive()
    kkal.innerHTML = result - 161 * 1.375
    small.classList.add("calculating__choose-item_active")
  })

  medium.addEventListener("click", function () {
    hideactive()
    kkal.innerHTML = result - 161 * 1.55
    medium.classList.add("calculating__choose-item_active")
  })
  high.addEventListener("click", function () {
    hideactive()
    kkal.innerHTML = result - 161 * 1.725
    high.classList.add("calculating__choose-item_active")
  })
})