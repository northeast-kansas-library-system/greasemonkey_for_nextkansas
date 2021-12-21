// ==UserScript==
// @name           Deleted selected notice triggers
// @author         George H. Williams
// @version        1.0
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/blob/main/tools_overdue_notice_status_triggers.deletion.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/blob/main/tools_overdue_notice_status_triggers.deletion.js
// @license CC BY 4.0
// ==/UserScript==

/* Replace all instances of XXXAAAXXX with the borrower category code that you want to eliminate from the notice triggers */

$(document).ready(function() {

  $('#tools_overduerules #rulestabs').after('<span id="kill_it" class="btn btn-default" style="margin: 10px;" href="#">Delete selected notice triggers</span>');

  $("#kill_it").click(function() {
    $('#tools_overduerules #rulestabs input[name="delay1-XXXAAAXXX"]').val('');
    $('#tools_overduerules #rulestabs select[name="letter1-XXXAAAXXX"] option[value=""]').attr('selected', 'selected');
    $('#tools_overduerules #rulestabs input[name="debarred1-XXXAAAXXX"]').prop( "checked", false );
    $('#tools_overduerules #rulestabs input[name="mtt1-XXXAAAXXX"]').prop( "checked", false );

    $('#tools_overduerules #rulestabs input[name="delay2-XXXAAAXXX"]').val('');
    $('#tools_overduerules #rulestabs select[name="letter2-XXXAAAXXX"] option[value=""]').attr('selected', 'selected');
    $('#tools_overduerules #rulestabs input[name="debarred2-XXXAAAXXX"]').prop( "checked", false );
    $('#tools_overduerules #rulestabs input[name="mtt2-XXXAAAXXX"]').prop( "checked", false );

    $('#tools_overduerules #rulestabs input[name="delay3-XXXAAAXXX"]').val('');
    $('#tools_overduerules #rulestabs select[name="letter3-XXXAAAXXX"] option[value=""]').attr('selected', 'selected');
    $('#tools_overduerules #rulestabs input[name="debarred3-XXXAAAXXX"]').prop( "checked", false );
    $('#tools_overduerules #rulestabs input[name="mtt3-XXXAAAXXX"]').prop( "checked", false );

  });

});
