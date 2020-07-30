$(document).ready(function() {
  var lang = sessionStorage.getItem('lang');
  if(lang == null){
    lang = 'english';
    sessionStorage.setItem('lang','english');
  }

  $("#toChineseButton").click(function () {
    lang = 'chinese'
    sessionStorage.setItem('lang','chinese');
    $(".english").addClass("hidden");
    $(".chinese").removeClass("hidden");
  });

  $("#toEnglishButton").click(function () {
    lang = 'english'
    sessionStorage.setItem('lang','english')
    $(".chinese").addClass("hidden");
    $(".english").removeClass("hidden");

  });

  $("#toChineseButton2").click(function () {
    lang = 'chinese'
    sessionStorage.setItem('lang','chinese');
    $(".english").addClass("hidden");
    $(".chinese").removeClass("hidden");
  });

  $("#toEnglishButton2").click(function () {
    lang = 'english'
    sessionStorage.setItem('lang','english')
    $(".chinese").addClass("hidden");
    $(".english").removeClass("hidden");
  });

  if(lang == 'english'){
    $(".chinese").addClass("hidden");
    $(".english").removeClass("hidden");
  }

  if(lang == 'chinese'){
    $(".english").addClass("hidden");
    $(".chinese").removeClass("hidden");
  }

});
