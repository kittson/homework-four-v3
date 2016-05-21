var characters = {
    tommy: {
      healthPoints: 10,
      attackPow: 10,
      attackPowFactor: 0,
      counterPow: 10                   
    },
    sister: {
      healthPoints: 10,
      attackPow: 30,
      attackPowFactor: 0,
      counterPow: 30           
    },
    wrapper: {
      healthPoints: 10,
      attackPow: 20,
      attackPowFactor: 0,
      counterPow: 20           
    },
    mushroom: {
      healthPoints: 10,
      attackPow: 15,
      attackPowFactor: 0,
      counterPow: 15          
    }
  };

$(document).ready(function(){
  var charsNotInPlay;
  var tmp;
  var stats;
  var newSel;
  var playerCount = 0;
  var message = "Choose Your Player!";
  
  //console.log(Object.values(obj)); // ['bar', 42]   
    // music   
    //var robot = new Audio("music/I_am_Robot_and_Proud_Song_for_Two_Wheels.mp3");
    //robot.play();

    $('.players-message').text(message);
    $('#button').off; //why doesn't this work?

    $.each(characters, function(key, value){
      switch (key) {
        case 'sister':         
        stats = (
          "Health Points:" + characters.sister.healthPoints + "<br>" +
          "Attack Power:" + characters.sister.attackPow + "<br>" +
          "Counter Power:" + characters.sister.counterPow);        
        $('#sister .stats').append(stats);        
        break; 
        case 'tommy': 
        stats = (
          "Health Points:" + characters.tommy.healthPoints + "<br>" +
          "Attack Power:" + characters.tommy.attackPow + "<br>" +
          "Counter Power:" + characters.tommy.counterPow);        
        $('#tommy .stats').append(stats);
        break;
        case 'mushroom': 
        stats = (
          "Health Points:" + characters.mushroom.healthPoints + "<br>" +
          "Attack Power:" + characters.mushroom.attackPow + "<br>" +
          "Counter Power:" + characters.mushroom.counterPow);        
        $('#mushroom .stats').append(stats);
        break;
        case 'wrapper': 
        stats = (
          "Health Points:" + characters.wrapper.healthPoints + "<br>" +
          "Attack Power:" + characters.wrapper.attackPow + "<br>" +
          "Counter Power:" + characters.wrapper.counterPow);        
        $('#wrapper .stats').append(stats);
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

    if (playerCount === 0) {
      playerMe = this.id;
      console.log(playerMe);
      //roger help player one class is what moves
      $(this).removeClass("player-up");
      $(this).addClass("player-one");
      $('.mePlayer').append(this);      
      playerCount = 1;
      message = "Choose your Mulching Opponent!"
      $('.players-message').text(message);
      //assign points to player   
      //why does this work
      console.log($(characters).find(playerMe).selector);
      //and why do these not work

      
      console.log($(characters).find(playerMe).selector.healthPoints);
      console.log($(characters).find(playerMe).attr("healthPoints"));
      console.log($(characters).find(playerMe)['healthPoints']);
      console.log($(characters).find(playerMe)['healthPoints']);
      
      console.log(characters.playerMe);
      //console.log(characters.playerMe.healthPoints);
      //console.log(characters."playerMe");
      //console.log(characters.this.id);


      //playerMe.attackPow = playerMe.attackPow + playerMe.attackPowFactor;
      //playerMe.healthPoints = playerMe.healthPoints - playerThem.counterPow;
      //playerThem.healthPoints = playerThemHealthPoints - playerMe.attackPow;
    }
    else if (playerCount === 1) {
      playerThem = this.id;
      console.log()
      $(this).removeClass("player-up");      
      $('.themPlayer').append(this);
      
      playerCount = 55;
      message = "Get Mulching!"
      $('.players-message').text(message);
      $("#button").attr("src", "images/mulch200X200text.png");
      
      //this part looks for and blanks out the non-players
      // need help from Roger here
      $.each(characters, function(key, value){
        if (key != playerMe && key != playerThem) {
          switch (key) {
            case 'sister':             
            $("#sister img").attr("src", "images/sisterPale.png");
            break;
            case 'mushroom': 
            $("#mushroom img").attr("src", "images/mushroomPale.png");
            break;
            case 'tommy': 
            $("#tommy img").attr("src", "images/tommyPale.png");
            break;
            case 'wrapper': 
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

  //get attack power factor of playerMe 



    if ($('.theGroup').off) {
      $('#button').on('click', function() {
        console.log(" playerMe info " + playerMe);

        

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



