import http from "node:http"
import db from "./database/db.js"
import { ReturnJSON } from "./utility/sendJSON.js"
const PORT = 8000
const server = http.createServer(async(req,res)=>{
    const database = await db()
    if (req.url === '/api' &&req.method==='GET'){
    ReturnJSON(res,200,database)
    }
    else if (req.url.startsWith('/api/continent') &&req.method==='GET'){
        const splitUrl = req.url.split('/')
        const continentName = decodeURIComponent(splitUrl[3])
        const filterData = database.filter(destination=>destination.continent.toLowerCase() === continentName.toLowerCase())
        ReturnJSON(res,200,filterData)
    }
    else{
        ReturnJSON(res,404,{error:'Not found',message : 'The requested path does not exist'})

    }
})
server.listen(PORT,()=>console.log('connected to the port '))