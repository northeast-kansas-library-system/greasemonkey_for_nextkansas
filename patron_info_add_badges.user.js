// ==UserScript==
// @name           Patron info - add badges
// @description    Styles patron information on left side of page
// @author         George H. Williams
// @version        1.1
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          https://staff.nekls-test.bywatersolutions.com/*
// @match          https://staff.koha-us.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==


/* Breadcrumbs (URL) / Koha version */

$(document).ready(function () {
  
  $('.patroninfo h5').each(function () {
    $(this).html($(this).html().replace(/\(/g, '<br>('));
    $(this).html($(this).html().replace(/\)/g, ')<br>'));

  });
  
  $('.patronattribute').each(function () {
    $(this).html($(this).html().replace(':', '<span class="nsc_hide_text">:</span>'));
  });
  
  $('.patronattribute').each(function () {
    $(this).html($(this).html().replace(/\ - /g, '<br>'));
    $(this).html($(this).html().replace(/\(/g, '<br>('));
    $(this).html($(this).html().replace(' due ', ' due <br>'));
  });
  
  $('.patroncategory').each(function () {
    $(this).html($(this).html().replace('Category:', '<span class="nsc_breifinfo_label">Category:</span>'));
    $('.patroncategory_code').before('<br>');
  });
  
  $('.patroncategory_description').each(function () {
    $(this).html($(this).html().replace('(exempt)', '<br><span class="nsc_patroncategory_description_exempt">(exempt)</span>'));
  });
  
  $('.patronlibrary').each(function () {
    $(this).html($(this).html().replace('Home library:', '<span class="nsc_breifinfo_label">Home library:</span>'));
    $(this).html($(this).html().replace(/\-/g, '<br>'));
  });
  
  $('.patronborrowernumber').each(function () {
    $(this).html($(this).html().replace('Borrowernumber:', '<span class="nsc_breifinfo_label">Borrowernumber:</span>'));
  });

  
  $('.patronupdatedon').each(function () {
    $(this).html($(this).html().replace('Updated on', '<span class="nsc_breifinfo_label">Updated on:</span>'));
  });
  
});

/*

Ready to move to Koha

*/