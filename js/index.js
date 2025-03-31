function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$('.menu').click(function() {
    if($(this).is('.active:not(.back)')) {
       $(this).addClass('back');
    } else if ($(this).is('.back')) {
      $(this).removeClass('back');
    } else {
      $(this).addClass('active');
    }
  });