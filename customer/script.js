var arr = [];

function save(){

var a = {

name: document.getElementById("name").value,
id: document.getElementById("id").value,
prname: document.getElementById("prname").value,
qty: document.getElementById("qty").value,
price: document.getElementById("price").value

};

arr.push(a);

}

function show(){

var html = "";

for(var i in arr){

var n = parseInt(i) + 1;

var amount = parseFloat(arr[i].qty) * parseFloat(arr[i].price);

var discount = amount * 0.15;

var total = amount - discount;

html += "<tr>";

html += "<td>"+n+"</td>";
html += "<td>"+arr[i].name+"</td>";
html += "<td>"+arr[i].id+"</td>";
html += "<td>"+arr[i].prname+"</td>";
html += "<td>"+arr[i].qty+"</td>";
html += "<td>"+arr[i].price+"</td>";
html += "<td>"+discount+"</td>";
html += "<td>"+amount+"</td>";
html += "<td>"+total+"</td>";

html += "</tr>";

}

document.getElementById("tbl").innerHTML = html;

}

function reset(){

document.getElementById("name").value="";
document.getElementById("id").value="";
document.getElementById("prname").value="";
document.getElementById("qty").value="";
document.getElementById("price").value="";

}