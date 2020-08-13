const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=HOZCYgVfQ3HWPU70qBSEjAU8Sw8Yj7AV"

$.ajax({
    url: queryURL,
    method: 'GET'
}).then( function (response) {
    console.log(response);
});