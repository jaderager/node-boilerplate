const express = require('express'); // returns the export object
console.log(`Express is: ${express}`);
const app = express();

const PORT = 3000;

app.use(express.static('./public')); // helps to display static pages, anything in that directory is now visible

app.get('/', function(request, response) {
  response.sendFile('/public/index.html', {root: '.'});
});

app.get('/text', function(request, response) {
  response.set('Content-Type', 'text/plain');
  response.end('this is text');
});

app.get('/html', function(request, response) {
  response.set('Content-Type', 'text/html');
  response.end('<h1 style="color: red;">It\'s HTML.</h1>');
});

app.get('/hi', function(request, response) {
  response.end('hello');
});

app.listen(PORT, function() {
  console.log(`Server up on ${PORT}`);
});