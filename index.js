/*jshint esversion: 6 */

(function() {
  'use strict';

  function getData() {
    let data = {};

    data.bonusToHit = $("#bonusToHit").val();
    data.critChance = $("#critChance").val()/100;
    data.critMultiplier = $("#critMultiplier").val() - 1;
    data.targetAC = $("#targetAC").val();
    data.damagePerHit = $("#damagePerHit").val();

    return data;
  }

  let calculateDPR = (e) => {
    e.preventDefault();

    let data = getData();

    let hitChance = (100 - ((data.targetAC - data.bonusToHit) * 5))/100;

    let damagePerRound = (hitChance * data.damagePerHit) +
        (
          data.critChance *
          data.critMultiplier *
          hitChance *
          data.damagePerHit
        );

    damagePerRound = Math.round(damagePerRound);

    $("#damagePerRound").val(damagePerRound);
  };

  $("#calculate").on('click', calculateDPR);
}());
