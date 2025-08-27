// const box = document.querySelector("#box1")
// const screenWidth = window.innerWidth;
// const boxWidth = box.offsetWidth;
// const target = screenWidth - boxWidth;

// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1, 
//     rotate: 360,
//     backgroundColor: "purple",
//     borderRadius: "50%",
// })

// gsap.from("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "purple",
//     borderRadius: "50%",
// })


// stagger
// gsap.from("h1", {
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     // x: ()=>window.innerWidth, // from the end of the screen of all size
//     y: 30,
//     stagger: 1
// })


// yoyo
// gsap.to("#box1", {
//     x:1200,
//     duration: 1,
//     delay:1,
//     rotate:360,
//     repeat: -1,
//     yoyo: true
// })




// timeline

// var tl = gsap.timeline()

// tl.to("#box1", {
//     x:1500,
//     rotate: 360,
//     duration: 1.5,
// })

// tl.to("#box2", {
//     x:1500,
//     backgroundColor:"yellow",
//     borderRadius: "40%",
//     duration: 1.5,
// })

// tl.to("#box3", {
//     x:1500,
//     scale: 0.5,
//     borderRadius: "50%",
//     duration:1.5,
// })


var tl = gsap.timeline()

tl.from("#nav h2", {
    y: - 100,
    opacity: 0,
    duration: 1.5,
    delay: 0.5
})
tl.from("#part2 h4", {
    y: -100,
    opacity: 0,
    duration: 1, 
    stagger: 0.3
})

tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 2
})