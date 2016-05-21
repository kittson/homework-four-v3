// js file for leafmulch game, homework assignment #4

var players = {
  tommy: {
    healthPnts: 10,
    attackPow: 0,
    attackPowFactor: 10,
    counterPow: 10                   
  },
  sis: {
    healthPnts: 10,
    attackPow: 0,
    attackPowFactor: 30,
    counterPow: 30           
  },
  wrapper: {
    healthPnts: 10,
    attackPow: 0,
    attackPowFactor: 20,
    counterPow: 20           
  },
  shroom: {
    healthPnts: 10,
    attackPow: 0,
    attackPowFactor: 15,
    counterPow: 15          
  }
};
var charsNotInPlay;
var tmp;
var stats;
var newSel;
var playerCount = 0;

 function makeAPlay (player1, player2) {
    //player1 = playerMe, player2 = playerThem
    //player1 attack power increases by original attack power
    players[player1].attackPow =  players[player1].attackPow + players[player1].attackPowFactor; 
    //player1 health debits by player 2 counter attack power
    players[player1].healthPnts = players[player1].healthPnts - players[player2].counterPow;
    //player2 health debits by player 1 attack power
    players[player2].healthPnts = players[player2].healthPnts - players[player1].attackPow;    
};


$(document).ready(function(){

  var message = "Choose Your Player!";   
  $('.players-message').text(message);
    $('#button').off; //why doesn't this work?

    $.each(players, function(key, value){
      switch (key) {
        case 'sis':         
        stats = (
          "Health Points:" + players.sis.healthPnts + "<br>" +
          "Attack Power:" + players.sis.attackPowFactor + "<br>" +
          "Counter Power:" + players.sis.counterPow);        
        $('#sis .stats').append(stats);        
        break; 
        case 'tommy': 
        stats = (
          "Health Points:" + players.tommy.healthPnts + "<br>" +
          "Attack Power:" + players.tommy.attackPowFactor + "<br>" +
          "Counter Power:" + players.tommy.counterPow);        
        $('#tommy .stats').append(stats);
        break;
        case 'shroom': 
        stats = (
          "Health Points:" + players.shroom.healthPnts + "<br>" +
          "Attack Power:" + players.shroom.attackPowFactor + "<br>" +
          "Counter Power:" + players.shroom.counterPow);        
        $('#shroom .stats').append(stats);
        break;
        case 'wrapper': 
        stats = (
          "Health Points:" + players.wrapper.healthPnts + "<br>" +
          "Attack Power:" + players.wrapper.attackPowFactor + "<br>" +
          "Counter Power:" + players.wrapper.counterPow);        
        $('#wrapper .stats').append(stats);
        break;
          }//switch key   
        }); 

    $('.theGroup').on('click', function(e) {
    //console.log(this.id); //the id of element that was clicked on
    //but also the property name of the chars object.    
    //$("#char-info").html(players[this.id].href); 

    if (playerCount === 0) {
      playerMe = this.id;
      console.log(playerMe);
      //roger help player one class is what moves
      $(this).removeClass("player-up");
      $(this).addClass("player-one");
      $('.playerMe').append(this);      
      playerCount = 1;
      message = "Choose your Mulching Opponent!"
      $('.players-message').text(message);
      //console.log($(players).find(playerMe).selector); 
    }
    else if (playerCount === 1) {
      playerThem = this.id;
      console.log()
      $(this).removeClass("player-up");      
      $('.playerThem').append(this);
      
      playerCount = 55;
      message = "Get Mulching!"
      $('.players-message').text(message);
      $("#button").attr("src", "images/mulch200X200text.png");
      
      //this part looks for and blanks out the non-players      
      $.each(players, function(key, value){
        if (key != playerMe && key != playerThem) {
          switch (key) {
            case 'sis':             
            $("#sis img").attr("src", "images/sisPale.png");
            break;
            case 'shroom': 
            $("#shroom img").attr("src", "images/shroomPale.png");
            break;
            case 'tommy': 
            $("#tommy img").attr("src", "images/tommyPale.png");
            break;
            case 'wrapper': 
            $("#wrapper img").attr("src", "images/wrapperPale.png");
            break;
          }//switch key          
        }//if key
      });//each players      
    }//else if
    else if (playerCount === 55) {
      $('.theGroup').off;
    }//else if
  });

  
      // this is the play button
      if ($('.theGroup').off) {
        $('#button').on('click', function() {
          makeAPlay (playerMe, playerThem);
          console.log("new player 1 health: " + players[playerMe].healthPnts);
          console.log("new player 2 health: " + players[playerThem].healthPnts);
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



