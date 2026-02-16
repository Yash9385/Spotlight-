document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleBtn");
  const bulb = document.getElementById("bulb");
  const spotlight = document.querySelector(".spotlight");
  const card = document.getElementById("card");

  let on = false;

  btn.addEventListener("click", () => {
    on = !on;

    if (on) {
      spotlight.style.opacity = "1";
      card.style.opacity = "1";
      card.style.transform = "translateX(-50%) scale(1)";

      bulb.setAttribute("fill", "#fff176");
      bulb.style.filter =
        "drop-shadow(0 0 15px #fff176) drop-shadow(0 0 40px rgba(255,255,150,0.8))";

      btn.innerText = "TURN OFF";
    } else {
      spotlight.style.opacity = "0";
      card.style.opacity = "0";
      card.style.transform = "translateX(-50%) scale(0.9)";

      bulb.setAttribute("fill", "#777");
      bulb.style.filter = "none";

      btn.innerText = "LOGIN";
    }
  });
});
