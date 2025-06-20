// ==UserScript==
// @name           ZZZZZ - Koha TV series helper
// @description    Help set fields on tv series records
// @author         George H. Williams
// @version        1.1
// @grant          none
// @match          https://staff.nekls-test.bywatersolutions.com/*
// @match          https://staff.nekls.bywatersolutions.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

/* ========== Helper buttons for TV series input ========== */ 
$(document).ready(function () { 

//Set variables 
  
var next_series_uniform_title = 'Title (Television program)'
var next_series_title = 'Title : Television program'
var next_series_uniform_title_0 = '(DLC)n 123456'
var next_uniform_title_authority_id = '123456'
var next_title = 'Short title'



  var next_seriesorseason = 'Season ' 
  var next_creator = 'created by creatorname'



  var next_format = "[videorecording (DVD)]"
  //var next_format = "[videorecording (Blu-ray)]"
  //var next_format = "[videorecording (DVD) and (Blu-ray/DVD combo)]"
  var next_bib_loc = 'L_AD'
  //var next_bib_loc = 'L_JU'
  //var next_bib_loc = 'L_YA'
  var next_bib_itype = 'NVIDEO'
  //var next_bib_itype = 'NVIDTV'
  var next_bib_ccode = 'VID_D'
  //var next_bib_ccode = 'VID_M'
  //var next_bib_ccode = 'VID_M_T'
  //var next_bib_ccode = 'VID_B'
  //var next_bib_ccode = 'VID_B_T'
  //var next_bib_ccode = 'VID_C'
  //var next_bib_ccode = 'VID_C_T'
  
  console.log('next_bib_loc: '+ next_bib_loc);
  console.log('next_bib_itype: '+ next_bib_itype);
  console.log('next_bib_ccode: '+ next_bib_ccode);
  
  console.log('next_title: ' + next_title);
  console.log('next_series_uniform_title: ' + next_series_uniform_title);
  console.log('next_creator: ' + next_creator);
  console.log('next_uniform_title_authority_id: ' + next_series_uniform_title_0);
  
  //Creates buttons after the 130 field
    $('#cat_addbiblio [id^="tag_130_"].tag.clearfix').before('<br><button id="next_130" type="button" style="margin: 5px;" class="btn btn-default btn-xs">130-Uniform title</button>');
    $('#cat_addbiblio [id^="tag_130_"].tag.clearfix').before('<button id="next_130_tv" type="button" style="margin: 5px;" class="btn btn-default btn-xs">130-Uniform title TV</button>');

    $('#next_130').click(function (){
      $('[id^="tag_130_"].tag.clearfix ul li').show();
      $('[id^="tag_130_subfield_9"]').removeAttr('readonly').removeClass('readonly').val(next_uniform_title_authority_id);
      $('[id^="tag_130_subfield_a"]').val(next_series_uniform_title);
      $('[id^="tag_130_subfield_0"]').val(next_series_uniform_title_0);
      $('[id^="tag_130_subfield_n"]').focus();

    });

    $('#next_130_tv').click(function (){
      $('[id^="tag_130_"].tag.clearfix ul li').show();
      $('[id^="tag_130_subfield_9"]').removeAttr('readonly').removeClass('readonly').val(next_uniform_title_authority_id);
      $('[id^="tag_130_subfield_a"]').val(next_series_uniform_title);
      $('[id^="tag_130_subfield_n"]').val(next_seriesorseason);
      $('[id^="tag_130_subfield_0"]').val(next_series_uniform_title_0);
      $('[id^="tag_130_subfield_n"]').focus();

    });

  //creates button after the 245
    $('#cat_addbiblio [id^="tag_245_"].tag.clearfix').before('<br><button id="next_245" type="button" style="margin: 5px;" class="btn btn-default btn-xs">245-Title</button>');
    $('#cat_addbiblio [id^="tag_245_"].tag.clearfix').before('<button id="next_245_tv" type="button" style="margin: 5px;" class="btn btn-default btn-xs">245-Title - tv</button><br>');
  
    $('#next_245').click(function (){
      $('[id^="tag_245"].tag.clearfix ul li').show();
      $('[id^="subfield245h"]').insertAfter('[id^="subfield245a"]');
      $('[id^="subfield245n"]').insertAfter('[id^="subfield245h"]');
      $('[id^="subfield245p"]').insertAfter('[id^="subfield245n"]');
      $('[id^="subfield245c"]').insertAfter('[id^="subfield245p"]');
      
      var next_old_title = $('[id^="tag_245_subfield_a"]').val();
      function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
      }
      copyToClipboard(next_old_title);
      
      $('[id^="tag_245_subfield_a"]').val(next_title);
      $('[id^="tag_245_subfield_h"]').val(next_format + ' /');
      $('[id^="tag_245_subfield_c"]').val(next_creator);
      $('[name^="tag_245_indicator1"]').val('1');
      $('[id^="tag_245_subfield_n"]').focus();
    });
  
    $('#next_245_tv').click(function (){
      $('[id^="tag_245"].tag.clearfix ul li').show();
      $('[id^="subfield245h"]').insertAfter('[id^="subfield245a"]');
      $('[id^="subfield245n"]').insertAfter('[id^="subfield245h"]');
      $('[id^="subfield245p"]').insertAfter('[id^="subfield245n"]');
      $('[id^="subfield245c"]').insertAfter('[id^="subfield245p"]');
      
      var next_old_title = $('[id^="tag_245_subfield_a"]').val();
      function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
      }
      copyToClipboard(next_old_title);
      
      $('[id^="tag_245_subfield_a"]').val(next_title);
      $('[id^="tag_245_subfield_h"]').val(next_format);
      $('[id^="tag_245_subfield_n"]').val(next_seriesorseason + ' /');
      $('[id^="tag_245_subfield_c"]').val(next_creator);
      $('[name^="tag_245_indicator1"]').val('1');
      $('[id^="tag_245_subfield_n"]').focus();
    });
  
    //Creates button after the 246
    $('#cat_addbiblio [id^="tag_246_"].tag.clearfix').before('<br><button id="next_246" type="button" style="margin: 5px" class="btn btn-default btn-xs">Varying title</button><br>');
    
     $('#next_246').click(function (){
       $('[id^="tag_246_"].tag.clearfix ul li').show();
       $('[name^="tag_246_indicator1"]').val('3');
       $('[id^="tag_246_subfield_a"]').val(next_title);
       var next_alt_n = $('[id^="tag_245_subfield_n"]').val();
       var next_alt_numeral = next_alt_n
       .replace(' 1 /', ' one')
       .replace(' 2 /', ' two')
       .replace(' 3 /', ' three')
       .replace(' 4 /', ' four')
       .replace(' 5 /', ' five')
       .replace(' 6 /', ' six')
       .replace(' 7 /', ' seven')
       .replace(' 8 /', ' eight')
       .replace(' 9 /', ' nine')
       .replace(' 10 /', ' ten')
       .replace(' 11 /', ' eleven')
       .replace(' 12 /', ' twelve')
       .replace(' 13 /', ' thirteen')
       .replace(' 14 /', ' fourteen')
       .replace(' 15 /', ' fifteen')
       .replace(' 16 /', ' sixteen')
       .replace(' 17 /', ' seventeen')
       .replace(' 18 /', ' eighteen')
       .replace(' 19 /', ' nineteen')
       .replace(' 20 /', ' twenty')
       console.log('next_alt_n' + next_alt_n);
       console.log(next_alt_numeral);
       $('[id^="tag_246_subfield_n"]').val(next_alt_numeral);
    }); 
  
  //Creates button after the 490
    $('#cat_addbiblio [id^="tag_490_"].tag.clearfix').before('<br><button id="next_490" type="button" style="margin: 5px" class="btn btn-default btn-xs">Series title</button><br>');
    
     $('#next_490').click(function (){
       $('[id^="tag_490_"].tag.clearfix ul li').show();
       $('[name^="tag_490_indicator1"]').val('');
       $('[name^="tag_490_indicator2"]').val('');
       $('[id^="tag_490_subfield_a"]').val(next_series_title);
       $('[id^="tag_490_subfield_v"]').focus();
    }); 

  //Creates buttons after the 630 field
    $('#cat_addbiblio [id^="tag_630_"].tag.clearfix').before('<br><button id="next_630" type="button" style="margin: 5px" class="btn btn-default btn-xs">630-Uniform title</button><br>');

    $('#next_630').click(function (){
      $('[id^="tag_630_"].tag.clearfix ul li').show();
      $('[id^="tag_630_subfield_9"]').removeAttr('readonly').removeClass('readonly').val(next_uniform_title_authority_id);
      $('[id^="tag_630_subfield_a"]').val(next_series_uniform_title);
      $('[id^="tag_630_subfield_0"]').val(next_series_uniform_title_0);
    });

  //Creates buttons after the 730 field
    $('#cat_addbiblio [id^="tag_730_"].tag.clearfix').before('<br><button id="next_730" type="button" style="margin: 5px" class="btn btn-default btn-xs">730-Uniform title</button><br>');

    $('#next_730').click(function (){
      $('[id^="tag_730_"].tag.clearfix ul li').show();
      $('[id^="tag_730_subfield_9"]').removeAttr('readonly').removeClass('readonly').val(next_uniform_title_authority_id);
      $('[id^="tag_730_subfield_a"]').val(next_series_uniform_title);
      $('[id^="tag_730_subfield_0"]').val(next_series_uniform_title_0);
    });
  
  //Creates button after the 942
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<br><button id="next_942_adjust" type="button" style="margin: 5px" class="btn btn-default btn-xs">Adjust positioning</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_adjust_default" type="button" style="margin: 5px" class="btn btn-default btn-xs">Adjust with defaults</button><br>');
  
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<br><button id="next_942_ad_dvd" type="button" style="margin: 5px" class="btn btn-default btn-xs">Adult DVD</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ju_dvd" type="button" style="margin: 5px" class="btn btn-default btn-xs">Juvenile DVD</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ya_dvd" type="button" style="margin: 5px" class="btn btn-default btn-xs">Young adult DVD</button><span> // </span>');
  
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ad_blu" type="button" style="margin: 5px" class="btn btn-default btn-xs">Adult Blu-ray</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ju_blu" type="button" style="margin: 5px" class="btn btn-default btn-xs">Juvenile Blu-ray</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ya_blu" type="button" style="margin: 5px" class="btn btn-default btn-xs">Young adult Blu-ray</button><br>');
  
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<br><button id="next_942_ad_dvd_tv" type="button" style="margin: 5px" class="btn btn-default btn-xs">Adult DVD-TV</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ju_dvd_tv" type="button" style="margin: 5px" class="btn btn-default btn-xs">Juvenile DVD-TV</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ya_dvd_tv" type="button" style="margin: 5px" class="btn btn-default btn-xs">Young adult DVD-TV</button><span> // </span>');
  
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ad_blu_tv" type="button" style="margin: 5px" class="btn btn-default btn-xs">Adult Blu-ray-TV</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ju_blu_tv" type="button" style="margin: 5px" class="btn btn-default btn-xs">Juvenile Blu-ray-TV</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ya_blu_tv" type="button" style="margin: 5px" class="btn btn-default btn-xs">Young adult Blu-ray-TV</button><br>');
  
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<br><button id="next_942_ad_book_fic" type="button" style="margin: 5px" class="btn btn-default btn-xs">Adult Book-Fiction</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ju_book_fic" type="button" style="margin: 5px" class="btn btn-default btn-xs">Juvenile Book-Fiction</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ya_book_fic" type="button" style="margin: 5px" class="btn btn-default btn-xs">Young adult Book-Fiction</button><span> // </span>');
  
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ad_book_non" type="button" style="margin: 5px" class="btn btn-default btn-xs">Adult Book-Non-fiction</button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ju_book_non" type="button" style="margin: 5px" class="btn btn-default btn-xs">Juvenile Book-Non-fiction/button>');
    $('#cat_addbiblio [id^="tag_942_"].tag.clearfix').before('<button id="next_942_ya_book_non" type="button" style="margin: 5px" class="btn btn-default btn-xs">Young adult Book-Non-fiction</button><br>');
  


    
    $('#next_942_adjust').click(function (){
      $('[id^="tag_942"].tag.clearfix ul li').show();
      $('[id^="subfield942e"]').insertAfter('[id^="subfield9422"]');
      $('[id^="subfield942c"]').insertAfter('[id^="subfield942e"]');
      $('[id^="subfield942h"]').insertAfter('[id^="subfield942c"]');
      $('[id^="subfield942n"]').insertAfter('[id^="subfield942h"]');
      $('[id^="subfield942w"]').insertAfter('[id^="subfield942n"]');
      $('[id^="subfield942y"]').insertAfter('[id^="subfield942w"]');
      $('[id^="subfield942i"]').insertAfter('[id^="subfield942y"]');
      $('[id^="subfield942k"]').insertAfter('[id^="subfield942i"]');
      $('[id^="subfield942m"]').insertAfter('[id^="subfield942k"]');
      
      $('[id^="tag_942_subfield_e_"]').removeClass('select2-hidden-accessible')
      $('[id^="tag_942_subfield_c_"]').removeClass('select2-hidden-accessible')
      $('[id^="tag_942_subfield_h_"]').removeClass('select2-hidden-accessible')
      $('[id^="subfield942e"] .select2').hide();
      $('[id^="subfield942c"] .select2').hide();
      $('[id^="subfield942h"] .select2').hide();
      
    });
  
    $('#next_942_adjust_default').click(function (){
      $('[id^="tag_942"].tag.clearfix ul li').show();
      $('[id^="subfield942e"]').insertAfter('[id^="subfield9422"]');
      $('[id^="subfield942c"]').insertAfter('[id^="subfield942e"]');
      $('[id^="subfield942h"]').insertAfter('[id^="subfield942c"]');
      $('[id^="subfield942n"]').insertAfter('[id^="subfield942h"]');
      $('[id^="subfield942w"]').insertAfter('[id^="subfield942n"]');
      $('[id^="subfield942y"]').insertAfter('[id^="subfield942w"]');
      $('[id^="subfield942i"]').insertAfter('[id^="subfield942y"]');
      $('[id^="subfield942k"]').insertAfter('[id^="subfield942i"]');
      $('[id^="subfield942m"]').insertAfter('[id^="subfield942k"]');
      $('[id^="tag_942_subfield_e_"]').removeClass('select2-hidden-accessible')
      $('[id^="tag_942_subfield_c_"]').removeClass('select2-hidden-accessible')
      $('[id^="tag_942_subfield_h_"]').removeClass('select2-hidden-accessible')
      $('[id^="subfield942e"] .select2').hide();
      $('[id^="subfield942c"] .select2').hide();
      $('[id^="subfield942h"] .select2').hide();
      
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="' + next_bib_loc + '"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="' + next_bib_itype + '"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="' + next_bib_ccode + '"]').attr('selected', 'selected');
    }); 

    $('#next_942_ad_dvd').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_AD"]').attr('selected', 'selected');
      
      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDEO"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_D"]').attr('selected', 'selected');
    }); 

    $('#next_942_ju_dvd').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_JU"]').attr('selected', 'selected');
     
      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDEO"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_D"]').attr('selected', 'selected');
    });

    $('#next_942_ya_dvd').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_YA"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDEO"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_D"]').attr('selected', 'selected');
    });
  
    $('#next_942_ad_blu').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_AD"]').attr('selected', 'selected');
      
      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDEO"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_B"]').attr('selected', 'selected');
    }); 

    $('#next_942_ju_blu').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_JU"]').attr('selected', 'selected');
     
      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDEO"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_B"]').attr('selected', 'selected');
    });

    $('#next_942_ya_blu').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_YA"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDEO"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_B"]').attr('selected', 'selected');
    });
  
      $('#next_942_ad_dvd_tv').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_AD"]').attr('selected', 'selected');
      
      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDTV"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_D_T"]').attr('selected', 'selected');
    }); 

    $('#next_942_ju_dvd_tv').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_JU"]').attr('selected', 'selected');
     
      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDTV"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_D_T"]').attr('selected', 'selected');
    });

    $('#next_942_ya_dvd_tv').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_YA"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDTV"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_D_T"]').attr('selected', 'selected');
    });
  
    $('#next_942_ad_blu_tv').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_AD"]').attr('selected', 'selected');
      
      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDTV"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_B_T"]').attr('selected', 'selected');
    }); 

    $('#next_942_ju_blu_tv').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_JU"]').attr('selected', 'selected');
     
      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDTV"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_B_T"]').attr('selected', 'selected');
    });

    $('#next_942_ya_blu_tv').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_YA"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="NVIDTV"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="VID_B_T"]').attr('selected', 'selected');
    });
  
    $('#next_942_ad_book_fic').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_AD"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="BOOK"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="FICTION"]').attr('selected', 'selected');
    });
  
    $('#next_942_ju_book_fic').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_JU"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="BOOK"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="FICTION"]').attr('selected', 'selected');
    });
  
    $('#next_942_ya_book_fic').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_YA"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="BOOK"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="FICTION"]').attr('selected', 'selected');
    });

    $('#next_942_ad_book_non').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_AD"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="BOOK"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="NONFICTION"]').attr('selected', 'selected');
    });
  
    $('#next_942_ju_book_non').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_JU"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="BOOK"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="NONFICTION"]').attr('selected', 'selected');
    });
  
    $('#next_942_ya_book_non').click(function (){
      $('[id^="tag_942_subfield_e_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_e_"] option[value="L_YA"]').attr('selected', 'selected');

      $('[id^="tag_942_subfield_c_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_c_"] option[value="BOOK"]').attr('selected', 'selected');
      $('[id^="tag_942_subfield_h_"] option[selected="selected"]').removeAttr('selected');
      $('[id^="tag_942_subfield_h_"] option[value="NONFICTION"]').attr('selected', 'selected');
    });

  //Creates button on the authorities panel
    $('#auth_authorities #tab0XX-tab').parent().parent().before('<br><button id="next_auth_copy" type="button" style="margin: 5px" class="btn btn-default btn-xs">Copy authority data</button><br>');
    
    $('#next_auth_copy').click(function (){
      var authority_000 = $('[id^="tag_001_subfield_00"]').val();
      console.log('authority_000: ' + authority_000);
      var authority_010 = $('[id^="tag_010_subfield_a"]').val();
      console.log('authority_010: ' + authority_010);
      var authority_130 = $('[id^="tag_130_subfield_a"]').val();
      console.log('authority_130: ' + authority_130);
      var authority_130_mod = authority_130
        .replace(' (',' : ')
        .replace(')', '')
      console.log('authority_130_mod: ' + authority_130_mod);
      
      var base_title = authority_130
        .replace(/\s\(.+\)/, '')
      
      navigator.clipboard.writeText(
        "var next_series_uniform_title = '" + authority_130 + "'\r\n" +
        "var next_series_title = '" + authority_130_mod + "'\r\n" +
        "var next_series_uniform_title_0 = '(DLC)" + authority_010 + "'\r\n" +
        "var next_uniform_title_authority_id = '" + authority_000 + "'\r\n" +
        "var next_title = '" + base_title + "'\r\n"
      );

    });





});