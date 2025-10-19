let http = require('http');
let url = require('url');

function start(){
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        
        //route(pathname, response); 

        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(`Hello Node.js`);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
}

exports.start = start;