$(".otherApp").bind("click", function(e) {
    e.preventDefault();
    var target = "_system";
    var options = "location=yes";
    var url = "https://play.google.com/store/apps/developer?id=Sky+Explorer";
    window.open(url, target, options);
})

$(".shareApp").bind("click", function(e) {
    window.plugins.socialsharing.share("Good Game", "Good Game", "", "https://play.google.com/store/apps/details?id=com.skyexplorer.tellyou");
})


$(".goodlist").bind("click", function(e) {
    $(".badlist").removeClass("active");
    $(".goodlist").addClass("active");
    getHomePageListRank("good");
})

$(".badlist").bind("click", function(e) {
    $(".goodlist").removeClass("active");
    $(".badlist").addClass("active");
    getHomePageListRank("bad");
//alert(2);
	//	mainView.router.loadPage('indexRank.html')
})

$('.loginBtn').on('click', function () {
//  myApp.loginScreen();
  mainView.router.loadPage("login.html");
});

$('.register').on('click', function () {
  mainView.router.loadPage("register.html");
});


$('.startTutorials').on('click', function (e) {

});

$(".shareApp").bind("click",function(e){
  window.plugins.socialsharing.share("Keep Fit - TABATA", "Good Apps", "", "https://play.google.com/store/apps/details?id=com.skyexplorer.keepfit");
})

$(".langen").bind("click", function() {
  lang = "en";
  storageManager.setCookie("lang",{"selectedLang": lang});
  pageInit();

})

$(".langtc").bind("click", function() {
//  alert(1);
  lang = "zh-tw";
  storageManager.setCookie("lang",{"selectedLang": lang});
  pageInit();
})

$(".langDefault").bind("click", function() {
  lang = checkLang();
  storageManager.setCookie("lang",{"selectedLang": lang});
  pageInit();
})
