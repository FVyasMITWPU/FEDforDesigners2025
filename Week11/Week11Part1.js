
let parentDiv = document.querySelector(".div-border");
console.log("The parent element is:\t"+parentDiv);
console.log(parentDiv);
let firstChildDiv=parentDiv.firstElementChild;
console.log("Its first child is:\t" +firstChildDiv);
console.log(firstChildDiv);

// add firstChild and print the difference on the console

let DivPara2 = document.getElementById("Divpara2");
console.log("The Paragraph element is:\t"+DivPara2);
console.log(DivPara2);
let parentofDivPara2=DivPara2.parentElement;
console.log("Its parent element is:\t"+parentofDivPara2);
console.log(parentofDivPara2);


parentDiv.addEventListener("click", divClick);

function divClick(){
    firstChildDiv.style.background = "pink";
    parentofDivPara2.style.background = "blue";
}


const ulElements = document.querySelectorAll("ul"); // creates a node list
//const kjnfd=document.getElementsByTagName("ul"); //creates an HTMLCollection

ulElements.forEach(ulElement => {
   const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "#00FF7F";
});

const firstList = document.querySelector("ul.guestlist");

console.log(firstList);

const lastChildUL = firstList.lastElementChild;
    lastChildUL.style.backgroundColor = "yellow";


const prevSibling = lastChildUL.previousElementSibling;
    prevSibling.style.backgroundColor = "orange";

const secondList = document.querySelector("ul.picniclist");

const picChildren = secondList.children; // creates an HTMLCollection

for(let ulItem of picChildren){ // enhanced for loop or "for of" loop
    ulItem.style.fontStyle="italic"; // ALL the <p> elements will have this inline styling applied
  }

/*Array.from(picChildren).forEach(child => {
    child.style.fontStyle="italic";
});*/


