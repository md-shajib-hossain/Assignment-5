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
