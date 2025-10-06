import http from "node:http"
import db from "./database/db.js"
const PORT = 8000
const server = http.createServer(async(req,res)=>{
    const database = JSON.stringify(await db())
    if (req.url === '/api' &&req.method==='GET'){
        res.setHeader('Content-Type','application/json')
        res.statusCode = 200
    res.end(database,()=>console.log(typeof database))
    }
    else{
        res.setHeader('Content-TYPE','application/json')
        res.statusCode = 404
        res.end(JSON.stringify({error:'Not found',message : 'The requested path does not exist'}))
    }
})
server.listen(PORT,()=>console.log('connected to the port '))