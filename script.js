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
gsap.to("#box1", {
    x:1200,
    duration: 1,
    delay:1,
    rotate:360,
    repeat: -1,
    yoyo: true
})