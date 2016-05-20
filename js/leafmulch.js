$(document).ready(function(){

  var characters = {
    tommy: {
      healthPoints: 10,
      attackPow: 10,
      counterPow: 10                   
    },
    sister: {
      healthPoints: 10,
      attackPow: 30,
      counterPow: 10           
    },
    wrapper: {
      healthPoints: 10,
      attackPow: 20,
      counterPow: 10           
    },
    mushroom: {
      healthPoints: 10,
      attackPow: 15,
      counterPow: 10          
    }
  };
  var charsNotInPlay;
  var tmp;
  var stats;
  var newSel;
  var playerCount = 0;
  var message = "Choose Your Player!";
   
  //var a = { 
    //test: { nested: 42 } };[3:36] 
   // a.test.nested  
  //var obj = { foo: "bar", baz: 42 };
  //console.log(Object.values(obj)); // ['bar', 42]   
    // music   
    //var robot = new Audio("music/I_am_Robot_and_Proud_Song_for_Two_Wheels.mp3");
    //robot.play();

    $('.players-message').text(message);
    $('#button').off; //why doesn't this work?

    //console.log(characters.tommy);
    //console.log("c.t.h " + characters.tommy.healthPoints);
    //stats = (characters.tommy.healthPoints);
    //console.log("the stats " + stats);

    /* this doesn't work either */
    $.each(characters, function(key, value){
      switch (key) {

        case 'sister': 
        console.log('sister');
        stats = (
          "Health Points:" + characters.sister.healthPoints + "<br>" +
          "Attack Power:" + characters.sister.attackPow + "<br>" +
          "Counter Power:" + characters.sister.counterPow);
        

        $('#sister .stats').append(stats);
        //s$('#sister .stats').append(" got here ");
        break; 

        case 'tommy': 
        console.log('tommy');
        //console.log('tommy');
        //stats = $(this).healthPoints;
        //console.log(Object.values(tommy));
        //console.log($(this.values);
        //console.log($(this));
        //console.log($(this.id));
        //console.log($(this.healthPoints));
        $('#tommy .stats').append( 
          "got here");
        break;


        case 'mushroom': 
        console.log('mushroom');
        //$("#mushroom img").attr("src", "images/mushroomPale.png");
        break;
        case 'wrapper': 
        console.log('wrapper');
        //$("#wrapper img").attr("src", "images/wrapperPale.png");
        break;
          }//switch key   
        }); 
    /**/
    
    function gatherStats(character) {
      var ttt;
      for (var i = Things.length - 1; i >= 0; i--) {
        Things[i]
      }
    }

    $('.theGroup').on('click', function(e) {
    //console.log(this.id); //the id of element that was clicked on
    //but also the property name of the chars object.    
    $("#char-info").html(characters[this.id].href); 

    //var a = { 
    //test: { nested: 42 } };[3:36] 
    // a.test.nested 

    

    if (playerCount === 0) {
      firstPlayPlayer = this.id;
      $(this).removeClass("player-up");
      $(this).addClass("player-one");
      $('.firstPlayer').append(this);      
      playerCount = 1;
      message = "Choose your Mulching Opponent!"
      $('.players-message').text(message);           
    }
    else if (playerCount === 1) {
      secondPlayPlayer = this.id;
      console.log()
      $(this).removeClass("player-up");      
      $('.secondPlayer').append(this);
      
      playerCount = 55;
      message = "Get Mulching!"
      $('.players-message').text(message);
      $("#button").attr("src", "images/mulch200X200text.png");
      
      //this part looks for and blanks out the non-players
      $.each(characters, function(key, value){
        //console.log("the value is " + value);
        //console.log("the key is " + key);
        if (key != firstPlayPlayer && key != secondPlayPlayer) {
          switch (key) {
            case 'sister': 
            //console.log('sister');
            $("#sister img").attr("src", "images/sisterPale.png");
            break;
            case 'mushroom': 
            //console.log('mushroom');
            $("#mushroom img").attr("src", "images/mushroomPale.png");
            break;
            case 'tommy': 
            //console.log('tommy');
            $("#tommy img").attr("src", "images/tommyPale.png");
            break;
            case 'wrapper': 
            //console.log('wrapper');
            $("#wrapper img").attr("src", "images/wrapperPale.png");
            break;
          }//switch key          
        }//if key
      });//each characters
      
    }//else if
    else if (playerCount === 55) {
      $('.theGroup').off;
    }//else if
  });
    if ($('.theGroup').off) {
      $('#button').on('click', function() {
        console.log("clickeroo! ");
        //get values of attributes of players
        

      });
    }//if group off

  /*

  $('#player').on('click', function() {    
          var characterBoxId = this.id;
          console.log("characterBoxId " + characterBoxId);
          console.log("characterBoxId with power " + players[characterBoxId]);
          console.log("this with $ " + $(this));
          console.log("this alone " + (this));
  $('.status-message').text(message);
  $('#player').on('click', function() {    
          var characterBoxId = this.id;
          console.log("charbox alone " + players);
          console.log("the this " + $(this));
          console.log(" this " + (this));
          console.log("charbox from players " + players[characterBoxId]);
          console.log(this);            
      if ( playerCount === 0) {                    
          playerCount = 1;
          console.log("player set to " + playerCount);
          message = "Choose your Mulching Foe!";
          $('.status-message').text(message);
          $(".player-up").animate({top:"-=200px"}, "normal");
      }
      else if ( playerCount === 1) {
          message = "Get Ready to Mulch!";
          $('.status-message').text(message);
      }
    }) */

     // $('#tommy').on('click', function() {    
      //    var characterBoxId = this.id;
      //    console.log(players[characterBoxId].attackPow)        
     // })


  //$('.btn').on('click', function() {
      //console.log($(this).attr("value"));   
  //});



});



