

var query = 'election';
var results = 5;
var startyear = '20180202';
var endyear = '20200101';


$('#submit-query').on('click', function (e) {
    e.preventDefault();
   var query = $('#query').val();
   var results = $('#results').val();
   var startyear = $('#startyear').val();
   var endyear = $('#endyear').val();
   $('#search-results').empty();
   searchArticle(query, results,startyear, endyear);
})

searchArticle(query, results,startyear, endyear);
function searchArticle(query, results, startyear = 2020, endyear = 2020) {
    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${startyear}&end_date=${endyear}&api-key=HOZCYgVfQ3HWPU70qBSEjAU8Sw8Yj7AV`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then( function (response) {
        for (let index = 0; index < results; index++) {
            const element = response.response.docs[index];

            console.log(element);
            $('#search-results').append($('<li>').text(element.headline.main));
            
        }
    });
}