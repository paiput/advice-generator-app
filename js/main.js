const adviceIdEle = document.getElementById("advice-id");
const adviceEle = document.getElementById("advice");
const adviceButton = document.getElementById("advice-button");

// window.onload = getAdvice(117);

adviceButton.addEventListener("click", function() {
  adviceButton.classList.toggle("animate");
  getRandomAdvice();
});

async function getRandomAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const { advice, id } = data.slip;
  adviceIdEle.innerText = id;
  adviceEle.innerText = advice;
}

async function getAdvice(id) {
  const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
  const data = await response.json();
  if (data.slip) {
    const { advice, id } = data.slip;
    adviceIdEle.innerText = id;
    adviceEle.innerText = advice;
  } else {
    getRandomAdvice();
  }
}
