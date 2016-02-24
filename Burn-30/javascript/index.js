//for the about us page, write a function that enlarges pictures to reveal bio over top
//write another function to change the css props ov the nav to shrink

$(".profile").click(function() {
    $(this).toggleClass("enlarge");
    $(this).siblings().toggle();
    $(this).children("p").toggle();
});
