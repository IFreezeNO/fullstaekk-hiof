// Oppgave 1


document.getElementById("remove-btn").onclick = fjerntekst;

function fjerntekst() {
    document.getElementById("remove").remove()
}
// Oppgave 2

document.getElementById("change-btn").onclick = endretekst;

function endretekst() {
    document.getElementById("change").innerHTML = "Heisann";
}
// Oppgave 3

document.getElementById("input").onchange = byttinput;

function byttinput() {

    let textfromvalue =  document.getElementById("input").value;

    document.getElementById("input-text").innerHTML = textfromvalue;
}


// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

document.getElementById("write-list").onclick = lagliste;

function lagliste() {
    for (i = 0; i < myList.length; i++){
        document.getElementById("ul").innerHTML += '<li>' + myList[i] + '</li>';
    }
}

// Oppgave 5
document.getElementById("create").onclick = leggtil;

function leggtil() {
    let textfromvalue =  document.getElementById("text").value;
    let textfromdropdown = document.getElementById("select").value;

    if(textfromdropdown == "h2") {
       document.getElementById("placeholder").innerHTML += "<h2>"+textfromvalue+"</h2>"
    }else if(textfromdropdown == "h3") {
        document.getElementById("placeholder").innerHTML += "<h3>"+textfromvalue+"</h3>"
    }else if(textfromdropdown == "span") {
        document.getElementById("placeholder").innerHTML += "<span>"+textfromvalue+"</span>"        
    }else if(textfromdropdown == "p") {
        document.getElementById("placeholder").innerHTML += "<p>"+textfromvalue+"</p>"        
    }
    else {console.log("error")}
}

// Oppgave 6
document.getElementById("remove-li").onclick = fjernLi;

function fjernLi() {

   var list = document.getElementById("list");
   list.removeChild(list.childNodes[1]);

}
// Oppgave 7
document.getElementById("name").onchange = blokkerknapp;

function blokkerknapp() {
    let lengdepaatekst = document.getElementById("name").value

    if(lengdepaatekst.length > 4) {
        document.getElementById("order").disabled = true;
    } else {
        document.getElementById("order").disabled = false;
    }
}


// Oppgave 8

//Fikk hjelp av mohammed davami å løse denne oppgaven siden jeg sleit med å finne en løsning på den. 

document.getElementById("color").onclick = forskjellerMellomBarn;


const liBarn = document.querySelector(".children");
const liBarnKnapp = document.getElementById("color");
const liBarnene = liBarn.querySelectorAll("li");

function forskjellerMellomBarn() {
  let inkrement = 0;
  liBarnene.forEach((element) => {
    console.log(element.value);
    if (inkrement % 2 === 0) {
      element.style = "border: 1px solid green;";
    } else {
      element.style = "border: 1px solid red;";
    }
    inkrement++;
  });
}


