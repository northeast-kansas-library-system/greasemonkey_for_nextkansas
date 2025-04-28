// ==UserScript==
// @name           Screen video helper
// @description    Hides non-essential informaiton while capturing screen video for Snagit
// @author         George H. Williams
// @version        1.1
// @grant          none
// @match          https://staff.nekls.bywatersolutions.com/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/circulation_rules_renewal_match_button.user.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/circulation_rules_renewal_match_button.user.js
// @license CC BY 4.0
// ==/UserScript==

$(document).ready(function() {
  
  $('#nsc_link_widget').html('Your username').attr('style','padding-right: 10px');

  $('#account-menu-dropdown span').html('Your username').attr('style','padding-right: 10px'); 
      $('#training_screenshot_toggle').hide(); 
      $('.loggedinusername').html('Your username').attr('style','padding-right: 10px'); 
      $('.logged-in-branch-name').html('Your library'); 
      $('.nsc_alert').hide(); 
      $('#holds_queue_clear').hide(); 
      $('#missing_in_transit_action').hide(); 
      $('.newsitem').hide(); 
      $('#area-userblock').hide(); 
      $('#news303').show(); 
      $('#koha_version').html('Koha version number'); 
      $('div[data-lastpass-icon-root]').hide(); 
      $('#checkout_notes_pending .pending-number-link').html('Notes for your library'); 
      $('.lightrope').remove();
      $('#nsc_link_widget').hide();
      $('.nsc_special_message').hide();
      $('#nsc_test_toggle').hide();
      $('#test_server_warning').hide();
      $('.nsc_upgrade_alert').hide();
  
      $('.patroninfo h5').html('Name redacted to<br>provide patron confidentiality');
      $('.patronattribute, .patronborrowernumber, .patronupdatedon').html('Redacted');
      $('#breadcrumbs .breadcrumb li:contains("(")').html('Redacted');
      $('.circ_barcode').html('Redacted to provide patron confidentialty');
      $('#circmessages .circmessage ul').html('Notes and messages redacted to provide patron confidentialty');
      $('#pat_notices main h1:contains("Sent notices")').html('Sent notices for *redacted*');
});

/*

Work in progress

Needs to be updated to also include Aspen Discovery

*/