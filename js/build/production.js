$(document).ready(function() {

  $("a").click(function() {
      $("#avatarImg").toggleClass("rotate-right");
      $("div.content").children(".active").slideUp("slow");
      $("div.content").children(".active").removeClass("active");
      var rowId = $(this).attr('href');
      $(rowId).addClass('active').slideDown("slow");
  });

});
