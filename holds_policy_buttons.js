// ==UserScript==
// @name           Holds policy buttons
// @description    Creates buttons for updating the holds policy rules in Koha
// @author         George H. Williams
// @version        1.1
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

$(document).ready(function() {

  $('#holds-policy-by-item-type select[name="itemtype"]').parent().append("<br /><button id='ahh' type='button' style='margin: 5px' class='btn btn-default btn-xs'>A-H-H</button><br /><button id='aigh' type='button' style='margin: 5px' class='btn btn-default btn-xs'>A-IG-H</button><br /><button id='hhh' type='button' style='margin: 5px' class='btn btn-default btn-xs'>H-H-H</button>");
  $("#ahh").click(function() {
    $('select[name="itemtype"] option').removeAttr('selected');
    $('select[name="holdallowed"] option').removeAttr('selected');
    $('select[name="hold_fulfillment_policy"] option').removeAttr('selected');
    $('select[name="returnbranch"] option').removeAttr('selected');
    $('select[name="itemtype"] option[value="I_ILL_14"]').attr('selected','selected');
    $('select[name="holdallowed"] option[value="from_any_library"]').attr('selected','selected');
    $('select[name="hold_fulfillment_policy"] option[value="homebranch"]').attr('selected','selected');
    $('select[name="returnbranch"] option[value="homebranch"]').attr('selected','selected');
  });


  $("#aigh").click(function() {
    $('select[name="itemtype"] option').removeAttr('selected');
    $('select[name="holdallowed"] option').removeAttr('selected');
    $('select[name="hold_fulfillment_policy"] option').removeAttr('selected');
    $('select[name="returnbranch"] option').removeAttr('selected');
    $('select[name="itemtype"] option[value="I_ILL_14"]').attr('selected','selected');
    $('select[name="holdallowed"] option[value="from_any_library"]').attr('selected','selected');
    $('select[name="hold_fulfillment_policy"] option[value="holdgroup"]').attr('selected','selected');
    $('select[name="returnbranch"] option[value="homebranch"]').attr('selected','selected');
  });

  $("#hhh").click(function() {
    $('select[name="itemtype"] option').removeAttr('selected');
    $('select[name="holdallowed"] option').removeAttr('selected');
    $('select[name="hold_fulfillment_policy"] option').removeAttr('selected');
    $('select[name="returnbranch"] option').removeAttr('selected');
    $('select[name="itemtype"] option[value="I_ILL_14"]').attr('selected','selected');
    $('select[name="holdallowed"] option[value="from_home_library"]').attr('selected','selected');
    $('select[name="hold_fulfillment_policy"] option[value="homebranch"]').attr('selected','selected');
    $('select[name="returnbranch"] option[value="homebranch"]').attr('selected','selected');
  });

});
