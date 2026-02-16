// ==UserScript==
// @name     Aspen screenshot - permissions
// @version  2026.02.16.01
// @grant    none
// @match          http://nextkansas.org/*
// @match          https://nextkansas.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL    https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/refs/heads/main/aspen_screenshot_permission.user.js
// @updateURL      https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/refs/heads/main/aspen_screenshot_permission.user.js

// ==/UserScript==

$(document).ready(function () {
  
$('#account-menu-dropdown span').html('Your username').attr('style', 'padding-right: 10px');
  
$('#footer-custom-text').remove();
  
$('a[href="/NextLibraries"], a[href="https://library.ks.gov/home"]').hide();



$('#header-logo').parent().parent().html(
  '<div style="margin: 10px; padding: 10px; background-color: #73e55e; border-radius: 12px">' + 
  '  <h1 style="font-weight: bold;	padding: 8px 0 7px 0;" contenteditable="true">Aspen Permissions</h1>' + 
  '  <h2 contenteditable="true">> Grouped Work Display</h2>' + 
  '  <h3 style="margin-left: 20px;" contenteditable="true">>> Administer Search Interpreter</h3>' +
  //'  <h4 style="margin-left: 40px;" contenteditable="true">>>> Quaternary</h4>' +
  '<div>'
);
  
$('.grid-col--2 .adminSection.grid-item .adminPanel').css({'border': '10px solid #73e55e', 'border-radius': '12px'});
  
  
  
});

//https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/refs/heads/main/aspen_screenshot_permission.user.js