console.log("test");
var Welcome = flight.component(function() {
  this.defaultAttrs({
    'cat' : '.kitten',
    'dog' : '.dog',
    'welcome' : ''
  });

  this.helloCat = function (){
    this.attr.welcome = "cześć kociaku!!";
  }
  this.helloDog = function (){
    this.attr.welcome = "cześć hot dogu!!";
  }


  this.sayHello = function() {
    this.$node.find('.hello').html(this.attr.welcome);
  }

  this.after('helloCat helloDog', function() {
    this.sayHello();
  });

  this.after('initialize', function() {
    this.sayHello();

    this.on("click", {
      'cat' : this.helloCat,
      'dog' : this.helloDog
    });
  });
});

$(function() {
Welcome.attachTo('.wraper', {welcome: "cześć!!"});

});
