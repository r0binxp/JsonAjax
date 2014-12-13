var datos;
$(document).ready(function() {
	var datos;
	var periodo = [12];
	var plan = ["plan_inicio_2014"];
	var so = ["L"];
	var cantidad = [1];
	var dominioSelec = $('#nombreDominio').val();
	var urlcompra = {
		webhosting: 'http://donweb.com/ajax-mis-compras.php?jsoncallback=?',
		email:'',
		dominio:'http://donweb.com/ajax-check-domain-bulk.php?jsoncallback=?'
			        };
	var compraWeb = {
						pais:"ar",
						origen: "web-hosting",
						plan: plan,
						so: so,
						cantidad: cantidad
					};
	var compraDom = {
						pais:"ar",
						dominio: dominioSelec,
						tld: "selecttld",
						type: "individual",
					};
	var compraMail = {


					};
	
	$("#compraWeb").click(function(){
		compra(urlcompra.webhosting, compraWeb);
	});
	$("#compraDom").click(function(){
		compra(urlcompra.dominio, compraDom);
	}); 	
	$("table").delegate('.remover','click', function(){
		var parent = $(this).parent();
  		$(parent).remove();
	}); 	

	$.ajax({
					url: urlcompra,
					crossDomain: true,
					dataType: 'JSONP',
					data: compraWeb,
					success:function(json){
						var objeto = json.root.site["mis-compras"];
						$('')
					}
	});				

	function compra(url, params)
		{
			var jsoncompra = params;
			var urlc = url;
			

			$.ajax({
					url: urlc,
					crossDomain: true,
					dataType: 'JSONP',
					data: jsoncompra,
					success:function(json){
							console.log(json);
								for (var key in json.root.site["mis-compras"]["items"]) {
							 		$("#jsonrecibi").append('<tr>' + '<td>' + json.root.site["mis-compras"]["items"][key]["cantidad"] + '</td>'
							 		+ '<td>' + json.root.site["mis-compras"]["items"][key]["descripcion"] + '</td>'
							 		+ '<td>' + json.root.site["mis-compras"]["items"][key]["costo"] + '</td>'
							 		+ '<td class="remover">Eliminar</td>'
							 			+ '</tr>');
							 	}
							 datos = json;
							 return

					}
			});
		};

console.log("ahora voy a tirar la variable datos");
console.log(datos);

});

