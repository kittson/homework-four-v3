$(document).ready(function(){
// second try, reconfiguring characters var to individual vars
  var tommy = {
    healthPoints: 10,
    attackPow: 10,
    counterPow: 10                   
  };
  var sister = {
    healthPoints: 10,
    attackPow: 30,
    counterPow: 10           
  };
  var wrapper = {
    healthPoints: 10,
    attackPow: 20,
    counterPow: 10           
  };
  var mushroom ={
    healthPoints: 10,
    attackPow: 15,
    counterPow: 10          
  };

  var characters = [tommy, sister, wrapper, mushroom];
  var firstPlayPlayer;
  var secondPlayPlayer;
  var charsNotInPlay;
  var tmp;
  var newSel;
  var playerCount = 0;
  var message = "Choose Your Player!";

    // music   
    //var robot = new Audio("music/I_am_Robot_and_Proud_Song_for_Two_Wheels.mp3");
    //robot.play();

  $('.players-message').text(message);

  $('.theGroup').on('click', function(e) {
  console.log(this.id); //the id of element that was clicked on
  //but also the property name of the chars object.    
  //$("#char-info").html(characters[this.id].href);  

    if (playerCount === 0) {
      firstPlayPlayer = this.id;
      $(this).removeClass("player-up");
      $('.firstPlayer').append(this);
      //$(this).addClass("player-down");
      playerCount = 1;
      message = "Choose your Mulching Opponent!"
      $('.players-message').text(message);           
    } // playerCount

    else if (playerCount === 1) {
      secondPlayPlayer = this.id;
      $(this).removeClass("player-up");
      $('.secondPlayer').append(this);
      //console.log("in play player 2 " + secondPlayPlayer);
      playerCount = 55;
      message = "Get Mulching!"
      $('.players-message').text(message);
      $("#button").attr("src", "images/mulch200X200text.png");
      // $('#button').removeClass("text-hide");
      // $('#button').addClass("text-show");
      //$.each(characters, function () {
      //$("li").each(function(){
       //     alert($(this).text())
       // });
       $(characters).each(function(){
        var foo = $(this);
        console.log("foo is " + foo);
      });
      for (var i = characters.length - 1; i >= 0; i--) {
        //console.log("got into for and i is " + i);
        if (characters[i] != firstPlayPlayer && characters[i] != secondPlayPlayer) {
          console.log("got into if");
          console.log("characters are " + characters);
          switch (i) {
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
          } //switch
          //if (key === sister) {
          //$('.player-inactive').append(this);                 
          //$("#sister").attr("src", "images/sisterPale.png");      
          //$(this).attr("player-inactive");
          //console.log(key);
          //}//if key  
                    
        }//if characters
      }//for
    }//else if
  });

  
  //else if (playerCount === 55) {

   // $('.theGroup').off;
  //}

  $('#button').on('click', function() {
    console.log("clickeroo! ");
  });
});//document



