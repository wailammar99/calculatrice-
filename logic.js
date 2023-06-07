function afficher (value)
{
   
        

var ecrant =document.getElementById("ecrant");
ecrant.value +=value ;





}
function c ()
{
var ecranr =document.getElementById("ecrant");
ecranr.value="";
}
function equ () //calcule
{

var ecranr =document.getElementById("ecrant");
var mo3adla =ecranr.value ;

var result = eval(mo3adla);
ecranr.value=result ;


}


ecranr.value=sum;


function opsum ()
{
var ecranr =document.getElementById("ecrant"); //write +
var op = document.getElementById("op");

ecranr.value+="+";
}
function opmoi ()
{
var ecranr =document.getElementById("ecrant"); //wrtite -
var op = document.getElementById("-");

ecranr.value+="-";}
function opmul () //wrtrite *
{
var ecranr =document.getElementById("ecrant"); 
var op = document.getElementById("*");

ecranr.value+="*";}
function opmex () //wrtite /
{
var ecranr =document.getElementById("ecrant");
var op = document.getElementById("/");

ecranr.value+="/";}
function del () // remove last number 
{
var ecranr =document.getElementById("ecrant");
var updatedStr = ecranr.value.slice(0, ecranr.value.length - 1);
ecranr.value=updatedStr ;
}
function err ()
{}
{
ecranr =document.getElementById("ecrant");
var text = ecranr.value ;
if (text.indexOf("**"))
{
alert("error");
del() ;
}
}