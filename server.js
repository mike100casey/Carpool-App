var express       = require('express'),
app 			  = express(),
bodyParser        = require('body-parser'),
mongoose    	  = require('mongoose'),
meetupsController = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);

app.listen(3001, function(){
	console.log('I\'m listening...');
})