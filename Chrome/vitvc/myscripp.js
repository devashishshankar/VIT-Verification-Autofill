var x=document.getElementsByTagName("font");
var con=x[5].textContent;
for(var i=0;i<7;i++)
{
con=con.replace(' ','');
}

var x=document.getElementsByTagName("input");
x[2].value=con.substr(7,6);







