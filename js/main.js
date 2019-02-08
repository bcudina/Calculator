 

/*prvi dio do znaka = sluzi u javascript dokumentuza daljnje operacije,
a drugi dio povezuje js sa html dokumentom*/

var oneBtn = document.getElementById("br_one");     /*zove id broja 1 */
var twoBtn = document.getElementById("br_two");
var treeBtn = document.getElementById("br_tree");
var fourBtn = document.getElementById("br_four");
var fiveBtn = document.getElementById("br_five");
var sixBtn = document.getElementById("br_six");
var sevenBtn = document.getElementById("br_seven");
var eightBtn = document.getElementById("br_eight");
var nineBtn = document.getElementById("br_nine");
var zeroBtn = document.getElementById("br_zero");

var decimalBtn = document.getElementById("tocka");
var clearlBtn = document.getElementById("calc_clear");
var equalsBtn = document.getElementById('calc-equals');
var bekspaceBtn = document.getElementById("calc_bekspace");
    
var minusBtn = document.getElementById('calc-minus');
var divideBtn = document.getElementById('calc-dicide');
var multiplyBtn = document.getElementById('calc-multiply');
var plusBtn = document.getElementById('calc-plus');
/*ekran */
var displayValElement = document.getElementById("ekran"); 
/*zove class tipki i to brojke*/
var calcTipkeBrojke = document.getElementsByClassName("tipke_brojke");  
/*zove class tipki i to operatere*/
var calcOperatorTipke = document.getElementsByClassName("tipke_opr");
    
var displayVal = "0";   /*pocetni display uvijek pokazuje 0 */
var pendingVal;         /* 5 + 3, samo ce 3 biti prikazano, zadnja tipka*/
var evalStringArray = []; /*pretvara u stringove i automatski zbraja*/
    
/*definiramo "numberClick", pocetni disply uvijek je 0*/
var numberClick = (num) => {
    if(displayVal === "0")
        displayVal = " ";
    displayVal += num;
    displayValElement.innerText = displayVal; /*ovo je funkcija UPDATE */
};


    /*kada kliknemo na broj */

/*kada kliknemo na operater */
var updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;
    numberClick(btnText);
};


/* pocetak vezan uz tipke operacija */
/* ------------------------------------------------------------- */
var tipke_operacija = (clickObj) => {
    var operation = clickObj.target.innerHTML;
    switch (operation) {
        case "+":
            pendingVal = Number.parseFloat(displayVal);
            displayVal = "";
            displayValElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
            
        default:
            break;
    }
}

/* ------------------------------------------------------------- */

/*kada kliknemo na neki broj u class "tipke_brojke", Listener
zove funkciju "updateDisplayVal"*/
/*pitanje je mora li var biti definiran prije ili moze poslije*/
for (let i=0; i < calcTipkeBrojke.length; i++) {
    calcTipkeBrojke[i].addEventListener("click", updateDisplayVal, false);
    }
for (let i=0; i < calcOperatorTipke.length; i++) {
    calcOperatorTipke[i].addEventListener("click",updateDisplayVal, false);
    }

clearlBtn.onclick = () => {
                displayVal = '0';
                pendingVal = undefined;
                evalStringArray = [];
                displayValElement.innerHTML = displayVal;
    }

bekspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal -1);
    if (displayVal === "")
        displayVal = "0";
    displayValElement.innerText = displayVal;   
    }

decimalBtn.onclick = ()=> {                     /*var decimalBtn na click*/
    if(!displayVal.includes ("."))              /*ako je na displaju vec tocka*/
        displayVal += ".";                      /*vise od jedne*/
    displayValElement.innerText = displayVal;   /*update*/
}