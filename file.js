setInterval(() => {
    var date=new Date();
    var hourTime=date.getHours();
    var minTime=date.getMinutes();
    var secTime=date.getSeconds();  
    hourTimeRotation=(30*hourTime)+(minTime/2);
    minTimeRotation=(minTime*6);
    secTimeRotation=(secTime*6);
    /*Hour hand takes 12 hr, min hand takes 60min and sec hand takes 60sec to complete 360 deg.
    Therefore, 12hr=360deg => 1hr=60deg or h hr=60*h deg;
    Similarly, 60min=360 deg => 1min=6 deg or m min=6*m deg;
    and 60sec=360 deg=> 1 sec=6deg or s sec=6*s deg
    */
    hour.style.transform=`rotate(${hourTimeRotation}deg)`;
    minute.style.transform=`rotate(${minTimeRotation}deg)`;
    second.style.transform=`rotate(${secTimeRotation}deg)`;
}, 1000);