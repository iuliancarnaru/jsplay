const passInputEl = document.querySelector(".input-group input");
const toggleIconEl = document.querySelector(".input-group .toggle");
const rippleEl = document.querySelector(".input-group .ripple");
const percentageBarEl = document.querySelector(".strength-percent span");
const passLabelEl = document.querySelector(".strength-label");

passInputEl.addEventListener("input", handlePassInput);
toggleIconEl.addEventListener("click", togglePassInput);

function handlePassInput(e) {
  if (passInputEl.value.length === 0) {
    passLabelEl.innerHTML = "Strength";
    addClass();
  } else if (passInputEl.value.length <= 4) {
    passLabelEl.innerHTML = "Weak";
    addClass("weak");
  } else if (passInputEl.value.length <= 7) {
    passLabelEl.innerHTML = "Not bad";
    addClass("average");
  } else {
    passLabelEl.innerHTML = "Strong";
    addClass("strong");
  }
}

function addClass(className) {
  percentageBarEl.classList.remove("weak");
  percentageBarEl.classList.remove("average");
  percentageBarEl.classList.remove("strong");

  if (className) {
    percentageBarEl.classList.add(className);
  }
}

function togglePassInput(e) {
  const type = passInputEl.getAttribute("type");

  if (type === "password") {
    passInputEl.setAttribute("type", "text");
    toggleIconEl.innerHTML = "🙈";
    rippleEl.style.cssText = `
      border-radius: 4px;
      width: 100%;
      height: 100%;
      right: 0;
      z-index: -1;
    `;

    passInputEl.style.color = "#000";
    passInputEl.style.background = "transparent";
    toggleIconEl.style.fontSize = "27px";
  } else {
    passInputEl.setAttribute("type", "password");
    toggleIconEl.innerHTML = "🐵";
    toggleIconEl.style.fontSize = "25px";
    rippleEl.style.cssText = `
      border-radius: 50%;
      width: 35px;
      height: 35px;
      right: 10px;
      z-index: 1;
    `;

    passInputEl.style.color = "#fff";
    passInputEl.style.background = "#112d37";
  }
}
