const adviceBtn = document.getElementById("advice-btn");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

function getAdvice() {
	fetch("https://api.adviceslip.com/advice", {cache: "no-store"})
		.then((res) => res.json())
		.then((adviceData) => {
			adviceId.innerText = adviceData.slip.id;
			adviceText.innerText = adviceData.slip.advice;
		});
}

adviceBtn.addEventListener("click", getAdvice);

getAdvice()