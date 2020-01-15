// Your code goes here

//mouseenter/mouseleave

let navLogo = document.querySelector(".logo-heading")
navLogo.addEventListener("mouseenter", () => {
    navLogo.style.transform ="scale(3)";
    navLogo.style.transition = "transform 0.3s"
  } )
  navLogo.addEventListener("mouseleave", function() {
    navLogo.style.transform = "scale(1)"
  })
  navLogo.addEventListener("mouseenter", () => {
    navLogo.style.color = "orange"
  } )
  navLogo.addEventListener("mouseleave", function() {
    navLogo.style.color = "black"
  })

  //stop links from refreshing page

  const stopLink = document.querySelector(".nav");

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("stopped")
})

//click

let changeImg = document.querySelector('img');
changeImg.addEventListener("click", () => {
  changeImg.src="img/fun-bus.jpg"
})

//double click

let changeImg1 = document.querySelector('img');
changeImg1.addEventListener("dblclick", () => {
  changeImg1.src="img/bus.jpg"
})

//resiz

const travel = document.querySelector(".img-content img");

window.addEventListener("resize", () => {
  travel.src = "img/travel.jpg"
});

//mouseover 

const large = document.querySelector(".content-section .text-content h2")

test.addEventListener("mouseover", function() {   
  
  large.style.fontSize = "4rem";
})