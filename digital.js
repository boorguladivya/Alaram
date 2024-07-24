function digitalClk(){
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var dd = date.getDate();
    var mo = date.getMonth();
    var yy = date.getFullYear();
    var dy = date.getDay();
    var am_pm = "AM";

    if (hh >= 12) {
        am_pm = "PM";
        if (hh > 12) {
            hh -= 12;
        }
    } else if (hh === 0) {
        hh = 12;
    } else {
        am_pm = "AM";
    }

    // Ensure hours and minutes are always two digits
    hh = hh < 10 ? '0' + hh : hh;
    mm = mm < 10 ? '0' + mm : mm;
    ss = ss < 10 ? '0' + ss : ss;

    // Convert month index to month name in Telugu
    var months = ["జనవరి", "ఫిబ్రవరి", "మార్చ్", "ఏప్రిల్", "మే", "జూన్", "జూలై", "ఆగస్ట్", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"];
    var monthName = months[mo];

    // Convert day index to day name in Telugu
    var days = ["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"];
    var dayName = days[dy];

    // Set background image based on day
    var images = ["./sunday.jpg", "./mon.jpg", "./tue.jpg", "./wed.jpg", "./thur.jpg", "./fri.jpg", "./satr.jpg"];
    document.getElementById("b").style.backgroundImage = `url(${images[dy]})`;

    var time = `${hh}:${mm} ${am_pm}`;
    document.getElementById("Time").innerHTML = time;
    document.getElementById("Sec").innerHTML = ss;

    var fullDate = `${dd}/${monthName}/${yy}`;
    document.getElementById("Date").innerHTML = fullDate;
    document.getElementById("Day").innerHTML = dayName;

    setTimeout(digitalClk, 1000);
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