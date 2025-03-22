// ==UserScript==
// @name           Koha - get breadcrumbs; URLs; and Wiki data from Koha
// @description    Generate data from Koha web page
// @author         George H. Williams
// @version        1.6
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
            '<li><a id="aspen_generic_screenshot" href="#">Training screenshot</a></li>' + 
            '<li><a id="aspen_force_reindex" href="#">Force reindex</a></li>' + 
            '<li><a id="aspen_get_group_hrefs" href="#">Get links to groups</a></li>' +
            '<li><a id="aspen_open_editions" href="#">Open editions</a></li>' + 
            '<li><a id="aspen_get_record_hrefs" href="#">Get links to records search</a></li>' + 
            '<li><a id="aspen_get_koha_hrefs" href="#">Get links to Koha for Koha items</a></li>' + 
            '<li><a id="aspen_goto_staff" href="#">Go to staff client</a></li>' + 
            '<li><a id="aspen_image" href="#">Image search</a></li>' + 
          '</ul>' + 
          '</div>'
        );
    
      //Creates variables  
        var aspen_url = $(location).attr('href');
        var aspen_discovery_url = aspen_url.replace('#', '%23')
        console.log('aspen_url: ' + aspen_url);
        console.log('aspen_discovery_url: ' + aspen_discovery_url)
    
      //BEGIN adds function to #ngm_get_url button
        $("#aspen_get_url").click(function() {
          navigator.clipboard.writeText(aspen_discovery_url + '\r\n');
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
      
      //var staff_links_01 = staff_links.replaceAll('https://nextkansas.org/Record/', 'https://staff.nekls.bywatersolutions.com/cgi-bin/koha/catalogue/detail.pl?biblionumber=');
      
      //BEGIN force reindex 
        $('#aspen_goto_staff').click(function() { 
          var gotostaff = ($('a.btn:contains("View in Staff Client")').attr('href') || '#');
          console.log('gotostaff: ' + gotostaff);
          window.open(gotostaff, '_blank');
        }); 
      
      // View in Staff Client

      ////BEGIN google link
        $('#aspen_image').click(function() { 
          var title = ($('head > title:nth-child(1)').text().split('|')[0] || ' ');
          var publisher = ($('meta[property*="publisher"]').attr('content') || ' ');
          console.log('title: ' +  title)
          console.log('publisher: ' +  publisher)
          window.open('http://www.google.com/search?q=' + title + ' ' + publisher + '&tbm=isch', '_blank');
        });
      
    }  
  }
    
  if (koha === true) { 
    
    console.log('koha: ' + koha);
    
  //Creates links in upper right of Koha  
    $('#user-menu').append(
      '<li class="nav-item dropdown" id="nsc_link_widget">' + 
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
          '<li><a class="nav-link" id="ngm_generic_screenshot" href="#">Screenshot</a></li>' + 
        '</ul>' +
      '</li>'
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
    const nsc_search_id_no = /(?<=searchid=).*/
    const nsc_search_id = "&searchid="
    
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
      .replace(nsc_search_id_no, "")
      .replace(nsc_search_id, "")
    
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
      .replace(nsc_borrower_checkouts, " [BORROWERNAME] ([BORROWERNUMBER])")
      .replace(nsc_borrower_batch, " [BORROWERNAME] ([BORROWERNUMBER]) >")
      .replace(nsc_borrower_details, " [BORROWERNAME] ([BORROWERNUMBER]) >")
      .replace(nsc_borrower_debit_details, " ([ACCOUNTLINES_ID])")
      .replace(nsc_borrower_credit_details, " ([ACCOUNTLINES_ID])")
      .replace(nsc_catalog_search_results, "'[SEARCH_TERMS]'")
    
    
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
          "==== JQ_NAME ====" + 
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
          "** Created for: " + "\r\n" +
          "** Creation date: " + "\r\n" +
          "** Tested and working on: " + ngm_koha_version + "\r\n" +
          "** Testing date: " + today + "\r\n" +
          "* '''Breadcrumbs:''' " + nsc_breadcrumbs_simplified + "\r\n" +
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
      }); 
    }
  
  });