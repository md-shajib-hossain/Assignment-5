function getById(id) {
  const element = document.getElementById(id);
  return element;
}
//  heart count functionality

const hearts = document.getElementsByClassName("heart-class");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    let currentHeartCount = getById("heart-count").innerText;
    newHeartCount = Number(currentHeartCount) + 1;
    getById("heart-count").innerText = newHeartCount;
  });
}
//  copy button  functionality starts

//
let copyCounter = 0;
let coinCounter = 100;

const copyCountEl = getById("copy-count");
const coinCountEl = getById("coin-count");

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
    const subTitle = card.querySelector(".sub-title").innerText;
    const time = new Date().toLocaleTimeString();

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

    //

    //
    const callHistoryContainer = getById("call-2nd-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `  <div id="fuck" class=" bg-[#FAFAFA] rounded-xl mb-3 p-2 ">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="font-semibold text-sm">${subTitle}</h2>
                  <p class="font-semibold text-sm">${number}</p>
                </div>
                <p class="font-semibold text-sm"> ${time}</p>
              </div>
            </div>
    `;
    callHistoryContainer.appendChild(newHistory);
  });
});

// clear button funtionality

getById("clear-btn").addEventListener("click", function () {
  const callHistoryContainer = getById("call-2nd-container");
  const historyTitle = getById("hiistory-title");
  const clearBtn = getById("clear-btn");

  callHistoryContainer.innerHTML = "";
});
