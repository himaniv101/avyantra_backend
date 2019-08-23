const enumConst = require('../helper/enum')

exports.getStaffPermission =(permissionId,result,permissionResult) =>{
console.log ('permissionResult :' ,permissionResult) 

    switch(permissionId){
        case 1 :result.dataEntry_review_permission=permissionResult.active_flag
                return result
        break
        case 2 :result.scoreGenerate=permissionResult.active_flag
                return result
        break
    }
}


exports.getStaffPermissionId =(permission) =>{

    console.log("permission :",permission )

    switch(permission){
        case dataEntry_review_permission :
                return 1
        break
        case scoreGenerate :
                return 2
        break
    }
}

