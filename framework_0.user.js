// ==UserScript==
// @name           Framework XXX$0 add
// @description    Adds default values for $0 subfield
// @author         George H. Williams
// @version        1.0
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/framework_0.user.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/framework_0.user.js
// @license CC BY 4.0
// ==/UserScript==

$(document).ready(function() {

  $('#admin_marc_subfields_structure main').prepend('<button id="zAuthority0">0xx$0</button>&nbsp;<button id="zAuthority1">1xx$0</button>&nbsp;<button id="zAuthority2">2xx$0</button>&nbsp;<button id="zAuthority3">3xx$0</button>&nbsp;<button id="zAuthority4">4xx$0</button>&nbsp;<button id="zAuthority5">5xx$0</button>&nbsp;<button id="zAuthority6">6xx$0</button>&nbsp;<button id="zAuthority7">7xx$0</button>&nbsp;<button id="zAuthority8">8xx$0</button>&nbsp;<button id="zAuthority9">9xx$0</button>');
  
    $("#zAuthority0").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="0"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });
  
    $("#zAuthority1").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="1"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });
  
    $("#zAuthority2").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="2"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });
  
    $("#zAuthority3").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="3"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });
  
    $("#zAuthority4").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="4"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });
  
    $("#zAuthority5").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="5"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });
  
    $("#zAuthority6").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="6"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });
  
    $("#zAuthority7").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="7"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });
  
    $("#zAuthority8").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="8"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });
  
    $("#zAuthority9").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="9"]').prop('selected', 'true');
      
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(1)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(2)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(3)').prop('checked', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(3) input:eq(4)').prop('checked', 'true');
      
    });

});