$(document).ready(function(){


  (function(){

    function newTyped(){ /* A new typed object */ };
    function foo(){ console.log("Callback"); };


      $("#typed").typed({
          // strings: ["Hello, my name is Chad.", "Hello, my name is Chad.<br>Please feed me coffee", "And then deletes them.", "Try it out!"],
          stringsElement: $('#typed-strings'),
          typeSpeed: 10,
          backDelay: 400,
          loop: false,
          contentType: 'html', // or text
          // defaults to false for infinite loop
          loopCount: false,
          showCursor:true,
          callback: function(){ foo(); },
          resetCallback: function() { newTyped(); }

      });

      $(".reset").click(function(){
          $("#typed").typed('reset');
      });
  })();

  $(".main").onepage_scroll({
    beforeMove: function(index){
      if( index == 2 ){
/*        $("#imgLayer").animate({top:"50em"},
        1000,
        "easeInSine",
        function(){
          $(this).hide();
        });
*/
        $("#coffee-drip-1").animate({opacity:"100"},2000,"easeInSine");
        $("#html").animate({opacity:"100"},4000,"easeInSine");
        $("#css").animate({opacity:"100"},6000,"easeInSine");
        $("#sketch").animate({opacity:"100"},8000,"easeInSine");
        $("#illustrator").animate({opacity:"100"},10000,"easeInSine");
        $("#coffee-drip-2").animate({opacity:"100"},12000,"easeInSine");
      }
      if( index == 3 ){
        $("#descri1").fadeIn(500,function(){
          $("#descri2").fadeIn(500,function(){
              $("#descri3").fadeIn(500);
          });
        });
      }
    }
  });
  (function(){
      emailjs.init("user_38Lby2e0A7XlXLZ63GrDJ");
  })();

  $("#response-form").submit(function(){
    emailjs.sendForm('default_service', 'mail_form', this);
    $("#email-result").css("display","inline-block").fadeIn(1000).fadeOut(1000);
    return false;
  });

});
