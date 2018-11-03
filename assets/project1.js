var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
  });