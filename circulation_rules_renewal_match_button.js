// ==UserScript==
// @name           Koha adds button to make the renewal length match the issuelength in the circulation rules matrix
// @description    Creates a button to make the renewal length match the circulation length in a row being edited in the circulation rules matrix
// @author         George H. Williams
// @version        1
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

$(document).ready(function() {

  $('#admin_smart-rules #default-circulation-rules > tfoot:nth-child(4) > tr:nth-child(1) > th:nth-child(3)').append("<br /><button id='renewalmatch' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Renewal match</button>");
  $("#renewalmatch").click(function() {
    $('#lrrow').removeAttr('id');
    $('#default-circulation-rules tbody tr:last').attr('id', 'lrrow');
    $('#renewalperiod').val($('#lrrow td:eq(6)').text().trim());
  });

});
