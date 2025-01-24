// ==UserScript==
// @name           24.11 Koha upgrade
// @description    New
// @author         George H. Williams
// @version        1.1
// @grant          none
// @match          https://staff.nekls-test.bywatersolutions.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

/* ========== BEGIN Special code for test server / Koha 24.05 ========== */ 
$(document).ready(function () { 

  //Checks to see if the current URL is on the test server 
    if (window.location.href.indexOf('staff.nekls-test') != -1) { 
      //NSC_TEST - Adds class to body of test server - activates css for test server background 
      /* Depends on "NSC_TEST"  IntranetUserCSS  */ 
        $('body').addClass('nsc_test'); 
      //Adds "Test server" warning message to all pages on test server 
        $('.nsc_test #sub-header').after('<span class="clearfix"></span><div><h1 id="test_server_warning" align="center" style="padding: 5px;">! TEST SERVER !</h1></div><span class="clearfix"></span>'); 
      //Adds button to disable test server watermark and warning message to facilitate screenshots 
        $('#user-menu').append('<button id="nsc_test_toggle" type="button" class="btn btn-custom-info nav-link" style="display: inline; "><i class="fa fa-camera" aria-hidden="true"></i></button>'); 
      //Adds function to screenshot button 
        $('#nsc_test_toggle').click(function() { 
          $('body').removeClass('nsc_test'); 
          $('#nsc_test_toggle').hide(); 
          $('#test_server_warning').hide(); 
          $('#upgrade_note').hide(); 
          $('.nsc_alert').hide(); 
          $('#holds_queue_clear, #mit_clear').hide(); 
          $('.newsitem').hide(); 
          $('#area-userblock').hide(); 
          $('#news303').show(); 
          $('.loggedinusername').html('Your username').attr('style','padding-right: 10px'); 
          $('.logged-in-branch-name').html('Your library'); 
          $('#checkout_notes_pending .pending-number-link').html('Notes for your library'); 
          $('#koha_version').html('Koha version number'); 
        }); 
    } 

}); 
/* ========== END Special code for test server / Koha 24.05 ========== */

/* ========== BEGIN Adds "toHtml" function - Koha 24.05 ========== */

$(document).ready(function () {

  //Create functions that can be called upon by other jQuery
  //Creates IntranetuserJS.toHtml function
    //Used by IntranetuserJS.html_borrower_messages
    $.fn.toHtml=function(){
      return $(this).html($(this).text());
    };
    
  //Home > Reports > Guided reports wizard > Saved reports > {REPORTNAME} Report 
    //BEGIN renders notes on reports in HTML 
      //Requires IntranetUserJS "to_html" function 
        $('#table_reports tr td:nth-child(7), .col-sm-10 > main:nth-child(1) > form:nth-child(4) > p:nth-child(4), .page-section > p:nth-child(1), #report_param_form p').each(function() { 
          $(this).toHtml(); 
        });
    
  //Home > Circulation > Checkouts > {BORROWERNAME (CARDNUMBER)} (circ/circulation.pl?borrowernumber=)
  //Home > Patrons > {BORROWERNAME (CARDNUMBER)} > Details (members/moremember.pl?borrowernumber=)
    //BEGIN Changes messages back to HTML 
      $('#messages span').each(function() { 
        $(this).toHtml(); 
      });

});

/* ========== END Adds "toHtml" function - Koha 24.05 ========== */

/* ========== BEGIN Special alerts/messages ========== */ 
$(document).ready(function () { 

  //Special message for all pages 
    $('#sub-header').after('<h3 align="center" class="nsc_special_message" style="display: ;"><a href="https://northeast-kansas-library-system.github.io/nextsteps/cataloging_basics/index.html" target="_blank">Basic cataloging guide</a></h3></div>'); 

  //Upgrade messages for all pages 
    $('#sub-header').after(
      '<div>' + 
      '<h3 align="center" ' + 
      'class="nsc_upgrade_alert" style="display: ; background-color: var(--c_medium); color: var(--t_medium); padding: 5px;">' + 
      'We will be upgrading to Koha 24.11 on the evening of March 55, 2999, after 10:00 p.m.<br><br>' + 
      '<a href="#intranet_main_koha_training">' + 
      'Please see the training materials by clicking here.</a></h3>' + 
      '</div><div>' + 
      '<h3 align="center" ' + 
      'class="nsc_upgrade_alert" style="display: ; background-color: var(--c_medium); color: var(--t_medium); padding: 5px;">'+ 
      'You must clear your browser cache before logging in on March 56 or March 57.<br /><br />' + 
      '<a href="https://northeast-kansas-library-system.github.io/nextsteps/upgrades/upgrade_clear_cache.html" target="_blank">' + 
      'Click here for instructions on clearing your cache.</a></h3></div>'
    ); 

  //Causes hover function on upgrade alert 
  //This should be converted to css 
    $('.nsc_upgrade_alert').hover(function() { 
        $('.nsc_upgrade_alert').css({'background-color': '#dec11f', 'color': 'black'}); 
      }, function() { 
        $('.nsc_upgrade_alert').css({'background-color': 'var(--c_medium)', 'color': 'var(--t_medium)'}); 
    }); 

}); 
/* ========== END Special alerts/messages ========== */ 

/* ========== BEGIN All pages / Koha 24.11 ========== */ 

$(document).ready(function () { 

  //Replace Koha logo on all pages 
    $("#logo").html('' + 
      '<p style="font-size: 2em !important; font-weight: 750; padding-top: .25em;">' + 
      '<span id="next_logo" style="color: #1f9bde !important;">NE</span><span style="color: #0157b9 !important;">X</span>' + 
      '<span id="next_logo" style="color: #1f9bde !important;">T</span></p>'
    ); 
  
  //Stop remembering search terms in header search input 
    $('.head-searchbox').val(''); 
    localStorage.setItem('searchbox_value', ''); 
  
  //BEGIN open left side navbar drop-downs on hover 
    $('.navbar-nav li.dropdown:lt(3)').hover(function() { 
      $(this).children().addClass('show'); 
      $(this).children().attr('aria-expanded', 'true');
    }, function() { 
      $(this).children().removeClass('show'); 
      $(this).children().attr('aria-expanded', 'false');
    }); 
  
  //Add branchcode as class on all pages 
    $('body').addClass($('.logged-in-branch-code').first().text().trim());
  
  //Add superlibrarian as class on all pages 
    if ($('.loggedinusername').hasClass('is_superlibrarian') == true) {
      $('body').addClass('is_superlibrarian');
    }
  
  //Add div to bottom of all pages
    $('body').append('<div id="nsc_stuff" style="display: none;"></div>');
  
  //Adds logged in branchcode to all pages
    var nsc_branchcode = $('.logged-in-branch-code').first().text().trim();
    $('body').addClass(nsc_branchcode);
    $('#nsc_stuff').append('<span id="nsc_logged_in_branchcode" val="' + nsc_branchcode + '">' + nsc_branchcode + '</span><br>');
  
  //Adds short version of logged in branchcode to all pages
    var nsc_short_branchcode = $(".logged-in-branch-code").first().text().trim().substring(0, 4);
    $('#nsc_stuff').append('<span id="nsc_short_branchcode" val="' + nsc_short_branchcode + '">' + nsc_short_branchcode + '</span><br>');

  //Adds the library name to all pages
    var nsc_library = $(".logged-in-branch-name:first").text().trim();
    $('#nsc_stuff').append('<span id="nsc_library" val="' + nsc_library + '">' + nsc_library + '</span><br>');
  
  //Adds short version the library name to all pages
    var nsc_short_library = $(".logged-in-branch-name:first").text().trim().substring(0, 5);
    $('#nsc_stuff').append('<span id="nsc_short_library" val="' + nsc_short_library + '">' + nsc_short_library + '</span><br>');
  //Adds the logged in username to all pages
    var nsc_user = $(".loggedinusername").html().trim();
    $('#nsc_stuff').append('<span id="nsc_user" val="' + nsc_user + '">' + nsc_user + '</span><br>');
  
  //Home > * (all pages)
    //Adds several date fields to the bottom of every page
      var tsnow = new Date($.now());
      var tsday = ("0" + tsnow.getDate()).slice(-2);
      var tsmonth = ("0" + (tsnow.getMonth() + 1)).slice(-2);
      var tsyear = ("0" + (tsnow.getFullYear())).slice(-4);
      var tshour = (tsnow.getHours());
      var tsminute = ("0" + tsnow.getMinutes()).slice(-2);
      var prnow = (tsyear) + "-" + (tsmonth) + "-" + (tsday) + " - " + (tshour) + ":" + (tsminute);
      var repnow = (tsyear) + "-" + (tsmonth) + "-" + (tsday);
      var next_year_full_date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      var next_year = ("0" + (next_year_full_date.getFullYear())).slice(-4);
      var one_year_from_now = (next_year) + "-" + (tsmonth) + "-" + (tsday);
      $('#nsc_stuff').append('<span id="prnow" val="' + prnow + '">' + prnow + '</span><br>');
      $('#nsc_stuff').append('<span id="repnow" val="' + repnow + '">' + repnow + '</span><br>');
      $('#nsc_stuff').append('<span id="one_year_from_now" val="' + one_year_from_now + '">' + one_year_from_now + '</span><br>');
  
  //Adds "logged in user note" to the bottom of every page
      var nsc_user_note = nsc_user + ' at ' + nsc_branchcode + ' on ' + prnow;
      $('#nsc_stuff').append('<span id="nsc_user_note" val="' + nsc_user_note + '">' + nsc_user_note + '</span><br>');

  //Adds borrower home library to the bottom of every page when it exists
    var borrower_home_raw = $('.patronlibrary').text().trim().split(': ');
    var borrower_home_library = (borrower_home_raw[1] || '');
    $('#nsc_stuff').append('<span id="borrower_home_library" val="' + borrower_home_library + '">' + borrower_home_library + '</span><br>');
  
  //Adds borrower home library to the bottom of every page when it exists
    var borrower_short_raw = ($('.patronlibrary').text().trim() || 'Home library: ');
    var borrower_short_split = borrower_short_raw.split(': ');
    var borrower_short_library = (borrower_short_split[1].substring(0,5));
    $('#nsc_stuff').append('<span id="borrower_short_library" val="' + borrower_short_library + '">' + borrower_short_library + '</span><br>');

  
  //Add Koha version to all pages
    var koha_version = ($('head meta[name="generator"]').attr('content') || '');
    $('body').append('<h3 style="text-align: center;">' + koha_version + '</h3>');

});

/* ========== END All pages / Koha 24.11 ========== */ 

/* ========== BEGIN Patron pages (/members/members-update.pl and OTHERS) / Koha 24.05 ========== */ 

$(document).ready(function () { 

  //Patrons › Update patron records 
    //Hide patron update notices from other branches (based on first 4 letters of the branch name) 
      //Hide all patrons on page
        $('#pat_update #pending_updates_group .panel-default').addClass('nsc_hidden');
      //Reveal where patron home matches logged in library
        $('#pending_updates_group a:contains("' + $(".logged-in-branch-name:first").text().trim().substring(0, 5) + '")').parents('.panel.panel-default').removeClass('nsc_hidden');
      //Always reveal pending patron updates to NEKLS staff
        $('#pat_update.NEKLS .panel.panel-default, #pat_update.is_superlibrarian .panel.panel-default').removeClass('hidden');
  
  //Disable "Protected" patron status except for superlibrarians
    //Adds a class to the ""Protected: Yes / No" list element
      $('#pat_memberentrygen label[for="protected"]').parent().addClass('next_is_protected');
    //Disable the radio buttons for all users
      $('.next_is_protected input').attr('disabled','disabled');
    //Re-enable the radio buttons when a superlibrarian is logged in
      $('#pat_memberentrygen.is_superlibrarian .next_is_protected input').removeAttr('disabled', 'disabled');
    //Disable save button on patron modification page if patron is protected unless logged in user is a Superlibrarian
      if( $('#pat_memberentrygen .patroninfo h5 i[title="Protected patron"]').length ) {
        $('#entryform input, #entryform select, #entryform textarea').attr('disabled', 'disabled');
        $('#pat_memberentrygen #saverecord').attr('disabled', 'disabled').html('<i class="fa fa-save"></i> This account is protected from deletion and modification');
        $('#pat_memberentrygen.is_superlibrarian #saverecord').removeAttr('disabled', 'disabled').html('<i class="fa fa-save"></i> Save protected patron data');
        $('#pat_memberentrygen.is_superlibrarian #entryform input, #pat_memberentrygen.is_superlibrarian #entryform select, #pat_memberentrygen.is_superlibrarian #entryform textarea').removeAttr('disabled', 'disabled');
      }
      
}); 

/* ========== END Patron pages (/members/members-update.pl and OTHERS) / Koha 24.05 ========== */

/* ========== BEGIN Administration pages (admin/admin-home.pl and OTHERS) / Koha 24.05 ========== */ 

$(document).ready(function () {

  //Home > Administration > Patron categories 
    //Embiggen Library limitations for patron categories input box 
      var borrower_category_limitation_size = $('#admin_categorie #branches').children().length; 
      $('#admin_categorie #branches').attr('size', borrower_category_limitation_size); 
  
});


$(document).ready(function () {

  $('.blarthong').hide();

});