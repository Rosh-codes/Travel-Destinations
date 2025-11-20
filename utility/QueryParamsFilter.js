 export default function  queryFilter(filterData,queryObj){
       
        if(queryObj.country){
            filterData = filterData.filter(destination=> destination.country.toLowerCase() === queryObj.country.toLowerCase())
     
        }
        if(queryObj.continent){
            filterData = filterData.filter(destination=> destination.continent.toLowerCase() === queryObj.continent.toLowerCase())
           
        }
        if(queryObj.is_open_to_public){
            filterData = filterData.filter(destination=> destination.is_open_to_public=== JSON.parse(queryObj.is_open_to_public))
         
        }
        return filterData
    }