const enumConst = require('../helper/enum')

exports.patientBasicInfos =(req) =>{
    var patientBasicInfos ={
    hospital_id: req.params.hospitalId,
    hospital_branch_id: req.params.hospitalBranchId,
    baby_medical_record_number: req.body.bmrn,
    baby_mother_medical_record_number: req.body.mmrn,
    deleted_flag: 0,
    active_flag: 1
    }
    return patientBasicInfos
} 

exports.patient =(req)=>{
    var patient ={
    baby_name: req.body.babyName,
    mother_name: req.body.motherName,
    father_name: req.body.fatherName,
    primary_contact_no: req.body.contactNumberPrimary,
    secondary_contact_no: req.body.contactNumberSecondary,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    nationality: req.body.nationality,
    email_id: req.body.email,
    active_flag: req.body.status,
    created_by: enumConst.userType.hospital_branch,
    deleted_flag: 0
    }
    return patient
}