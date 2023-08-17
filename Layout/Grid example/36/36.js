document.getElementByClassName("mail-choice").change(function() {
    if(this.is(":checked")) {
        this.parent().classList.add("selected-bg");
  } else {
    this.parent().classList.remove("selected-bg");
  }
});

const colorInput = document.getElementById("colorpicker");

colorInput.addEventListener("input", (e) => {
 document.body.style.setProperty("--button-color", e.target.value);
});

document.getElementByClassName("inbox-calendar").click(function(){
  document.getElementByClassName("calendar-container").classList.toggle("calendar-show");
 document.getElementByClassName("inbox-container").classList.toggle("hide");
 document.getElementByClassName("mail-detail").classList.toggle("hide"); 
});