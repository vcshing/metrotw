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


myApp.onPageInit('intro', function(page) {

    var pageIntoLangArr = []

    var intro="";
    intro += "<p>There are countless workout styles you've probably heard about over the years, and all of them are meant to help you reach your fitness goals.&nbsp;<\/p>";
    intro += "<p>You may want to increase strength, lose weight, improve flexibility or build muscle. Whatever yours goals are, most exercise programs can help you reach them, as long as you stick to the plan.<\/p>";
    intro += "<p>If you're looking for a new program to add to your routine, you may want to give Tabata try. Tabata training is a high-intensity interval training (HIIT) workout, featuring exercises that last four minutes.<\/p>";
    intro += "<h2>The History of Tabata<\/h2>";
    intro += "<p>Tabata training was discovered by Japanese scientist Dr. Izumi Tabata and a team of researchers from the National Institute of Fitness and Sports in Tokyo.<\/p>";
    intro += "<p>Tabata and his team conducted research on two groups of athletes. The first group trained at a moderate intensity level while the second group trained at a high-intensity level. The moderate intensity group worked out five days a week for a total of six weeks; each workout lasted one hour. The high-intensity group worked out four days a week for six weeks; each workout lasted four minutes and 20 seconds (with 10 seconds of rest in between each set).<\/p>";
    intro += "<p>The results; Group 1 had increased their aerobic system (cardiovascular), but showed little or no results for their anaerobic system (muscle). Group 2 showed much more increase in their aerobic system than Group 1, and increased their anaerobic system by 28 percent.<\/p>";
    intro += "<p>In conclusion, high-intensity interval training has more impact on both the aerobic and anaerobic systems.<\/p>";
    intro += "<h2>The Tabata Program<\/h2>";
    intro += "<p>Each exercise in a given Tabata workout lasts only four minutes, but it's likely to be one of the longest four minutes you've ever endured. The structure of the program is as follows:<\/p>";
    intro += "<ul>";
    intro += "<li>Workout hard for 20 seconds<\/li>";
    intro += "<li>Rest for 10 seconds<\/li>";
    intro += "<li>Complete 8 rounds<\/li>";
    intro += "<\/ul>";
    intro += "<p>You push yourself as hard as you can for 20 seconds and rest for 10 seconds. This is one set. You'll complete eight sets of each exercise.&nbsp;<\/p>";
    intro += "<p>You can do pretty much any exercise you wish. You can do squats, push-ups, burpees or any other exercise that works your large muscle groups. Kettlebell exercises work great, too.<\/p>";
    intro += "<p><strong>An example of a Tabata workout looks like this:<\/strong><\/p>";
    intro += "<ol>";
    intro += "<li>Push-ups (4 minutes)&nbsp;<\/li>";
    intro += "<li>Bodyweight Squats (4 minutes)<\/li>";
    intro += "<li>Burpees (4 minutes)<\/li>";
    intro += "<li>Mountain Climbers (4 minutes)<\/li>";
    intro += "<\/ol>";
    intro += "<p>Start with push-ups. Perform them for 20 seconds at a high-intensity. Rest for 10 seconds, and then go back to doing push-ups for 20 seconds. Once you complete eight sets of push-ups, rest for one minute.<\/p>";
    intro += "<p>Next, move on to squats and repeat the sequence of 20 seconds on, 10 seconds off. Once you finish eight sets of squats, rest for one minute, and then do burpees. After burpees, finish the workout with mountain climbers.<\/p>";
    intro += "<p>Tabata is great to get a quick workout in if you're short on time, you need to switch up your routine, or you want improve endurance and speed. Incorporate this type of workout into your fitness routine and produce results.<\/p>";

pageIntoLangArr.push("Introduction");
pageIntoLangArr.push(intro);


    frontEndTranslateToSelectedLang(pageIntoLangArr, function(translatedLangArr) {
        assignWordClassTranslation(translatedLangArr, "introword");
    });
})
