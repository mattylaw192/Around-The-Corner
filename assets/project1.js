// Initialize Firebase
var config = {
  apiKey: "AIzaSyBGsSTyDhAcqQNN_CADkFpdgjBrpQrrbcQ",
  authDomain: "project-1-b1dff.firebaseapp.com",
  databaseURL: "https://project-1-b1dff.firebaseio.com",
  projectId: "project-1-b1dff",
  storageBucket: "project-1-b1dff.appspot.com",
  messagingSenderId: "923265362571"
};




$(document).ready(function () {
  $("#delayedPopup").delay(10000).fadeIn(400);

  $("#btnClose").click(function (e) {
    HideDialog();
    e.preventDefault();
  });


  $("#submitEmail").click(function (a) {
    HideDialog();
    a.preventDefault();
    var emailAddress = $("#emailInput").val();
    var contactInfo = {
      email: emailAddress
    };
    var database = firebase.database();
    database.ref().push(contactInfo);
  });
  firebase.initializeApp(config);


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
          display.addClass("mealImage");
          display.addClass("col-md-4");
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
          var text = $("<p>");
          text.html(value.strMeal);
          display.append(text);
          $('#meal-list').append(display);
        });
      }
    });

  });
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


      var musicUrl = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=' + meal.strArea + "&api_key=fdf5816d83b3befdc209e60006096e96&limit=5&format=json";
      console.log(this);

      $.ajax({
        url: musicUrl,
        method: 'GET',
        success: function (response) {
          console.log(response);
          
          $.each(response.tracks.track, function (index, value) {
            $(".albumArt").attr("src", value.image[1]["#text"]);
            var tr = $('<tr>');
            var tdArtistName = $('<td>').html(value.artist.name);
            var tdSongName = $('<td>').html(value.name);
            var tdArtistUrl = $('<td>').html(value.url);
            var tdAlbumArt = $('<td>');
            var albumArtImg = $("<img>");
            albumArtImg.attr("src", value.image[1]["#text"]);
            tdAlbumArt.append(albumArtImg);
            tr.append(tdArtistName);
            tr.append(tdAlbumArt);
            tr.append(tdSongName);
            tr.append(tdArtistUrl);
            $('#music_table').append(tr);
          });
        }
      });

      appendMealProperty(meal.strMeal);
      var img = $("<img>");
      img.attr('src', meal.strMealThumb);
      img.attr('style', 'width: 100px;');
      $('#meal-list').append(img);

      // trying to get youtube video to show 
      // appendMealPropertyvideo(meal.strMeal);
      // var video = $("<object>");
      // video.attr('data',meal.strYoutube);
      // video.attr('style','width="560" height="315";')

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

      var videoId = getId(meal.strYoutube);
      var iframeMarkup = '<br> <iframe id = "videoinstructions" width="100%" height="315" src="https://www.youtube.com/embed/'
        + videoId + '" frameborder="0" allowfullscreen></iframe>';
      appendMealProperty(iframeMarkup);
      // working example 
      // appendMealProperty(`<iframe width="560" height="315" src="https://www.youtube.com/embed/qCIbq8HywpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    }
  });
}

function appendMealProperty(text) {
  var div = $('<div>');
  div.html(text);
  $('#meal-list').append(div);
}


function getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return 'error';
  }
}

$(document).ready(function () {
  $('#music_table').empty();
  $.getJSON("music.json", function (data) {
    var music_data = '';
    $.each(data, function (key, value) {
      music_data += '<tr>';
      music_data += '<td>' + value.musicArtist + '</td>';
      music_data += '<td>' + value.musicName + '</td>';
      music_data += '<td>' + value.CoverImage + '</td>';
      music_data += '</tr>';
    });
    $('#music_table').append(music_data);

  });

  // footer reset button; 
  var footer = document.getElementById('footerbtn');

  footer.onclick = function () {
    location.reload();
  };

  // $('footer').on(click, function(){
  //   location.reload();
  //   console.log(5);
  // })
});


// function appendMealPropertyvideo(video){
//   var vid = $('<video>');
//   div.html(video);
//   $('#video-list').append(vid);
// }



