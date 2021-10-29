// ==UserScript==
// @name           Koha circulation rules-zero suspensions
// @description    Creates a button to set all suspension values to zero the fines and associated fields in a row being edited in the circulation rules matrix
// @author         George H. Williams
// @version        1
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/circulation_rules_zero_suspensions_button.user.js
// ==/UserScript==

$(document).ready(function() {

  $('#admin_smart-rules #default-circulation-rules > tfoot:nth-child(4) > tr:nth-child(1) > th:nth-child(3)').append('<br /><button id="zsuspend" type="button" style="margin: 5px">Clear suspensions</button>');

  $("#zsuspend").click(function() {
    $('#fined').val('');
    $('#maxsuspensiondays').val('');
    $('#norenewalbefore').val('');
    $('#no_auto_renewal_after').val('');
    $('#holds_per_day').val('');
  });

});
