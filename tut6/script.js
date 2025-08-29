function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = document.querySelector("h1").textContent;
  var splittedText = h1Text.split(""); // every letter get splitted

  var clutter = "";
  var halfValue = Math.floor(splittedText.length/2)
  
  splittedText.forEach(function (e, i) {
    if(i<halfValue){
        clutter += `<span class="a" >${e}</span>`
    }else{
        clutter += `<span class="b" >${e}</span>`
    }
    
  });

  h1.innerHTML = clutter;
}
breakText();


gsap.from("h1 .a", {
    y:70,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.3
})

gsap.from("h1 .b", {
    y:70,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.3
})