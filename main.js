import { OptionList } from '/OptionList.js';


document.querySelector(".menu-icon span").addEventListener("click", () => {
  var img = document.querySelector(".menu-icon span img");
  
  img.style.transform = "scale(0)";
  
  setTimeout(() => {
    img.style.transform = "scale(1)";
    if (img.src.includes("menu.svg")) {
      img.src = `/x.svg`;
    } else {
      img.src = "/menu.svg";
    }
  }, 100);
  
  
  
});


document.querySelector(".size-project-icon span").addEventListener("click", () => {
  var img = document.querySelector(".size-project-icon span img");
  
  img.style.transform = "scale(0)";
  
  setTimeout(() => {
    img.style.transform = "scale(1)";
    if (img.src.includes("grid.svg")) {
      img.src = `align-left.svg`;
      var parent = document.querySelector(".project-ul");
      if (parent.children.length > 1) {
        document.querySelectorAll(".project-card").forEach((card) => {
          card.style.width = "40vw";
        });
      } else {
        img.src = `grid.svg`;
        console.log(parent.children.length > 1)
      }
    } else {
      img.src = "/grid.svg";
      document.querySelectorAll(".project-card").forEach((card) => {
        card.style.width = "90vw";
      });
    }
  }, 100);
});





document.querySelectorAll(".project-card .project-menu-class").forEach((card) => {
  card.addEventListener("click", () => {
    var rect = card.getBoundingClientRect();
    var xPos = rect.left;
    var yPos = rect.top;
    setTimeout(() => {
      OptionList({
        0: ["edit-2.svg", "Rename"],
        1: ["delete-bin-line.svg", "Delete"],
        2: ["edit-box-line.svg", "Edit"],
        3: ["pushpin-line.svg", "Pin"]
      }, [Ts, Hs], {
        Left: xPos + "px",
        Top: yPos + "px"
      }, true);
    }, 20);
  });
});

function Ts() {
  // Tab to edit
  alert(7)
}


function Hs() {
  alert('Gs')
}



document.querySelector(".more-nav-icon span").addEventListener("click", (e) => {
  
  var BtnP = e.target.getBoundingClientRect();
  var xP = BtnP.left;
  var yP = BtnP.top;
  OptionList({
    0: ["filter.svg", "Paid"],
    1: ["filter.svg", "Unpaid"]
  }, [], {
    Top: yP + "px",
    Left: xP + "px"
  }, true);
});