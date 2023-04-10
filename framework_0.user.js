// ==UserScript==
// @name           Framework XXX$0 add
// @description    Adds default values for $0 subfield
// @author         George H. Williams
// @version        1.2
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          https://staff.nekls-test.bywatersolutions.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/framework_0.user.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/framework_0.user.js
// @license CC BY 4.0
// ==/UserScript==

$(document).ready(function() {
  
  $('#admin_marc_subfields_structure main').prepend('<br /><br /><button id="v_01">V-All</button>&nbsp;<button id="v_02">V-visible</button>&nbsp;<button id="v_03">V-editable</button>&nbsp;<button id="v_99">V-clear</button>&nbsp;');

  $('#admin_marc_subfields_structure main').prepend('<br /><br /><button id="n_00">0</button>&nbsp;<button id="n_01">1</button>&nbsp;<button id="n_02">2</button>&nbsp;<button id="n_03">3</button>&nbsp;<button id="n_04">4</button>&nbsp;<button id="n_05">5</button>&nbsp;<button id="n_06">6</button>&nbsp;<button id="n_07">7</button>&nbsp;<button id="n_08">8</button>&nbsp;<button id="n_09">9</button>&nbsp;');
  
  $('#admin_marc_subfields_structure main').prepend('<button id="zAuthority">$0</button>&nbsp;<button id="zReal">$1</button>&nbsp;<button id="zInstitution">$5</button>&nbsp;<button id="zLinkage">$6</button>&nbsp;<button id="zField">$8</button>&nbsp;<button id="zBibliographic">w</button>');

  
  
    $("#zAuthority").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('0');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Authority record control number or standard number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
    });
  
    $("#zReal").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('1');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Real World Object URI');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Real World Object URI');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
    });

    $("#zInstitution").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('5');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Institution to which field applies');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Institution to which field applies');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
    });
  
    $("#zLinkage").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('6');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Linkage');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Linkage');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
    });

    $("#zField").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('8');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Field link and sequence number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Field link and sequence number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
      
    });
  
    $("#zBibliographic").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('w');
      $('.constraints.tab-pane.active #basic li:nth-child(2) input').val('Bibliographic record control number');
      $('.constraints.tab-pane.active #basic li:nth-child(3) input').val('Bibliographic record control number');
      $('.constraints.tab-pane.active #basic li:nth-child(4) input').prop('checked', 'true');
    });
  
    $("#n_00").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="0"]').prop('selected', 'true');
      
    });
  
    $("#n_01").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="1"]').prop('selected', 'true');
      
    });
  
    $("#n_02").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="2"]').prop('selected', 'true');
      
    });
  
    $("#n_03").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="3"]').prop('selected', 'true');
      
    });
  
    $("#n_04").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="4"]').prop('selected', 'true');
      
    });
  
    $("#n_05").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="5"]').prop('selected', 'true');
      
    });
  
    $("#n_06").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="6"]').prop('selected', 'true');
      
    });
  
    $("#n_07").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="7"]').prop('selected', 'true');
      
    });
  
    $("#n_08").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="8"]').prop('selected', 'true');
      
    });
  
    $("#n_09").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="9"]').prop('selected', 'true');
      
    });
  
});