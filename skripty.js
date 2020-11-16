// nastaveni slideru

$(document).ready(function(){


  $('.bxslider').bxSlider({
  	auto: true,
  	infiniteLoop: true,
    nextText: '<i class="icon-angle-right"></i>',
    prevText: '<i class="icon-angle-left"></i>',
    speed: 1500,
    pause: 10000,
  });
});

// Corporate Tax

    $(document).ready(function() {
    $(".calculate-cit").click(function() {          
        var rly = $('input[name="rly"]').val(); 
        var rty = $('input[name="rty"]').val(); 
        var pty = $('input[name="pty"]').val();

        if (rly < 4800000000) { $tax_sub = ( rty * 0.005 ) } 
        else if ( pty < 0 ) { $tax_sub = 0 }
        else if ( rty > 50000000000 ) { $tax_sub = ( pty * 0.25 ) }
        else if ( rty > 4800000000 ) { $tax_sub = (( pty / rty * 4800000000 * 0.125 ) + ( pty - ( pty/rty * 4800000000 ) ) * 0.25 ) }
        else {  $tax_sub = pty * 0.125 }  

        var tax = $tax_sub;
        $('.result-cit').html(tax);           
    });
});

    // Prevent multiple submissions with Contact Form 7
jQuery(document).on('click', '.wpcf7-submit', function(e){
    if( jQuery(this).siblings('.ajax-loader').hasClass('is-active') ) {
    e.preventDefault();
    return false;
    }
}); 


// DRIFT load after waiting 3000 milliseconds, 3 seconds
setTimeout(function(){ LoadDriftWidget() }, 3000)

// Personal Income TAX

   $(document).ready(function() {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    $(".calculate-pit").click(function() {        
        var salary = parseInt($('input[name="salary"]').val()); 
        var bonus = parseInt($('input[name="bonus"]').val()); 

        if ( ( salary < 3940973 ) && (salary > 0) ) { ( $res_earnings1 = 3940973 * 0.04 ) } 
            else if ( salary > 8000000 ) { $res_earnings1 = 8000000 * 0.04 }
            else { $res_earnings1 = salary * 0.04 }
            $earnings1_sub      = salary + salary * 0.0054 + $res_earnings1;
            var earnings1       = numberWithCommas($earnings1_sub);
            $earnings2_sub      =  (salary + 0.0054 * salary + $res_earnings1) * 12 + bonus;
            var earnings2       = numberWithCommas($earnings2_sub);

        if ( $earnings1_sub * 0.05 > 500000 ) { $res_deductions1_sub = 500000 } else { $res_deductions1_sub = $earnings1_sub * 0.05 }
        if (( salary < 3940973 ) && ( salary > 0 )) { $res_deductions1_sub2 = 3940973 * 0.01 } else if ( salary > 8512400 ) { $res_deductions1_sub2 = 8512400 * 0.01 } else { $res_deductions1_sub2 = salary * 0.01}     
            $deductions1_sub = $res_deductions1_sub + salary * 0.02 + $res_deductions1_sub2

        if ( $earnings2_sub * 0.05 > 6000000 ) { $res_deductions2_sub = 6000000 } else { $res_deductions2_sub = $earnings2_sub * 0.05 }
        if (( salary < 3940973 ) && ( salary > 0 )) { $res_deductions2_sub2 = 3940973 * 0.01 } else if ( salary > 8512400) { $res_deductions2_sub2 = 8512400 * 0.01 } else { $res_deductions2_sub2 = salary * 0.01 }
            $deductions2_sub = $res_deductions2_sub + ( salary * 0.02 + $res_deductions2_sub2 ) * 12

            $annual_income1_sub = ( ($earnings1_sub - $deductions1_sub) * 12 - 54000000 );
            $annual_income2_sub = ( $earnings2_sub - $deductions2_sub - 54000000 ); 

            $ann_in1 = Math.floor( $annual_income1_sub / 1000) * 1000;
            $ann_in2 = Math.floor( $annual_income2_sub / 1000) * 1000;

        if ( $ann_in1 > 500000000) { $res_annual_tax1_sub = ( $ann_in1 - 500000000 ) * 0.3 + 95000000 }
         else if ( $ann_in1 > 250000000 ) { $res_annual_tax1_sub =  ( $ann_in1 - 250000000 ) * 0.25 + 32500000 } 
         else if ( $ann_in1 > 50000000) { $res_annual_tax1_sub =  ( $ann_in1 - 50000000 ) * 0.15 + 2500000 } else { $res_annual_tax1_sub =  $annual_income1_sub * 0.05 }
        $annual_tax1_sub = $res_annual_tax1_sub

     if ( $ann_in2 > 500000000) { $res_annual_tax2_sub = ( $ann_in2 - 500000000 ) * 0.3 + 95000000 }
        else if ( $ann_in2 > 250000000 ) { $res_annual_tax2_sub =  ( $ann_in2 - 250000000 ) * 0.25 + 32500000 } 
        else if ( $ann_in2 > 50000000) { $res_annual_tax2_sub =  ( $ann_in2 - 50000000 ) * 0.15 + 2500000 } else { $res_annual_tax2_sub =  $annual_income2_sub * 0.05 }
        $annual_tax2_sub = $res_annual_tax2_sub

        $tam_sub = $annual_tax1_sub / 12 + ( $annual_tax2_sub - $annual_tax1_sub );

        if ((salary < 3940973) && ( salary > 0 )) { $res_thp_sub = 3940973 * 0.01 }
        else if (salary > 8512400) { $res_thp_sub = 8512400 * 0.01 }  else { $res_thp_sub = salary * 0.01 }
        if ((salary < 3940973) && (salary > 0)) { $res_thp_sub2 = 3940973 * 0.01 }
        else if (salary > 8000000) { $res_thp_sub2 = 8000000 * 0.01 } else { $res_thp_sub2 = salary * 0.01 }
        $thp_sub = salary + bonus - $tam_sub - ( salary * 0.02 + $res_thp_sub + $res_thp_sub2 );

        if ( ( salary < 3940973) && ( salary > 0 ) ) { $res_cc_sub1 = 3940973 * 0.04 }
        if ( salary > 8000000 ) { $res_cc_sub1 = 8000000 * 0.04 } else { $res_cc_sub1 = salary * 0}
        if (( salary < 3940973 ) && ( salary > 0)) { $res_cc_sub2 = 3940973 * 0.02 } 
          else if ( salary > 8512400 ){ $res_cc_sub2 = 8512400 * 0.02 } 
            else { $res_cc_sub2 =  salary * 0.02 }
         $cc_sub = (0.0054 * salary) + (salary * 0.037) + $res_cc_sub1 + $res_cc_sub2        
        
        var deductions1     = numberWithCommas(Math.round($deductions1_sub));
        var deductions2     = numberWithCommas(Math.round($deductions2_sub));
        var annual_income1  = numberWithCommas(Math.round($ann_in1));
        var annual_income2  = numberWithCommas(Math.round($ann_in2));
        var annual_tax1     = numberWithCommas(Math.round( $annual_tax1_sub ));
        var annual_tax2     = numberWithCommas(Math.round( $annual_tax2_sub ));
        var thp             = numberWithCommas(Math.round( $thp_sub ));
        var tam             = numberWithCommas(Math.round( $tam_sub ));
        var cc              = numberWithCommas(Math.round($cc_sub));

        $('.result-earnings1').html(earnings1);
        $('.result-earnings2').html(earnings2);
        $('.result-deductions1').html(deductions1);
        $('.result-deductions2').html(deductions2);
        $('.result-annual-income1').html(annual_income1);
        $('.result-annual-income2').html(annual_income2);
        $('.result-annual-tax1').html(annual_tax1);    
        $('.result-annual-tax2').html(annual_tax2);
        $('.result-thp').html(thp);
        $('.result-tam').html(tam);
        $('.result-cc').html(cc);
    });
});

// Personal Income TAX - Advanced
   $(document).ready(function() {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    $(".calculate-pit2").click(function() {        
        var salary = parseInt($('input[name="salary"]').val()); 
        var allowance = parseInt($('input[name="allowances"]').val()); 
        var bonus = parseInt($('input[name="bonus"]').val()); 
        var sex = parseInt($('select[name="sex"]').val()); 
        var status = parseInt($('select[name="status"]').val()); 
        var children = parseInt($('input[name="children"]').val()); 

        var tax_status = "";
        if (sex == 0) { tax_status = "TK/0" } else {
            if (sex == 1) {
                if (status == 0) { tax_status = "TK/" + children }
                if (status == 1) { tax_status = "K/" + children }
                else {tax_status = "TK/0"}
            }
            else {tax_status = "TK/0"}
        }
        
        $res_tax_status = tax_status;

        $earnings_basic = salary + allowance + bonus // earnings
        $jkk = .0054 * (salary + allowance) // jkk + jkm

        if (((salary + allowance) < 3940973) && ((salary + allowance) > 0)) { $res_jpc_sub = 3940973 * 0.02 }
        else if ((salary + allowance) > 8512400) { $res_jpc_sub = 8512400 * 0.02 } else { $res_jpc_sub = (salary + allowance) * 0.02 } // JP Company

        if (((salary + allowance) < 3940973) && ((salary + allowance) > 0)) { $res_bpjs_sub = 3940973 * 0.04 }
        else if ((salary + allowance) > 8000000) { $res_bpjs_sub = 8000000 * 0.04 } else { $res_bpjs_sub = (salary + allowance) * 0.04 } // BPJS Company

        $jhtc = 0.037 * (salary + allowance) // JHT Company

        $gross_income = (salary + allowance + $jkk + $res_bpjs_sub) // Gross Income
        $gross_income_annual = ($gross_income * 12 + bonus)

        if ( ( ($gross_income * 0.05) > 500000 )) { ( $pc_sub = 500000 ) } else { $pc_sub = $gross_income * 0.05 } // Positional Cost
        if ( ( ($gross_income_annual   * 0.05) > 6000000 )) { ( $pca_sub = 6000000 ) } else { $pca_sub = $gross_income_annual  * 0.05 } // Positional Cost Irregular

        $jht = 0.02 * (salary + allowance) // JHT 

        if (((salary + allowance) < 3940973) && ((salary + allowance) > 0)) { $res_jp_sub = 3940973 * 0.01 }
        else if ((salary + allowance) > 8512400) { $res_jp_sub = 8512400 * 0.01 } else { $res_jp_sub = (salary + allowance) * 0.01 } // JP

        if (((salary + allowance) < 3940973) && ((salary + allowance) > 0)) { $res_bpjsh_sub = 3940973 * 0.01 }
        else if ((salary + allowance) > 8000000) { $res_bpjsh_sub = 8000000 * 0.01 } else { $res_bpjsh_sub = (salary + allowance) * 0.01 } // BPJS Health

        $td = $pc_sub + $jht + $res_jp_sub // Total Deduction
        $td_annual = ($pc_sub * 12) + ($jht * 12) + ($res_jp_sub * 12) // Total Deduction annual

        $ni = $gross_income - $td // Net income
        $ni_annual = $gross_income_annual - $td_annual
        $ni_year = $ni *12

        $ecss = $jht + $res_jp_sub + $res_bpjsh_sub // Deduction (Employee Contribution of Social Security)

        $ccss = $jkk + $res_bpjs_sub + $jhtc + $res_jpc_sub // Company Contribution of Social Security

         if (sex == 0) { $nti = 54000000 } else {
            if (sex == 1) {
                if (status == 0) { $nti = 54000000 + (4500000 * children) }
                else if (status == 1) { $nti = 54000000 + (4500000 * (children + 1)) }
                else {$nti = 54000000}
            }
            else {$nti = 54000000}
        }

        //$nti = 54000000

        if (($ni_year - $nti) < 0 ) {  $ti_sub = 0  } else { $ti_sub = Math.floor( ($ni_year - $nti) / 1000) * 1000 } // Taxable Income
        if (($ni_annual - $nti) < 0 ) {  $ti_annual_sub = 0  } else { $ti_annual_sub = Math.floor( ($ni_annual - $nti) / 1000) * 1000 } // Taxable Income

        if ( $ti_sub > 50000000 ) { ( $tax5_sub = 50000000 * 0.05 ) } else { $tax5_sub = $ti_sub * 0.05 } // tax 5%
        if ( $ti_annual_sub > 50000000 ) { ( $tax5_annual_sub = 50000000 * 0.05 ) } else { $tax5_annual_sub = $ti_annual_sub * 0.05 } // tax 5%

        if ( $ti_sub <= 50000000 ) { ( $tax15_sub = 0 ) } 
        else if ($ti_sub > 250000000) { $tax15_sub = 200000000 * 0.15 } 
        else { $tax15_sub = ($ti_sub - 50000000) * 0.15 } // tax 15%
        
        if ( $ti_annual_sub <= 50000000 ) { ( $tax15_annual_sub = 0 ) }  
        else if ($ti_annual_sub > 250000000) { $tax15_annual_sub = 200000000 * 0.15 } 
        else { $tax15_annual_sub = ($ti_annual_sub - 50000000) * 0.15 }

        if ( $ti_sub <= 250000000 ) { ( $tax25_sub = 0 ) } 
        else if ($ti_sub > 500000000) { $tax25_sub = 250000000 * 0.25 }
        else { $tax25_sub = ($ti_sub - 250000000) * 0.25 }   // Tax 25%

        if ( $ti_annual_sub <= 250000000 ) { ( $tax25_annual_sub = 0 ) } 
        else if ($ti_annual_sub > 500000000) { $tax25_annual_sub = 250000000 * 0.25 }
        else { $tax25_annual_sub = ($ti_annual_sub - 250000000) * 0.25 }

        if ( $ti_sub <= 500000000 ) { ( $tax30_sub = 0 ) } else { $tax30_sub = ($ti_sub - 500000000) * 0.3 } // Tax 30%
        if ( $ti_annual_sub <= 500000000 ) { ( $tax30_annual_sub = 0 ) } else { $tax30_annual_sub = ($ti_annual_sub - 500000000) * 0.3 } // Tax 30%

        $annual_tax1 = $tax5_sub + $tax15_sub + $tax25_sub + $tax30_sub // Annual Tax
        $annual_tax2 = $tax5_annual_sub + $tax15_annual_sub + $tax25_annual_sub + $tax30_annual_sub // Annual Tax
        $irreguler_tax = $annual_tax2 - $annual_tax1 // Irreguler Tax
        $tax_month = Math.round(($annual_tax1 / 12) + $irreguler_tax) // Tax of the month

        $thp = (salary + allowance + bonus) - $tax_month - ($jht + $res_jp_sub + $res_bpjsh_sub) // Take Home Pay (monthly)


        // roundings

        var bs                      = numberWithCommas(Math.round(salary));
        var bs_annual               = numberWithCommas(Math.round(salary * 12));
        var allowances              = numberWithCommas(Math.round(allowance));
        var allowances_annual       = numberWithCommas(Math.round(allowance * 12));
        var bonus_sub               = numberWithCommas(Math.round(bonus));
        var res_earnings_basic      = numberWithCommas(Math.round($earnings_basic));
        var res_jkk                 = numberWithCommas(Math.round($jkk));
        var res_jkk_annual          = numberWithCommas(Math.round($jkk * 12));
        var res_jhtc                = numberWithCommas(Math.round($jhtc));
        var res_jhtc_annual         = numberWithCommas(Math.round($jhtc * 12));
        var res_bpjs                = numberWithCommas(Math.round($res_bpjs_sub));
        var res_bpjs_annual         = numberWithCommas(Math.round($res_bpjs_sub * 12));
        var res_jpc                 = numberWithCommas(Math.round($res_jpc_sub));
        var res_jpc_annual          = numberWithCommas(Math.round($res_jpc_sub * 12));
        var gi                      = numberWithCommas(Math.round($gross_income));
        var gi_annual               = numberWithCommas(Math.round(($gross_income * 12) + bonus));
        var res_pc                  = numberWithCommas(Math.round($pc_sub));
        var res_pca                 = numberWithCommas(Math.round($pca_sub));
        var res_jht                 = numberWithCommas(Math.round($jht));
        var res_jht_annual          = numberWithCommas(Math.round($jht * 12));
        var res_jp                  = numberWithCommas(Math.round($res_jp_sub));
        var res_jp_annual           = numberWithCommas(Math.round($res_jp_sub * 12));
        var res_bpjsh               = numberWithCommas(Math.round($res_bpjsh_sub));
        var res_bpjsh_annual        = numberWithCommas(Math.round($res_bpjsh_sub * 12));
        var res_td                  = numberWithCommas(Math.round($td));
        var res_td_annual           = numberWithCommas(Math.round($td_annual));
        var res_ni                  = numberWithCommas(Math.round($ni));
        var res_ni_annual           = numberWithCommas(Math.round($ni_annual));
        var res_ni_year             = numberWithCommas(Math.round($ni_year));
        var res_ecss                = numberWithCommas(Math.round($ecss));
        var res_ccss                = numberWithCommas(Math.round($ccss));
        var res_nti                 = numberWithCommas(Math.round($nti));
        var res_ti                  = numberWithCommas(Math.round($ti_sub));
        var res_ti_annual           = numberWithCommas(Math.round($ti_annual_sub));
        var res_tax5                = numberWithCommas(Math.round($tax5_sub));
        var res_tax5_annual         = numberWithCommas(Math.round($tax5_annual_sub));
        var res_tax15               = numberWithCommas(Math.round($tax15_sub));
        var res_tax15_annual        = numberWithCommas(Math.round($tax15_annual_sub));
        var res_tax25               = numberWithCommas(Math.round($tax25_sub));
        var res_tax25_annual        = numberWithCommas(Math.round($tax25_annual_sub));
        var res_tax30               = numberWithCommas(Math.round($tax30_sub));
        var res_tax30_annual        = numberWithCommas(Math.round($tax30_annual_sub));
        var res_annual_tax1         = numberWithCommas(Math.round($annual_tax1));
        var res_annual_tax2         = numberWithCommas(Math.round($annual_tax2));
        var res_irreguler_tax       = numberWithCommas(Math.round($irreguler_tax));
        var res_tax_month           = numberWithCommas(Math.round($tax_month));
        var res_thp                 = numberWithCommas(Math.round($thp));



        // prints to DIVs

        $('.bs').html(bs);
        $('.bs-annual').html(bs_annual);
        $('.allw').html(allowances);
        $('.allw-annual').html(allowances_annual);
        $('.bonus-sub').html(bonus_sub);
        $('.earnings-basic').html(res_earnings_basic);
        $('.jkk').html(res_jkk);
        $('.jkk-annual').html(res_jkk_annual);
        $('.jhtc').html(res_jhtc);
        $('.jhtc-annual').html(res_jhtc_annual);
        $('.res-bpjs').html(res_bpjs);
        $('.res-bpjs-annual').html(res_bpjs_annual);
        $('.jpc').html(res_jpc);
        $('.jpc-annual').html(res_jpc_annual);
        $('.gi').html(gi);
        $('.gi-annual').html(gi_annual);
        $('.pc').html(res_pc);
        $('.pc-annual').html(res_pca);
        $('.jht').html(res_jht);
        $('.jht-annual').html(res_jht_annual);
        $('.jp').html(res_jp);
        $('.jp-annual').html(res_jp_annual);
        $('.bpjsh').html(res_bpjsh);
        $('.bpjsh-annual').html(res_bpjsh_annual);
        $('.td').html(res_td);
        $('.td-annual').html(res_td_annual);
        $('.ni').html(res_ni);
        $('.ni-annual').html(res_ni_annual);
        $('.ni-year').html(res_ni_year);
        $('.ecss').html(res_ecss);
        $('.ccss').html(res_ccss);
        $('.nti').html(res_nti);
        $('.ti').html(res_ti);
        $('.ti-annual').html(res_ti_annual);
        $('.tax5').html(res_tax5);
        $('.tax5-annual').html(res_tax5_annual);
        $('.tax15').html(res_tax15);
        $('.tax15-annual').html(res_tax15_annual);
        $('.tax25').html(res_tax25);
        $('.tax25-annual').html(res_tax25_annual);
        $('.tax30').html(res_tax30);
        $('.tax30-annual').html(res_tax30_annual);
        $('.annual-tax1').html(res_annual_tax1);
        $('.annual-tax2').html(res_annual_tax2);
        $('.irreguler-tax').html(res_irreguler_tax);
        $('.tax-month').html(res_tax_month);
        $('.thp').html(res_thp);
        $('.tax-status').html($res_tax_status);
    });
});

$(document).ready(function(){
var $btns = $('.filter-clients .button').click(function() {
  if (this.id == 'all') {
    $('.clients > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('.clients > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
});

$(document).ready(function(){
var $btns = $('.filter-clients .button').click(function() {
  if (this.id == 'all') {
    $('.clients > figure').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('.clients > figure').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
});

$(document).ready(function(){
  $('.read-more').on('click', function(e) {
    $(this).parent().parent().parent().addClass("open");
    $(this).addClass("hide");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.show-submenu').on('click', function(e) {
    $(this).parent().find(".submenu").toggleClass("show");
    $(this).toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-search-box').on('click', function(e) {
    $(".search-box").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-location').on('click', function(e) {
    $(".box-location ul").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-services').on('click', function(e) {
    $(".box-services ul").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-others').on('click', function(e) {
    $(".box-others ul").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.close-search-box').on('click', function(e) {
    $(".search-box").removeClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-box-1').on('click', function(e) {
    $(".box-1").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-box-2').on('click', function(e) {
    $(".box-2").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-box-3').on('click', function(e) {
    $(".box-3").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-box-4').on('click', function(e) {
    $(".box-4").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-box-5').on('click', function(e) {
    $(".box-5").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.open-box-6').on('click', function(e) {
    $(".box-6").toggleClass("open");
    e.preventDefault();
  });
});

$(document).ready(function(){

  $('.bxslider2').bxSlider({
    mode: 'fade',
    auto: true,
    infiniteLoop: true,
    speed: 1500,
    pause: 8000,
  });
});

$(document).ready(function(){

  $('.bxslider-articles').bxSlider({
    auto: true,
    infiniteLoop: true,
    speed: 1500,
    pause: 10000,
  });
});

$(document).ready(function(){

  $('#testemon').bxSlider({
    mode: 'fade',
    auto: true,
    infiniteLoop: true,
    speed: 1500,
    pause: 6000,
  });
});

$(document).ready(function(){
  $('.default-slider2').bxSlider({
    maxSlides: 3,
    moveSlides: 1,
    speed: 1500,
    pause: 6000,
  });
});

$(window).scroll(function() {
var scroll = $(window).scrollTop();
 //console.log(scroll);
if (scroll >= 500) {
    //console.log('a');
    $("header").addClass("fixed");
} else {
    //console.log('a');
    $("header").removeClass("fixed");
};
});

$(document).ready(function($) {
    $('.accordion').find('.accordion-toggle').click(function(){
     
      //Expand or collapse this panel
      $(this).parent().find(".accordion-toggle").removeClass("active"); 
      $(this).addClass('active');    
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });
  });

$(document).ready(function($) {
    $('.accordion-side').find('.accordion-toggle-side').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content-side").not($(this).next()).slideUp('fast');

    });
  });

/*
$(document).ready(function(){
  $(".helper-trigger").click(function(){
    $(".helper").toggleClass("open");
    return false;
  });
});
*/

// Mobilni menu
$(document).ready(function(){
  $(".menu__mobile").click(function(){
    $("header").toggleClass("open");
    return false;
  });
});

// Open download ebook
$(document).ready(function(){
  $(".open-form").click(function(){
    $(".dlebook").show();
    $(".dlebook #mc_embed_signup").show();
    $(this).hide();
    return false;
  });
});

// history back
$(document).ready(function(){
$(".backLink").click(function(event) {
    event.preventDefault();
    history.back(1);
});
});

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.box__content h2');
  equalheight('.location-crossroad .column .inner');
  equalheight('.csr2 .row .column');
  equalheight('#crossroad-services .item');
  equalheight('#crossroad-services .item h3');
  equalheight('.quality .eq');
});


$(window).resize(function(){
  equalheight('.box__content h2');
  equalheight('.location-crossroad .column .inner');
  equalheight('.csr2 .row .column');
  equalheight('#crossroad-services .item');
  equalheight('#crossroad-services .item h3');
  equalheight('.quality .eq');
});



// filtrovani
$(document).ready(function(){
  $(".eur").click(function(){
    $(".world").addClass("hide");
    $(".europe").removeClass("hide");
    return false;
  });

  $(".asi").click(function(){
    $(".world").addClass("hide");
    $(".asia").removeClass("hide");
    return false;
  });

  $(".namer").click(function(){
    $(".world").addClass("hide");
    $(".namerica").removeClass("hide");
    return false;
  });

  $(".samer").click(function(){
    $(".world").addClass("hide");
    $(".samerica").removeClass("hide");
    return false;
  });

  $(".aus").click(function(){
    $(".world").addClass("hide");
    $(".australia").removeClass("hide");
    return false;
  });

  $(".afr").click(function(){
    $(".world").addClass("hide");
    $(".africa").removeClass("hide");
    return false;
  });
});


// eLibrary

/*! js-cookie v3.0.0-rc.0 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var r=e.Cookies,n=e.Cookies=t();n.noConflict=function(){return e.Cookies=r,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var t={read:function(e){return e.replace(/%3B/g,";")},write:function(e){return e.replace(/;/g,"%3B")}};return function r(n,i){function o(r,o,u){if("undefined"!=typeof document){"number"==typeof(u=e({},i,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),r=t.write(r).replace(/=/g,"%3D"),o=n.write(String(o),r);var c="";for(var f in u)u[f]&&(c+="; "+f,!0!==u[f]&&(c+="="+u[f].split(";")[0]));return document.cookie=r+"="+o+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var u=r[o].split("="),c=u.slice(1).join("="),f=t.read(u[0]).replace(/%3D/g,"=");if(i[f]=n.read(c,f),e===f)break}return e?i[e]:i}},remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(t,{path:"/"})});

$(document).ready(function(){

  var cookieValue = Cookies.get('elibrary'); // hodnota cookie
  
  if (cookieValue == "1") { // pokud bylo pred tim zapsano do cookies
    $(".elibrary .btn.disabled").hide();
    $(".elibrary .btn.download").show();

  } else {
    $(".elibrary .btn.download").hide();
    $(".elibrary .btn.disabled").show();

    $(".elibrary .btn.disabled").click(function(){
      $(".message-newsletter").addClass("active"); // otevreni hlasky
      $(".message-overlay").addClass("active"); // otevreni hlasky
      return false;
    });

    $(".message-newsletter .button").click(function(){
      $(".elibrary .btn.disabled").hide(); // odebrani tridy z tlacitka
      $(".elibrary .btn.download").show();
      Cookies.set('elibrary', '1', { expires: 1 }); // zapsani do cookie, expirujici po dni
      $("#mc_embed_signup").hide();
      $(".message-success").show();
    });
  };

  $(".close-message-newsletter").click(function(){
      $(".message-newsletter").removeClass("active"); // hide hlasky
      $(".message-overlay").removeClass("active"); // otevreni hlasky
      return false;
    });

});


// Plynule prejizeni na kotvu

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -60
        }, 1500);
        return false;
      }
    }
  });
});

//elibrary open content based on URL

$(function() {
    var url = $(location).attr("href");
    var hash_library = url.substring(url.indexOf("#")+1);
    $(".elibrary").find("#" + hash_library).next().addClass("roll");
});