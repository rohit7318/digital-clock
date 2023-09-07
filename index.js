// alert("Website Loaded...");

const hour = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const am = document.getElementById("ampm");



function updateClock()
{
    let hrs = new Date().getHours();
    let mnt = new Date().getMinutes();
    let scnds = new Date().getSeconds();
    let ampm = "AM";

   

   

    if(hrs>12)
    {
        hrs = hrs -12;
        ampm="PM";
    }
    if(hrs<10)
    {
        hrs = "0"+hrs;
    }
    if(mnt<10)
    {
        mnt = "0" + mnt;
    }
    if(scnds<10)
    {
        scnds = "0" + scnds;
    }
    


    hour.innerText = hrs ; 
    minutes.innerText = mnt;
    seconds.innerText = scnds;
    am.innerText = ampm;
   

    setTimeout(()=>
    {

        updateClock();
        
    },1000);

   
    

}





updateClock();



