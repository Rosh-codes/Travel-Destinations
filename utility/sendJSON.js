export function ReturnJSON(res,statusCode,data){
        res.setHeader('Content-Type','application/json')
        res.statusCode = statusCode
        res.end(JSON.stringify(data))
}