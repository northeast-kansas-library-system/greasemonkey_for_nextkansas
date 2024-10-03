// ==UserScript==
// @name           Breadcrumbs; URLs; and Wiki data
// @description    Generate data from Koha web page
// @author         George H. Williams
// @version        1.0
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          https://staff.nekls-test.bywatersolutions.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://raw.githubusercontent.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/refs/heads/main/breadcrumbs_urls_wiki_data.js
// @updateURL https://raw.githubusercontent.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/refs/heads/main/breadcrumbs_urls_wiki_data.js
// ==/UserScript==

/* ========== BEGIN all pages ========== */

$(document).ready(function () {

  $('#user-menu').append(
    '<li class="dropdown"><a href="#" class="dropdown-toggle navbar-right" data-toggle="dropdown">Links<b class="caret"></b></a>' + 
    '<ul class="dropdown-menu">' +
      '<li><a id="ngm_get_breadcrumbs" href="#">Get breadcrumbs from page</a</li>' +
      '<li><a id="ngm_get_url"  href="#">Get url from page</a</li>' +
      '<li><a id="ngm_get_partial_url"  href="#">Get partial url</a></li>' +
      '<li><a id="ngm_wiki_data_jq_new"  href="#">Get wiki data for new jQuery</a></li>' + 
      '<li><a id="ngm_wiki_data_jq_update"  href="#">Get wiki data for updated jQuery</a></li>' + 
    '</ul>'
  );
  
  var ngm_breadcrumbs = $('#breadcrumbs ol li').text().trim().replace(/\n/g, '>').replace(/\s+/g, ' ').replace(/> /g, '>').replace(/>+/g, ' > ');
  var ngm_url = $(location).attr('href');
  var ngm_slice_url = ngm_url.substr(ngm_url.indexOf("cgi-bin") + 1)
  var ngm_partial_url = "/c" + ngm_slice_url
  var ngm_koha_version = $('head meta[name="generator"]').attr('content');
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  
  //BEGIN adds function to #breadcrumbs button
    $("#ngm_get_breadcrumbs").click(function() {
      navigator.clipboard.writeText(ngm_breadcrumbs + '\r\n');
    });
  
  //BEGIN adds function to #breadcrumbs button
    $("#ngm_get_url").click(function() {
      navigator.clipboard.writeText(ngm_url + '\r\n');
    });
  
  //BEGIN adds function to #breadcrumbs button
    $("#ngm_get_partial_url").click(function() {
      navigator.clipboard.writeText(ngm_partial_url + '\r\n');
    });
  
  //BEGIN jQuery new wiki entry
    $("#ngm_wiki_data_jq_new").click(function() {
      navigator.clipboard.writeText(
        "==== JQ_NAME ====" + 
        "\r\n" +
        "\r\n" +
        "* '''Developer:''' George Williams (Northease Kansas Library System / Next Search Catalog)" + "\r\n" +
        "* '''Purpose:''' " + "\r\n" +
        "* '''Status:''' Completed" + "\r\n" +
        "* '''Intranet or OPAC?:''' " + "\r\n" +
        "* '''Version and date:''' " + "\r\n" +
        "** Created for Koha version " + ngm_koha_version + "\r\n" +
        "** Creation date: " + today + "\r\n" +
        "* '''Breadcrumbs:''' " + ngm_breadcrumbs + "\r\n" +
        "* '''URL:''' " + ngm_partial_url + "\r\n" +
        "* '''Notes:''' " + "\r\n" +
        "\r\n" +
        "\r\n" +
        "<syntaxhighlight lang=\"jquery\">" + "\r\n" +
        "\r\n" +
        "\r\n" +
        "\r\n" +
				"</syntaxhighlight>" 
      );
    });
  
  //BEGIN jQuery updated wiki entry
    $("#ngm_wiki_data_jq_update").click(function() {
      navigator.clipboard.writeText(
        "==== JQ_NAME ====" + 
        "\r\n" +
        "\r\n" +
        "* '''Developer:''' George Williams (Northease Kansas Library System / Next Search Catalog)" + "\r\n" +
        "* '''Purpose:''' " + "\r\n" +
        "* '''Status:''' Completed" + "\r\n" +
        "* '''Intranet or OPAC?:''' " + "\r\n" +
        "* '''Version and date:''' " + "\r\n" +
        "** Created for Koha version " + "\r\n" +
        "** Creation date: " + "\r\n" +
        "** Tested and working on Koha version " + ngm_koha_version + "\r\n" +
        "** Testing date: " + today + "\r\n" +
        "* '''Breadcrumbs:''' " + ngm_breadcrumbs + "\r\n" +
        "* '''URL:''' " + ngm_partial_url + "\r\n" +
        "* '''Notes:''' " + "\r\n" +
        "\r\n" +
        "\r\n" +
        "<syntaxhighlight lang=\"jquery\">" + "\r\n" +
        "\r\n" +
        "\r\n" +
        "\r\n" +
				"</syntaxhighlight>" 
      );
    });

});

/* ========== END all pages ========== */