const totalEl = document.getElementById("total");
const donationInput = document.getElementById("donation");
const donateBtn = document.getElementById("donateBtn");

let total = Number(localStorage.getItem("donations") || "0");
totalEl.textContent = total;

donateBtn.addEventListener("click", donate);

function donate() {
    const value = Number(donationInput.value);
    if (!Number.isFinite(value) || value <= 0) {
        return;
    }

    total += value;
    totalEl.textContent = total;
    localStorage.setItem("donations", String(total));
    donationInput.value = "";
}
