$(".work").scroll(() => {
    console.log("scrolled")
})

$(".work-titles > p").click(() => {
    console.log(this).css("color", "pink");
})