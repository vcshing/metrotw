var defaultMapItem = getCookie("selectMapItem","","0")

function mainPage(){

  setLang();
  frontEndTranslateToSelectedLang(defaultLangArr, function(translatedLangArr) {
      assignWordClassTranslation(translatedLangArr, "word");
  });



  addMenu();
  //showImage = new RTP.PinchZoom(  $('.pinchZoomImg'),{});
  $(".titleSelectedMap").html(menuArr[defaultMapItem]);
  $(".pinchZoomImg").attr("src","image/" + defaultMapItem + ".png");
  $(".mapSiteLink").html(menuSiteArr[defaultMapItem]);

  $('.pinchZoomImg').each(function () {
       new RTP.PinchZoom($(this), {});
  });

}

myApp.onPageInit('register', function(page) {
    // Do something here for "about" page

    $('.save-storage-data').on('click', function() {


    });


})

myApp.onPageInit('login', function(page) {
    // Do something here for "about" page

    $('.save-storage-data').on('click', function() {

    });


})
