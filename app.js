var reloj = document.getElementById("reloj");
setInterval(()=> {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    reloj.innerHTML = `${hours}:${minutes}:${seconds}`;
},1000);