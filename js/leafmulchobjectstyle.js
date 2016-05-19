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
  var newSel;
  var playerCount = 0;
  var message = "Choose Your Player!";
  var tommyString = "Tommy Reiner and his Friends";      
    // music   
    //var robot = new Audio("music/I_am_Robot_and_Proud_Song_for_Two_Wheels.mp3");
    //robot.play();

    $('.players-message').text(message);

    $('.theGroup').on('click', function(e) {
    //console.log(this.id); //the id of element that was clicked on
    //but also the property name of the chars object.    
    $("#char-info").html(characters[this.id].href);  

    if (playerCount === 0) {
      firstPlayPlayer = this.id;
      $(this).removeClass("player-up");
      $('.firstPlayer').append(this);
      //$(this).addClass("player-down");
      playerCount = 1;
      message = "Choose your Mulching Opponent!"
      $('.players-message').text(message);           
    }
    else if (playerCount === 1) {
      secondPlayPlayer = this.id;
      $(this).removeClass("player-up");
      $('.secondPlayer').append(this);
      //console.log("in play player 2 " + secondPlayPlayer);
      playerCount = 55;
      message = "Get Mulching!"
      $('.players-message').text(message);
      // $('#button').removeClass("text-hide");
      // $('#button').addClass("text-show");

      //$("li").each(function(){
       //     alert($(this).text())
       // });
      $(characters).each(function(){
        var foo = $(this.id);
        console.log(foo);
        /* if (key != firstPlayPlayer && key != secondPlayPlayer) {
          switch (key) {
            case 'sister': 
            console.log('sister');
            $("#sister img").attr("src", "images/sisterPale.png");
            break;
            case 'mushroom': 
            console.log('mushroom');
            $("#mushroom img").attr("src", "images/mushroomPale.png");
            break;
            case 'tommy': 
            console.log('tommy');
            $("#tommy img").attr("src", "images/tommyPale.png");
            break;
            case 'wrapper': 
            console.log('wrapper');
            $("#wrapper img").attr("src", "images/wrapperPale.png");
            break;
          }//key
          //if (key === sister) {
          //$('.player-inactive').append(this);                 
            //$("#sister").attr("src", "images/sisterPale.png");      
            //$(this).attr("player-inactive");
            //console.log(key);
          //}//if key  
          $("#button").attr("src", "images/mulch200X200text.png");          
        } */
      });
      
    }
    else if (playerCount === 55) {

      $('.theGroup').off;
    }
  });
    $('#button').on('click', function() {
      console.log("clickeroo! ");
    });

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



