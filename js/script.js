$(document).ready(function(){
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  if($(window).innerWidth()>=1211){
    $("#descri-lg-div img:first-child").toggleClass("coffee");
    $("#descri-lg-div img:nth-child(2)").toggleClass("selfie-img");
    $("#descri-lg-div img:nth-child(3)").toggleClass("descri1");
    $("#descri-lg-div img:nth-child(4)").toggleClass("descri2");
    $("#descri-lg-div img:nth-child(5)").toggleClass("descri3");
  }else if($(window).innerWidth()<1211 && $(window).innerWidth()>=994){
    $("#descri-md-div img:first-child").toggleClass("coffee");
    $("#descri-md-div img:nth-child(2)").toggleClass("selfie-img");
    $("#descri-md-div img:nth-child(3)").toggleClass("descri1");
    $("#descri-md-div img:nth-child(4)").toggleClass("descri2");
    $("#descri-md-div img:nth-child(5)").toggleClass("descri3");
  }else if($(window).innerWidth()<994 && $(window).innerWidth()>769){
    $("#descri-sm-div img:first-child").toggleClass("coffee");
    $("#descri-sm-div img:nth-child(2)").toggleClass("selfie-img");
    $("#descri-sm-div img:nth-child(3)").toggleClass("descri1");
    $("#descri-sm-div img:nth-child(4)").toggleClass("descri2");
    $("#descri-sm-div img:nth-child(5)").toggleClass("descri3");
  }else if($(window).innerWidth()<=769){
    $("#descri-tab-div").show();
    $("#descri-tab-word").show();
    $(".aboutme").hide();
    $("#descri-tab-div img:first-child()").toggleClass("selfie-img");
    $("#descri-tab-div img:nth-child(2)").toggleClass("descri1");
    $("#descri-tab-div img:nth-child(3)").toggleClass("descri2");
    $("#descri-tab-div img:nth-child(4)").toggleClass("descri3");
  }
  $(".main").onepage_scroll({
    beforeMove: function(index){
      if( index == 2 ){
        $("#coffee-drip-1").animate({opacity:"100"},2000,"easeInSine");
        $("#html").animate({opacity:"100"},4000,"easeInSine");
        $("#css").animate({opacity:"100"},6000,"easeInSine");
        $("#sketch").animate({opacity:"100"},8000,"easeInSine");
        $("#illustrator").animate({opacity:"100"},10000,"easeInSine");
        $("#coffee-drip-2").animate({opacity:"100"},12000,"easeInSine");
      }
      if( index == 3 ){
        $(".coffee").show();
          $('.selfie-img').show();
          $(".descri1").fadeIn(500,function(){
            $(".descri2").fadeIn(500,function(){
              $(".descri3").fadeIn(500);
            });
          });
        }
    }
  });
  (function(){
        $("#typed").typed({
          stringsElement: $('#typed-strings'),
          typeSpeed: 10,
          backDelay: 400,
          loop: false,
          contentType: 'html',
          loopCount: false,
          showCursor:true,
      });
      $(".reset").click(function(){
          $("#typed").typed('reset');
      });
  })();
  (function(){
    emailjs.init("user_38Lby2e0A7XlXLZ63GrDJ");
})();
  $("#response-form").submit(function(){
    emailjs.sendForm('default_service', 'mail_form', this);
    $("#email-result").css("display","inline-block").fadeIn(1000).fadeOut(2000);
    return false;
  });
});

$(window).on("resize",function(){
  if($(this).innerWidth()>=1211){
    $(".descri-tab").hide();
    $(".aboutme").show();
    $(".descri-sm").hide();
    $(".descri-md").hide();
    $(".descri-lg").show();
  }else if($(this).innerWidth() <1211 && $(this).innerWidth() > 994){
    $(".descri-tab").hide();
    $(".aboutme").show();
    $(".descri-sm").hide();
    $(".descri-md").show();
    $(".descri-lg").hide();
  }else if($(this).innerWidth()<=994 && $(this).innerWidth() > 769){
    $(".descri-tab").hide();
    $(".aboutme").show();
    $(".descri-sm").show();
    $(".descri-md").hide();
    $(".descri-lg").hide();
  }else if($(this).innerWidth()<=769){
    $(".descri-tab").show();
    $(".aboutme").hide();
    $(".descri-sm").hide();
    $(".descri-md").hide();
    $(".descri-lg").hide();
  }
});
