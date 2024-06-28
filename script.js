const adviceBtn = document.getElementById("advice-btn");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

function getAdvice(e = null) {
	console.log(e)
	if (e instanceof KeyboardEvent && e.key !== "Enter" && e.key !== " ") {
		return;
	}
	fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
		.then((res) => res.json())
		.then((adviceData) => {
			adviceId.innerText = adviceData.slip.id;
			adviceText.innerText = '"' + adviceData.slip.advice + '"';
		});
	if (e instanceof TouchEvent) {
		e.target.blur();
	}
}

adviceBtn.addEventListener("click", getAdvice);
adviceBtn.addEventListener("keyup", getAdvice);

getAdvice();
