module.exports = {
	index: function(req, res){
		var data = {
        	name: 'Jason Krol',
        	website: 'http://kroltech.com'
    	};

    	res.json(data);
	}
}
