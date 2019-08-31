$(document).ready(function(){

    $(window).scroll(function(){

if($(this).scrollTop() >=90 )
{
  
    $(".bg-auto").css("background-color","black");
  }
  
  else {
    $(".bg-auto").css("background-color","transparent");

  }

  });

  $('.hii').click(function(){

    $('.tt').css("display","block");
  });
});