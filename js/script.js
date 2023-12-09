const countDownDate = new Date("Dec 16, 2023 00:00:00").getTime();
    const x = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var element = document.getElementById("countdown-timer");
      element.innerHTML = '';

      var day, hour, minute, second;

      day = document.createElement('div');
      hour = document.createElement('div');
      minute = document.createElement('div');
      second = document.createElement('div');
      
      day.innerHTML = days + " Օր";
      hour.innerHTML = hours + " Ժամ";
      minute.innerHTML = minutes + " Րոպե";
      second.innerHTML = seconds + " Վայրկյան";


      element.appendChild(day);
      element.appendChild(hour);
      element.appendChild(minute);
      element.appendChild(second);

      if (distance < 0) {
        clearInterval(x);  
      }
    }, 1000);