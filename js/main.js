document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
                speed: 1000
            });
        }
    });
});

const toggleMenu = () => {
  document.getElementById("mobile").classList.toggle("active");
  document.body.classList.toggle("lock");
};
function toggleCatalog() {
    if (window.matchMedia('(max-width: 1023px)').matches) {
        document.getElementById("catalogMobile").classList.toggle("active");
        document.body.classList.toggle("lock");
    } 
}
const swiper = new Swiper("#heroSwiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: "#heroPagination",
    clickable: true,
  },
});
const review = new Swiper("#reviewSwiper", {
  direction: "horizontal",
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

function closeAllSelects(except) {
  document.querySelectorAll(".options-container").forEach((container) => {
    if (container !== except) {
      container.style.display = "none";
      container.previousElementSibling.classList.remove("open");
    }
  });
}

/* */

document.querySelectorAll(".selected-value1").forEach((selectedValue) => {
  selectedValue.addEventListener("click", function (event) {
    var optionsContainer = this.nextElementSibling;
    closeAllSelects(optionsContainer);
    optionsContainer.style.display =
      optionsContainer.style.display === "block" ? "none" : "block";
    this.classList.toggle("open");
    event.stopPropagation();
  });
});

document.querySelectorAll(".option1").forEach((item) => {
  item.addEventListener("click", function () {
    var selectedValue =
      this.closest(".custom-select1").querySelector(".selected-value1");
    selectedValue.innerHTML =
      this.textContent +
      ` <img src="assets/svg/arrow.svg" class="arrow" alt="">`;
    selectedValue.classList.remove("open");
    this.parentElement.style.display = "none";

    document.querySelectorAll(".option1").forEach((option) => {
      option.classList.remove("active");
    });
    this.classList.add("active");
  });
});
//
document.querySelectorAll(".selected-value2").forEach((selectedValue) => {
  selectedValue.addEventListener("click", function (event) {
    var optionsContainer = this.nextElementSibling;
    closeAllSelects(optionsContainer);
    optionsContainer.style.display =
      optionsContainer.style.display === "block" ? "none" : "block";
    this.classList.toggle("open");
    event.stopPropagation();
  });
});

document.querySelectorAll(".option2").forEach((item) => {
  item.addEventListener("click", function () {
    var selectedValue =
      this.closest(".custom-select2").querySelector(".selected-value2");
    selectedValue.innerHTML =
      this.textContent +
      ` <img src="assets/svg/arrow.svg" class="arrow" alt="">`;
    selectedValue.classList.remove("open");
    this.parentElement.style.display = "none";

    document.querySelectorAll(".option2").forEach((option) => {
      option.classList.remove("active");
    });
    this.classList.add("active");
  });
});

document.addEventListener("click", function (event) {
  if (
    !event.target.matches(".selected-value") &&
    !event.target.matches(".option")
  ) {
    closeAllSelects();
  }
});
/**/

function toggleModal(){
    let modal = document.querySelector(".modal");
    modal.classList.add("active");
    console.log("toggleModal вызвана");
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.toggle("active");
        }
    }
}
function closeModal(){
  let modal = document.querySelector(".modal");
  modal.classList.toggle("active");
}


document.querySelectorAll('.catalog__block-item .btn-b').forEach(button => {
  button.addEventListener('click', function(event) {
      openModalWithData(event); // Передаем объект события
      toggleModal();
  });
});
document.querySelectorAll('.catalog__block-item .btn-w').forEach(button => {
  button.addEventListener('click', function(event) {
      console.log('btn-w clicked'); // Для отладки
      openModalWithData2(event);
      toggleModal();
  });
});
function openModalWithData(event) {
  let parentBlock = event.target.closest('.catalog__block-item');

  let title = parentBlock.querySelector('h2').innerText;
  let category = parentBlock.closest('.catalog__block-content').querySelector('p').innerText;


  let modalNameField = document.querySelector('#modal .selected-value2');
  let modalCategoryField = document.querySelector('#modal .selected-value1');
  if (modalNameField) modalNameField.innerHTML = title;
  if (modalCategoryField) modalCategoryField.innerHTML = category;
}
function openModalWithData2(event) {
  console.log('Обработчик события вызван');
  let parentBlock = event.target.closest('.catalog__block-item');

  let title = parentBlock.querySelector('h2').innerText;
  let category = parentBlock.closest('.catalog__block-content').querySelector('p').innerText;


  let modalNameField = document.querySelector('.modal .selected-value2');
  let modalCategoryField = document.querySelector('.modal .selected-value1');
  if (modalNameField) modalNameField.innerHTML = title;
  if (modalCategoryField) modalCategoryField.innerHTML = category;
}
