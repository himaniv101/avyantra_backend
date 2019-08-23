const express = require('express')
const hospitalStaffController = require('../controllers/hospitalStaffController')
const hsrouter = express.Router()

hsrouter.get('/roles/:hospitalId', hospitalStaffController.getHospitalStaffRoles)

hsrouter.get('/specialities/:hospitalId', hospitalStaffController.getHospitalStaffSpecialities)

hsrouter.get('/branches/:hospitalId', hospitalStaffController.getHospitalBranchesByHospitalId)

hsrouter.post('/addStaff/:hospitalId/:hospitalBranchId',hospitalStaffController.addStaff)

hsrouter.get('/getStaff/:hospitalId/:hospitalBranchId/:start/:end',hospitalStaffController.getStaffs)

hsrouter.get('/getStaffCount/:hospitalId/:hospitalBranchId',hospitalStaffController.getStaffCount)

//hsrouter.get('/getStaff/:hospitalId/:hospitalBranchId/:staffId',hospitalStaffController.getStaff)

hsrouter.put('/updateStaff/:hospitalId/:hospitalBranchId/:staffId',hospitalStaffController.updateStaff)

hsrouter.put('/update/staffPermission/:hospitalId/:hospitalBranchId',hospitalStaffController.updateStaffPermission)

hsrouter.post('/addReferralDoctor/:hospitalId/:hospitalBranchId',hospitalStaffController.sendMail)

hsrouter.get('/ReferralDoctor/:hospitalId/:hospitalBranchId/:start/:end',hospitalStaffController.getReferralDoctor)

hsrouter.get('/ReferralDoctorCount/:hospitalId/:hospitalBranchId',hospitalStaffController.getReferralDoctorCount)

module.exports= hsrouter
