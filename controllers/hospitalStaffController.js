const pReadingModels = require('../sequelize')
const {validationResult} = require('express-validator/check')
const responseHelper = require('../helper/res')
const constant = require('../helper/constant')
const {sequelize} = require('../sequelize')
const queries = require('../helper/queries')
const mapper = require('../mapper/mapper')
const enumConst = require('../helper/enum')
const util = require('../helper/util')
const excel = require('exceljs');
const nodeMailer = require('nodemailer');

exports.getHospitalStaffRoles =(req,res,next)=>{
    sequelize.query(queries.getHospitalStaffRoles(),
    { replacements: { 
        hospital_id:req.params.hospitalId
    }, type: sequelize.QueryTypes.SELECT }
    ).then(result => {
        res.json( responseHelper.success(constant.success,result))
    })
    .catch(err => {
        res.json(responseHelper.serveError(constant.error_msg,err))
     })
}

exports.getHospitalStaffSpecialities =(req,res,next)=>{
    sequelize.query(queries.getHospitalStaffSpecialities(),
    { replacements: { 
        hospital_id:req.params.hospitalId
    }, type: sequelize.QueryTypes.SELECT }
    ).then(result => {
        res.json( responseHelper.success(constant.success,result))
    })
    .catch(err => {
        res.json(responseHelper.serveError(constant.error_msg,err))
     })
}

exports.getHospitalBranchesByHospitalId =(req,res,next)=>{
    pReadingModels.hospital_branch_model.findAll({
        where:{
            hospital_id:req.params.hospitalId
        },
        attributes: ['hospital_branch_id','branch_name','user_id','hospital_id']
    })
    .then(result=>{
        res.json( responseHelper.success(constant.success,result))
    })
    .catch(err=>{
        res.json(responseHelper.serveError(constant.error_msg,err))
    })
}

exports.addStaff=(req,res,next)=>{
    var staffUser ={}
    var staff={}
    var staffHospitalMapper={}
    var staffPermission={}
    staffUser = mapper.staffUserMapper(staffUser,req)
    pReadingModels.user_model.create(staffUser)
    .then(result=>{  
        if(result!=null){
      pReadingModels.permission_model.findAll()
      .then(pResult=>{
      if(pResult.length > 0){
        pResult.forEach((data,index)=>{
            staffPermission.user_id=result.user_id
            staffPermission.permission_id= data.permision_Id
            staffPermission.active_flag=0
            pReadingModels.staff_permission_model.create(staffPermission)
           })
        }
     })
            staff=mapper.staff(staff,result,req)
            pReadingModels.staff_model.create(staff)
            .then(staffResult=>{
                if(staffResult!=null){
                 staffHospitalMapper = mapper.staffHospitalMapper(staffHospitalMapper,staffResult,req)
                 for(var i =0 ; i<req.body.branch.length;i++){
                    staffHospitalMapper.hospital_branch_id=req.body.branch[i]
                    pReadingModels.hospital_staff_model.create(staffHospitalMapper)
                    }
                 res.json( responseHelper.success(constant.staff_add_successfull,staffResult))
                }  })
         }
    }).catch(err => {
        res.json(responseHelper.serveError(constant.error_msg,err))
    })
}

exports.getStaffs = async (req,res,next)=>{
       var start = (req.params.start-1)*req.params.end
       var result = await  sequelize.query(queries.getStaffs(req,start),
        { replacements: { 
            hospital_id:req.params.hospitalId,
            hospital_branch_id:req.params.hospitalBranchId
        }, type: sequelize.QueryTypes.SELECT }
        )
       if(result != null){
        var staffPermisionId =[]
        for(var i =0 ; i<result.length ; i++){
            var permissionResult = await sequelize.query(queries.getStaffsPermission(),
            { replacements: { 
                user_id:result[i].user_id,
                deleted_flag:0
            }, type: sequelize.QueryTypes.SELECT }
            )
                if(permissionResult.length == 0){
                    result[i].dataEntry_review_permission=0
                    result[i].scoreGenerate=0
                }else{
                    for(var j = 0 ; j<permissionResult.length ;j++){
                    result[i] = util.getStaffPermission(permissionResult[j].permission_id, result[i],permissionResult[j])
                    staffPermisionId[j]=permissionResult[j].permission_id
                }
                result[i].permission_id =staffPermisionId
            }    
         }
         res.json( responseHelper.success(constant.success,result))
    }else{
         res.json(responseHelper.notFound(constant.no_record_found,result))

    }
}

exports.getStaffCount=(req,res,next)=>{
    pReadingModels.hospital_staff_model
    .findAndCountAll({
       where: {
        hospital_id:req.params.hospitalId,
        hospital_branch_id:req.params.hospitalBranchId,
        deleted_flag:0 
       }   
     })
    .then(result => {
      res.json( responseHelper.success(constant.success,{staff_count:result.count}))
    });
}

exports.getStaff=(req,res,next)=>{
    sequelize.query(queries.getStaffDetails(),
    { replacements: { 
        staff_id:req.params.staffId,
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

exports.updateStaff=(req,res,next)=>{
     var staffHospitalMapper={}
     var hospitalStaffResult
     var hospitalStaff=[]
    pReadingModels.staff_model.findByPk(req.params.staffId)
    .then(result=>{
     result = mapper.staffModelMapper(result,req)
     result.save()
        if(result!=null){
        pReadingModels.user_model.findByPk(result.user_id)
              .then(userResult=>{
                userResult = mapper.userModelMapper(userResult,req)
                userResult.save()
            })
            staffHospitalMapper = mapper.staffHospitalMapper(staffHospitalMapper,result,req)
            for(var i =0 ; i<req.body.branch.length;i++){
               staffHospitalMapper.hospital_branch_id=req.body.branch[i]
               pReadingModels.hospital_staff_model.create(staffHospitalMapper)
               .then(hospitalStaffModelResult=>{
               })
            }
            pReadingModels.hospital_staff_model.findAll({
                where:{
                    hospital_id:req.params.hospitalId,
                    staff_id:req.params.staffId
                }
            }).then(hospitalStaffModelResult=>{
                for(var i =0 ; i<hospitalStaffModelResult.length;i++){
                    hospitalStaffModelResult[i].deleted_flag=1
                    hospitalStaffModelResult[i].active_flag=0
                    hospitalStaffModelResult[i].save()
                }
                res.json( responseHelper.success(constant.staff_updated_successfully,hospitalStaffModelResult))
            }) }
       })
   }

exports.updateStaffPermission= async (req,res)=>{
  var reqData = req.body
  for(var i =0 ; i<reqData.length ; i++ ){
    var staffDetail = reqData[i]
    var permissionId =[]
    var pResult = await  pReadingModels.permission_model.findAll()
        pResult.forEach((data,index)=>{
            permissionId.push(data.permision_Id)

        })
     for( var j =0 ; j<permissionId.length ; j++){
       var perId = permissionId[j]
       var staffPermission = await pReadingModels.staff_permission_model.findAll({
            where:{
               user_id:reqData[i].user_id,
               permission_id:perId
            }
         })
           if(staffPermission.length > 0){
             var result = await  pReadingModels.staff_permission_model.findByPk(staffPermission[0].user_permission_id)
                   if(staffPermission[0].permission_id == 1 && staffDetail.scoreGenerate == 0  && staffDetail.dataEntry_review_permission==1)
                   {
                   result.active_flag = 1
                   }else if(staffPermission[0].permission_id == 1 && staffDetail.scoreGenerate == 0 && staffDetail.dataEntry_review_permission==0){
                   result.active_flag = 0
                   }else if (staffPermission[0].permission_id  == 2 && staffDetail.dataEntry_review_permission==0  && staffDetail.scoreGenerate == 1){
                   result.active_flag = 1
                   }else if (staffPermission[0].permission_id == 2 && staffDetail.dataEntry_review_permission == 0 && staffDetail.scoreGenerate == 0){
                   result.active_flag = 0
                   }else if(staffPermission[0].permission_id == 2 && staffDetail.dataEntry_review_permission == 1 && staffDetail.scoreGenerate == 1){
                   result.active_flag = 1
                   }else if(staffPermission[0].permission_id == 2 && staffDetail.dataEntry_review_permission == 1 && staffDetail.scoreGenerate == 0){
                   result.active_flag = 0
                   result.deleted_flag = 1
                   }else if(staffPermission[0].permission_id == 1 && staffDetail.dataEntry_review_permission == 0 && staffDetail.scoreGenerate == 1){
                   result.active_flag = 0
                   }else if(staffPermission[0].permission_id == 1 && staffDetail.dataEntry_review_permission == 1 && staffDetail.scoreGenerate == 1){
                   result.active_flag = 1
                   }
                   result.save()
           }else{
            res.json( responseHelper.notFound(constant.no_record_found))
         }      
      }
    }  
 res.json( responseHelper.success(constant.staff_updated_successfully))
}

exports.sendMail = (req,res,next) =>{
var user ={}
var referral ={}
var referralHospital ={}
user = mapper.User(user,req)
pReadingModels.user_model.create(user)
.then(result=>{
    if(result != null){
        referral = mapper.Referral(referral,req ,result)
        var result = pReadingModels.referral_doctor_model.create(referral)
        return result 
    }
})
.then(result=>{
    if(result != null){
        referralHospital = mapper.ReferralHospital(referralHospital,req ,result)
        var result = pReadingModels.referral_hospitals_model.create(referralHospital)
        return result
    }
})
.then(result=>{
if(result != null){
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'himani.v@101bi.com',
            pass: '9669438120'
         }
     })
     let mailOptions = {
        from: 'himani.v@101bi.com',
        to: req.body.email, 
        subject: 'Invitation from apollo', 
        text: 'That was easy!', 
        html: '<b>Accept or reject</b>'
    }
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.json(responseHelper.serveError(constant.error_msg,err))
        } else {
          res.json( responseHelper.success(constant.success,result))
        }
      });
    } 
  }) 
}

exports.getReferralDoctor =(req,res,next) =>{
    var start = (req.params.start-1)*req.params.end
    sequelize.query(queries.getReferralDoctor(req,start), 
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

exports.getReferralDoctorCount = (req,res,next) =>{
    pReadingModels.referral_hospitals_model
    .findAndCountAll({
       where: {
        hospital_id:req.params.hospitalId,
        hospital_branch_id:req.params.hospitalBranchId,
        active_flag:1 
       }   
     })
    .then(result => {
      res.json( responseHelper.success(constant.success,{referral_count:result.count}))
    });
}







