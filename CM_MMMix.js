module.exports = {
	oscInFilter: function(data) {
		var { address, args, host, port } = data;
		

		if (address === '/reply') {
			var type = args[0].value;
			var cnt = 0;
			var total = 0;
			
			if (cnt > total) {
				total = number
				}
			if (type === 'FB') {
				var name = args[1].value;
				var number = args[6].value;
				console.log("Foldback Bus name:", name);
				console.log("Canal nº: ", number);
				cnt = cnt + 1;
				}
			if (type === 'end_route_list') {
				console.log("Total de canales: ", total);
				}			
			}
		return { address, args, host, port };
	}
};
