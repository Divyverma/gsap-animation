var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

document.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        duration:2,
        ease:"elastic"
    })
})

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML="View More"
  gsap.to(cursor, {
    scale:3
  })
})

imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML=""
  gsap.to(cursor, {
    scale:1
  })
})