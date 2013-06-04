jQuery(document).ready(function($) {
    setInterval(function() {
            $("#alert-result").fadeOut(2000);
        }, 10000);

    $('#form1').submit(function(e){
        //alert('i have catched');
        e.preventDefault();
        jQuery.ajax({
          url: 'enviaformulario.php',
          type: 'POST',
          dataType: 'html',
          data: {
            name: $('#inputName').val(),
            email: $('#inputEmail').val(),
            message: $('#inputMessage').val()
          },
          complete: function(xhr, textStatus) {
            //called when complete
          },
          beforeSend: function(){
            $('#loading-image').show();
            $('#btn_enviar').addClass('disabled');
            $('#btn_enviar').val('Enviando...');
          },
          success: function(data, textStatus, xhr) {
            //called when successful
            $('#result').html(data);
            $('#alert-result').fadeIn(2000);
            $('#inputName').val('');
            $('#inputEmail').val('');
            $('#inputMessage').val('');
            $('#loading-image').fadeOut(2000);
            $('#btn_enviar').val('Enviar');
            $('#btn_enviar').removeClass('disabled');
          },
          error: function(xhr, textStatus, errorThrown) {
            //called when there is an error
          }
        });
        
    });

    $("body").queryLoader2({
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100
    });

	var menu = $('#menu-principal');
        var menu_fijo = $('#menu-fijo');
		var contenedor = $('#contenedor-menu-principal');
		var menu_offset = menu.offset();
		$(window).on('scroll',function(){
            //alert($(window).scrollTop() + " = "+ menu_offset.top);

      if($(window).scrollTop()<4150){
              if($(window).scrollTop()>menu_offset.top+100 ){
                menu_fijo.removeClass('menu-fijo-abajo');
                menu_fijo.addClass('menu-fijo-desplazado');
                menu_fijo.removeClass('menu-fijo');
        //contenedor.addClass('navbar-fixed-top');
      }else{
        //contenedor.removeClass('menu-fijo');
                //contenedor.removeClass('navbar-fixed-top');
                menu_fijo.removeClass('menu-fijo-abajo');
                menu_fijo.removeClass('menu-fijo-desplazado');
               menu_fijo.addClass('menu-fijo');
      }
      }
      else{
          menu_fijo.removeClass('menu-fijo-desplazado');
               menu_fijo.addClass('menu-fijo-abajo');
      }

		});

});
