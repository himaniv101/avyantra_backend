const pReadingModels = require('../sequelize')
const {validationResult} = require('express-validator/check')
const responseHelper = require('../helper/res')
const constant = require('../helper/constant')
const {sequelize} = require('../sequelize')
const queries = require('../helper/queries')
const mapper = require('../mapper/mapper')
const enumConst = require('../helper/enum')

exports.registerHospitalBranch =(req,res,next)=>{
var branchUser ={}
var branch ={}
var roles ={}
branchUser = mapper.hospBranchUserMapper(branchUser,req)
pReadingModels.user_model.create(branchUser)
.then(result => {
    if(!result.isEmpty){
        roles= mapper.branchRoleMapper(roles,result)
        pReadingModels.user_role_model.create(roles).then(result=>{
            if(!result.isEmpty){
                console.log("hospital role data inserted", result)
            }
        })
        branch = mapper.hospBranchMapper(branch,result,req)
        pReadingModels.hospital_branch_model.create(branch)
        .then(result => {
            res.json( responseHelper.success(constant.hospital_branch_creation,result))
        })
    }
}).catch(err => {
    res.json(responseHelper.serveError(constant.error_msg,err))
})
}

exports.getHospitalBranches=(req,res,next)=>{
    sequelize.query(queries.getHospitalBranches(),
    { replacements: { 
        hospitalId:req.params.hospitalId
    }, type: sequelize.QueryTypes.SELECT }
    ).then(result => {
      res.json( responseHelper.success(constant.success,result))
    })
    .catch(err => {
        res.json(responseHelper.serveError(constant.error_msg,err))
     })
}

exports.addRole= (req,res,next)=>{
    var roles ={}
    var hospitalBranchRole={}
    roles= mapper.hospitalBranchRolesMapper(roles,req)
    pReadingModels.role_model.create(roles).then(result=>{
        if(!result.isEmpty){
            hospitalBranchRole= mapper.hospitalBranchRoleMapper(hospitalBranchRole,result,req)
            pReadingModels.hospital_branch_roles_model.create(hospitalBranchRole)
            .then(result=>{
                res.json( responseHelper.success(constant.role_add_successfully,result))
            })
        }
    }).catch(err=>{
         res.json(responseHelper.serveError(constant.error_msg,err))
    })
}

exports.removeRole=(req,res,next)=>{
    pReadingModels.hospital_branch_roles_model.findByPk(req.params.hospitalBranchRoleId)
    .then(result=>{
        return result.destroy()
    })
    .then(result=>{
        res.json( responseHelper.success(constant.deletion_successfull,result))
    })
    .catch(err=>{
        res.json(responseHelper.serveError(constant.error_msg,err))
    })
}

exports.getHopitalBranchRoles=(req,res,next)=>{
    sequelize.query(queries.getHopitalBranchRoles(),
    { replacements: { 
        hospital_id:req.params.hospitalId,
        hospital_branch_id:req.params.hospitalBranchId
    }, type: sequelize.QueryTypes.SELECT }
    ).then(result => {
        res.json( responseHelper.success(constant.success,result))
    })
    .catch(err => {
        res.json(responseHelper.serveError(constant.error_msg,err))
     })
}

exports.updateHospitalBrancheRoles =(req,res,next)=>{
    var roles={}
    var hospitalBranchRole={}
    pReadingModels.hospital_branch_roles_model
    .findByPk(req.params.hospitalBranchRoleId)
    .then(result=>{
        result.deleted_flag=1
        result.save()
    })
    roles= mapper.hospitalRoleMapper(roles,req)
    pReadingModels.role_model.create(roles)
    .then(result=>{
        if(!result.isEmpty){
            hospitalBranchRole= mapper.hospBranchRoleMapper(hospitalBranchRole,result,req)
            pReadingModels.hospital_branch_roles_model.create(hospitalBranchRole)
            .then(result=>{
                res.json( responseHelper.success(constant.role_add_successfully,result))
            })
        }
    })
    .catch(err=>{
        res.json(responseHelper.serveError(constant.error_msg,err))
    })
}

exports.addSpeciality=(req,res,next)=>{
    var speciality ={}
    var hospitalBranchSpeciality={}
    speciality= mapper.hospitalBranchSpecialityMapper(speciality,req)
    pReadingModels.speciality_model.create(speciality).then(result=>{
        if(!result.isEmpty){
            hospitalBranchSpeciality= mapper.addSpecialityMapper(hospitalBranchSpeciality,result,req)
            pReadingModels.hospital_branch_speciality_model.create(hospitalBranchSpeciality)
            .then(result=>{
                res.json( responseHelper.success(constant.speciality_add_successfully,result))
            })
        }
    }).catch(err=>{
         res.json(responseHelper.serveError(constant.error_msg,err))
    })
}

exports.getHopitalBranchspecialities =(req,res,next)=>{
    sequelize.query(queries.getHopitalBranchspecialities(),
    { replacements: { 
        hospital_id:req.params.hospitalId,
        hospital_branch_id:req.params.hospitalBranchId
    }, type: sequelize.QueryTypes.SELECT }
    ).then(result => {
        res.json( responseHelper.success(constant.success,result))
    })
    .catch(err => {
        res.json(responseHelper.serveError(constant.error_msg,err))
     })
}

exports.removeSpeciality=(req,res,next)=>{
    pReadingModels.hospital_branch_speciality_model.findByPk(req.params.hospitalBranchSpecialityId)
    .then(result=>{
        return result.destroy()
    })
    .then(result=>{
        res.json( responseHelper.success(constant.deletion_successfull,result))
    })
    .catch(err=>{
        res.json(responseHelper.serveError(constant.error_msg,err))
    })
}

exports.updateHospitalBrancheSpecialities =(req,res,next)=>{
    var speciality={}
    var hospitalBranchSpeciality={}
    pReadingModels.hospital_branch_speciality_model
    .findByPk(req.params.hospitalBranchSpecialityId)
    .then(result=>{
        result.deleted_flag=1
        result.save()
    })
    speciality= mapper.specialityMapper(speciality,req)
    pReadingModels.speciality_model.create(speciality)
    .then(result=>{
        if(!result.isEmpty){
    hospitalBranchSpeciality= mapper.hospitalBrancheSpecialitiesMapper(hospitalBranchSpeciality,result,req)
            pReadingModels.hospital_branch_speciality_model.create(hospitalBranchSpeciality)
            .then(result=>{
                res.json( responseHelper.success(constant.speciality_updated_successfully,result))
            })
        } })
    .catch(err=>{
        res.json(responseHelper.serveError(constant.error_msg,err))
    })
}