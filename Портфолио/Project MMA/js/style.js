$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".menu__item").click(function (event) {
    $(".menu__item,.menu__body,.header__burger").removeClass("active");
  });
});

//=============================SLIDER============================================
const slides = document.querySelectorAll(".slide");
for (let slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}
function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

//==============================Scroll===========================

const btnUp = {
  el: document.querySelector(".btn-up"),
  scrolling: false,
  show() {
    if (
      this.el.classList.contains("btn-up_hide") &&
      !this.el.classList.contains("btn-up_hiding")
    ) {
      this.el.classList.remove("btn-up_hide");
      this.el.classList.add("btn-up_hiding");
      window.setTimeout(() => {
        this.el.classList.remove("btn-up_hiding");
      }, 300);
    }
  },
  hide() {
    if (
      !this.el.classList.contains("btn-up_hide") &&
      !this.el.classList.contains("btn-up_hiding")
    ) {
      this.el.classList.add("btn-up_hiding");
      window.setTimeout(() => {
        this.el.classList.add("btn-up_hide");
        this.el.classList.remove("btn-up_hiding");
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 400px
      if (scrollY > 400) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector(".btn-up").onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();
//==============================Scroll end===========================
