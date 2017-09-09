$(document).ready(function(){
console.log("javascript is loaded");

$("#search-button").on("click", function() {
    console.log("button clicked");

    var searchTerm = $("#searchTerm").val();
    var startYr = $("#startYear").val() + "0101";
    var endYr = $("#endYear").val() + "0101";

    console.log(searchTerm);
    console.log(startYr);
    console.log(endYr);

    var apikey="c6f9a3124ba84d83a64c801c248a870a";

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apikey + "&q=" + searchTerm + "&begin_date=" + startYr + "&end_date=" + endYr;

            // https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=Roosevelt&begin_date=19200101&end_date=19290101&limit=1

    $.ajax({
          url: url,
          method: "GET"
    }).done(function(response) {
      console.log(response);
      var results = response.response.docs;

      for(var i=0;i<results.length;i++) {
        
        var articleDiv = $("<div>");
        var h4 = $("<h4>");
        h4.text(results[i].headline.main);
        articleDiv.append(h4);

        var p = $("<p>");
        p.text(results[i].snippet);
        articleDiv.append(p);

        var url = $("<a>");
        url.attr("href",results[i].web_url);
        url.text(results[i].web_url);
        articleDiv.append(url);

        $("#results").append(articleDiv);
      }
    }).fail(function(err) {
      console.log(err);
    });


    // $("#results").append(result);




});



});