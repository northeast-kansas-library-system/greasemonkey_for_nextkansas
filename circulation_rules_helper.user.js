// ==UserScript==
// @name           Koha cirulation rules helper
// @description    Hides the left hand navigation column and displays all hidden columns in circulation matrix when the page loads
// @author         George H. Williams
// @version        1.1
// @grant          none
// @match          https://staff.nekls.bywatersolutions.com/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @license CC BY 4.0
// ==/UserScript==

$(document).ready(function () {

  //Adds button to remove navmenu
    $('#admin_smart-rules #navmenu').parent().prepend('<a href="#"><button id="nsc_rules" type="button" style="margin: 5px" class="btn btn-primary">Remove left navigation bar</button></a>');

    $('#nsc_rules').click(function () {
      $('#navhide, #navmenu, #nsc_rules').hide();
      $('.hiderule').removeClass();
      $('.row .col-md-10.order-md-2.order-sm-1').removeClass('col-md-10').removeClass('order-md-2').removeClass('order-sm-1');
      $('#default-circulation-rules').addClass('col-md-12');
      window.dispatchEvent(new Event('resize'))
    });
  
    $('#admin_smart-rules thead').click(function () {
      window.dispatchEvent(new Event('resize'))
    });
  
  /* col-md-10 order-md-2 order-sm-1 */

  //Styles "All borrower" or "All item types"
    $('#default-circulation-rules tr td:nth-child(1):contains("All")').css('background', '#3ce01f'); 
    $('#default-circulation-rules tr td:nth-child(2):contains("All")').css('background', '#9eef8f'); 

  //Checks to see if we're on the rules page
    if ($('#admin_smart-rules').length) { 
      
      //Creates buttons
        $('<div id="gm_groups"><h3>Display columns based on types of rules</h3><div class="btn btn-primary gm_button" id="gm_all" style="margin: 10px">Show all</div><div class="btn btn-danger gm_button" id="gm_defaults" style="margin: 10px">Show my defaults</div><div class="btn btn-primary gm_button" id="gm_circulation" style="margin: 10px">Circulation</div><div class="btn btn-primary gm_button" id="gm_fees" style="margin: 10px">Fees</div><div class="btn btn-primary gm_button" id="gm_requests" style="margin: 10px">Requests</div><div class="btn btn-primary gm_button" id="gm_suspensions" style="margin: 10px">Suspensions</div></div>').insertBefore($('#default-circulation-rules'));;
        $('<div id="showhideContainer"><h3>Toggle individual columns</h3></div>').insertBefore($('#default-circulation-rules'));

      //Creates groups based on column names
        const hide_by_default = ['Note', 'Days mode', 'Decreased loan period for high holds (day)', 'Cap fine at replacement price', 'Suspension in days (day)', 'Max. suspension duration (day)', 'Suspension charging interval', 'No renewal before', 'Automatic renewal', 'No automatic renewal after', 'No automatic renewal after (hard limit)', 'Rental discount (%)'];
        const circulation_only = ['Note', 'Fine amount', 'Fine charging interval', 'When to charge', 'Fine/suspension grace period', 'Overdue fines cap (amount)', 'Cap fine at replacement price', 'Suspension in days (day)', 'Max. suspension duration (day)', 'Suspension charging interval', 'Holds allowed (total)', 'Holds allowed (daily)', 'Holds per record (count)', 'On shelf holds allowed', 'OPAC item level holds', 'Rental discount (%)']
        const fees_only = ['Note', 'Current checkouts allowed', 'Current on-site checkouts allowed', 'Loan period', 'Hard due date', 'Decreased loan period for high holds (day)', 'Suspension in days (day)', 'Max. suspension duration (day)', 'Suspension charging interval', 'Renewals allowed (count)', 'Renewal period', 'No renewal before', 'Automatic renewal', 'No automatic renewal after', 'No automatic renewal after (hard limit)', 'Holds allowed (total)', 'Holds allowed (daily)', 'Holds per record (count)', 'On shelf holds allowed', 'OPAC item level holds']
        const requests_only = ['Note', 'Days mode', 'Current checkouts allowed', 'Current on-site checkouts allowed', 'Loan period', 'Hard due date', 'Decreased loan period for high holds (day)', 'Fine amount', 'Fine charging interval', 'When to charge', 'Fine/suspension grace period', 'Overdue fines cap (amount)', 'Cap fine at replacement price', 'Suspension in days (day)', 'Max. suspension duration (day)', 'Suspension charging interval', 'Renewals allowed (count)', 'Renewal period', 'No renewal before', 'Automatic renewal', 'No automatic renewal after', 'No automatic renewal after (hard limit)', 'Rental discount (%)']
        const suspensions_only = ['Note', 'Days mode', 'Current checkouts allowed', 'Current on-site checkouts allowed', 'Loan period', 'Hard due date', 'Decreased loan period for high holds (day)', 'Fine amount', 'Fine charging interval', 'When to charge', 'Fine/suspension grace period', 'Overdue fines cap (amount)', 'Cap fine at replacement price', 'Renewals allowed (count)', 'Renewal period', 'No renewal before', 'Automatic renewal', 'No automatic renewal after', 'No automatic renewal after (hard limit)', 'Holds allowed (total)', 'Holds allowed (daily)', 'Holds per record (count)', 'On shelf holds allowed', 'OPAC item level holds', 'Rental discount (%)']
        let column_index = 1;


      //Indexes columns and adds toggle buttons
        $('#default-circulation-rules thead th').each(function () {
          let this_column_text = $(this).text();
          $(this).attr('data-index', column_index)
          if (this_column_text != '\xa0') {
            $('#showhideContainer').append('<div class="toggle-rule btn btn-primary" style="margin-right: 5px; font-size: .72em" data-index="' + column_index + '">' + this_column_text + '</div>');
            column_index++;
          }
          window.dispatchEvent(new Event('resize'))
          //var hideyho = $('#default-circulation-rules thead th[style*="display: none"]').html();
          //console.log(hideyho);
        });

      //Hides buttons in default group when the page loads
        hide_by_default.forEach(intialHide)

        function intialHide(item) {
          $('.toggle-rule:contains("' + item + '")').toggleClass('btn-danger').toggleClass('btn-primary');
          let current_index = $('thead th:contains("' + item + '")').index() + 1;
          $('tr > td:nth-child(' + (current_index) + '),th:nth-child(' + (current_index) + ')').toggle();
        }

      //Adds function to individual column buttons
        $('.toggle-rule').click(function () {
          let this_index = $(this).attr('data-index');
          $('tr > td:nth-child(' + this_index + '),th:nth-child(' + this_index + ')').toggle();
          $(this).toggleClass('btn-danger').toggleClass('btn-primary');
          window.dispatchEvent(new Event('resize'))
        })          ;

      //Adds function to Show all button
        $('#gm_all').click(function () {

          $('.toggle-rule, .gm_button').addClass('btn-primary').removeClass('btn-danger');
          $('#gm_all').addClass('btn-danger').removeClass('btn-primary');
          $('td, th').show();
          window.dispatchEvent(new Event('resize'))

        });

      //Adds function to Default group button
        $('#gm_defaults').click(function () {

          $('.toggle-rule, .gm_button').addClass('btn-primary').removeClass('btn-danger');
          $('#gm_defaults').addClass('btn-danger').removeClass('btn-primary');
          $('td, th').show();

          hide_by_default.forEach(intialHide)

          function intialHide(item) {
            $('.toggle-rule:contains("' + item + '")').toggleClass('btn-danger').toggleClass('btn-primary');
            let current_index = $('thead th:contains("' + item + '")').index() + 1;
            $('tr > td:nth-child(' + (current_index) + '),th:nth-child(' + (current_index) + ')').toggle();
          }
          window.dispatchEvent(new Event('resize'))

        });

      //Adds function to Circulation group button
        $('#gm_circulation').click(function () {

          $('.toggle-rule, .gm_button').addClass('btn-primary').removeClass('btn-danger');
          $('#gm_circulation').addClass('btn-danger').removeClass('btn-primary');
          $('td, th').show();

          circulation_only.forEach(circulationHide)

          function circulationHide(item) {
            $('.toggle-rule:contains("' + item + '")').toggleClass('btn-danger').toggleClass('btn-primary');
            let current_index = $('thead th:contains("' + item + '")').index() + 1;
            $('tr > td:nth-child(' + (current_index) + '),th:nth-child(' + (current_index) + ')').toggle();
          }
          window.dispatchEvent(new Event('resize'))

        });

      //Adds function to Fees group button
        $('#gm_fees').click(function () {

          $('.toggle-rule, .gm_button').addClass('btn-primary').removeClass('btn-danger');
          $('#gm_fees').addClass('btn-danger').removeClass('btn-primary');
          $('td, th').show();

          fees_only.forEach(feesHide)

          function feesHide(item) {
            $('.toggle-rule:contains("' + item + '")').toggleClass('btn-danger').toggleClass('btn-primary');
            let current_index = $('thead th:contains("' + item + '")').index() + 1;
            $('tr > td:nth-child(' + (current_index) + '),th:nth-child(' + (current_index) + ')').toggle();
          }
          window.dispatchEvent(new Event('resize'))

        });

      //Adds function to Requests group button
        $('#gm_requests').click(function () {

          $('.toggle-rule, .gm_button').addClass('btn-primary').removeClass('btn-danger');
          $('#gm_requests').addClass('btn-danger').removeClass('btn-primary');
          $('td, th').show();

          requests_only.forEach(requestsHide)

          function requestsHide(item) {
            $('.toggle-rule:contains("' + item + '")').toggleClass('btn-danger').toggleClass('btn-primary');
            let current_index = $('thead th:contains("' + item + '")').index() + 1;
            $('tr > td:nth-child(' + (current_index) + '),th:nth-child(' + (current_index) + ')').toggle();
          }
          window.dispatchEvent(new Event('resize'))

        });

      //Adds function to Suspension group button
        $('#gm_suspensions').click(function () {

          $('.toggle-rule, .gm_button').addClass('btn-primary').removeClass('btn-danger');
          $('#gm_suspensions').addClass('btn-danger').removeClass('btn-primary');
          $('td, th').show();

          suspensions_only.forEach(suspensionsHide)

          function suspensionsHide(item) {
            $('.toggle-rule:contains("' + item + '")').toggleClass('btn-danger').toggleClass('btn-primary');
            let current_index = $('thead th:contains("' + item + '")').index() + 1;
            $('tr > td:nth-child(' + (current_index) + '),th:nth-child(' + (current_index) + ')').toggle();
          }
          window.dispatchEvent(new Event('resize'))

        });

    }
  
  //Automatically remove navmenu when super large or multi screen sized page is loaded 
    if ($(window).width() > 1920) {
      $('#navhide, #navmenu, #nsc_rules').hide();
      $('.hiderule').removeClass();
      $('.row .col-md-10.order-md-2.order-sm-1').removeClass('col-md-10').removeClass('order-md-2').removeClass('order-sm-1');
      $('#default-circulation-rules').addClass('col-md-12');
      $('#gm_all').trigger('click');
      window.dispatchEvent(new Event('resize'))
    }


});