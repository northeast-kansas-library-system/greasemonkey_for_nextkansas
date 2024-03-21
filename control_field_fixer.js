// ==UserScript==
// @name           Control field helper
// @description    Creates a button to fix control fields
// @author         George H. Williams
// @version        1.01
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          http://staff-test.nexpresslibrary.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/control_field_fixer.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/control_field_fixer.js
// ==/UserScript==

$(document).ready(function() {
  
  $('#cat_addbiblio [id^="tag_000"] .input_marceditor').after('<br /><button id="next_000_clear" type="button" style="margin: 5px" class="btn btn-default btn-xs">Clear</button><br />'+
                                                             '<button id="next_000_language_material" type="button" style="margin: 5px" class="btn btn-default btn-xs">TOR - Language</button>'+
                                                             '<button id="next_000_projected_medium" type="button" style="margin: 5px" class="btn btn-default btn-xs">TOR - Projected</button>'+
                                                             '<button id="next_000_nonmusical_sound_recording" type="button" style="margin: 5px" class="btn btn-default btn-xs">TOR - Non-musical sound</button>'+
                                                             '<button id="next_000_musical_sound_recording" type="button" style="margin: 5px" class="btn btn-default btn-xs">TOR - Musical sound</button>'+
                                                             '<button id="next_000_computer_file" type="button" style="margin: 5px" class="btn btn-default btn-xs">TOR - Computer file</button>');
  
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
  
  

  $('#cat_addbiblio [id^="tag_007"] .input_marceditor').after("<br /><button id='next_007_clear' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Clear</button>"+
                                                              "<button id='next_007_regular_print' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Regular print</button>"+
                                                              "<button id='next_007_large_print' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Large print</button>"+
                                                              "<button id='next_007_audiobook_cd' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Audiobook CD</button>"+
                                                              "<button id='next_007_video_dvd' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Video DVD</button>" +
                                                              "<button id='next_007_video_blu' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Video Blu-ray</button>" +
                                                              "<button id='next_007_video_vhs' type='button' style='margin: 5px' class='btn btn-default btn-xs'>Video VHS</button>");
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
    $('[id^="tag_007"].input_marceditor').val('sd fungnuuuuud');
  });
  
  $('#next_007_video_dvd').click(function (){
    $('[id^="tag_007"].input_marceditor').val('vd uvauzu');
  });
  
  $('#next_007_video_blu').click(function (){
    $('[id^="tag_007"].input_marceditor').val('vd usauzu');
  });
  
  $('#next_007_video_vhs').click(function (){
    $('[id^="tag_007"].input_marceditor').val('vf ubauou');
  });

});