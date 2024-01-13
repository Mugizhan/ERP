document.addEventListener("DOMContentLoaded",()=>{


var m1 = parseInt(document.getElementById("m1").innerText);
var m2 = parseInt(document.getElementById("m2").innerText);
var m3 = parseInt(document.getElementById("m3").innerText);
var math = m1+m2+m3;

var d1 = parseInt(document.getElementById("d1").innerText);
var d2 = parseInt(document.getElementById("d2").innerText);
var d3 = parseInt(document.getElementById("d3").innerText);
var dbms = d1+d2+d3;

var ds1 = parseInt(document.getElementById("ds1").innerText);
var ds2 = parseInt(document.getElementById("ds2").innerText);
var ds3 = parseInt(document.getElementById("ds3").innerText);
var ds = ds1+ds2+ds3;

var se1 = parseInt(document.getElementById("se1").innerText);
var se2 = parseInt(document.getElementById("se2").innerText);
var se3 = parseInt(document.getElementById("se3").innerText);
var se = se1+se2+se3;

var p1 = parseInt(document.getElementById("p1").innerText);
var p2 = parseInt(document.getElementById("p2").innerText);
var p3 = parseInt(document.getElementById("p3").innerText);
var py = p1+p2+p3;

var a1 = parseInt(document.getElementById("a1").innerText);
var a2 = parseInt(document.getElementById("a2").innerText);
var a3 = parseInt(document.getElementById("a3").innerText);
var mad = a1+a2+a3;


var totmarks=[];
totmarks[1]=math;
totmarks[2]=dbms;
totmarks[3]=ds;
totmarks[4]=se;
totmarks[5]=py;
totmarks[6]=mad;


let i=0;
for(k in totmarks){ 
    var row = document.getElementById(i+1); 
    var col = document.createElement("td");
    col.innerText=totmarks[i+1];
    row.appendChild(col);
    i++;
    
}

});
