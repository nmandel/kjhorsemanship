var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});