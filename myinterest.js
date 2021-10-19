// title
let timeline = gsap.timeline({
    scrollTrigger:{
        trigger: ".main",
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

// h1 logo
let timeline2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".main",
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

// main
let timeline3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".main",
        start: "0%",
        end: "300%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

timeline.fromTo(".slidingText", {y: 0}, {y: -400});

timeline2.fromTo(".logo", {scale: 4}, {scale: 1, top:"10px", left: "1%", x: "50%", y: "50%"});