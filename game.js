var player1 = [];
var player2= [];
      winning_patterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      click_count = 1;
      game_over = false;

    

function init(){
  var player1 = [];
  var player2= [];
        winning_patterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        click_count = 1;
        game_over = false;
};

// Check if an array contains an element 
function element_in_array(array, el){
    var char = false
    for (var i = 0; i<array.length; i++){
        if (array[i] == el ){
            return true
        }
    };
    return char
    }

// Check if array1 contains array2
function include(array1, array2){
  var belong = true
  for (var i =0 ; i < array2.length; i++){
      if (element_in_array(array1,array2[i]) == false){
          belong = false
      }
  }
  return belong
}
 

//Change color of the winning pattern into red
function change_color(array){
  for (var i = 0; i < array.length; i++){
    document.getElementById(array[i]).style.backgroundColor = "red";
  }
};

// Check if the player's moves are part of a winning pattern
function winning(player, patterns,x_o){
  var win_pattern = null
  for (pattern in patterns){
    if (include(player,patterns[pattern]))
    { 
      win_pattern = patterns[pattern];
      console.log(win_pattern);
      game_over = true;
      change_color(win_pattern);
      finish(x_o);
    }
  }

};

//Once game over, change the color of the winning pattern and pop an winning alert
function finish(player){
  if (game_over) 
    { 
      alert("player " + player + " won");
  }
}


$(function()
{
       init();
      $(".game_zone").click(function(ev)
      {
        var el = $(this);
        index = el.attr("id");
        if (el.hasClass("taken") || game_over){
          return};
        if ((click_count % 2) !== 0) //If click_count is odd - Player X turn
        {player1.push(parseInt(index));
        el.find('h1').html("X");
        var player_x ='X';
        winning(player1,winning_patterns, player_x);
           if (click_count == 9 && game_over == false)
        {
          alert("It's a tie");
        }
        }else{  //Else if click_count is even - Player O turn
        player2.push(parseInt(index));
        el.find("h1").html("O");
        var player_o='O';
        winning(player2,winning_patterns, player_o)   
        };
        click_count ++;
        el.addClass("taken");  

  });

}); 


function reloadPage(){
  window.location.reload();
}


