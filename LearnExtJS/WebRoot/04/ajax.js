(function() {
	Ext.onReady(function() {
		Ext.regModel("person", {
			fields : [ {
				name : 'name',
				type : 'string'
			}, ]
		});
		var ajaxProxy = new Ext.data.proxy.Ajax({
			url : 'person.jsp',
			model : 'person',
			reader : 'json',
			limitParam : 'indexLimit'
		});
		var i = 1;
		for (i; i <= 9;i= i + 2) {
			alert(i);
			ajaxProxy.doRequest(new Ext.data.Operation({
				action : 'read',
				limit : 2,
				start : i,
				sorters : [ new Ext.util.Sorter({
					property : 'name',
					direction : 'DESC'
				}) ]
			}), function(o) {
				var text = o.response.responseText;
				// alert(text);
				alert(Ext.JSON.decode(text)[0]['name']);

			});
		}
	});
})();