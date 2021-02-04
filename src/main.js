import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {toVillSmallAttack, toVillLargeAttack, Bill, Zoey, villainArr} from './js/character.js';

$(document).ready(function() {
  let counter = 0;
  let villainState = villainArr[counter]();
  
  $('#choosecharacter').click(function() {
    $(".gamingArea").show();
    $(".characterSelection").hide();
    const billHealth = Bill().health;
    const zoeyHealth = Zoey().health;
    var currentCharacter = $("#character").val();
    if (currentCharacter == "bill") {
      $('#notifications-value').text("you've selected Bill as your character!");
      $("#characterHealth-value").text(`Health: ${billHealth}`);
      $('#villainHealth-value').text(`Health: ${villainState.health}`);
      console.log(Bill().health);
    } else if (currentCharacter == "zoey") {
      $('#notifications-value').text("you've selected Zoey as your character!");
      $("#characterHealth-value").text(`Health: ${zoeyHealth}`);
      $('#villainHealth-value').text(`Health: ${villainState.health}`);
      console.log(Zoey().health);
    } else {
      $('#notifications-value').text("please choose a character!");
    }
  });
  // counter = 0;
  
  $('#smallAttack').click(function() {
    let villainState = villainArr[counter](toVillSmallAttack);
    $('#notifications-value').text("You've attacked the enemy with a small attack");
    $('#villainHealth-value').text(`Health: ${villainState.health}`);

    if(villainState.health <= 0) {
      counter++;
      console.log(counter);
      $('#notifications-value').text("The enemy has died!");
      $('#villainHealth-value').text(`Health: ${villainState.health}`);
    }
  });

  $('#largeAttack').click(function() {
    let villainState = villainArr[counter](toVillLargeAttack);
    $('#notifications-value').text("You've attacked the enemy with a large attack");
    $('#villainHealth-value').text(`Health: ${villainState.health}`);

    if (villainState.health <= 0) {
      $('#notifications-value').text("The enemy has died!");
    }
  });

  // event.preventDefault();
});