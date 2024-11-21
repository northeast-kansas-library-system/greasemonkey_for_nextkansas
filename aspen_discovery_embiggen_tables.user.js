// ==UserScript==
// @name           AAAAAAAAAA Aspen Discovery
// @description    New
// @author         George H. Williams
// @version        1.1
// @grant          none
// @match          http://nextkansas.org/*
// @match          https://nextkansas.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://raw.githubusercontent.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/refs/heads/main/aspen_discovery_embiggen_tables.user.js
// @updateURL https://raw.githubusercontent.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/refs/heads/main/aspen_discovery_embiggen_tables.user.js
// ==/UserScript==

$(document).ready(function () {

//Home» Browse» Administration Home» Web Builder» Web Resources
  //Makes tables in admin section full height by default
    $('.adminTableRegion.fixed-height-table').attr('style', 'height: auto;').removeClass('fixed-height-table');











});

/*

*/