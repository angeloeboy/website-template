$(".work").scroll(() => {
    console.log("scrolled")
})


let clicked;

$(".work-titles > p > a").click(function() {
    let className = this.className;

    // clicked = className;
    let firstClass = className.split(" ")[0];

    if($(`.${firstClass}`).hasClass("clicked")){
        $(`.${firstClass}`).addClass("clicked")
    }else{
        $(".work-titles > p > a").removeClass("clicked")
        $(`.${className}`).addClass("clicked")
    }




 });


