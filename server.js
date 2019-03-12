const express = require('express');
const app     = express();
const port    = process.env.PORT || 8080;

app.use(express.static('build'));
app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, (err) => {
	if(err) {
		console.log(err);
	}

	console.log('listening on port ' + port);
});
