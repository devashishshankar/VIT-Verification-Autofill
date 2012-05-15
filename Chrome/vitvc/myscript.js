var x=document.getElementsByTagName("font");
var con=x[6].textContent;
for(var i=0;i<7;i++)
{
con=con.replace(' ','');
}

var x=document.getElementsByTagName("input");
x[3].value=con.substr(7,6);


var x=document.getElementsByTagName("b");





