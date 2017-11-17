console.log('Hi from app');

const newHeader = "Hi from jquery";
$('.first-header').text(newHeader).after("<p>Hi hey hello!</p>");



$('.first-header').on('click', function () {
    $( this ).animate({
    width: [ "toggle", "swing" ],
    height: [ "toggle", "swing" ],
    opacity: "toggle"
  }, 5000, "linear", function() {
    $( this ).after( "<div>Animation complete.</div>" );
  });
})
$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover" ).slideToggle( "slow", animateIt );
}
 
// animateIt();

$('.first-header').append('<p>cześć :D</p>');

$('input[type="text"]').attr('disabled','disabled');
$('.first-header').before('<b>przed cześć</b>');

$('.first-header' ).bind( "click", function() {
  alert( "User clicked on input" );
});

var apiFlickr = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

$.getJSON(apiFlickr, {
  tags: "sun, cats",
  tagmode: "any",
  format: "json"  
}).done(function(data) {
  console.log(data.items);
  $.each(data.items, function(index, item) {
    $("<img>").attr("src", item.media.m).appendTo("#flickr");
    if(index == 9){
      return false
    }
  })
}).fail(function() {
  alert("Ajax call fail");
})




