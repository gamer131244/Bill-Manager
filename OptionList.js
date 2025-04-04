export const OptionList = (length, functions, style, touchPoint) => {
  if (length == undefined) {
    length = {
      1: ["", "Title 1"],
      2: ["", "Title 2"],
      3: ["", "Title 3"]
    };
  }
  
  if (style == undefined) {
    style = {
      Top: "0px",
      Left: "0px"
    }
  } else {
    
  }
  
  if (functions === undefined) {
    functions = [];
  }
  
  
  var listHtml = `
    <div class="opt-wrapper">
    <div class="opt-class">
      <div class="opt-main">
        <div class="list-wrapper">
          <div class="list-class">
            <div class="list-main">
              <div class="opt-list-class">
                <div class="opt-list-main">
                  <div class="list-opt">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
  
  
  body {
    overscroll-behavior: none;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: fixed;
  }
  
  
  
  
  
  .opt-wrapper {
  position: absolute;
  top: /*Value of Touch Point Y*/ ${style.Top} ;
  left: /*Value of Touch Point X*/ ${style.Left} ;
  animation: showBar 0.2s;
  transform-origin: top;
  z-index: 9999;
}

@keyframes showBar {
  0%{
    transform: scaleY(0);
  }
}

@keyframes hideBar {
  100%{
    opacity: 0;
  }
}

.opt-class {
  background: whitesmoke;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 30vw;
  border-radius: 1vw;
  padding-left: 1vw;
  padding-right: 1vw;
  border: 0.2vw solid lightgray;
}


.list-opt {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
}

.list-opt span {
  width: 105%;
  height: 8vw;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0.2vw;
  font-size: 3vw;
  background: white;
  border-radius: 1vw;
  transition: all 0.3s;
  overflow: hidden;
}

.list-opt .opt:active span {
  background: lightgray;
}

.list-opt .opt:active {
  background: lightgray;
}


.list-opt span img {
  height: 4vw;
  width: 4vw;
  padding: 1.5vw;
}

.main-list {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}


.block-back {
  position: absolute;
  z-index: 99;
  height: 100%;
  width: 100%;
  top: 0;
}



  </style>
  
    `;
  
  
  
  var mainList = document.createElement("div");
  mainList.className = "main-list";
  mainList.innerHTML = listHtml;
  document.body.appendChild(mainList);
  var blocks = document.createElement("div");
  blocks.className = "block-back";
  document.body.appendChild(blocks);
  Object.entries(length).forEach(([key, value]) => {
    var icon = value[0];
    var title = value[1];
    var Span = document.createElement("span");
    Span.className = "opt";
    var img = document.createElement("img");
    img.src = icon;
    var titleOfList = document.createElement("span");
    var txt = document.createTextNode(title);
    titleOfList.appendChild(txt);
    Span.appendChild(img);
    Span.appendChild(titleOfList);
    document.querySelector(".list-opt").appendChild(Span);
    Span.addEventListener("click", functions[key]);
    
    
  });
  
  if (touchPoint) {
    var OptW = window.getComputedStyle(document.querySelector(".opt-wrapper")).width;
    document.querySelector(".opt-wrapper").style.left = style.Left.replace("px", "") - OptW.replace("px", "") + innerWidth / 20 + "px";
    console.log(OptW);
  } else {
    
  }
  
  

    
    document.querySelector(".block-back").addEventListener("click", () => {
      var delay = "0.2"
      document.querySelector(".opt-wrapper").style.animation = `hideBar 0.3s`;
      setTimeout(()=>{
        document.body.removeChild(mainList);
        document.body.removeChild(blocks);
      }, 300);
    });
    
  
  
  
}