let btnHamburger = document.querySelector(".hamburger");
let navLink = document.querySelector(".nav-link")
let btnIcon = document.querySelector(".hamburger i ");

btnHamburger.addEventListener("click",(e) =>{
    e.preventDefault();
    navLink.classList.toggle("active");

      if (btnIcon.classList.contains("bi-list")) {
        btnIcon.classList.remove("bi-list");
        btnIcon.classList.add("bi-x-circle");
    } else {
        btnIcon.classList.remove("bi-x-circle");
        btnIcon.classList.add("bi-list");
    }
    

})