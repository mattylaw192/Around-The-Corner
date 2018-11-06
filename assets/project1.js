$(document).ready(function () {
  $("#delayedPopup").delay(5000).fadeIn(400);

  $("#btnClose").click(function (e) {
    HideDialog();
    e.preventDefault();
  });
  $('.area-button').on('click', function (event) {
    event.preventDefault();
    $('#meal-list').empty();
    var url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=' + $(this).attr('data-area');
    $.ajax({
      url: url,
      method: 'GET',
      success: function (response) {
        $.each(response.meals, function (index, value) {
          var display = $("<div>");
          var anchor = $("<a>");
          anchor.attr('href', '#');
          anchor.attr('data-id', value.idMeal);
          anchor.attr('target', '_blank');
          anchor.on('click', mealLink);
          var image = $("<img>");
          image.css('max-width', '200px');
          image.attr('src', value.strMealThumb);
          anchor.append(image);
          display.append(anchor);
          var text = $("<h2>");
          text.html(value.strMeal);
          display.append(text);
          $('#meal-list').append(display);
        });
      }
    });
  })
});

function HideDialog() {
  $("#bkgOverlay").fadeOut(400);
  $("#delayedPopup").fadeOut(300);
}

function mealLink(event) {
  event.preventDefault();
  var mealId = $(this).attr('data-id');
  $.ajax({
    url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId,
    method: 'GET',
    success: function (response) {
      console.log(response);
      $('#meal-list').empty();
      var meal = response.meals[0];

      appendMealProperty(meal.strMeal);
      var img = $("<img>");
      img.attr('src', meal.strMealThumb);
      img.attr('style', 'width: 100px;');
      $('#meal-list').append(img);
      if (meal.strIngredient1 !== '') {
        appendMealProperty(meal.strMeasure1 + ' ' + meal.strIngredient1);
      }
      if (meal.strIngredient2 !== '') {
        appendMealProperty(meal.strMeasure2 + ' ' + meal.strIngredient2);
      }
      if (meal.strIngredient3 !== '') {
        appendMealProperty(meal.strMeasure3 + ' ' + meal.strIngredient3);
      }
      if (meal.strIngredient4 !== '') {
        appendMealProperty(meal.strMeasure4 + ' ' + meal.strIngredient4);
      }
      if (meal.strIngredient5 !== '') {
        appendMealProperty(meal.strMeasure5 + ' ' + meal.strIngredient5);
      }
      if (meal.strIngredient6 !== '') {
        appendMealProperty(meal.strMeasure6 + ' ' + meal.strIngredient6);
      }
      if (meal.strIngredient7 !== '') {
        appendMealProperty(meal.strMeasure7 + ' ' + meal.strIngredient7);
      }
      if (meal.strIngredient8 !== '') {
        appendMealProperty(meal.strMeasure8 + ' ' + meal.strIngredient8);
      }
      if (meal.strIngredient9 !== '') {
        appendMealProperty(meal.strMeasure9 + ' ' + meal.strIngredient9);
      }
      if (meal.strIngredient10 !== '') {
        appendMealProperty(meal.strMeasure10 + ' ' + meal.strIngredient10);
      }
      if (meal.strIngredient11 !== '') {
        appendMealProperty(meal.strMeasure11 + ' ' + meal.strIngredient11);
      }
      if (meal.strIngredient12 !== '') {
        appendMealProperty(meal.strMeasure12 + ' ' + meal.strIngredient12);
      }
      if (meal.strIngredient13 !== '') {
        appendMealProperty(meal.strMeasure13 + ' ' + meal.strIngredient13);
      }
      if (meal.strIngredient14 !== '') {
        appendMealProperty(meal.strMeasure14 + ' ' + meal.strIngredient14);
      }
      if (meal.strIngredient15 !== '') {
        appendMealProperty(meal.strMeasure15 + ' ' + meal.strIngredient15);
      }
      if (meal.strIngredient16 !== '') {
        appendMealProperty(meal.strMeasure16 + ' ' + meal.strIngredient16);
      }
      if (meal.strIngredient17 !== '') {
        appendMealProperty(meal.strMeasure17 + ' ' + meal.strIngredient17);
      }
      if (meal.strIngredient18 !== '') {
        appendMealProperty(meal.strMeasure18 + ' ' + meal.strIngredient18);
      }
      if (meal.strIngredient19 !== '') {
        appendMealProperty(meal.strMeasure19 + ' ' + meal.strIngredient19);
      }
      if (meal.strIngredient20 !== '') {
        appendMealProperty(meal.strMeasure20 + ' ' + meal.strIngredient20);
      }
      appendMealProperty(meal.strInstructions);

    }
  });
}

function appendMealProperty(text) {
  var div = $('<div>');
  div.html(text);
  $('#meal-list').append(div);
}