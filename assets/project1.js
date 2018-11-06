$(document).ready(function()
{
  $("#delayedPopup").delay(5000).fadeIn(400);

  $("#btnClose").click(function(e)
  {
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
          anchor.attr('href', 'https://www.themealdb.com/meal/' + value.idMeal);
          anchor.attr('target', '_blank');
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

function HideDialog()
{
	$("#bkgOverlay").fadeOut(400);
	$("#delayedPopup").fadeOut(300);
}
