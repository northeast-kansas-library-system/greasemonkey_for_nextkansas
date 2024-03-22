// ==UserScript==
// @name           Control field helper
// @description    Creates a button to fix control fields
// @author         George H. Williams
// @version        1.05
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/control_field_fixer.user.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/control_field_fixer.user.js
// ==/UserScript==

$(document).ready(function() {
  
  //Creates buttons before the 000 field
  
  $('#cat_addbiblio #toolbar').after(
    '<br /><button id="next_basic_book" type="button" style="margin: 5px" class="btn btn-default btn-xs">Basic book</button>' +
    '&nbsp;<button id="next_large_print_book" type="button" style="margin: 5px" class="btn btn-default btn-xs">Large print book</button>'+
    '&nbsp;<button id="next_braile_book" type="button" style="margin: 5px" class="btn btn-default btn-xs">Braile book</button>'+
    '<br /><button id="next_basic_magazine" type="button" style="margin: 5px" class="btn btn-default btn-xs">Basic periodical</button>'+
    '&nbsp;<button id="next_magazine_daily_irregular" type="button" style="margin: 5px" class="btn btn-default btn-xs">Daily (newspaper) normalized irregular</button>'+
    '&nbsp;<button id="next_magazine_daily" type="button" style="margin: 5px" class="btn btn-default btn-xs">Daily (newspaper)</button>'+
    '&nbsp;<button id="next_magazine_weekly" type="button" style="margin: 5px" class="btn btn-default btn-xs">Weekly</button>'+
    '&nbsp;<button id="next_magazine_weekly_irregular" type="button" style="margin: 5px" class="btn btn-default btn-xs">Weekly normalized irregular</button>'+
    '&nbsp;<button id="next_magazine_monthly" type="button" style="margin: 5px" class="btn btn-default btn-xs">Monthly</button>'+
    '&nbsp;<button id="next_magazine_monthly_irregular" type="button" style="margin: 5px" class="btn btn-default btn-xs">Monthly normalized irregular</button>'
  );
  
  var leader_1 = $('[id^="tag_000"].input_marceditor').val();
  var m_leader_00_04 = leader_1.substring(0, 5);
  var m_leader_05 = leader_1.substring(5, 6);
  var m_leader_06 = leader_1.substring(6, 7);
  var m_leader_07 = leader_1.substring(7, 8);
  var m_leader_08 = leader_1.substring(8, 9);
  var m_leader_09 = leader_1.substring(9, 10);
  var m_leader_10 = leader_1.substring(10, 11);
  var m_leader_11 = leader_1.substring(11, 12);
  var m_leader_12_16 = leader_1.substring(12, 17);
  var m_leader_17 = leader_1.substring(17, 18);
  var m_leader_18 = leader_1.substring(18, 19);
  var m_leader_19 = leader_1.substring(19, 20);
  var m_leader_20 = leader_1.substring(20, 21);
  var m_leader_21 = leader_1.substring(21, 22);
  var m_leader_22 = leader_1.substring(22, 23);
  var m_leader_23 = leader_1.substring(23, 24);
  
  /*
  console.log('leader_1: ' + leader_1);
  console.log('m_leader_00_04: ' + m_leader_00_04);
  console.log('m_leader_05: ' + m_leader_05);
  console.log('m_leader_06: ' + m_leader_06);
  console.log('m_leader_07: ' + m_leader_07);
  console.log('m_leader_08: ' + m_leader_08);
  console.log('m_leader_09: ' + m_leader_09);
  console.log('m_leader_10: ' + m_leader_10);
  console.log('m_leader_11: ' + m_leader_11);
  console.log('m_leader_12_16: ' + m_leader_12_16);
  console.log('m_leader_17: ' + m_leader_17);
  console.log('m_leader_18: ' + m_leader_18);
  console.log('m_leader_19: ' + m_leader_19);
  console.log('m_leader_20: ' + m_leader_20);
  console.log('m_leader_21: ' + m_leader_21);
  console.log('m_leader_22: ' + m_leader_22);
  console.log('m_leader_23: ' + m_leader_23);
  */
  
  var zero_zero_six_1 = $('[id^="tag_006"].input_marceditor').length;
  if (zero_zero_six_1 > 1) {
    alert('Multiple 006 fields')
  }
  console.log('zero_zero_six_1: ' + zero_zero_six_1);
  
  var zero_zero_seven_1 = $('[id^="tag_007"].input_marceditor').length;
  if (zero_zero_seven_1 > 1) {
    alert('Multiple 007 fields')
  }
  console.log('zero_zero_seven_1: ' + zero_zero_seven_1);
  
  var zero_zero_eight_1 = $('[id^="tag_008"].input_marceditor').val();
  var m_008_00_05 = zero_zero_eight_1.substring(0, 6);
  var m_008_06 = zero_zero_eight_1.substring(6, 7);
  var m_008_07_10 = zero_zero_eight_1.substring(7, 11);
  var m_008_11_14 = zero_zero_eight_1.substring(11, 15);
  var m_008_15_17 = zero_zero_eight_1.substring(15, 18);
  var m_008_18 = zero_zero_eight_1.substring(18, 19);
  var m_008_19 = zero_zero_eight_1.substring(19, 20);
  var m_008_20 = zero_zero_eight_1.substring(20, 21);
  var m_008_21 = zero_zero_eight_1.substring(21, 22);
  var m_008_22 = zero_zero_eight_1.substring(22, 23);
  var m_008_23 = zero_zero_eight_1.substring(23, 24);
  var m_008_24 = zero_zero_eight_1.substring(24, 25);
  var m_008_25 = zero_zero_eight_1.substring(25, 26);
  var m_008_26 = zero_zero_eight_1.substring(26, 27);
  var m_008_27 = zero_zero_eight_1.substring(27, 28);
  var m_008_28 = zero_zero_eight_1.substring(28, 29);
  var m_008_29 = zero_zero_eight_1.substring(29, 30);
  var m_008_30 = zero_zero_eight_1.substring(30, 31);
  var m_008_31 = zero_zero_eight_1.substring(31, 32);
  var m_008_32 = zero_zero_eight_1.substring(32, 33);
  var m_008_33 = zero_zero_eight_1.substring(33, 34);
  var m_008_34 = zero_zero_eight_1.substring(34, 35);
  var m_008_35_37 = zero_zero_eight_1.substring(35, 38);
  var m_008_38 = zero_zero_eight_1.substring(38, 39);
  var m_008_39 = zero_zero_eight_1.substring(39, 40);

  /*
  console.log('zero_zero_eight_1: ' + zero_zero_eight_1);
  console.log('m_008_00_05: ' + m_008_00_05);
  console.log('m_008_06: ' + m_008_06);
  console.log('m_008_07_10: ' + m_008_07_10);
  console.log('m_008_11_14: ' + m_008_11_14);
  console.log('m_008_15_17: ' + m_008_15_17);
  console.log('m_008_18: ' + m_008_18);
  console.log('m_008_19: ' + m_008_19);
  console.log('m_008_20: ' + m_008_20);
  console.log('m_008_21: ' + m_008_21);
  console.log('m_008_22: ' + m_008_22);
  console.log('m_008_23: ' + m_008_23);
  console.log('m_008_24: ' + m_008_24);
  console.log('m_008_25: ' + m_008_25);
  console.log('m_008_26: ' + m_008_26);
  console.log('m_008_27: ' + m_008_27);
  console.log('m_008_28: ' + m_008_28);
  console.log('m_008_29: ' + m_008_29);
  console.log('m_008_30: ' + m_008_30);
  console.log('m_008_31: ' + m_008_31);
  console.log('m_008_32: ' + m_008_32);
  console.log('m_008_33: ' + m_008_33);
  console.log('m_008_34: ' + m_008_34);
  console.log('m_008_35_37: ' + m_008_35_37);
  console.log('m_008_38: ' + m_008_38);
  console.log('m_008_39: ' + m_008_39);
  */
  
  var three_ten = $('[id^="tag_310_subfield_a"].input_marceditor').val();
  console.log('three_ten: ' + three_ten);
  
  var three_ten_alert = ('If updating or changing a magazine\'s frequency,\nbe sure toupdate the codes in the 008\nas well as the 310$a.\n\nThe 310$a is currently:\n\n"' + three_ten + '"')
  
  
 
  
  $('#next_magazine_daily_irregular').click(function (){
    var frequency_regularity_1 = $('[id^="tag_008"].input_marceditor').val();
    var frequency_regularity_2 = frequency_regularity_1.substring(0, 18);
    var frequency_regularity_3 = frequency_regularity_1.substring(18, 20);
    var frequency_regularity_4 = frequency_regularity_1.substring(20, 40);
    console.log('frequency_regularity_1: ' + frequency_regularity_1);
    console.log('frequency_regularity_2: ' + frequency_regularity_2);
    console.log('frequency_regularity_3: ' + frequency_regularity_3);
    console.log('frequency_regularity_4: ' + frequency_regularity_4);
    $('[id^="tag_008"].input_marceditor').val();
  });
  
  $('#next_basic_book').click(function (){
    $('[id^="tag_000"].input_marceditor').val(
      m_leader_00_04 + 
      'cam' + 
      m_leader_08 + 
      m_leader_09 + 
      m_leader_10 + 
      m_leader_11 + 
      m_leader_12_16 + 
      m_leader_17 + 
      'i' + 
      m_leader_19 + 
      m_leader_20 + 
      m_leader_21 + 
      m_leader_22 + 
      m_leader_23
    );
    $('[id^="tag_007"].input_marceditor').val('ta');
    $('[id^="tag_008"].input_marceditor').val(
      m_008_00_05 + 
      m_008_06 + 
      m_008_07_10 + 
      m_008_11_14 + 
      m_008_15_17 + 
      m_008_18 + 
      m_008_19 + 
      m_008_20 + 
      m_008_21 + 
      m_008_22 + 
      ' ' + 
      m_008_24 + 
      m_008_25 + 
      m_008_26 + 
      m_008_27 + 
      m_008_28 + 
      m_008_29 + 
      m_008_30 + 
      m_008_31 + 
      m_008_32 + 
      m_008_33 + 
      m_008_34 + 
      m_008_35_37 + 
      m_008_38 + 
      m_008_39
    );
  });
  
  $('#next_large_print_book').click(function (){
    
    $('[id^="tag_000"].input_marceditor').val(
      m_leader_00_04 + 
      'cam' + 
      m_leader_08 + 
      m_leader_09 + 
      m_leader_10 + 
      m_leader_11 + 
      m_leader_12_16 + 
      m_leader_17 + 
      'i' + 
      m_leader_19 + 
      m_leader_20 + 
      m_leader_21 + 
      m_leader_22 + 
      m_leader_23
    );
    $('[id^="tag_007"].input_marceditor').val('tb');
    $('[id^="tag_008"].input_marceditor').val(
      m_008_00_05 + 
      m_008_06 + 
      m_008_07_10 + 
      m_008_11_14 + 
      m_008_15_17 + 
      m_008_18 + 
      m_008_19 + 
      m_008_20 + 
      m_008_21 + 
      m_008_22 + 
      'd' + 
      m_008_24 + 
      m_008_25 + 
      m_008_26 + 
      m_008_27 + 
      m_008_28 + 
      m_008_29 + 
      m_008_30 + 
      m_008_31 + 
      m_008_32 + 
      m_008_33 + 
      m_008_34 + 
      m_008_35_37 + 
      m_008_38 + 
      m_008_39
    );
  });
  
  $('#next_braile_book').click(function (){
    $('[id^="tag_000"].input_marceditor').val(
      m_leader_00_04 + 
      'cam' + 
      m_leader_08 + 
      m_leader_09 + 
      m_leader_10 + 
      m_leader_11 + 
      m_leader_12_16 + 
      m_leader_17 + 
      'i' + 
      m_leader_19 + 
      m_leader_20 + 
      m_leader_21 + 
      m_leader_22 + 
      m_leader_23
    );
    $('[id^="tag_007"].input_marceditor').val('tc');
    $('[id^="tag_008"].input_marceditor').val(
      m_008_00_05 + 
      m_008_06 + 
      m_008_07_10 + 
      m_008_11_14 + 
      m_008_15_17 + 
      m_008_18 + 
      m_008_19 + 
      m_008_20 + 
      m_008_21 + 
      m_008_22 + 
      'f' + 
      m_008_24 + 
      m_008_25 + 
      m_008_26 + 
      m_008_27 + 
      m_008_28 + 
      m_008_29 + 
      m_008_30 + 
      m_008_31 + 
      m_008_32 + 
      m_008_33 + 
      m_008_34 + 
      m_008_35_37 + 
      m_008_38 + 
      m_008_39
    );
  });
  
  $('#next_basic_magazine').click(function (){
    $('[id^="tag_000"].input_marceditor').val(
      m_leader_00_04 + 
      'cas' + 
      m_leader_08 + 
      m_leader_09 + 
      m_leader_10 + 
      m_leader_11 + 
      m_leader_12_16 + 
      m_leader_17 + 
      'i' + 
      m_leader_19 + 
      m_leader_20 + 
      m_leader_21 + 
      m_leader_22 + 
      m_leader_23
    );
    $('[id^="tag_007"].input_marceditor').val('ta');
    $('[id^="tag_008"].input_marceditor').val(
      m_008_00_05 + 
      'c' + 
      m_008_07_10 + 
      m_008_11_14 + 
      m_008_15_17 + 
      m_008_18 + 
      m_008_19 + 
      m_008_20 + 
      'p' + 
      m_008_22 + 
      m_008_23 + 
      m_008_24 + 
      m_008_25 + 
      m_008_26 + 
      m_008_27 + 
      m_008_28 + 
      m_008_29 + 
      '   ' + 
      m_008_33 + 
      m_008_34 + 
      m_008_35_37 + 
      m_008_38 + 
      m_008_39
    );
    alert(three_ten_alert);
  });
  
  

  //Creates buttons on 000 field
  
  $('#cat_addbiblio [id^="tag_000"] .input_marceditor').after('<br /><button id="next_000_clear" type="button" style="margin: 5px" class="btn btn-default btn-xs">000-Clear</button><br />'+
'<button id="next_000_language_material" type="button" style="margin: 5px" class="btn btn-default btn-xs">000-7 Language</button>'+
'<button id="next_000_projected_medium" type="button" style="margin: 5px" class="btn btn-default btn-xs">000-7 Projected</button>'+
'<button id="next_000_nonmusical_sound_recording" type="button" style="margin: 5px" class="btn btn-default btn-xs">000-7 Non-musical sound</button>'+
'<button id="next_000_musical_sound_recording" type="button" style="margin: 5px" class="btn btn-default btn-xs">000-7 Musical sound</button>'+
'<button id="next_000_computer_file" type="button" style="margin: 5px" class="btn btn-default btn-xs">000-7 Computer file</button>');
  
  $('#next_000_clear').click(function (){
    $('[id^="tag_000"].input_marceditor').val('');
  });
  
  $('#next_000_language_material').click(function (){
    var type_of_record_1 = $('[id^="tag_000"].input_marceditor').val();
    var type_of_record_2 = type_of_record_1.substring(0, 6);
    var type_of_record_3 = type_of_record_1.substring(6, 7);
    var type_of_record_4 = type_of_record_1.substring(7, 24);
    console.log('type_of_record_1: ' + type_of_record_1);
    console.log('type_of_record_2: ' + type_of_record_2);
    console.log('type_of_record_3: ' + type_of_record_3);
    console.log('type_of_record_4: ' + type_of_record_4);
    $('[id^="tag_000"].input_marceditor').val(type_of_record_2 + 'a' + type_of_record_4);
  });
  
  $('#next_000_projected_medium').click(function (){
    var type_of_record_1 = $('[id^="tag_000"].input_marceditor').val();
    var type_of_record_2 = type_of_record_1.substring(0, 6);
    var type_of_record_3 = type_of_record_1.substring(6, 7);
    var type_of_record_4 = type_of_record_1.substring(7, 24);
    console.log('type_of_record_1: ' + type_of_record_1);
    console.log('type_of_record_2: ' + type_of_record_2);
    console.log('type_of_record_3: ' + type_of_record_3);
    console.log('type_of_record_4: ' + type_of_record_4);
    $('[id^="tag_000"].input_marceditor').val(type_of_record_2 + 'g' + type_of_record_4);
  });
  
  $('#next_000_nonmusical_sound_recording').click(function (){
    var type_of_record_1 = $('[id^="tag_000"].input_marceditor').val();
    var type_of_record_2 = type_of_record_1.substring(0, 6);
    var type_of_record_3 = type_of_record_1.substring(6, 7);
    var type_of_record_4 = type_of_record_1.substring(7, 24);
    console.log('type_of_record_1: ' + type_of_record_1);
    console.log('type_of_record_2: ' + type_of_record_2);
    console.log('type_of_record_3: ' + type_of_record_3);
    console.log('type_of_record_4: ' + type_of_record_4);
    $('[id^="tag_000"].input_marceditor').val(type_of_record_2 + 'i' + type_of_record_4);
  });

  $('#next_000_musical_sound_recording').click(function (){
    var type_of_record_1 = $('[id^="tag_000"].input_marceditor').val();
    var type_of_record_2 = type_of_record_1.substring(0, 6);
    var type_of_record_3 = type_of_record_1.substring(6, 7);
    var type_of_record_4 = type_of_record_1.substring(7, 24);
    console.log('type_of_record_1: ' + type_of_record_1);
    console.log('type_of_record_2: ' + type_of_record_2);
    console.log('type_of_record_3: ' + type_of_record_3);
    console.log('type_of_record_4: ' + type_of_record_4);
    $('[id^="tag_000"].input_marceditor').val(type_of_record_2 + 'j' + type_of_record_4);
  });
  
  $('#next_000_computer_file').click(function (){
    var type_of_record_1 = $('[id^="tag_000"].input_marceditor').val();
    var type_of_record_2 = type_of_record_1.substring(0, 6);
    var type_of_record_3 = type_of_record_1.substring(6, 7);
    var type_of_record_4 = type_of_record_1.substring(7, 24);
    console.log('type_of_record_1: ' + type_of_record_1);
    console.log('type_of_record_2: ' + type_of_record_2);
    console.log('type_of_record_3: ' + type_of_record_3);
    console.log('type_of_record_4: ' + type_of_record_4);
    $('[id^="tag_000"].input_marceditor').val(type_of_record_2 + 'm' + type_of_record_4);
  });
  
  

  $('#cat_addbiblio [id^="tag_007"] .input_marceditor').after(
    "<br /><button id='next_007_clear' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Clear</button>"+
    "<br /><button id='next_007_regular_print' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Regular print</button>"+
    "<button id='next_007_large_print' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Large print</button>"+
    "<br /><button id='next_007_audiobook_cd' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Audiobook CD</button>"+
    "<br /><button id='next_007_video_dvd' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Video DVD</button>" +
    "<button id='next_007_video_blu' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Video Blu-ray</button>" +
    "<button id='next_007_video_vhs' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Video VHS</button>"
  );
  
  $('#next_007_clear').click(function (){
    $('[id^="tag_007"].input_marceditor').val('');
  });
  
  $('#next_007_regular_print').click(function (){
    $('[id^="tag_007"].input_marceditor').val('ta');
  });
  
  $('#next_007_large_print').click(function (){
    $('[id^="tag_007"].input_marceditor').val('tb');
  });

  $('#next_007_audiobook_cd').click(function (){
    $('[id^="tag_007"].input_marceditor').val('sd fungnnmmned');
  });
  
  $('#next_007_video_dvd').click(function (){
    $('[id^="tag_007"].input_marceditor').val('vd cvaizu');
  });
  
  $('#next_007_video_blu').click(function (){
    $('[id^="tag_007"].input_marceditor').val('vd csaizu');
  });
  
  $('#next_007_video_vhs').click(function (){
    $('[id^="tag_007"].input_marceditor').val('vf cbahou');
  });


/*
  $('[id^="tag_008"].input_marceditor').val(
    m_008_00_05 +
    m_008_06 +
    m_008_07_10 +
    m_008_11_14 +
    m_008_15_17 +
    m_008_18 +
    m_008_19 +
    m_008_20 +
    m_008_21 +
    m_008_22 +
    m_008_23 +
    m_008_24 +
    m_008_25 +
    m_008_26 +
    m_008_27 +
    m_008_28 +
    m_008_29 +
    m_008_30 +
    m_008_31 +
    m_008_32 +
    m_008_33 +
    m_008_34 +
    m_008_35_37 +
    m_008_38 +
    m_008_39
  );
*/

});