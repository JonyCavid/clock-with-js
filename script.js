// Comments for Hasan Eyvazoff


function currentTime() {
    var date = new Date(); /* Date class obyektinin yaradılması*/
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /*div-ə vaxt əlavə edirik */
      var t = setTimeout(function(){ currentTime() }, 1000); /* taymerin qurulması */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* prosesi başlamaq üçün currentTime() funksiyasını çağırıriq */