// ==UserScript== 
// @name           Home page screenshots for training 
// @description    Adds a button on the home page in Koha that reconfigures stuff for generic training screenshots
// @author         George H. Williams 
// @match          https://staff.nextkansas.org/* 
// @match          https://staff.nekls.bywatersolutions.com/*
// @match          http://staff-test.nexpresslibrary.org/* 
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript== 
 
$(document).ready(function() { 
 
      //Adds button to disable test server watermark and warning message to facilitate screenshots 
        $('#user-menu').append('<button id="training_screenshot_toggle" type="button" class="btn btn-custom-info" style="display: inline; "><i class="fa fa-camera" aria-hidden="true"></i></button>'); 
 
      //Adds function to screenshot button 
        $('#training_screenshot_toggle').click(function() { 
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
          $('.lightrope').hide();
        }); 
 
});