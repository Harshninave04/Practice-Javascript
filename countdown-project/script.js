// const day = document.querySelector(".days");
// const hour = document.querySelector(".hours");
// const minute = document.querySelector(".minutes");
// const second = document.querySelector(".seconds");

const countdown = () => {
  const countDate = new Date("November 04, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // How the fuck does time work ??

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculation

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".days").innerText = textDay;
  document.querySelector(".hours").innerText = textHour;
  document.querySelector(".minutes").innerText = textMinute;
  document.querySelector(".seconds").innerText = textSecond;
};

setInterval(countdown, 1000);
