import http from "node:http"
import db from "./database/db.js"
import { ReturnJSON } from "./utility/sendJSON.js"
import { filteredDataByLocation } from "./utility/placeFilter.js"
import queryFilter from "./utility/QueryParamsFilter.js"
const PORT = 8000
const server = http.createServer(async(req,res)=>{
    
    const database = await db()
    
    const urlObj = new URL(req.url , `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)
    
    if (urlObj.pathname === '/api' &&req.method==='GET'){
        let filterData = database
        const filteredData = queryFilter(filterData,queryObj)
        ReturnJSON(res,200,filteredData)
        
    }
    
    else if (req.url.startsWith('/api/continent') &&req.method==='GET'){
       const splitUrl = req.url.split('/')
        const continentName = decodeURIComponent(splitUrl[3])
        const filterData = filteredDataByLocation(database,'continent',continentName)
        ReturnJSON(res,200,filterData)
    }
    
    else if (req.url.startsWith('/api/country') &&req.method==='GET'){
        const splitUrl = req.url.split('/')
        const countryName = decodeURIComponent(splitUrl[3])
        const filterData = filteredDataByLocation(database,'country',countryName)
        ReturnJSON(res,200,filterData)
    }
    
    else{
        ReturnJSON(res,404,{error:'Not found',message : 'The requested path does not exist'})

    }
})

server.listen(PORT,()=>console.log(`connected to the port ${PORT}`))