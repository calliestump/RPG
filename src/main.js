import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Witch, toVillSmallAttack, toVillLargeAttack, Bill, Zoey} from './js/character.js';

$(document).ready(function() {
  $('#choosecharacter').click(function() {
    const witchState = Witch();
    const billHealth = Bill().health;
    const zoeyHealth = Zoey().health;
    var currentCharacter = $("#character").val();

    if (currentCharacter == "bill") {
      console.log("you've selected", currentCharacter, "as your character!");
      $("#characterHealth-value").text(`Health: ${billHealth}`);
      $('#villainHealth-value').text(`Health: ${witchState.health}`);
      console.log(Bill().health);
    } else if (currentCharacter == "zoey") {
      console.log("you've selected", currentCharacter, "as your character!");
      $("#characterHealth-value").text(`Health: ${zoeyHealth}`);
      $('#villainHealth-value').text(`Health: ${witchState.health}`);
      console.log(Zoey().health);
    } else {
      console.log("please choose a character!");
    }
  });

  $('#smallAttack').click(function() {
    let witchState = Witch(toVillSmallAttack);
    $('#notifications-value').text("You've attacked the enemy with a small attack");
    $('#villainHealth-value').text(`Health: ${witchState.health}`);

    if (witchState.health <= 0) {
      $('#smallAttack').hide();
      $('#largeAttack').hide();
      $('#notifications-value').text("The enemy has died!");
    }
  });

  $('#largeAttack').click(function() {
    const witchState = Witch(toVillLargeAttack);
    $('#notifications-value').text("You've attacked the enemy with a large attack");
    $('#villainHealth-value').text(`Health: ${witchState.health}`);

    if (witchState.health <= 0) {
      $('#largeAttack').hide();
      $('#smallAttack').hide();
      $('#notifications-value').text("The enemy has died!");
    }
  });

  // event.preventDefault();
});