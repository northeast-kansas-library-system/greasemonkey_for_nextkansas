// ==UserScript==
// @name     Aspen screenshot - permissions
// @version  2026.02.18.03
// @grant    none
// @match          http://nextkansas.org/*
// @match          https://nextkansas.org/*
// @downloadURL    https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/refs/heads/main/aspen_screenshot_permission.user.js
// @updateURL      https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/refs/heads/main/aspen_screenshot_permission.user.js
// Upgraded from Greasemonkey to Violentmonkey

// ==/UserScript==

$(document).ready(function () {

  //All pages in Aspen Discovery
    //Changes username to "Your username"
      $('#account-menu-dropdown span').html('Your username').attr('style', 'padding-right: 10px');

    //Removes the "Search other Next catalogs" button from the footer
      $('#footer-custom-text').remove();

    //Hides the state library link
      $('a[href="/NextLibraries"], a[href="https://library.ks.gov/home"]').hide();

    //Removes the logo and adds Primary/Secondary/Tertiary/Quaternary text block where the logo used to be
      $('#header-logo').parent().parent().html(
        '<div style="margin: 10px; padding: 10px; background-color: #73e55e; border-radius: 12px">' +
        '  <h1 style="font-weight: bold;	padding: 8px 0 7px 0;" contenteditable="true">Aspen Permissions</h1>' +
        '  <h2 contenteditable="true">> Secondary</h2>' +
        '  <h3 style="margin-left: 20px;" contenteditable="true">>> Tertiary</h3>' +
        //'  <h4 style="margin-left: 40px;" contenteditable="true">>>> Quaternary</h4>' +
        '<div>'
      );

  //Home > Browse > Administration Home
    //Adds a border to the permissions panels in the Administration home
      $('.grid-col--2 .adminSection.grid-item .adminPanel').css({ 'border': '10px solid #73e55e', 'border-radius': '12px' });

});