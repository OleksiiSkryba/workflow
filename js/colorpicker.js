 let hue = +(localStorage.getItem("hue"));
hue?document.documentElement.style.setProperty("--h", hue): hue = 247;

const dialogElem = document.getElementById("dialog");
const serchElem = document.getElementById("serch-dialog");
const showBtn = document.getElementById("show-dialog");
const serchBtn = document.getElementById("show-serch");
const closeBtn = document.querySelector(".close");
const saveBtn = document.getElementById("save");
const resetBtn = document.getElementById("reset");


serchBtn.addEventListener("click", () => {
    serchElem.show();
    serchBtn.style.display="none"
  });

// Farbe aus ColorPicker auslesen

var theInputH = document.getElementById("hue");
var theInputS = document.getElementById("saturation");
var theInputL = document.getElementById("lightness");
var theInputA = document.getElementById("alfa");

theInputH.value = hue;


theInputH.addEventListener(
  "input",
  function () {
    var theColorH = theInputH.value;
    document.getElementById("h_value").innerHTML = theColorH;
    document.documentElement.style.setProperty("--h", theColorH);
  },
  false
);

theInputS.addEventListener(
  "input",
  function () {
    var theColorS = theInputS.value;
    document.getElementById("s_value").innerHTML = theColorS;
    document.documentElement.style.setProperty("--s", theColorS);
  },
  false
);

theInputL.addEventListener(
  "input",
  function () {
    var theColorL = theInputL.value;
    document.getElementById("l_value").innerHTML = theColorL;
    document.documentElement.style.setProperty("--l", theColorL);
  },
  false
);

theInputA.addEventListener(
  "input",
  function () {
    var theColorA = theInputA.value;
    document.getElementById("a_value").innerHTML = theColorA;
    document.documentElement.style.setProperty("--a", theColorA);
  },
  false
);
  
saveBtn.addEventListener("click", () => {
  localStorage.setItem("hue", theInputH.value);
});

resetBtn.addEventListener("click", (e)=> {
  document.documentElement.style.setProperty("--h", 247);
  localStorage.removeItem("hue");
});

showBtn.addEventListener("click", (e) => {
  dialogElem.open?dialogElem.close():dialogElem.show()
  });

closeBtn.addEventListener("click", () => {
    serchElem.close();
    serchBtn.style.display="block"
  });