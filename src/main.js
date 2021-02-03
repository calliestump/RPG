import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Witch, toVillSmallAttack} from './js/character.js';

$(document).ready(function() {

  $('#smallAttack').click(function() {
    const newState = Witch(toVillSmallAttack);

    $('#notifications-value').text("You've attacked the enemy");
    $('#villainHealth-value').text(`${newState.health}`);
  });

  // event.preventDefault();
});