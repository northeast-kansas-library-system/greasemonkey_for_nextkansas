// ==UserScript==
// @name           Framework XXX$0 add
// @description    Adds default values for $0 subfield
// @author         George H. Williams
// @version        1.4
// @grant          none
// @match          https://staff.nextkansas.org/*
// @match          https://staff.nekls-test.bywatersolutions.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/framework_0.user.js
// @updateURL https://github.com/northeast-kansas-library-system/greasemonkey_for_nextkansas/raw/main/framework_0.user.js
// @license CC BY 4.0
// ==/UserScript==

$(document).ready(function() {
  
  $('#admin_marc_subfields_structure main').prepend('<br /><br /><button id="a_a">$a</button>&nbsp;<button id="a_b">$b</button>&nbsp;<button id="a_c">$c</button>&nbsp;<button id="a_d">$d</button>&nbsp;<button id="a_e">$e</button>&nbsp;<button id="a_f">$f</button>&nbsp;<button id="a_g">$g</button>&nbsp;<button id="a_h">$h</button>&nbsp;<button id="a_i">$i</button>&nbsp;<button id="a_j">$j</button>&nbsp;<button id="a_k">$k</button>&nbsp;<button id="a_l">$l</button>&nbsp;<button id="a_m">$m</button>&nbsp;<button id="a_n">$n</button>&nbsp;<button id="a_o">$o</button>&nbsp;<button id="a_p">$p</button>&nbsp;<button id="a_q">$q</button>&nbsp;<button id="a_r">$r</button>&nbsp;<button id="a_s">$s</button>&nbsp;<button id="a_t">$t</button>&nbsp;<button id="a_u">$u</button>&nbsp;<button id="a_v">$v</button>&nbsp;<button id="a_w">$w</button>&nbsp;<button id="a_x">$x</button>&nbsp;<button id="a_y">$y</button>&nbsp;<button id="a_z">$z</button>&nbsp;');

  
  $('#admin_marc_subfields_structure main').prepend('<br /><br /><button id="n_00">0</button>&nbsp;<button id="n_01">1</button>&nbsp;<button id="n_02">2</button>&nbsp;<button id="n_03">3</button>&nbsp;<button id="n_04">4</button>&nbsp;<button id="n_05">5</button>&nbsp;<button id="n_06">6</button>&nbsp;<button id="n_07">7</button>&nbsp;<button id="n_08">8</button>&nbsp;<button id="n_09">9</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="n_sfa">SFA</button>');
 
                                                      
  $("#a_a").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('a');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_b").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('b');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_c").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('c');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_d").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('d');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_e").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('e');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_f").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('f');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_g").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('g');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_h").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('h');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_i").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('i');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_j").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('j');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_k").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('k');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_l").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('l');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_m").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('m');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_n").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('n');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_o").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('o');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_p").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('p');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_q").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('q');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_r").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('r');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_s").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('s');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_t").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('t');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_u").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('u');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_v").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('v');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_w").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('w');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_x").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('x');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_y").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('y');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });

  $("#a_z").click(function() {
    
    $('.constraints.tab-pane.active #basic li:nth-child(1) input').val('z');
    $('.constraints.tab-pane.active #basic li:nth-child(2) input').focus();
    
  });
  
    $("#n_00").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="0"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
    $("#n_01").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="1"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
    $("#n_02").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="2"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
    $("#n_03").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="3"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
    $("#n_04").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="4"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
    $("#n_05").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="5"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
    $("#n_06").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="6"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
    $("#n_07").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="7"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
    $("#n_08").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="8"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
    $("#n_09").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(7) select option[value="9"]').prop('selected', 'true');
      $('.constraints.tab-pane.active #advanced li:nth-child(1) input').focus();
      
    });
  
   $("#n_sfa").click(function() {
      
      $('.constraints.tab-pane.active #basic li:nth-child(1) input').focus();
      
    });
  
});