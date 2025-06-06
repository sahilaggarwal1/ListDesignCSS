var circle = document.querySelector("#circle");
var frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + (y * a);


frames.forEach(frame => {
    frame.addEventListener("mousemove", function (details) {
        var dims = frame.getBoundingClientRect();
        var xStart = dims.x;
        var xEnd = dims.x + dims.width;
        var zeroOne = gsap.utils.mapRange(xStart, xEnd, 0, 1, details.clientX);

        gsap.to(circle, {
            scale: 8,
        })

        gsap.to(frame.children, {
            color: "#fff",
            duration: .2,
            y: "-5vw"
        })

        gsap.to(frame.children, {
            x: lerp(-50, 50, zeroOne),
            duration: .3
        })
    });


    frame.addEventListener("mouseleave", function (details) {
        gsap.to(circle, {
            scale: 4,
        })
        gsap.to(frame.children, {
            color: "#000",
            duration: .2,
            y: 0
        })

        gsap.to(frame.children, {
            x: 0,
            duration: .3
        })
    });



});
window.addEventListener("mousemove", function (details) {
    gsap.to(circle, {
        x: details.clientX,
        y: details.clientY,
        duration: 0,
        ease: Expo.easeInOut

    })
});

