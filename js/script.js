let menuItems = document.getElementsByClassName("main-menu");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// counter
let counters = document.querySelectorAll(".counter");
const speed = 100;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-bs-target');
		const count = +counter.innerText;

		const inc = target / speed;

		if (count < target) {
			counter.innerText = Math.ceil(count + inc);
			// Call function every ms
			setTimeout(updateCount, 50);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});