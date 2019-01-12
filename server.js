var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

app.listen(PORT, function(){
	console.log('listening on '+PORT);
});
