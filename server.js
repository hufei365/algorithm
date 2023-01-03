const http = require('http')

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
    });

    response.end(JSON.stringify({
        code: 0,
        data: {
            flag: 1234
        },
        msg: 'Success!!'
    }));
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/')