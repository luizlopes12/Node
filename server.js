const http = require("http")

http.createServer((req, res) =>{
    res.writeHead(200, {'Conteant-Type': 'application/json'})
    res.end(JSON.stringify({
        "message": "Bom dia"
    }))
}).listen(3001, () => console.log("Servidor rodando, porta 3001"))