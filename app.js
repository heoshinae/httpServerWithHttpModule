const http = require("http")
 // require함수로 node.js에 내장된 http 빌트인 모듈 호출한걸 변수에 담아 아래에서 사용할께
const server = http.createServer();


const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },];

  

  const httpRequestListener = function(request,response){
    const {url, method} = request
  
    if (method === 'POST'){
        if (url === '/posts/add'){
          let body = '';

          request.on("data",(data)=>{
            body +=data;
          })

          request.on('end',()=>{
            const posts = JSON.parse(body);
            posts.push({
              id:post.id,
              title:post.title,
              content:post.content,
              userId:post.userId,
            }
            );
            

          // response.end('okk!!!!!');
          });
          response.writeHead(200,{'Content-Type':'application/json'})
          response.end(JSON.stringify({"message" : "postCreated"}));
        }
      }
    }
  
  server.on("request",httpRequestListener)
  
  const IP = '127.0.0.1'
  const PORT = 8000
  
  server.listen(PORT,IP,function(){
    console.log(`Listening to request on ip${IP} & port ${PORT}`)
  })
    ///
  
    