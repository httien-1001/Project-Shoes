$("#m-footer-1").click(function(){
    $("#m-footer-1-sub").slideToggle();
  });

$("#m-footer-2").click(function(){
    $("#m-footer-2-sub").slideToggle();
  });
$("#m-footer-3").click(function(){
    $("#m-footer-3-sub").slideToggle();
  });
$('#click-menu').click(function () { 
      //alert('hello');
    isBool = true;
    if (isBool) {
        //$('#change-icon').html("<i class='fas fa-time' id='change-icon'></i>");
        $(this).find($("#change-icon")).removeClass('fa-bars').addClass('fa-times');
        isBool = false;
    } else {
        
        $('#change-icon').removeClass('fa-times').addClass('fa-bars');
        

        // $(this).find($("#change-icon")).removeClass('fa-times').addClass('fa-bars');
        isBool = true;
        
    }
    
});  