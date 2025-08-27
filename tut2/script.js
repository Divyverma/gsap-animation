// gsap.from("#page1 #box1", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 720
// })
// gsap.from("#page2 #box2", {
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger:{
//         trigger: "#page2 #box2",
//         scroller: "body",
//         markers: true,
//         start: "top 80%",
//         end:"top 20%",
//         scrub:1,
//         // pin:true 
//     }
// })

// gsap.from("#page2 h1", {
//     opacity: 0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller: "body",
//         markers:true,
//         start:"top 50%",
//     }
// })
// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller: "body",
//         markers:true,
//         start:"top 50%"
//     }
// })

gsap.to("#page2 h3", {
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller: "body",
        markers:true,
        start:"top -10%",
        end:"top -100%", 
        scrub: 2,
        pin: true
    }
})