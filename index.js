$(".work").scroll(() => {
    console.log("scrolled")
})

// $(".work-titles > p").click(() => {
//     let className = $(this).attr("class")

//     console.log(className)
// })

$(".work-titles > p").click(function() {
    let className = this.className;
    

    $(".work-titles > p").removeClass("clicked")
    
    $(`.${className}`).addClass("clicked")
 });