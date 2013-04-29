jQuery(document).ready(function($) {

	var menu = $('#menu-principal');
        var menu_fijo = $('#menu-fijo');
		var contenedor = $('#contenedor-menu-principal');
		var menu_offset = menu.offset();
		$(window).on('scroll',function(){
            //alert($(window).scrollTop() + " = "+ menu_offset.top);
			if($(window).scrollTop()>menu_offset.top+100){

                 menu_fijo.addClass('menu-fijo-desplazado');
                menu_fijo.removeClass('menu-fijo');
				//contenedor.addClass('navbar-fixed-top');
			}else{
				//contenedor.removeClass('menu-fijo');
                //contenedor.removeClass('navbar-fixed-top');
                menu_fijo.removeClass('menu-fijo-desplazado');
               menu_fijo.addClass('menu-fijo');
			}
		});

});