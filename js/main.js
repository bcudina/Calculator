 

/*prvi dio do znaka = sluzi u javascript dokumentu za daljnje operacije,
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
var display_ekran = document.getElementById('ekran'); 
/*zove class tipki i to brojke*/
var calcTipkeBrojke = document.getElementsByClassName("tipke_brojke");  
/*zove class tipki i to operatere*/
var calcOperatorTipke = document.getElementsByClassName("tipke_operater");
    
var pocetni_ekran = "0";   /*pocetni display uvijek pokazuje 0 */
var pendingVal;         /* 5 + 3, samo ce 3 biti prikazano, zadnja tipka*/
var evalStringArray = []; /*pretvara u stringove i automatski zbraja*/

/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
    
/*definiramo "numberClick", pocetni disply uvijek je 0*/
var numberClick = (num) => {
    if(displayVal === "0")
        displayVal = " ";
    displayVal += num;
    displayValElement.innerText = displayVal; /*ovo je funkcija UPDATE */
};
var numberClick = (clickObj) => {
    if(pocetni_ekran === '0')
        pocetni_ekran = '';
    pocetni_ekran += clickObj;
    display_ekran.innerHTML = pocetni_ekran;
    };


    /*kada kliknemo na broj */

/*kada kliknemo na operater */
var update_ekran = (clickObj) => {
    let btnText = clickObj.target.innerText;
    numberClick(btnText);
    };


/* pocetak vezan uz tipke operacija */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */




var performOperation = (clickObj) => {           /*dodajemo varijabli*/
    var operation = clickObj.target.innerText;   /*koji objekt smo kliknuli*/
    
    switch (operation) {         /*u slucaju da je operator npr "+" uradi ovo*/
        case "+":
            pendingVal = Number.parseFloat(pocetni_ekran);
            pocetni_ekran = '';
            display_ekran.innerHTML = pocetni_ekran; /*update gornji red*/
            evalStringArray.push(pendingVal);
            evalStringArray.push("+");
            break;
            
        case "-":
            pendingVal = Number.parseFloat(pocetni_ekran);
            pocetni_ekran = '';
            display_ekran.innerHTML = pocetni_ekran; /*update gornji red*/
            evalStringArray.push(pendingVal);
            evalStringArray.push("-");
            break;
            
        case "*":
            pendingVal = Number.parseFloat(pocetni_ekran);
            pocetni_ekran = '';
            display_ekran.innerHTML = pocetni_ekran; /*update gornji red*/
            evalStringArray.push(pendingVal);
            evalStringArray.push("*");
            break;
            
        case "/":
            pendingVal = Number.parseFloat(pocetni_ekran);
            pocetni_ekran = '';
            display_ekran.innerHTML = pocetni_ekran; /*update gornji red*/
            evalStringArray.push(pendingVal);
            evalStringArray.push("/");
            break;
            
        case "=":
            evalStringArray.push(pocetni_ekran);
            var evaluation = eval(evalStringArray.join(""));
            pocetni_ekran = evaluation
            display_ekran.innerHTML = evaluation;
            pocetni_ekran = evaluation;
            pendingVal = pocetni_ekran;
            evalStringArray = [];
            pocetni_ekran = evaluation + '';
                    
        default:
            break;
    }
    
};


/*kada kliknemo na neki broj u class "tipke_brojke", Listener
zove funkciju "update_ekran"*/
/*pitanje je mora li var biti definiran prije ili moze poslije*/
for (var i=0; i < calcTipkeBrojke.length; i++) {
    calcTipkeBrojke[i].addEventListener("click", update_ekran, false);
    };
for (var i=0; i < calcOperatorTipke.length; i++) {
    calcOperatorTipke[i].addEventListener("click",performOperation, false);
    }


/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */


clearlBtn.onclick = () => {
    pocetni_ekran = '0';
    pendingVal = undefined;
    evalStringArray = [];
    display_ekran.innerHTML = pocetni_ekran;
    };

bekspaceBtn.onclick = () => {
    let lengthOfpocetni_ekran = pocetni_ekran.length;
    pocetni_ekran = pocetni_ekran.slice(0, lengthOfpocetni_ekran -1);    /*brise zadnji simbol*/
    if (pocetni_ekran === "")                    /*ako vise nema simbola*/
        pocetni_ekran = "0";                     /*prikazi nulu*/
    display_ekran.innerText = pocetni_ekran;   
    };

decimalBtn.onclick = ()=> {                     /*var decimalBtn na click*/
    if(!pocetni_ekran.includes ("."))           /*ako je na displaju vec tocka*/
        pocetni_ekran += ".";                   /*vise od jedne*/
    display_ekran.innerText = pocetni_ekran;    /*update*/
    };