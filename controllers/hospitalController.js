const pReadingModels = require('../sequelize')
const {validationResult} = require('express-validator/check')
const responseHelper = require('../helper/res')
const constant = require('../helper/constant')
const {sequelize} = require('../sequelize')
const queries = require('../helper/queries')
const mapper = require('../mapper/mapper')
const enumConst = require('../helper/enum')

exports.hospitalSignUp = (req,res,next)=>{

  var user ={}
  user = mapper.userMapper(user,req)

  var hospital={}
  hospital = mapper.hospitalMapper(hospital,req)

  var roles ={}
  roles= mapper.roleMapper(roles,req)

  pReadingModels.user_model.findAll({
    where :{
        user_name: req.body.username,
        password : req.body.password
    }
}).then(result => {
    if(!result.isEmpty){
     //   res.json( responseHelper.alreadyExist(constant.user_already_exit,result))
    }
}).catch(err =>{
    res.json(responseHelper.serveError(constant.error_msg,err))
})


pReadingModels.user_model.create(user)
.then(result => {
    if(!result.isEmpty){
       roles.user_id=result.user_id
       roles.role_id = enumConst.roles.hospital_admin
       hospital.user_id=result.user_id

        pReadingModels.hospital_model.create(hospital)
        .then(result => {
        if(!result.isEmpty){
           console.log('hospital saved successfully :' , result) 
        }
        })
        .catch(err=>{
            res.json(responseHelper.serveError(constant.error_msg,err))
        })

        pReadingModels.user_role_model.create(roles).then(result=>{
            if(!result.isEmpty){
                res.json( responseHelper.success(constant.successfully_registered,req.body))
            }
        }).catch(err=>{
             res.json(responseHelper.serveError(constant.error_msg,err))
        })
    }
}).catch(err=>{
    res.json(responseHelper.serveError(constant.error_msg,err))})

}

exports.addRole= (req,res,next)=>{

    var roles ={}
    roles= mapper.hospitalRoleMapper(roles,req)

    pReadingModels.role_model.create(roles).then(result=>{
        if(!result.isEmpty){
            res.json( responseHelper.success(constant.role_add_successfully,result))
        }
    }).catch(err=>{
         res.json(responseHelper.serveError(constant.error_msg,err))
    })

}

exports.getHospitalProfile = (req, res, next)=>{

    sequelize.query('SELECT m_hospitals.hospital_id,m_hospitals.user_id,m_hospitals.hospital_name, '+
   ' m_users.address,m_users.city, m_users.contact_number,m_users.email_address, m_users.pincode, m_users.state, m_users.user_name, m_users.password '+
   ' FROM m_hospitals '+
   ' JOIN m_users ON m_hospitals.user_id = m_users.user_id '+
   ' WHERE m_hospitals.hospital_id = :hospital_id ',
    { replacements: { 
        hospital_id:req.params.hospitalId,
    }, type: sequelize.QueryTypes.SELECT }
    ).then(result => {
        res.json( responseHelper.success(constant.success,result))
    })
    .catch(err => {
        res.json(responseHelper.serveError(constant.error_msg,err))
     })
}

exports.updateHospitalProfile =(req,res,next)=>{


    pReadingModels.user_model.findOne({
        where:{
            user_id:req.body.user_id
        }
    })
    .then(result=>{

        if(result == null){
            res.json( responseHelper.notFound(constant.no_record_found,result))
        }
   result.address = req.body.address
   result.city= req.body.city
   result.contact_number=req.body.contact_number
   result.email_address=req.body.email_address
   result.pincode=req.body.pincode
   result.state=req.body.state
   result.user_name=req.body.user_name
   result.password=req.body.password
   return result.save()
    })
    .then(result =>{

     var hospitalResult =  pReadingModels.hospital_model.findOne({
            where:{
                hospital_id:req.params.hospitalId
            }
        })

        return hospitalResult
    })
    .then(result =>{

       result.hospital_name= req.body.hospital_name
       return result.save()
    })
    .then(result=>{
        
        res.json( responseHelper.success(constant.hospital_profile_updated_successfully,result))

    })
    .catch(err=>{
        
        res.json(responseHelper.serveError(constant.error_msg,err))

    })

}