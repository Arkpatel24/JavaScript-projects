/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//variables
var result=document.getElementById("result");

//functions
btn.onclick=function CelToFahr()
{
var num=document.getElementById("num").value;
var far=(num*9/5)+32;
result.innerHTML =far.toFixed(2) + " °F";
} 

btn2.onclick=function FahrToCel()
{
var num=document.getElementById("num").value;
var cel=(num-32)*9/5;
result.innerHTML =cel.toFixed(2) + " °C";
}

btn3.onclick=function FeetToMeter()
{
var num=document.getElementById("num").value;
var meter=num/2.381;
result.innerHTML =meter.toFixed(2) + " m";
}

btn4.onclick=function MeterToFeet()
{
var num=document.getElementById("num").value;
var feet=num*2.381;
result.innerHTML =feet.toFixed(2) + " feet";
}

btn5.onclick=function InchToCent()
{
var num=document.getElementById("num").value;
var cent=num*2.54;
result.innerHTML =cent.toFixed(2) + " cm";
}

btn6.onclick=function CentToInch()
{
var num=document.getElementById("num").value;
var inch=num/2.54;
result.innerHTML =inch.toFixed(2) + " inches";
}

btn7.onclick=function PndToKilo()
{
var num=document.getElementById("num").value;
var kilo=num/2.205;
result.innerHTML =kilo.toFixed(2) + " kg";
}

btn8.onclick=function KiloToPnd()
{
var num=document.getElementById("num").value;
var pnd=num*2.205;
result.innerHTML =pnd.toFixed(2) + " lbs";
}

function clear()
{
document.getElementById("form").reset();
}

