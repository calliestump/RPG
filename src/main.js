import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {toVillSmallAttack, toVillLargeAttack, Bill, Zoey, Louis, Francis, villainArr} from './js/character.js';

$(document).ready(function() {
  let villainCounter = 0;
  let villainState = villainArr[villainCounter]();
  
  $('#choosecharacter').click(function() {
    $(".gamingArea").show();
    $(".characterSelection").hide();
    const billHealth = Bill().health;
    const zoeyHealth = Zoey().health;
    const louisHealth = Louis().health;
    const francisHealth = Francis().health;
    var currentCharacter = $("#character").val();
    if (currentCharacter == "Bill") {
      $('#characterSelected').text(`You've selected '${currentCharacter}' as your character!`);
      $('#notifications-value').text(`You're now being attacked by a ${villainState.name}`);
      $("#characterHealth-value").text(`Health: ${billHealth}`);
      $('#villainHealth-value').text(`Health: ${villainState.health}`);
      console.log(Bill().health);
    } else if (currentCharacter == "Zoey") {
      $('#characterSelected').text(`You've selected '${currentCharacter}' as your character!`);
      $('#notifications-value').text(`You're now being attacked by a ${villainState.name}`);
      $("#characterHealth-value").text(`Health: ${zoeyHealth}`);
      $('#villainHealth-value').text(`Health: ${villainState.health}`);
      console.log(Zoey().health);
    } else if (currentCharacter == "Louis") {
      $('#characterSelected').text(`You've selected '${currentCharacter}' as your character!`);
      $('#notifications-value').text(`You're now being attacked by a ${villainState.name}`);
      $("#characterHealth-value").text(`Health: ${louisHealth}`);
      $('#villainHealth-value').text(`Health: ${villainState.health}`);
      console.log(Louis().health);
    } else if (currentCharacter == "Francis") {
      $('#characterSelected').text(`You've selected '${currentCharacter}' as your character!`);
      $('#notifications-value').text(`You're now being attacked by a ${villainState.name}`);
      $("#characterHealth-value").text(`Health: ${francisHealth}`);
      $('#villainHealth-value').text(`Health: ${villainState.health}`);
      console.log(Francis().health);
    } else {
      $('#notifications-value').text("please choose a character!");
    }
  });
  
  $('#smallAttack').click(function() {
    let villainState = villainArr[villainCounter](toVillSmallAttack);
    $('#notifications-value').text("You've attacked the enemy with a small attack");
    $('#villainHealth-value').text(`Health: ${villainState.health}`);
    $("#characterSelected").hide();

    if (villainState.health <= 0) {
      villainCounter++;
      console.log(villainCounter);
      $('#notifications-value').text(`${villainState.name} has died!`);
      $('#villainHealth-value').text(`Health: ${villainState.health}`);
      $("#nextEnemy").show(); 
    }
    if (villainCounter > 6) {
      $("#smallAttack").hide();
      $("#largeAttack").hide();
      $("#nextEnemy").hide();
      $('#gameOver').show();
    }
  });

  $('#largeAttack').click(function() {
    let villainState = villainArr[villainCounter](toVillLargeAttack);
    $('#notifications-value').text("You've attacked the enemy with a large attack");
    $('#villainHealth-value').text(`Health: ${villainState.health}`);
    $("#characterSelected").hide();
    
    if (villainState.health <= 0) {
      villainCounter++;
      console.log(villainCounter);
      $('#notifications-value').text(`${villainState.name} has died!`);
      $('#villainHealth-value').text(`Health: ${villainState.health}`);
      $("#nextEnemy").show();
    }
    if (villainCounter > 6) {
      $("#smallAttack").hide();
      $("#largeAttack").hide();
      $("#nextEnemy").hide();
      $('#gameOver').show();
    }
  });

  $('#nextEnemy').click(function() {
    let villainState = villainArr[villainCounter]();
    $('#notifications-value').text(`You're now being attacked by a ${villainState.name}`);
    $('#villainHealth-value').text(`Health: ${villainState.health}`);
    $("#nextEnemy").hide();
  });
});