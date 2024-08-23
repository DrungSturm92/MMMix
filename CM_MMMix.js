module.exports = {
	oscInFilter: function(data) {
		var { address, args, host, port } = data;
		

		if (address === '/reply') {
			var type = args[0].value;
			var name = args[1].value;
			var velocity = args[2].value;
			var number = args[6].value;
			var total = 0;
			
			if (number > total) {
				total = number
				}
			if (type === 'FB') {
				console.log("Foldback Bus name:", name);
				}
			console.log("Canal nº: ", number);
			console.log("Total de canales: ", total);
			}
		return { address, args, host, port };
	}
};


