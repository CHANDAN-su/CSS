document.ready(function() {
	switchGrid();
});

window.resize(function() {
	if (window.width() < 768) {
		document.getElementByClassName("product-item").removeAttr("style");
	}
});

document.getElementByClassName("js-switch-grid").on("click", function() {
	switchGrid();
});

function switchGrid() {
	if (window.width() > 768) {
		document.getElementByClassName("product-item").each(function() {
			let size = 1 + Math.floor(Math.random() * 3);
			this.css({
				"grid-column": "span " + size,
				"grid-row": "span " + size
			});
		});
	}
}

document.addEventListener("DOMContentLoaded", () => {
    
    let buttonRow = document.getElementByClassName("button-row");
    window.scroll(function() {
        let scroll = window.scrollTop();

        if (scroll >= 500) {
            buttonRow.classList.add("sticky");
        } else {
            buttonRow.classList.remove("sticky");
        }
    });
});