// ==UserScript==
// @name           Schedule helper
// @description    Creates buttons on scheduler.pl that will schedule a report to run in 5 minutes, on the first of the following month during the midnight hour, or the same during the 1:00 a.m. hour
// @author         George H. Williams
// @version        1.0
// @grant          none
// @match          https://staff.nextkansas.org/cgi-bin/koha/tools/scheduler.pl*
// @match          https://staff.nekls.bywatersolutions.com/cgi-bin/koha/tools/scheduler.pl*
// @match          http://staff-test.nexpresslibrary.org/cgi-bin/koha/tools/scheduler.pl*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/schedule_button.user.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/schedule_button.user.js
// ==/UserScript==

$(document).ready(function() {

  //BEGIN adds the time in 5 minutes as a span on the report schedule page so it can be accessed by the buttons
    var minutesToAdd=5;
    var currentDate = new Date();
    var tfnow = new Date(currentDate.getTime() + minutesToAdd*60000);
    var tfhour = ("0" + tfnow.getHours()).slice(-2);
    var tfminute = ("0" + tfnow.getMinutes()).slice(-2);
    var pfnow = (tfhour) + ":" + (tfminute);
    $(".gradient").before("<span id='timeinfive' style='display: none;'>" + pfnow + "</span>");

  //BEGIN adds date for first of next month in mm/dd/yyyy format to report schedule page so it can be accessed by the buttons
    var rnow = new Date($.now());
    var nnow = new Date(rnow.setMonth(rnow.getMonth() + 1));
    var nday = "01";
    var nmonth = ("0" + (nnow.getMonth() + 1)).slice(-2);
    var nyear = ("0" + (nnow.getFullYear())).slice(-4);
    var next_month_01 = (nmonth) + "/" + (nday) + "/" + (nyear);
    $(".gradient").before("<span id='first_date_next' style='display: none;'>" + next_month_01 + "</span>");

  //BEGIN creates buttons
    $('#tools_scheduler #email').after('<span id="five_schedule" class="btn btn-default" style="margin: 10px;" href="#">5 minutes from now</span>&nbsp;&nbsp;<span id="stats_schedule_00" class="btn btn-default" style="margin: 10px;" href="#">Monthly statistics 00:00</span>&nbsp;&nbsp;<span id="stats_schedule_01" class="btn btn-default" style="margin: 10px;" href="#">Monthly statistics 01:00</span>');

  //BEGIN adds function to #five_schedule button
    $("#five_schedule").click(function() {
      $('#tools_scheduler #starttime').val($('#timeinfive').text());
      $('#tools_scheduler #startdate').val('');
      $('#tools_scheduler #email').val("george@nekls.org");
    });

  //BEGIN adds function to #stats_schedule_00 button
    $("#stats_schedule_00").click(function() {
      $('#tools_scheduler #starttime').val('00:');
      $('#tools_scheduler #startdate').val($('#first_date_next').text());
      $('#tools_scheduler #email').val("george@nekls.org");
    });

  //BEGIN adds function to #stats_schedule_01 button
    $("#stats_schedule_01").click(function() {
      $('#tools_scheduler #starttime').val('01:');
      $('#tools_scheduler #startdate').val($('#first_date_next').text());
      $('#tools_scheduler #email').val("george@nekls.org");
    });

});