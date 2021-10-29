// ==UserScript==
// @name           Koha circulation rules-maximize circulation matrix
// @description    Hides the left hand navigation column and displays all hidden columns in circulation matrix when the page loads
// @author         George H. Williams
// @version        1
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/circulation_rules_renewal_match_button.user.js
// ==/UserScript==

$(document).ready(function() {

  //BEGIN resize automatically on super-wide screens
    if ($(window).width() > 50) {
      $("#admin_smart-rules #navhide, #navmenu, #allshows").hide();
      $("#admin_smart-rules .hiderule").removeClass();
      $("#admin_smart-rules .row .col-sm-10.col-sm-push-2").removeClass("col-sm-push-2");
    }

});
