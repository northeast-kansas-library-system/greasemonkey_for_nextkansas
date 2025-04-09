// ==UserScript== 
// @name           Koha/Aspen private video 
// @description    Hide some fields during training video creation 
// @author         George H. Williams 
// @version        1.2 
// @grant          none 
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// @match          https://staff.nekls.bywatersolutions.com/* 
// @match          https://staff.nekls-test.bywatersolutions.com/* 
// @match          https://*.nextkansas.org/* 
// @match          https://nekls-digital.aspendiscovery.org/* 
// @downloadURL    https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/refs/heads/main/private_video.user.js 
// @updateURL      https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/refs/heads/main/private_video.user.js 
// ==/UserScript== 

/* ========== Turn on this script when recording trainings that may contain confidential data ========== */ 

$(document).ready(function () { 

  //Aspen Discovery 
    
    //Creates a "Screenshot mode" badge at top of page 
      $('#language-selection-header').after('' + 
        '<div id="vsc" >' +
        '<p id="nsc_video_screenshot" class="btn btn-warning" style="display: none; width: 100%;">' +
        'Training video mode' +
        '</p><br><br></div>'
      );
    
    //BEGIN Click on "video mode" button to remove from screen
      $('#nsc_video_screenshot').one('click', function() {
        $(this).remove();
      });
    
    //BEGIN Click on "Sign In" in sign-in modal to set for screenshot
      $('#modalDialog #myModalLabel').one('click', function() {
        $('#username').val('YOUR USERNAME or CARD NUMBER');
        $('#password').removeAttr('type').val('YOUR PASSWORD');
      });
  
    //Hides nsc drop-down 
      $('#nsc_dropdown, #aspen_videorecording_mode').hide(); 
  
    //shows #nsc_dropdown when header is hovered on 
      $('#header-wrapper').hover(function() { 
        $('#nsc_dropdown, #nsc_video_screenshot').show(); 
      }, function() { 
        $('#nsc_dropdown, #nsc_video_screenshot').hide(); 
      }); 
  
    //Masks logged in user name on all pages 
      $('#account-menu-dropdown > span:nth-child(2)').text('YOUR USERNAME'); 
  
    //Hides confidential content in "Sign in" modal 
      $('#username').val('ENTER YOUR USERNAME HERE'); 
      $('#password').removeAttr('type').val('ENTER YOUR PASSWORD HERE'); 
  
    //Hides confidential content on  Home > Browse > Your Account > Contact Information (/MyAccount/ContactInformation) 
      $('#MyAccount-ContactInformation #main-content input').attr('readonly', 'true').val('CONFIDENTIAL - Not shown in training videos'); 
  
    //Hides confidential content on Home > Browse > Login (/MyAccount/Home) 
      $('#account-menu-dropdown span').html('Your username').attr('style','padding-right: 10px'); 
      $('#pin').removeAttr('type').val('YOUR PASSWORD'); 
      $('#pin1').removeAttr('type').val('ENTER YOUR NEW PASSWORD'); 
      $('#pin2').removeAttr('type').val('ENTER YOUR NEW PASSWORD AGAIN'); 
  
    //Hides confidential content on Home > Browse > Administration Home > System Administration > Administrators (/Admin/Administrators) 
      $('#adminTable td[aria-label$="name"], #adminTable td[aria-label~="displayName"], #adminTable td[aria-label~="ils_barcode"]').text('Confidential'); 
  
  });