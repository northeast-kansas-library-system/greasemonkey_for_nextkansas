// ==UserScript==
// @name           Next screenshot helper
// @description    Hides non-essential and confidential information while capturing screen video for Snagit
// @author         George H. Williams
// @version        1.2
// @grant          none
// @match          https://staff.nekls.bywatersolutions.com/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/next_screenshot_helper.user.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/next_screenshot_helper.user.js
// @license CC BY 4.0
// ==/UserScript==

$(document).ready(function() {

  let nsc_is_koha = $('head > title').text();
  let koha = nsc_is_koha.includes('Koha')
    
  let nsc_is_aspen = $('#install-info small').text();
  let aspen_discovery = nsc_is_aspen.includes('Aspen Discovery')
  
  let nsc_is_staff = $('a[href="/MyAccount/StaffSettings"]').text();
  let aspen_discovery_staff = nsc_is_staff.includes('Staff Settings')

  if (aspen_discovery === true) { 
    
    console.log('aspen_discovery: ' + aspen_discovery);
    
    if (aspen_discovery_staff === true) {

      $('#nsc').hide(); 
      $('#account-menu-dropdown span').html('Your username').attr('style','padding-right: 10px'); 
      $('#pin').removeAttr('type').val('YOUR PASSWORD');
      $('#pin1').removeAttr('type').val('ENTER YOUR NEW PASSWORD');
      $('#pin2').removeAttr('type').val('ENTER YOUR NEW PASSWORD AGAIN');

    } 
  
  
  
  }

  if (koha === true) { 
    
    console.log('koha: ' + koha);
  
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

  }




});

/*

Work in progress

Needs to be updated to also include Aspen Discovery

*/