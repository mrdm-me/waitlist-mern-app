function referalVerfication(refCode){
            if(findref(refCode)){
               dbupdate(refCode,findereferaluserQueue()-1)
            }   
}
function findref(url,databaseEmailId){
    for(var i=0;i<length(databaseEmailId);i++){
        if (url==databaseEmailId[i]){
            return true
        }
        return false
    }
}