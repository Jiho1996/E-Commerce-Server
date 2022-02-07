var http = require('http');
var hostname = '127.0.0.1';
var port = 8080;

const server = http.createServer(function(req,res){
    const path = req.url;
    const method = req.method;
    if (path === '/products'){
        if(method === 'GET'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            /* 응답할 때 보내는 메세지의 헤더에 값을 추가 */
            const products = JSON.stringify([{
                name : "농구공",
                price : 5000
            },
        ]);
            res.end(products);
            /* 서버에서 작성한 응답 메세지를 보내고 코드 마무리*/ㅜ
        }else if(method == "POST"){
            res.end("생성되었습니다!")
    }
}
});

server.listen(port, hostname);
/*listen : 서버 프로그램이 요청을 대기하라는 명령어. 클라이언트가 요청을 보내면 응답.*/

console.log("server, on");