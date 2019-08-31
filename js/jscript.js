/* global $ , jquery , alert*/

$(document).ready(function ()

{



//show color option 

$(".gear-check").click(function (){
    $(".color-option").fadeToggle();
}

);


//change theme color 


var colorli = $(".color-option ul li ");


colorli
.eq(0).css("backgroundColor","#ffc107").end()
.eq(1).css("backgroundColor","#8d1f94fc").end()
.eq(2).css("backgroundColor","#3a82da").end()
.eq(3).css("backgroundColor","#de0d0d").end()
.eq(4).css("backgroundColor","#9ae0dd");



colorli.click(function (){

    $("link[href*='theme']").attr("href",$(this).data("color"));

}); 


// Scroll Button function 

var scrollButton = $("#scroll-top");

$(window).scroll(function ()
{

//console.log($(this).scrollTop() );

if ($(this).scrollTop() >=700 )
{
    scrollButton.show();
}
else 
{
    scrollButton.hide();
}


});


// click on button to scroll to up 


scrollButton.click(function ()
{
$("html,body").animate({scrollTop :0},600);

});





//Loading Screen 


$(window).on('load',function (){


//loading elements
$(".loading-overlay .sk-folding-cube").fadeOut(2000,function ()
{
    $(this).parent().fadeOut(2000,function ()
      {
        $(this).remove();   
     });


        $("body").css("overflow","auto");

  });



});




});