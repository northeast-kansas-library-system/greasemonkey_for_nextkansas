// ==UserScript==
// @name           Breadcrumbs; URLs; and Wiki data
// @description    Generate data from Koha web page
// @author         George H. Williams
// @version        1.3
// @grant          none
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://raw.githubusercontent.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/refs/heads/main/breadcrumbs_urls_wiki_data.user.js
// @updateURL https://raw.githubusercontent.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/refs/heads/main/breadcrumbs_urls_wiki_data.user.js
// ==/UserScript==

/* ========== Add links to Koha that can facilitate easy commenting ========== */

$(document).ready(function () {

//Creates links in upper right of Koha  
  $('#user-menu').append(
    '<li class="dropdown"><a href="#" class="dropdown-toggle navbar-right" data-toggle="dropdown">Links<b class="caret"></b></a>' + 
    '<ul class="dropdown-menu">' +
      '<li><a id="ngm_get_breadcrumbs" href="#">Get breadcrumbs from page</a</li>' +
      '<li><a id="ngm_get_url" href="#">Get url from page</a</li>' +
      '<li><a id="ngm_get_partial_url"  href="#">Get partial url</a></li>' +
      '<li><a id="ngm_get_jq_comment" href="#">jQuery Comment</a</li>' +
      '<li><a id="ngm_get_css_comment" href="#">CSS Comment</a</li>' +
      '<li><a id="ngm_wiki_data_jq_new"  href="#">Get wiki data for new jQuery</a></li>' + 
      '<li><a id="ngm_wiki_data_jq_update"  href="#">Get wiki data for updated jQuery</a></li>' + 
    '</ul>'
  );

//Creates "Breadcrumbs, URL, and Koha version" variables
  var ngm_breadcrumbs = $('#breadcrumbs ol li').text().trim().replace(/\n/g, '>').replace(/\s+/g, ' ').replace(/> /g, '>').replace(/>+/g, ' > ');
  var ngm_url = $(location).attr('href');
  var ngm_slice_url = ngm_url.substr(ngm_url.indexOf("cgi-bin") + 1)
  var ngm_partial_url = "/c" + ngm_slice_url
  var ngm_koha_version = $('head meta[name="generator"]').attr('content');

//Creates "today" variable
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  
//Creates replacement variables for some URL information
  const nsc_base = /^.*(?=(\/cgi))/
  const nsc_accountlines_id = /(?<=accountlines_id=).[0-9]*/
  const nsc_amount = /(?<=amount=).[0-9]\.[0-9]*/
  const nsc_amountoutstanding = /(?<=amountoutstanding=).[0-9]\.[0-9]*/
  const nsc_biblionumber = /(?<=biblionumber=).[0-9]*/
  const nsc_borrowernumber = /(?<=borrowernumber=).[0-9]*/
  const nsc_branchcode = /(?<=branchcode=).[A-Z]*/
  const nsc_item_div = /(?<=\#item).[0-9]*/
  const nsc_itemnumber = /(?<=itemnumber=).[0-9]*/
  const nsc_member = /(?<=member=).[0-9]*/
  const nsc_patron_id = /(?<=patron_id=).[0-9]*/
  const nsc_patron_list = /(?<=patron_list_id=).[0-9]*/
  const nsc_log_object = /(?<=object=).[0-9]*/
  const nsc_suggestionid = /(?<=suggestionid=).[0-9]*/
  
//replaces values from URL variables with generic data 
  let url = $(location).attr('href'); 
  let nsc_url_simplified = url
    .replace(nsc_base, "")
    .replace(nsc_accountlines_id, "[ACCOUNTLINES_ID]")
    .replace(nsc_amount, "[00.00]")
    .replace(nsc_amountoutstanding, "[00.00]")
    .replace(nsc_biblionumber, "[BIBLIONUMBER]")
    .replace(nsc_borrowernumber, "[BORROWERNUMBER]")
    .replace(nsc_branchcode, "[BRANCHCODE]")
    .replace(nsc_itemnumber, "[ITEMNUMBER]")
    .replace(nsc_item_div, "[ITEMNUMBER]")
    .replace(nsc_log_object, "[OBJECT_ID]")
    .replace(nsc_member, "[BORROWERNUMBER]")
    .replace(nsc_patron_id, "[BORROWERNUMBER]")
    .replace(nsc_patron_list, "[PATRON_LIST_ID]")
    .replace(nsc_suggestionid, "[SUGGESTIONID]")
  
  //BEGIN adds function to #ngm_get_breadcrumbs button
    $("#ngm_get_breadcrumbs").click(function() {
      navigator.clipboard.writeText(ngm_breadcrumbs + '\r\n');
    });
  
  //BEGIN adds function to #ngm_get_url button
    $("#ngm_get_url").click(function() {
      navigator.clipboard.writeText(ngm_url + '\r\n');
    });
  
  //BEGIN adds function to #ngm_get_partial_url button
    $("#ngm_get_partial_url").click(function() {
      navigator.clipboard.writeText(ngm_partial_url + '\r\n');
    });
  
  //BEGIN adds function to #ngm_get_jq_comment button
    $("#ngm_get_jq_comment").click(function() {
      navigator.clipboard.writeText('//' + ngm_breadcrumbs + '\r\n//(' + nsc_url_simplified + ')\r\n');
    });
  
  //BEGIN adds function to #ngm_get_css_comment button
    $("#ngm_get_css_comment").click(function() {
      navigator.clipboard.writeText('/* ' + ngm_breadcrumbs + '*/\r\n/* (' + nsc_url_simplified + ') */\r\n');
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
        "** Created for Koha version: " + "\r\n" +
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

/* Add comments */