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

 /*menu*/

 document.querySelectorAll("header-link-ul. a").forEach((el) => {
    if (window.location.pathname.indexOf(el.getAttribute("href")) > -1) {
        el.classList.add("active");
    }
});

 /*menu*/