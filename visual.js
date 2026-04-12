const popup = document.getElementById("donatePopup");
const closeBtn = document.getElementById("closePopup");

let shown1 = false;
let shown2 = false;
let shown3 = false;


setTimeout(() => {
    if (!shown1) {
        popup.classList.remove("hidden");
        shown1 = true;

        setTimeout(() => {
            popup.classList.add("hidden");
        }, 25000);
    }
}, 45000);


setTimeout(() => {
    if (!shown2) {
        popup.classList.remove("hidden");
        shown2 = true;

        setTimeout(() => {
            popup.classList.add("hidden");
        }, 25000);
    }
}, 60000);


setTimeout(() => {
    if (!shown3) {
        popup.classList.remove("hidden");
        shown3 = true;

        setTimeout(() => {
            popup.classList.add("hidden");
        }, 25000);
    }
}, 300000);

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Скопійовано");
    });
}