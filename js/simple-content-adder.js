//fixing the menus in admin page 

jQuery(document).ready(function($){
	
	if( $('body[class*=" sca_"]').length || $('body[class*=" post-type-sca_"]').length ) {

		$sca_menu_li = $('#toplevel_page_sca_dashboard_admin_page');
		
		$sca_menu_li
		.removeClass('wp-not-current-submenu')
		.addClass('wp-has-current-submenu')
		.addClass('wp-menu-open');
		
		$('a:first',$sca_menu_li)
		.removeClass('wp-not-current-submenu')
		.addClass('wp-has-submenu')
		.addClass('wp-has-current-submenu')
		.addClass('wp-menu-open');
		
	}
    
    //uncheck thickboxes if footer selected as it doesn't take all the options (above, below content etc.) 
    
    $scaFooterNote = "<p id='sca-note'><b>Note:</b> Content added to the footer can't be filtered by above content, below content, posts or pages. The footer feature is theme-dependent - it will only work if your theme uses wp_footer (most themes do). "; 
    
    $scaEverywhereNote = "<p id='sca-note2'><b>Note:</b> Include everywhere is only compatible with the footer position."; 
    
    $('#acf-sca_position').append($scaFooterNote);
        $('#acf-sca_include').append($scaEverywhereNote)
    
    //if footer is checked 
    
$('#acf-field-sca_position-FixedPosition').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-sca_position-BelowContent').attr('checked', false);
        $('#acf-field-sca_position').attr('checked', false);
        $('#acf-field-sca_include').attr('checked', false);
        $('#acf-field-sca_include-Pages').attr('checked', false);
        $('#acf-field-sca_include-Pages').attr('checked', false);
        $('#acf-field-sca_include-Footer').attr('checked', true);
        $('#sca-note').show();
        $('#sca-note2').show();
        $('#acf-sca_front').hide(); 
         
    } else {
        
        $('#sca-note').hide();
        $('#sca-note2').hide();
        $('#acf-field-sca_include-Footer').attr('checked', false);
    }; 
    
});
    
    //if everywhere is checked 
    
    $('#acf-field-sca_include-Footer').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-sca_position-BelowContent').attr('checked', false);
        $('#acf-field-sca_position').attr('checked', false);
        $('#acf-field-sca_include').attr('checked', false);
        $('#acf-field-sca_include-Pages').attr('checked', false);
        $('#acf-field-sca_include-Pages').attr('checked', false);
        $('#acf-field-sca_position-FixedPosition').attr('checked', true);
        $('#sca-note').show();
        $('#sca-note2').show();
        $('#acf-sca_front').hide(); 
         
    } else {
        
        $('#sca-note').hide();
        $('#sca-note2').hide();
        $('#acf-field-sca_position-FixedPosition').attr('checked', false);
    }; 
    
    });
    
    //if above content is checked 
    
    $('#acf-field-sca_position').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-sca_include-Footer').attr('checked', false);
        $('#acf-field-sca_position-FixedPosition').attr('checked', false);
        $('#sca-note').hide();
        $('#sca-note2').hide();
        
        }
        
        }); 
    
    //if below content is checked 
    
    $('#acf-field-sca_position-BelowContent').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-sca_include-Footer').attr('checked', false);
        $('#acf-field-sca_position-FixedPosition').attr('checked', false);
        $('#sca-note').hide();
        $('#sca-note2').hide();
        
        }
        
        }); 
    
    //if posts is checked 
    
    $('#acf-field-sca_include').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-sca_include-Footer').attr('checked', false);
        $('#acf-field-sca_position-FixedPosition').attr('checked', false);
        $('#sca-note').hide();
        $('#sca-note2').hide();
        
        }
        
        }); 
    
    //if pages is checked 
    
    $('#acf-field-sca_include-Pages').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-sca_include-Footer').attr('checked', false);
        $('#acf-field-sca_position-FixedPosition').attr('checked', false);
        $('#sca-note').hide();
        $('#sca-note2').hide();
        $('#acf-sca_front').show();
        
        }
        
        }); 
    
    //allow only one answer under show on front page 
    
    $('#acf-field-sca_front').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-sca_front-Yes').attr('checked', false);
        
        } else {
            
            $('#acf-field-sca_front-Yes').attr('checked', true);
            
        }
        
        }); 
    
    $('#acf-field-sca_front-Yes').change(function() {
 
    if ($(this).is(':checked')) {
        
        $('#acf-field-sca_front').attr('checked', false);
        
        } else {
            
        $('#acf-field-sca_front').attr('checked', true);    
            
        }
        
        });
    
     $('#acf-field-sca_include-Pages').change(function() {
 
    if ($(this).prop('checked') == false) {
        
        $('#acf-sca_front').hide(); 
        
        }
        
        }); 
	
});