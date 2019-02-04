var oneBtn = document.getElementById("br_one");
var twoBtn = document.getElementById("br_two");
var treeBtn = document.getElementById("br_tree");
var fourBtn = document.getElementById("br_four");
var fiveBtn = document.getElementById("br_five");
var sixBtn = document.getElementById("br_six");
var sevenBtn = document.getElementById("br_seven");
var eightBtn = document.getElementById("br_eight");
var nineBtn = document.getElementById("br_nine");
var zeroBtn = document.getElementById("br_zero");

var decimalBtn = document.getElementById("calc_decimal");
var clearlBtn = document.getElementById("calc_clear");
var bekspaceBtn = document.getElementById("calc_bekspace");

var displayValElement = document.getElementById("ekran");

var calcNumBtns = document.getElementsByClassName("tipke_brojke");
var calcOperBtns = document.getElementsByClassName("tipke_opr");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;
    
    if(displayVal === "0")
        displayVal = " ";
    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

for (let i=0; i < calcNumBtns.lengts; i++) {
    calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}

for (let i=0; i < calcOperBtns.lengts; i++) {
    calcOperBtns[i].addEventListener("click", performOperation, false);
}




