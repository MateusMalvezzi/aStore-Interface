var app = require('connect')()
var serveStatic = require('serve-static')
var cors = require('cors');

app.use(cors())
// Serve up mock-api folder
app.use('/api', serveStatic('mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}))

// Set header to force download
function setJsonHeaders (res, path) {
  res.setHeader('Content-type', 'application/json')
}

// Serve up public folder
//Rota para pág shoes
app.use('/', serveStatic('public', {'index': ['index.html', 'index.htm']}))
//Rota para home
app.use('/', serveStatic('public/pages/home', {'index': ['index.html', 'index.htm']}))

app.listen(8888, function() {
    console.log('Acesse: http://localhost:8888')
});
