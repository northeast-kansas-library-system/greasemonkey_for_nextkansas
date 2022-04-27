// ==UserScript==
// @name           Koha ILL buttons
// @description    Creates a button to set all late fees to zero the fines and associated fields in a row being edited in the circulation rules matrix
// @author         George H. Williams
// @version        1.1
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/circulation_rules_ill_button.user.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/circulation_rules_ill_button.user.js
// ==/UserScript==

$(document).ready(function() {

  $('#admin_smart-rules #default-circulation-rules > tfoot:nth-child(4) > tr:nth-child(1) > th:nth-child(3)').append('<br /><button id="ill_7" type="button" style="margin: 5px">ILL-7</button><br /><button id="ill_14" type="button" style="margin: 5px">ILL-14</button><br /><button id="ill_21" type="button" style="margin: 5px">ILL-21</button><br /><button id="ill_28" type="button" style="margin: 5px">ILL-28</button><br />');

  $("#ill_7").click(function() {
    //$('#lrrow').removeAttr('id');
    $('#matrixitemtype > option').val('I_ILL_07');
    //$('#note').val('');
    //$('#maxissueqty').val('');
    //$('#maxonsiteissueqty').val('');
    $('#issuelength').val('7');
    //$('#daysmode select option').val('').val('Calendar').val('Datedue').val('Days').val('Dayweek');
    //$('#lengthunit select option').val('');
    //$('#hardduedatecompare').val('-1').val('0').val('1');
    //$('#hardduedate').val('');
    //$('#decreaseloanholds').val('');
    //$('#fine').val('');
    //$('#chargeperiod').val('');
    //$('#chargeperiod_charge_at').val('');
    //$('#firstremind').val('');
    //$('#overduefinescap').val('');
    //$('#cap_fine_to_replacement_price').val('');
    //$('#fined').val('');
    //$('#maxsuspensiondays').val('');
    //$('#suspension_chargeperiod').val('');
    $('#renewalsallowed').val('0');
    $('#renewalperiod').val('7');
    //$('#norenewalbefore').val('');
    //$('#auto_renew').val('');
    //$('#no_auto_renewal_after').val('');
    //$('#no_auto_renewal_after_hard_limit').val('');
    //$('#reservesallowed').val('');
    //$('#holds_per_day').val('');
    //$('#holds_per_record').val('');
    //$('#onshelfholds').val('');
    //$('#opacitemholds').val('');
    //$('#article_requests').val('');
    //$('#rentaldiscount').val('');
  });

  $("#ill_14").click(function() {
    //$('#lrrow').removeAttr('id');
    //$('#note').val('');
    //$('#maxissueqty').val('');
    //$('#maxonsiteissueqty').val('');
    $('#issuelength').val('14');
    //$('#daysmode select option').val('').val('Calendar').val('Datedue').val('Days').val('Dayweek');
    //$('#lengthunit select option').val('');
    //$('#hardduedatecompare').val('-1').val('0').val('1');
    //$('#hardduedate').val('');
    //$('#decreaseloanholds').val('');
    //$('#fine').val('');
    //$('#chargeperiod').val('');
    //$('#chargeperiod_charge_at').val('');
    //$('#firstremind').val('');
    //$('#overduefinescap').val('');
    //$('#cap_fine_to_replacement_price').val('');
    //$('#fined').val('');
    //$('#maxsuspensiondays').val('');
    //$('#suspension_chargeperiod').val('');
    $('#renewalsallowed').val('0');
    $('#renewalperiod').val('14');
    //$('#norenewalbefore').val('');
    //$('#auto_renew select option').val('');
    //$('#no_auto_renewal_after').val('');
    //$('#no_auto_renewal_after_hard_limit').val('');
    //$('#reservesallowed').val('');
    //$('#holds_per_day').val('');
    //$('#holds_per_record').val('');
    //$('#onshelfholds').val('');
    //$('#opacitemholds').val('');
    //$('#article_requests').val('');
    //$('#rentaldiscount').val('');
  });

  $("#ill_21").click(function() {
    //$('#lrrow').removeAttr('id');
    //$('#note').val('');
    //$('#maxissueqty').val('');
    //$('#maxonsiteissueqty').val('');
    $('#issuelength').val('21');
    //$('#daysmode select option').val('').val('Calendar').val('Datedue').val('Days').val('Dayweek');
    //$('#lengthunit select option').val('');
    //$('#hardduedatecompare').val('-1').val('0').val('1');
    //$('#hardduedate').val('');
    //$('#decreaseloanholds').val('');
    //$('#fine').val('');
    //$('#chargeperiod').val('');
    //$('#chargeperiod_charge_at').val('');
    //$('#firstremind').val('');
    //$('#overduefinescap').val('');
    //$('#cap_fine_to_replacement_price').val('');
    //$('#fined').val('');
    //$('#maxsuspensiondays').val('');
    //$('#suspension_chargeperiod').val('');
    $('#renewalsallowed').val('0');
    $('#renewalperiod').val('21');
    //$('#norenewalbefore').val('');
    //$('#auto_renew select option').val('');
    //$('#no_auto_renewal_after').val('');
    //$('#no_auto_renewal_after_hard_limit').val('');
    //$('#reservesallowed').val('');
    //$('#holds_per_day').val('');
    //$('#holds_per_record').val('');
    //$('#onshelfholds').val('');
    //$('#opacitemholds').val('');
    //$('#article_requests').val('');
    //$('#rentaldiscount').val('');
  });

  $("#ill_28").click(function() {
    //$('#lrrow').removeAttr('id');
    //$('#note').val('');
    //$('#maxissueqty').val('');
    //$('#maxonsiteissueqty').val('');
    $('#issuelength').val('28');
    //$('#daysmode select option').val('').val('Calendar').val('Datedue').val('Days').val('Dayweek');
    //$('#lengthunit select option').val('');
    //$('#hardduedatecompare').val('-1').val('0').val('1');
    //$('#hardduedate').val('');
    //$('#decreaseloanholds').val('');
    //$('#fine').val('');
    //$('#chargeperiod').val('');
    //$('#chargeperiod_charge_at').val('');
    //$('#firstremind').val('');
    //$('#overduefinescap').val('');
    //$('#cap_fine_to_replacement_price').val('');
    //$('#fined').val('');
    //$('#maxsuspensiondays').val('');
    //$('#suspension_chargeperiod').val('');
    $('#renewalsallowed').val('0');
    $('#renewalperiod').val('28');
    //$('#norenewalbefore').val('');
    //$('#auto_renew select option').val('');
    //$('#no_auto_renewal_after').val('');
    //$('#no_auto_renewal_after_hard_limit').val('');
    //$('#reservesallowed').val('');
    //$('#holds_per_day').val('');
    //$('#holds_per_record').val('');
    //$('#onshelfholds').val('');
    //$('#opacitemholds').val('');
    //$('#article_requests').val('');
    //$('#rentaldiscount').val('');
  });

});
