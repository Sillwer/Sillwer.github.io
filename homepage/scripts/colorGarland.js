var base_color="#110A53"
var color1="red"
var color2="green"
var flashspeed=120
var flashingletters=8
var flashingletters2=8
var flashpause=0
var n=0
var color_text=""
message=document.getElementById("colorGarland").innerHTML;
if (document.all||document.getElementById){
    color_text='<div align="center"><font color="'+base_color+'" size="6">';
    for (m=0; m<message.length; m++) color_text+='<span id="neonlight'+m+'">'+message.charAt(m)+'</span>'
    color_text+='</font></div>'
    document.getElementById("colorGarland").innerHTML = color_text
}
else document.getElementById("colorGarland").innerHTML = message


function crossref(number){
    var crossobj=document.all? eval("document.all.neonlight"+number) :
    document.getElementById("neonlight"+number)
    return crossobj
}

function neon(){
    if (n==0){
     for (m=0;m<message.length;m++)
     crossref(m).style.color=base_color
     }
    crossref(n).style.color=color1
    if (n>flashingletters-1) { crossref(n-flashingletters).style.color=color2 }
    if (n>(flashingletters+flashingletters2)-1) {
    crossref(n-flashingletters-flashingletters2).style.color=base_color }
    if (n<message.length-1) { n++ }
    else {
     n=0
     clearInterval(flashing)
     setTimeout("start_color()",flashpause)
     return
     }
}
function start_color(){
    if (document.all||document.getElementById)
    flashing=setInterval("neon()",flashspeed)
}
start_color()