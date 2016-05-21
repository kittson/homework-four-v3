// js file for leafmulch game, homework assignment #4

var players = {
  tommy: {
    healthPnts: 10,
    attackPow: 0,
    attackPowFactor: 10,
    counterPow: 10                   
  },
  sis: {
    healthPnts: 50,
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
var thePoints;
var playerMe;
var playerThem;

 function makeAPlay (player1, player2) {
    //player1 = playerMe, player2 = playerThem
    //player1 attack power increases by original attack power
    players[player1].attackPow =  players[player1].attackPow + players[player1].attackPowFactor; 
    console.log("new attack power " + players[player1].attackPow);
    //player1 health debits by player 2 counter attack power
    players[player1].healthPnts = players[player1].healthPnts - players[player2].counterPow;
    //player2 health debits by player 1 attack power
    players[player2].healthPnts = players[player2].healthPnts - players[player1].attackPow; 
    console.log("p1 and p2 health " + players[player1].healthPnts + " " + players[player2].healthPnts); 
    return [players[player1].healthPnts, players[player2].healthPnts]; 
};

function updateHealthStatsDisplay (player){
  //console.log("player and points " + player + pts);
  //statsPlayer = (
    //"Health Points:" + players[player].pts + "<br>");
    //replace just the health points, not the whole thing
    //$('#' + player + ' .stats').html(statsPlayer);
    stats = (
      "Health Points:" + players[player].pts + "<br>" +
      "Attack Power:" + players[player]attackPowFactor + "<br>" +
      "Counter Power:" + players[player]counterPow);
    console.log(player.stats);

  //console.log($(players).find(playerThem).selector);
  //console.log("a div? " + players[playerThem]('div'));    
        //$('#sis .stats').append(stats); 
    //$("'#' + player + .stats").append(statsPlayer); 
    //row = $('#' + row_id);
    //need big help here            
    //return(statsPlayer);

    //var divChoice = $(players).find(player).selector; 
    //var divSign = "'#";
    //var statsEnd = " .stats'";
    //var cattedString = divSign.concat(divChoice, statsEnd);
    //console.log("string " + cattedString);

    //$(cattedString).append(stats);
    //var str1 = "Hello ";
    //var str2 = "world!";
    //var res = str1.concat(str2);
    //console.log("player from find " + $(players).find(player).selector); 
    //console.log("player from update health " + player);         
}

//start program
$(document).ready(function(){

  var message = "Choose Your Player!";   
  $('.players-message').text(message);
    $.each(players, function(key, value){
      switch (key) {
        case 'sis':  
        tmp = "sis";       
        stats = (
          
          "Health Points:" + players.sis.healthPnts + "<br>" +
          "Attack Power:" + players.sis.attackPowFactor + "<br>" +
          "Counter Power:" + players.sis.counterPow);        
        //$('#sis .stats').append(stats);   
        //$('#' + elementId + '.control-menu');
        //magic!   yay
        $('#' + tmp + ' .stats').append(stats);     
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
        //change class to move photo
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
            thePoints = makeAPlay(playerMe, playerThem);            
            updateHealthStatsDisplay(playerMe, thePoints[0]);
            updateHealthStatsDisplay(playerThem, thePoints[1]);
              if ( thePoints[0] <= 0)  {
                console.log("zeroed out");
                message = "Play Over! You're Overmulched!"
                $('.players-message').text(message);          
              }//if
              else if ( thePoints[1] <= 0){
                message = "Play Over! You Mulched your Opponent!"
                $('.players-message').text(message);
                //need big help here 
                // to find the div of the losing player
                $('#' + playerThem + ' img').attr('src', 'images/' + playerThem +'X.png');
                //$('#' + player + ' .stats').append(stats);
                //console.log($(players).find(playerThem).selector); 
                //console.log($(players).find(playerThem));

              }//else if
          });        
      }//if group off             
});//document ready



