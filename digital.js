function digitalClk(){
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var dy=date.getDay();
    var am_pm="AM"
   
    if(hh>=12)
    {
        var am_pm="PM"
        if(hh>12)
        {
            hh-=12;
        }
    }
    else{
        hh=12;
        var am_pm="AM"
    }
    if(hh==0)
    {
       hh=12;
       am_pm="AM"
    }
    if(mo==0){
        mo="జనవరి"

    }
    else if(mo==1){
        mo="ఫిబ్రవరి"
    }
    else if(mo==2){
        mo="మార్చ్"
        
    }
    else if(mo==3){
        mo="ఏప్రిల్"
    }
    else if(mo==4){
        mo="మే"
    }
    else if(mo==5){
        mo="జూన్"
    }
    else if(mo==6){
        mo="జూలై"
    }
    else if(mo==7){
        mo="ఆగస్ట్"
    }
    else if(mo==8){
        mo="సెప్టెంబర్"
    }
    else if(mo==9){
        mo="అక్టోబర్"
    }
    else if(mo==10){
        mo="నవంబర్"
    }
    else{
        mo="డిసెంబర్"
    }
    switch(6){
        case 0:dy="ఆదివారం"
        document.getElementById("b").style.backgroundImage="url(./sunday.jpg)"
        break;
        case 1:dy="సోమవారం"
        document.getElementById("b").style.backgroundImage="url(./mon.jpg)"
        break;
        case 2:dy="మంగళవారం"
        document.getElementById("b").style.backgroundImage="url(./tue.jpg)"
        break;
        case 3:dy="బుధవారం"
        document.getElementById("b").style.backgroundImage="url(./wed.jpg)"
        break;
        case 4:dy="గురువారం"
        document.getElementById("b").style.backgroundImage="url(./thur.jpg)"
        break;
        case 5:dy="శుక్రవారం"
        document.getElementById("b").style.backgroundImage="url(./fri.jpg)"
        break;
        case 6:dy="శనివారం"
        document.getElementById("b").style.backgroundImage="url(./satr.jpg)"
        break;
        

    }
    var time=`${hh}:${mm}:${am_pm}`
    document.getElementById("Time").innerHTML=time;
    document.getElementById("Sec").innerHTML=ss;
    var fullDate=`${dd}/${mo}/${yy}`
    document.getElementById("Date").innerHTML=fullDate;
    document.getElementById("Day").innerHTML=dy;
    setTimeout(digitalClk,1000);
}
function alarmWindow(){
document.getElementById("alarmWindow").style.display="flex";
}
function closeWindow(){
    document.getElementById("alarmWindow").style.display="none"
}
var alaramMuc=new Audio();
alaramMuc.src="./alarm.mp3"

function setAlarm(){
    var date = new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var am_pm="AM"

    if(hh>=12)
    {
        var am_pm="PM"
        if(hh>12)
        {
            hh-=12;
        }
    }
    else{
        hh=12;
        var am_pm="AM"
    }
    if(hh==0)
    {
       hh=12;
       am_pm="AM"
    }

    var uh=document.getElementById("hr").value
    var um=document.getElementById("min").value
    var uAm_Pm=document.getElementById("meridian").value
    // console.log(uh,um,uAm_Pm)
    // console.log(hh,mm,am_pm)
    if(uh==hh&&um==mm&&uAm_Pm==am_pm)
    
    {
        alaramMuc.play();
      document.getElementById("message").innerHTML="Alarm Ringing"
    }
    setTimeout(setAlarm,10000)


} 

function cancelAlarm(){
    var date = new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var am_pm="AM"

    if(hh>=12)
    {
        var am_pm="PM"
        if(hh>12)
        {
            hh-=12;
        }
    }
    else{
        hh=12;
        var am_pm="AM"
    }
    if(hh==0)
    {
       hh=12;
       am_pm="AM"
    }

    var uh=document.getElementById("hr").value
    var um=document.getElementById("min").value
    var uAm_Pm=document.getElementById("meridian").value
   if(uh==hh&&um==mm&&uAm_Pm==am_pm)
    {
        alaramMuc.pause();
        setTimeout(cancelAlarm)
    } 
        if(cancelAlarm())
        {
           clearTimeout(cancelAlarm)
        }
    
}