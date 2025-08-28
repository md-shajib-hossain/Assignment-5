function getById(id) {
  const element = document.getElementById(id);
  return element;
}

const hearts = document.getElementsByClassName("heart-class");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    // alert("I Love You");
    let currentHeartCount = getById("heart-count").innerText;
    newHeartCount = Number(currentHeartCount) + 1;
    getById("heart-count").innerText = newHeartCount;
  });
}
//  copy button  functionality starts

//
let copyCounter = 0;
let coinCounter = 100;

const copyCountEl = document.getElementById("copy-count");
const coinCountEl = document.getElementById("coin-count");

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".cards");
    const number = card.querySelector(".number").innerText;

    navigator.clipboard.writeText(number).then(() => {
      alert(`Number copied: ${number}`);
      copyCounter++;
      copyCountEl.textContent = copyCounter;
    });
  });
});

//  call button finctionality

document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest(".cards");
    const title = card.querySelector("h1").innerText;
    const number = card.querySelector(".number").innerText;

    const coinCount = getById("coin-count").innerText;
    const currentCoin = Number(coinCount);
    let newCoin = currentCoin;
    if (newCoin < 20) {
      alert(` ❌ Not sufficient coin. Minimum 20 coin is necessary to call`);

      return;
    } else {
      alert(`📞 Calling ${title} - ${number}`);
    }
    newCoin = currentCoin - 20;
    getById("coin-count").innerText = newCoin;
    // Coin -20
    // coinCounter -= 20;
    // if (coinCounter < 20) coinCounter = 0;
    // coinCountEl.textContent = "Coins: " + coinCounter;
  });
});

// getById("all-cards").addEventListener("click", function (e) {
//   if (e.target.className.includes("call-btn")) {
//     alert("Call btn clicked");
//     const callButton = e.target;
//   }
// });

// .addEventListener("click", function () {
//   console.log("heart icon clicked");
//   let currentHeartCount = getById("heart-count").innerText;

//   let newHeartCount = Number(currentHeartCount) + 1;
//   getById("heart-count").innerText = newHeartCount;
// });
