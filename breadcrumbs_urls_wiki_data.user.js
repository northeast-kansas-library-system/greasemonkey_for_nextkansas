// ==UserScript==
// @name           Koha - get breadcrumbs; URLs; and Wiki data from Koha
// @description    Generate data from Koha web page
// @author         George H. Williams
// @version        1.11
// @grant          none
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://raw.githubusercontent.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/refs/heads/main/breadcrumbs_urls_wiki_data.user.js
// @updateURL https://raw.githubusercontent.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/refs/heads/main/breadcrumbs_urls_wiki_data.user.js
// ==/UserScript==

/* ========== Add links to Koha that can facilitate easy commenting ========== */

$(document).ready(function () {
  

  
  let nsc_is_koha = $('head > title').text();
  let koha = nsc_is_koha.includes('Koha')
    
  let nsc_is_aspen = $('#install-info small').text();
  let aspen_discovery = nsc_is_aspen.includes('Aspen Discovery')
  
  let nsc_is_staff = $('a[href="/MyAccount/StaffSettings"]').text();
  let aspen_discovery_staff = nsc_is_staff.includes('Staff Settings')
  
  if (aspen_discovery === true) { 
    
    console.log('aspen_discovery: ' + aspen_discovery);
    
    if (aspen_discovery_staff === true) {
      
      console.log('aspen_discovery_staff: ' + aspen_discovery_staff);
    
      //Creates links in upper right of Aspen Discovery 
        $('#language-selection-header').before('' +
          '<div id="nsc" class="col-tn-12 col-xs-4 col-sm-4 col-md-4 col-lg-4 pull-right" style="text-align: right;">' +
          '<a id="nsc_dropdown" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown">Next Search Catalog Links' +
          '</a>' + 
          '<ul class="dropdown-menu dropdown-menu-right">' +
            '<li><a id="aspen_get_url">Copy the URL</a</li>' + 
            '<li><a id="aspen_get_breadcrumbs">Copy the breadcrumbs</a</li>' + 
            '<li><a id="aspen_get_there">How to get there</a</li>' + 
            '<li><a id="aspen_generic_screenshot" href="#">Training screenshot</a></li>' + 
            '<li><a id="aspen_force_reindex" href="#">Force reindex</a></li>' + 
            '<li><a id="aspen_get_group_hrefs" href="#">Get links to groups</a></li>' +
            '<li><a id="aspen_open_editions" href="#">Open editions</a></li>' + 
            '<li><a id="aspen_get_record_hrefs" href="#">Get links to records search</a></li>' + 
            '<li><a id="aspen_get_koha_hrefs" href="#">Get links to Koha for Koha items</a></li>' + 
            '<li><a id="aspen_goto_staff" href="#">Go to staff client</a></li>' + 
            '<li><a id="aspen_image" href="#">Image search</a></li>' + 
            '<li><a id="aspen_image_wp" href="#">Image search w publisher</a></li>' + 
            '<li><a id="aspen_image_movie" href="#">Image search movie poster</a></li>' + 
          '</ul>' + 
          '</div>'
        );
    
      //Creates variables  
        var aspen_url = $(location).attr('href');
        var aspen_discovery_url = aspen_url.replace('#', '%23');
        console.log('aspen_url: ' + aspen_url);
        console.log('aspen_discovery_url: ' + aspen_discovery_url);
      
        var aspen_breadcrumb = $('.breadcrumb').text();
        var aspen_breadcrumbs = aspen_breadcrumb.replaceAll('» ', ' > ')
        console.log('aspen_breadcrumbs: ' + aspen_breadcrumbs);
    
      //BEGIN adds function to #ngm_get_url button
        $("#aspen_get_url").click(function() {
          navigator.clipboard.writeText(aspen_discovery_url + '\r\n');
        });
      
      //BEGIN adds function to #aspen_breadcrumbs button
        $("#aspen_get_breadcrumbs").click(function() {
          navigator.clipboard.writeText(aspen_breadcrumbs + '\r\n');
        });
      
      
        $('#main-content-with-sidebar input, ' + 
          '#main-content-with-sidebar select, ' + 
          '#main-content-with-sidebar textarea, ' + 
          '#main-content-with-sidebar #tinymce, ' + 
          '#main-content-with-sidebar label'
         ).click(function(){
          
          var full_url = window.location.toString()
          var domain = window.location.origin;
          var get_there_url = $('.breadcrumb li a').last().attr('href');
          var get_there_breadcrumb = $('.breadcrumb').text();
          var get_there_breadcrumbs = get_there_breadcrumb.replaceAll('» ', ' > ')
          var get_there_panel_title = $('.admin-menu-section.panel.active .panel-title').text();
          var get_there_breadcrumb_to_page = get_there_breadcrumb.lastIndexOf('» ');
          var get_there_page = get_there_breadcrumb.substr(get_there_breadcrumb_to_page + 1).trim();
          var get_there_header = ($(this).parents().find('h1').first().text().trim() || $(this).parents('.form-group').find('.h2').first().text().trim() || '');
          
          var get_there_panel_raw = $(this).parents('.form-group').find('a').first().text().trim();
          if (get_there_panel_raw === '') {var get_there_panel = ('')} else {var get_there_panel = ('\nthen go to: ' + get_there_panel_raw)}

          var get_there_sub_panel_raw = $(this).parents('.form-group .form-group').find('a').text().trim();
          if (get_there_sub_panel_raw === '') {var get_there_sub_panel = ('')} else {var get_there_sub_panel = ('\nthen go to: ' + get_there_sub_panel_raw)}
          
          
          var get_there_section_label_raw = ($(this).parent('.form-group').find('label').text().trim() || $(this).parents('.form-group').first().find('label').first().text().trim() || '');
          var get_there_section_label = get_there_section_label_raw.replaceAll('Required', '')
          
          const url = window.location.href;
          if (url.includes("object")) {var editable_object = ('\n\nSelect the -' + get_there_page + '- object you wish to edit\n')} else {var editable_object = ('')}

          
          console.log('\n\nHow to get to "' + get_there_page + ' > ' + get_there_section_label + '" in the Aspen Discovery administration settings\n' +
                      
                      '\nGo to: ' + get_there_panel_title + 
                      '\n' +
                      '\nthen go to:  ' + get_there_page +
                      editable_object +
                      get_there_panel +
                      get_there_sub_panel + 
                      '\nthen go to:  ' + get_there_section_label + 
                      '\n' +
                      '\nAspen URL: http://YOUR_ASPEN_DOMAIN' + get_there_url  + 
                      '\nDestination breadcrumbs: ' + get_there_breadcrumbs +
                      '\nDestination page title: ' + get_there_page +
                      '\n' +
                      '\nMy domain: ' + domain +
                      '\nFull reference URL: ' + full_url
                     );
          
        });

      //BEGIN generic screenshot 
        $('#aspen_generic_screenshot').click(function() { 
          $('#nsc').hide(); 
          $('#account-menu-dropdown span').html('Your username').attr('style','padding-right: 10px'); 
          $('#pin').removeAttr('type').val('YOUR PASSWORD');
          $('#pin1').removeAttr('type').val('ENTER YOUR NEW PASSWORD');
          $('#pin2').removeAttr('type').val('ENTER YOUR NEW PASSWORD AGAIN');
        });
      
      //BEGIN force reindex 
        $('#aspen_force_reindex').click(function() { 
          $('button:contains("Force Reindex")').click();
        }); 
      
      //BEGIN get group links
        $('#aspen_get_group_hrefs').click(function() {
          var arr = [], l = document.getElementsByClassName("result-title"); 
          for(var i=0; i<l.length; i++) {
            arr.push(l[i].href);
          }
          function copyToClipboard(text) {
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
          }
          copyToClipboard(arr.join('\n'))
          console.log(arr.join('\n'))
          window.open('https://www.openallurls.com/', '_blank');
        });

      //BEGIN force reindex 
        $('#aspen_open_editions').click(function() { 
          $('.btn-editions').click();
        }); 
      
      //BEGIN get record links
        $('#aspen_get_record_hrefs').click(function() {
          $('a:contains("More Info")').addClass('link_to_record');
          var record_links = [], l = document.getElementsByClassName("link_to_record"); 
          for(var i=0; i<l.length; i++) {
            record_links.push(l[i].href);
          }
          function copyToClipboard(text) {
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
          }
          copyToClipboard(record_links.join('\n'))
          console.log(record_links.join('\n'))
          window.open('https://www.openallurls.com/', '_blank');
        });
      
      //BEGIN get koha links
        $('#aspen_get_koha_hrefs').click(function() {
          $('a:contains("More Info")').addClass('link_to_record');
          var staff_links = [], l = document.getElementsByClassName("link_to_record"); 
          for(var i=0; i<l.length; i++) {
            staff_links.push(l[i].href);
          }
          function copyToClipboard(text) {
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
          }
          let staff_links_01 = staff_links.join('\n');
          let staff_links_02 = staff_links_01.toString();
          let staff_links_03 = staff_links_02.replaceAll('https://nextkansas.org/Record/', 'https://staff.nekls.bywatersolutions.com/cgi-bin/koha/catalogue/detail.pl?biblionumber=');
          console.log('staff_links_03: ' + staff_links_03);
          copyToClipboard(staff_links_03);
          window.open('https://www.openallurls.com/', '_blank');
        });
      
      //BEGIN force reindex 
        $('#aspen_goto_staff').click(function() { 
          var gotostaff = ($('a.btn:contains("View in Staff Client")').attr('href') || '#');
          console.log('gotostaff: ' + gotostaff);
          window.open(gotostaff, '_blank');
        }); 
      
      ////BEGIN google search with publisher
        $('#aspen_image').click(function() { 
          var title = ($('head > title:nth-child(1)').text().split('|')[0] || ' ');
          console.log('title: ' +  title)
          window.open('http://www.google.com/search?q=' + title + '&tbm=isch', '_blank');
        });
      
      ////BEGIN google search with publisher
        $('#aspen_image_wp').click(function() { 
          var title = ($('head > title:nth-child(1)').text().split('|')[0] || ' ');
          var publisher = ($('meta[property*="publisher"]').attr('content') || ' ');
          console.log('title: ' +  title)
          console.log('publisher: ' +  publisher)
          window.open('http://www.google.com/search?q=' + title + ' ' + publisher + '&tbm=isch', '_blank');
        });

      ////BEGIN google search with publisher
        $('#aspen_image_movie').click(function() { 
          var title = ($('head > title:nth-child(1)').text().split('|')[0] || ' ');
          console.log('title: ' +  title)
          window.open('http://www.google.com/search?q=' + title + ' movie poster' + '&tbm=isch', '_blank');
        });
      
      $('#WebBuilder-PortalCells #panelStatus_Layout_Settings #propertyRowmakeCellAccordion').after('<br><button id="accordion_default" type="button" style="margin: 5px;" class="btn btn-default btn-xs">Accordion default</button>');
      
      $('#accordion_default').click(function() { 
        $('#accordion_body_Layout_Settings input').val('12');
      });
      
    }  
    
    $('#Admin-Placards #propertyRowlibraries .controls').before('<br><button id="hoopla_placard_locations" type="button" style="margin: 5px;" class="btn btn-default btn-xs">Select hoopla libraries</button>');

    $('#hoopla_placard_locations').click(function (){
      $('#libraries_54').prop('checked', false);
      $('#libraries_8').prop('checked', false);
      $('#libraries_15').prop('checked', false);
      $('#libraries_33').prop('checked', false);
      $('#libraries_35').prop('checked', false);
      $('#libraries_36').prop('checked', false);
      $('#libraries_51').prop('checked', false);
      $('#libraries_53').prop('checked', false);
      $('#libraries_52').prop('checked', false);
      $('#libraries_48').prop('checked', false);
      $('#locations_8').prop('checked', false);
      $('#locations_18').prop('checked', false);
      $('#locations_39').prop('checked', false);
      $('#locations_40').prop('checked', false);
      $('#locations_41').prop('checked', false);
      $('#locations_42').prop('checked', false);
      $('#locations_43').prop('checked', false);
      $('#locations_55').prop('checked', false);
      $('#locations_38').prop('checked', false);
      $('#locations_36').prop('checked', false);
    }); 
 


  }
//END Aspen Section
  
  
  
  
  
  
  
    
  if (koha === true) { 
    
    console.log('koha: ' + koha);
    
  //Creates links in upper right of Koha  
    $('#user-menu').append(
      '<li class="nav-item dropdown" id="nsc_link_widget" style="display: none;">' + 
        '<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-toggle="dropdown">' + 
          'Links<b class="caret"></b>' + 
        '</a>' + 
        '<ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">' +
          '<li><a class="nav-link" id="ngm_get_breadcrumbs" href="#">Get breadcrumbs</a</li>' +
          '<li><a class="nav-link" id="ngm_get_url" href="#">Get url</a</li>' +
          '<li><a class="nav-link" id="ngm_get_partial_url" href="#">Get partial url</a></li>' +
          '<li><a class="nav-link" id="ngm_get_jq_comment" href="#">jQuery Comment</a</li>' +
          '<li><a class="nav-link" id="ngm_get_css_comment_1" href="#">CSS 1 line Comment</a</li>' +
          '<li><a class="nav-link" id="ngm_get_css_comment_2" href="#">CSS 2 line Comment</a</li>' +
          '<li><a class="nav-link" id="ngm_wiki_data_jq_new" href="#">Get wiki data new jQuery</a></li>' + 
          '<li><a class="nav-link" id="ngm_wiki_data_jq_update" href="#">Get wiki data updated jQuery</a></li>' + 
          '<li><a class="nav-link" id="ngm_wiki_data_sql_new" href="#">Get wiki data new SQL</a></li>' + 
          '<li><a class="nav-link" id="ngm_wiki_data_sql_update" href="#">Get wiki data updated SQL</a></li>' + 
          '<li><a class="nav-link" id="ngm_generic_screenshot" href="#">Screenshot</a></li>'  + 
          '<li style="color: white">Superlibrarian stuff</a></li>'  + 
          '<li><a class="nav-link" id="ngm_show_hidden_circ" href="#">Show hidden circulation tools</a></li>' + 
        '</ul>' +
      '</li>'
    );
    
  //Links only available when hovering on header
    $('#header').parent().hover(function () {
      $('#nsc_link_widget').toggle();
    });
  
  //Creates "Breadcrumbs, URL, and Koha version" variables
    var ngm_breadcrumbs = $('#breadcrumbs ol li').text().trim().replace(/\n/g, '>').replace(/\s+/g, ' ').replace(/> /g, '>').replace(/>+/g, ' > ');
    var ngm_url = $(location).attr('href');
    var ngm_slice_url = ngm_url.substr(ngm_url.indexOf("cgi-bin") + 1)
    var ngm_partial_url = "/c" + ngm_slice_url
    var ngm_koha_version = $('head meta[name="generator"]').attr('content');
    console.log('ngm_breadcrumbs: ' + ngm_breadcrumbs);
    console.log('ngm_url: ' + ngm_url);
    console.log('ngm_slice_url: ' + ngm_slice_url);
    console.log('ngm_partial_url: ' + ngm_partial_url);
    console.log('ngm_koha_version: ' + ngm_koha_version);

  
  //Creates "today" variable
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
  
    today = yyyy + '-' + mm + '-' + dd;
    
    console.log('today: ' + today);
    console.log('dd: ' + dd);
    console.log('mm: ' + mm);
    console.log('yyyy: ' + yyyy);
    console.log('today: ' + today);
    
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
    const nsc_search_id_no = /(?<=searchid=).*/
    const nsc_search_id = "&searchid="
    
    console.log('nsc_base: ' + nsc_base);
    console.log('nsc_accountlines_id: ' + nsc_accountlines_id);
    console.log('nsc_amount: ' + nsc_amount);
    console.log('nsc_amountoutstanding: ' + nsc_amountoutstanding);
    console.log('nsc_biblionumber: ' + nsc_biblionumber);
    console.log('nsc_borrowernumber: ' + nsc_borrowernumber);
    console.log('nsc_branchcode: ' + nsc_branchcode);
    console.log('nsc_item_div: ' + nsc_item_div);
    console.log('nsc_itemnumber: ' + nsc_itemnumber);
    console.log('nsc_member: ' + nsc_member);
    console.log('nsc_patron_id: ' + nsc_patron_id);
    console.log('nsc_patron_list: ' + nsc_patron_list);
    console.log('nsc_log_object: ' + nsc_log_object);
    console.log('nsc_suggestionid: ' + nsc_suggestionid);
    console.log('nsc_search_id_no: ' + nsc_search_id_no);
    console.log('nsc_search_id: ' + nsc_search_id);
    
  //replaces values from URL variables with generic data 
    let nsc_url = $(location).attr('href'); 
    console.log('nsc_url: ' + nsc_url);
    let nsc_url_simplified = nsc_url
      .replace(nsc_base, '')
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
      .replace(nsc_search_id_no, "")
      .replace(nsc_search_id, "")
    
    console.log('nsc_url_simplified: ' + nsc_url_simplified);
    
  //Creates replacement variables for some Breadcrumbs information
    const nsc_catalog_details = /(?<=Catalog >).+\>/
    const nsc_cataloging = /(?<=Cataloging > Edit).+\>/
    const nsc_cataloging_edit_record = /(?<=Cataloging > Editing).+/
    const nsc_borrower_checkouts = /(?<=Checkouts >).+/
    const nsc_borrower_batch = /(?<=Check out to).+>/
    const nsc_borrower_details = /(?<=Patrons >).*?>/
    const nsc_borrower_debit_details = /(?<=Details of debit).+/
    const nsc_borrower_credit_details = /(?<=Details of credit).+/
    const nsc_catalog_search_results = /(?<=Catalog > Search for ).+/
    
    
  //replaces values from Breadcrumb variables with generic data 
    let breadcrumbs = ngm_breadcrumbs
    let nsc_breadcrumbs_simplified = breadcrumbs
      .replace(nsc_catalog_details, " [TITLE] >")
      .replace(nsc_cataloging, " [TITLE] (Record # [BIBLIONUMBER]) >")
      .replace(nsc_cataloging_edit_record, " [TITLE] (Record # [BIBLIONUMBER])")
      .replace(nsc_borrower_checkouts, " [BORROWERNAME] ([CARDNUMBER])")
      .replace(nsc_borrower_batch, " [BORROWERNAME] ([CARDNUMBER]) >")
      .replace(nsc_borrower_details, " [BORROWERNAME] ([CARDNUMBER]) >")
      .replace(nsc_borrower_debit_details, " ([ACCOUNTLINES_ID])")
      .replace(nsc_borrower_credit_details, " ([ACCOUNTLINES_ID])")
      .replace(nsc_catalog_search_results, "'[SEARCH_TERMS]'")
    
    console.log('nsc_breadcrumbs_simplified: ' + nsc_breadcrumbs_simplified);
    
    
    
  //replaces values from nsc_breadcrumbs_simplified into filename
    let nsc_breadcrumbs_to_filename = nsc_breadcrumbs_simplified
      .replaceAll(" ", "_")
      .replaceAll(">", "_")
      .replaceAll("<", "_")
      .replaceAll("[", "_")
      .replaceAll("]", "_")
      .replaceAll("(", "_")
      .replaceAll(")", "_")
      .replaceAll("{", "_")
      .replaceAll("}", "_")
      .replaceAll("____", "_")
      .replaceAll("___", "_")
      .replaceAll("__", "_")
    
    console.log('nsc_breadcrumbs_to_filename: ' + nsc_breadcrumbs_to_filename);
    
    //BEGIN adds function to #ngm_get_breadcrumbs button
      $("#ngm_get_breadcrumbs").click(function() {
        navigator.clipboard.writeText(nsc_breadcrumbs_simplified + '\r\n');    
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
        navigator.clipboard.writeText('//' + nsc_breadcrumbs_simplified + '\r\n//(' + nsc_url_simplified + ')\r\n');
      });
    
    //BEGIN adds function to #ngm_get_css_comment_1 button
      $("#ngm_get_css_comment_1").click(function() {
        navigator.clipboard.writeText('/* ' + nsc_breadcrumbs_simplified + ' --- (' + nsc_url_simplified + ') */');
      });
    
    //BEGIN adds function to #ngm_get_css_comment_2 button
      $("#ngm_get_css_comment_2").click(function() {
        navigator.clipboard.writeText('/* ' + nsc_breadcrumbs_simplified + ' */\r\n/* (' + nsc_url_simplified + ') */\r\n');
      });
    
    //BEGIN jQuery new wiki entry
      $("#ngm_wiki_data_jq_new").click(function() {
        navigator.clipboard.writeText(
          nsc_breadcrumbs_to_filename +
          ".wiki " +
          "\r\n" +
          "\r\n" +
          "====" +
          nsc_breadcrumbs_simplified +
          "====" +
          "\r\n" +
          "\r\n" +
          "\r\n" +
          "=====JQ_NAME=====" + 
          "\r\n" +
          "\r\n" +
          "* '''Developer:''' George Williams (Northease Kansas Library System / Next Search Catalog)" + "\r\n" +
          "* '''Purpose:''' " + "\r\n" +
          "* '''Status:''' Completed" + "\r\n" +
          "* '''Intranet or OPAC?:''' " + "\r\n" +
          "* '''Version and date:''' " + "\r\n" +
          "** Created for: " + ngm_koha_version + "\r\n" +
          "** Creation date: " + today + "\r\n" +
          "* '''Breadcrumbs:''' " + nsc_breadcrumbs_simplified + "\r\n" +
          "* '''URL:''' " + nsc_url_simplified + "\r\n" +
          "* '''Notes:''' " + "\r\n" +
          "\r\n" +
          "\r\n" +
          "<syntaxhighlight lang=\"jquery\">" + 
          "\r\n" +
          "\r\n" +
          "$( document ).ready(function() { " +
          "\r\n" +
          "\r\n" +
          "\r\n" +
          ")}; " +
          "\r\n" +
          "\r\n" +
          "</syntaxhighlight>"
        );
      });
    
    //BEGIN jQuery updated wiki entry
      $("#ngm_wiki_data_jq_update").click(function() {
        navigator.clipboard.writeText(
          nsc_breadcrumbs_to_filename +
          ".wiki " +
          "\r\n" +
          "\r\n" +
          "====" +
          nsc_breadcrumbs_simplified +
          "====" +
          "\r\n" +
          "\r\n" +
          "\r\n" +
          "=====JQ_NAME=====" + 
          "\r\n" +
          "\r\n" +
          "* '''Developer:''' George Williams (Northease Kansas Library System / Next Search Catalog)" + "\r\n" +
          "* '''Purpose:''' " + "\r\n" +
          "* '''Status:''' Completed" + "\r\n" +
          "* '''Intranet or OPAC?:''' " + "\r\n" +
          "* '''Version and date:''' " + "\r\n" +
          "** Created for: " + "\r\n" +
          "** Creation date: " + "\r\n" +
          "** Tested and working on: " + ngm_koha_version + "\r\n" +
          "** Testing date: " + today + "\r\n" +
          "* '''Breadcrumbs:''' " + nsc_breadcrumbs_simplified + "\r\n" +
          "* '''URL:''' " + nsc_url_simplified + "\r\n" +
          "* '''Notes:''' " + 
          "\r\n" +
          "\r\n" +
          "\r\n" +
          "<syntaxhighlight lang=\"jquery\">" + 
          "\r\n" +
          "\r\n" +
          "$( document ).ready(function() { " +
          "\r\n" +
          "\r\n" +
          "\r\n" +
          ")}; " +
          "\r\n" +
          "\r\n" +
          "</syntaxhighlight>" 
        );
      });
    
    //BEGIN SQL new wiki entry
      $("#ngm_wiki_data_sql_new").click(function() {
        var new_sql_name = $('#rep_guided_reports_start #reportname').val();
        var new_sql = $('#rep_guided_reports_start #sql').text();
        navigator.clipboard.writeText(
          "==== " + new_sql_name + " ====" + 
          "\r\n" +
          "\r\n" +
          "* '''Developer:''' George Williams (Northease Kansas Library System / Next Search Catalog)" + "\r\n" +
          "* '''Purpose:''' " + "\r\n" +
          "* '''Status:''' Completed" + "\r\n" +
          "* '''Intranet or OPAC?:''' " + "\r\n" +
          "* '''Version and date:''' " + "\r\n" +
          "** Created for: " + ngm_koha_version + "\r\n" +
          "** Creation date: " + today + "\r\n" +
          "* '''Notes:''' " + "\r\n" +
          "\r\n" +
          "\r\n" +
          "<syntaxhighlight lang=\"sql\">" + "\r\n" +
          "\r\n" +
          new_sql +
          "\r\n" +
          "\r\n" +
          "</syntaxhighlight>" 
        );
      });
    
    //BEGIN SQL updated wiki entry
      $("#ngm_wiki_data_sql_update").click(function() {
        var updated_sql_name = $('#rep_guided_reports_start #reportname').val();
        var updated_sql = $('#rep_guided_reports_start #sql').text();
        navigator.clipboard.writeText(
          "==== " + updated_sql_name + " ====" + 
          "\r\n" +
          "\r\n" +
          "* '''Developer:''' George Williams (Northease Kansas Library System / Next Search Catalog)" + "\r\n" +
          "* '''Purpose:''' " + "\r\n" +
          "* '''Status:''' Completed" + "\r\n" +
          "* '''Intranet or OPAC?:''' " + "\r\n" +
          "* '''Version and date:''' " + "\r\n" +
          "** Created for: " + "\r\n" +
          "** Creation date: " + "\r\n" +
          "** Tested and working on: " + ngm_koha_version + "\r\n" +
          "** Testing date: " + today + "\r\n" +
          "* '''Notes:''' " + "\r\n" +
          "\r\n" +
          "\r\n" +
          "<syntaxhighlight lang=\"sql\">" + "\r\n" +
          "\r\n" +
          updated_sql +
          "\r\n" +
          "\r\n" +
          "</syntaxhighlight>" 
        );
      });
  
    //BEGIN generic screenshot 
      $('#ngm_generic_screenshot').click(function() { 
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
        $('.breadcrumb-item a').html('[BORROWERNAME]');
        
        $('#nsc_link_widget').toggle();
      });
    
    
    //BEGIN show hidden options on circulation
      $('#ngm_show_hidden_circ').click(function() { 
        $('.circ-button[href="/cgi-bin/koha/circ/set-library.pl"]').show();
        $('.circ-button[href="/cgi-bin/koha/cataloguing/addbiblio.pl?frameworkcode=FA"]').show();
        $('.circ-button[href="/cgi-bin/koha/circ/checkout-notes.pl"]').show();
        $('.circ-button[href="/cgi-bin/koha/circ/pendingreserves.pl"]').show();
        $('.circ-button[href="/cgi-bin/koha/circ/branchtransfers.pl"]').show();
        $('#offline-circulation ').show();
      });


    //BEGIN log how-to-find system preferences console logging


      $('#admin_preferences .preferences .name-cell').click(function(){

        var full_url = window.location.toString()

        var system_preference = $(this).text().trim().replace(/ {2,}/g, '').replace(/ \n/g, '\n').replace(/(\n){2,}/g, '-');
        
        var system_preference_lower = system_preference.toLowerCase();
        
        $(this).next().addClass(system_preference + '_value');
        
        var system_preference_input = $('.' + system_preference + '_value input').val() || '';
        
        var system_preference_dropdown = $('.' + system_preference + '_value option[selected="selected"]').text().trim().toString().replace(/ {2,}/g, '').replace(/ \n/g, '\n').replace(/(\n){2,}/g, ' // ') || '';
        
        if (system_preference_input == '') {
          var current_input = ''
        } else {
          var current_input = ('\nCurrent input values = ' + system_preference_input)
        }
        
        if (system_preference_dropdown == '') {
          var current_dropdown = ''
        } else {
          var current_dropdown = ('\nCurrent dropdown values = ' + system_preference_dropdown)
        }
        
        var sys_pref_page = $(this).closest('.prefs-tab').find('h2').text().trim();
        
        var sys_pref_link = sys_pref_page.toLowerCase().replaceAll(' ', '');
        
        var sys_pref_subsection = $(this).closest('.page-section').find('h3').text().trim();

        console.log('\n\nHow to get to - ' + system_preference +  ' - in the Koha system preferences' +
                    '\n  Go to: ' + ngm_breadcrumbs + 
                    '\n    then to: ' + sys_pref_page +
                    '\n      then to: ' + sys_pref_subsection + 
                    '\n        then to: ' + system_preference +
                    current_input +
                    current_dropdown +
                    '\n' +
                    '\nProbable link to the Koha manual: https://koha-community.org/manual/latest/en/html/' + sys_pref_link + '.html#' + system_preference_lower
        );


      });
    
    
    }
  
  });