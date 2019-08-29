const pReadingModels = require('../sequelize')
const { validationResult } = require('express-validator/check')
const responseHelper = require('../helper/res')
const constant = require('../helper/constant')
const { sequelize } = require('../sequelize')
const mapper = require('../mapper/mapper')
const excel = require('exceljs');
const enumConst = require('../helper/enum')
const queries = require('../helper/queries')
const patientObjects = require('../objects/patientObjects')

exports.updateBabyProfileByStudyId = (req, res, next) => {
  pReadingModels.general_model.findAll({
    where: {
      study_id: req.params.studyId
    }
  })
    .then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      }
      result = mapper.babyGeneralProfileMapper(result[0], req)
      return result.save()
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, result))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.updateMotherProfileByStudyId = (req, res, next) => {
  pReadingModels.maternal_model.findAll({
    where: {
      study_id: req.params.studyId
    }
  })
    .then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      }
      result = mapper.babyMaternalProfileMapper(result[0], req)
      return result.save()
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, result))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.savePatientModels = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  pReadingModels.maternal_model.findAll({
    where: {
      study_id: req.body.baby_appears.study_id
    }
  }).then(result => {
    if (result.length == 0) {
      res.json(responseHelper.notFound(constant.no_maternal_record_found, result))
    }
  }).catch(err => {
    res.json(responseHelper.serveError(constant.error_msg, err))
  })
  var baby_respiratory_support = JSON.parse(req.body.baby_resp.baby_respiratory_support);
  req.body.baby_resp.baby_respiratory_support = baby_respiratory_support
  pReadingModels.baby_appear_model.create(req.body.baby_appears)
  pReadingModels.baby_resp_model.create(req.body.baby_resp)
  pReadingModels.baby_cv_model.create(req.body.baby_cv)
  pReadingModels.baby_cns_model.create(req.body.baby_cns)
  pReadingModels.baby_git_model.create(req.body.baby_git)
  pReadingModels.baby_final_model.create(req.body.baby_final)
  pReadingModels.baby_antibiotic_model.create(req.body.baby_antibiotic)
  pReadingModels.baby_investigation_model.create(req.body.baby_investigation).then(result => {
  res.json(responseHelper.success(constant.data_created_successfully, req.body))
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getBabyAppearsModel = (req, res, next) => {
  sequelize.query(queries.getBabyAppearsModel(),
    {
      replacements: {
        study_id: req.params.studyId,
        hospital_id: req.params.hospitalId,
        reading: req.params.readingId
      }, type: sequelize.QueryTypes.SELECT
    }
  ).then(result => {
    res.json(responseHelper.success(constant.success, result))
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getBabyRespModel = (req, res, next) => {
  sequelize.query(queries.getBabyRespModel(),
    {
      replacements: {
        study_id: req.params.studyId,
        hospital_id: req.params.hospitalId,
        reading: req.params.readingId
      }, type: sequelize.QueryTypes.SELECT
    }
  ).then(result => {
    res.json(responseHelper.success(constant.success, result))
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getBabyCVModel = (req, res, next) => {
  sequelize.query(queries.getBabyCVModel(),
    {
      replacements: {
        study_id: req.params.studyId,
        hospital_id: req.params.hospitalId,
        reading: req.params.readingId
      }, type: sequelize.QueryTypes.SELECT
    }
  ).then(result => {
    res.json(responseHelper.success(constant.success, result))
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getBabyCNSModel = (req, res, next) => {
  sequelize.query(queries.getBabyCNSModel(),
    {
      replacements: {
        study_id: req.params.studyId,
        hospital_id: req.params.hospitalId,
        reading: req.params.readingId
      }, type: sequelize.QueryTypes.SELECT
    }
  ).then(result => {
    res.json(responseHelper.success(constant.success, result))
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getBabyGITModel = (req, res, next) => {
  sequelize.query(queries.getBabyGITModel(),
    {
      replacements: {
        study_id: req.params.studyId,
        hospital_id: req.params.hospitalId,
        reading: req.params.readingId
      }, type: sequelize.QueryTypes.SELECT
    }
  ).then(result => {
    res.json(responseHelper.success(constant.success, result))
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getBabyInvestigationModel = (req, res, next) => {
  sequelize.query(queries.getBabyInvestigationModel(),
    {
      replacements: {
        study_id: req.params.studyId,
        hospital_id: req.params.hospitalId,
        reading: req.params.readingId
      }, type: sequelize.QueryTypes.SELECT
    }
  ).then(result => {
    res.json(responseHelper.success(constant.success, result))
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getBabyAntibioticModel = (req, res, next) => {
  sequelize.query(queries.getBabyAntibioticModel(),
    {
      replacements: {
        study_id: req.params.studyId,
        hospital_id: req.params.hospitalId,
        reading: req.params.readingId
      }, type: sequelize.QueryTypes.SELECT
    }
  ).then(result => {
    res.json(responseHelper.success(constant.success, result))
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getBabyFinalModel = (req, res, next) => {
  sequelize.query(queries.getBabyFinalModel(),
    {
      replacements: {
        study_id: req.params.studyId,
        hospital_id: req.params.hospitalId,
        reading: req.params.readingId
      }, type: sequelize.QueryTypes.SELECT
    }
  ).then(result => {
    res.json(responseHelper.success(constant.success, result))
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getReadingIdByStudyId = (req, res, next) => {
  pReadingModels.baby_appear_model.findAll(
    {
      where: { study_id: req.params.study_id },
      order: [['createdAt', 'DESC']],
      limit: 1
    })
    .then(result => {
      if (result.length == 0) {
        res.json(responseHelper.success(constant.data_created_successfully,
          {
            study_id: req.params.study_id,
            reading_id: 'R1'
          }))
      } else {
        var reading = result[0].reading
        var readingChar = reading.substring(0, 1)
        var readingNo = reading.substring(1);
        ++readingNo
        reading = readingChar.concat(readingNo);
        res.json(responseHelper.success(constant.data_created_successfully,
          {
            study_id: req.params.study_id,
            reading_id: reading
          }))
      }
    }).catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.searchReadingIdByStudyIdAndMrn = (req, res, next) => {
  var id = req.params.id
  var hospitalId = req.params.hospitalId
  var array = []
  pReadingModels.basic_model.findAll({
    where: {
      baby_medical_record_number: id,
      hospital_id: hospitalId
    }
  }).then(result => {
    if (result.length == 0) {
      res.json(responseHelper.notFound(constant.no_record_found))
    }
    var basicResult = {
      study_id: result[0].id,
      baby_medical_record_number: result[0].baby_medical_record_number,
      reading: null
    }
    array[0] = basicResult
    var studyId = result[0].id
    pReadingModels.baby_appear_model.findAll({
      where: {
        study_id: studyId
      }
    })
      .then(result => {
        if (result.length == 0) {
          res.json(responseHelper.success(constant.success, array))
        } else {
          sequelize.query(queries.searchReadingIdByStudyIdAndMrn(),
            { replacements: { baby_medical_record_number: id, hospital_id: hospitalId }, type: sequelize.QueryTypes.SELECT }
          ).then(result => {
              res.json(responseHelper.success(constant.success, result))
            }) } 
          })
        })
    .catch(err => {
      res.json({
        error_message: err
      })
    })
}

exports.getPatientModels = (req, res, next) => {
  var models = {
    baby_appears: {},
    baby_resp: {},
    baby_cv: {},
    baby_cns: {},
    baby_git: {},
    baby_investigation: {},
    baby_antibiotic: {},
    baby_final: {}
  }

  pReadingModels.baby_appear_model.findAll(
    {
      where: {
        study_id: req.params.studyId,
      },
      order: [
        ['createdAt', 'DESC']],
      limit: 1
    }).then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      }
      models.baby_appears = result[0]
    })
  pReadingModels.baby_resp_model.findAll(
    {
      where: {
        study_id: req.params.studyId,
      },
      order: [
        ['createdAt', 'DESC']],
      limit: 1
    }).then(result => {
      models.baby_resp = result[0]
    })
  pReadingModels.baby_cv_model.findAll(
    {
      where: {
        study_id: req.params.studyId,
      },
      order: [
        ['createdAt', 'DESC']],
      limit: 1
    }).then(result => {
      models.baby_cv = result[0]
    })

  pReadingModels.baby_cns_model.findAll(
    {
      where: {
        study_id: req.params.studyId,
      },
      order: [['createdAt', 'DESC']],
      limit: 1
    }).then(result => {
      models.baby_cns = result[0]
    })
  pReadingModels.baby_git_model.findAll(
    {
      where: {
        study_id: req.params.studyId,
      },
      order: [['createdAt', 'DESC']],
      limit: 1
    }).then(result => {
      models.baby_git = result[0]
    })

  pReadingModels.baby_investigation_model.findAll(
    {
      where: {
        study_id: req.params.studyId,
      },
      order: [['createdAt', 'DESC']],
      limit: 1
    }).then(result => {
      models.baby_investigation = result[0]
    })
  pReadingModels.baby_antibiotic_model.findAll(
    {
      where: {
        study_id: req.params.studyId,
      },
      order: [['createdAt', 'DESC']],
      limit: 1
    }).then(result => {
      models.baby_antibiotic = result[0]
    })

  pReadingModels.baby_final_model.findAll(
    {
      where: {
        study_id: req.params.studyId,
      },
      order: [['createdAt', 'DESC']],
      limit: 1
    }).then(result => {
      models.baby_final = result[0]
      res.json(responseHelper.success(constant.success, models))
    }).catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.updateBabyAppearsModel = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  pReadingModels.baby_appear_model.findAll(
    {
      where: {
        study_id: req.params.study_id,
        reading: req.params.reading
      }
    }).then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      } else {
        result = mapper.babyAppearsMapper(result[0], req)
        return result.save()
      }
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, result))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.updateBabyRespModel = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  pReadingModels.baby_resp_model.findAll(
    {
      where: {
        study_id: req.params.study_id,
        reading: req.params.reading
      }
    }).then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      } else {
        result = mapper.updateBabyRespMapper(result[0], req)
        return result.save()
      }
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, req.body))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.updateBabyCVModel = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  pReadingModels.baby_cv_model.findAll(
    {
      where: {
        study_id: req.params.study_id,
        reading: req.params.reading
      }
    }).then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      } else {
        result = mapper.updateBabyCVMapper(result[0], req)
        return result.save()
      }
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, req.body))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.updateBabyCNSModel = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  pReadingModels.baby_cns_model.findAll(
    {
      where:
      {
        study_id: req.params.study_id,
        reading: req.params.reading
      }
    }).then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      } else {
        result = mapper.updateBabyCNSMapper(result[0], req)
        return result.save()
      }
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, req.body))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.updateBabyGITModel = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  pReadingModels.baby_git_model.findAll(
    {
      where: {
        study_id: req.params.study_id,
        reading: req.params.reading
      }
    }).then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      } else {
        result = mapper.updateBabyGITMapper(result[0], req)
        return result.save()
      }
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, req.body))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.updateBabyInvestigationModel = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  pReadingModels.baby_investigation_model.findAll(
    {
      where:
      {
        study_id: req.params.study_id,
        reading: req.params.reading
      }
    }).then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      } else {
        result = mapper.updateBabyInvestigationMapper(result[0], req)
        return result.save()
      }
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, req.body))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.updateBabyAntibioticModel = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  pReadingModels.baby_antibiotic_model.findAll(
    {
      where: {
        study_id: req.params.study_id,
        reading: req.params.reading
      }
    }).then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      } else {
        var row = result[0]
        result = mapper.updateBabyAntibioticMapper(result[0], req)
        return result.save()
      }
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, req.body))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.updateBabyFinalModel = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  pReadingModels.baby_final_model.findAll(
    {
      where: {
        study_id: req.params.study_id,
        reading: req.params.reading
      }
    }).then(result => {
      if (result.length == 0) {
        res.json(responseHelper.notFound(constant.no_record_found))
      } else {
        result = mapper.updateBabyFinalMapper(result[0], req)
        return result.save()
      }
    })
    .then(result => {
      res.json(responseHelper.success(constant.data_updated_successfully, req.body))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.generateReport = (req, res, next) => {
  // WHERE hospital_id =:hospital_id
  sequelize.query('SELECT * FROM vw_get_all_data',
    {
      // replacements: { 
      //     hospital_id:req.params.hospitalId
      // }, 
      type: sequelize.QueryTypes.SELECT
    }
  ).then(result => {
    result.forEach((data, index) => {
      if (data.time_of_reading_hours == null) {
        data.time_of_reading_hours = '00'
      }
      if (data.time_of_reading_minute == null) {
        data.time_of_reading_minute = '00'
      }
      data.reading_time = data.time_of_reading_hours + ":" + data.time_of_reading_minute
    })
    var filename = 'BMR Report.xlsx'
    var workbook = new excel.Workbook();
    var sheet = workbook.addWorksheet('Report');
    sheet.columns = [
      { header: 'Study Id', key: 'id', width: 7 },
      { header: 'Hospital Name', key: 'hospital_name', width: 20 },
      { header: 'Hospital Branch Name', key: 'hospital_branch_name', width: 20 },
      { header: 'Baby Medical Record Number', key: 'baby_medical_record_number', width: 20 },
      { header: 'Baby Mother Medical Record Number', key: 'baby_mother_medical_record_number', width: 20 },
      { header: 'Type of Record', key: 'record_type', width: 20 },
      { header: 'Baby Admission Type', key: 'baby_admission_type', width: 20 },
      { header: 'Baby Birth Date', key: 'baby_birth_date', width: 20 },
      { header: 'Baby Place Of Birth Pin Code', key: 'baby_place_of_birth_pin_code', width: 20 },
      { header: 'Baby Place of Birth Name', key: 'baby_place_of_birth_name', width: 20 },
      { header: 'Baby Birth Time Hours', key: 'baby_birth_time_hours', width: 20 },
      { header: 'Baby Birth Time Minute', key: 'baby_birth_time_minit', width: 20 },
      { header: 'Baby Age at Admission', key: 'baby_age_of_admission', width: 20 },
      { header: 'Baby Apgar Score One Min', key: 'baby_apgar_score_one_min', width: 20 },
      { header: 'Baby Apgar Score Five Min', key: 'baby_apgar_score_five_min', width: 20 },
      { header: 'Baby Apgar Score Ten Min', key: 'baby_apgar_score_ten_min', width: 20 },
      { header: 'Baby Preterm', key: 'baby_preterm', width: 20 },
      { header: 'Diagnosis (EOS/LOS/NA)', key: 'baby_condition_yes_eos_los', width: 20 },
      { header: 'Diagnosis (RDS)', key: 'baby_condition_rds_yes_no', width: 20 },
      { header: 'Baby Gender', key: 'baby_gender', width: 20 },
      { header: 'Diagnosis (Jaundice)', key: 'baby_condition_jaundice_suspect', width: 20 },
      { header: 'Diagnosis (TTNB)', key: 'baby_condition_ttnb_suspect', width: 20 },
      { header: 'Diagnosis (LGA)', key: 'baby_condition_lga_suspect', width: 20 },
      { header: 'Diagnosis (AGA)', key: 'baby_condition_aga_suspect', width: 20 },
      { header: 'Diagnosis (SGA)', key: 'baby_condition_sga_suspect', width: 20 },
      { header: 'Diagnosis (Shock)', key: 'baby_shock_aga_suspect', width: 20 },
      { header: 'Diagnosis (Dextrocardia)', key: 'baby_condition_dextrocordia_suspect', width: 20 },
      { header: 'Diagnosis (Anemia)', key: 'baby_condition_anemia_suspect', width: 20 },
      { header: 'Diagnosis (LBW)', key: 'baby_condition_lbw_suspect', width: 20 },
      { header: 'Place of Delievery ', key: 'place_of_delivery', width: 20 },
      { header: 'Birth Facility', key: 'birth_facility', width: 20 },
      { header: 'Baby Gestational Age', key: 'baby_gestational_age', width: 20 },
      { header: 'Baby Geatational Age Unit', key: 'baby_gestational_age_unit', width: 20 },
      { header: 'Baby Weight At Birth', key: 'baby_weight_at_birth', width: 20 },
      { header: 'Baby Condition Suspect', key: 'baby_condition_suspect', width: 20 },
      { header: 'Baby Day Of Event', key: 'baby_day_of_event', width: 20 },
      { header: 'Baby Weight At Admission', key: 'baby_weight_at_admission', width: 20 },
      { header: 'Baby Condition Other If Suspect', key: 'baby_condition_other_if_suspect', width: 20 },
      { header: 'Baby Diagnosis Perinatal', key: 'prelim_diagnosis_perinatal', width: 20 },
      { header: 'Prelim Diagnosis Hypoglycemia', key: 'prelim_diagnosis_hypoglycemia', width: 20 },
      { header: 'Prelim Diagnosis Hypocalcemia ', key: 'prelim_diagnosis_hypocalcemia', width: 20 },
      { header: 'Prelim Diagnosis Feeding Intolerence', key: 'prelim_diagnosis_feeding_intolerence', width: 20 },
      { header: 'Prelim Diagnosis Gastroenteritis', key: 'prelim_diagnosis_gastroenteritis', width: 20 },
      { header: 'Baby Weight At Admission Unit', key: 'baby_weight_at_admission_unit', width: 20 },
      { header: 'Baby Date Of Admission', key: 'baby_date_of_admission', width: 20 },
      { header: 'Mother Age', key: 'mother_age', width: 20 },
      { header: 'Mother Weight Unit', key: 'mother_weight_unit', width: 20 },
      { header: 'Mother Weight', key: 'mother_weight', width: 20 },
      { header: 'Mother Height', key: 'mother_height', width: 20 },
      { header: 'Mother Height Unit', key: 'mother_height_unit', width: 20 },
      { header: 'Mother Haemoglobin', key: 'mother_haemoglobin', width: 20 },
      { header: 'Mother Bmi', key: 'mother_bmi', width: 20 },
      { header: 'Maternal Blood Pressure', key: 'maternal_blood_pressure', width: 20 },
      { header: 'Maternal Blood Pressure Diastolic', key: 'maternal_blood_pressure_diastolic', width: 20 },
      { header: 'Maternal Diabetes', key: 'maternal_diabetes', width: 20 },
      { header: 'Maternal Fever', key: 'maternal_fever', width: 20 },
      { header: 'Maternal Fever Unit', key: 'maternal_fever_unit', width: 20 },
      { header: 'Maternal Fever Basic', key: 'maternal_fever_basic', width: 20 },
      { header: 'Maternal Thyroid Function', key: 'maternal_thyroid_function', width: 20 },
      { header: 'Maternal Thyroid Function Basic', key: 'maternal_thyroid_function_basic', width: 20 },
      { header: 'Maternal Thyroid Function Unit Basic', key: 'maternal_thyroid_function_unit_basic', width: 20 },
      { header: 'Maternal Thyroid Function Unit Basic Unit', key: 'maternal_thyroid_function_unit_basic_unit', width: 20 },
      { header: 'More Than Vaginal Examinations During Labor', key: 'more_than_3_vaginal_examinations_during_labor', width: 20 },
      { header: 'Rupture Of Membranes Rom One', key: 'rupture_of_membranes_rom_one', width: 20 },
      { header: 'Leaking pv', key: 'leaking_pv', width: 20 },
      { header: 'Rupture Of Membranes Rom', key: 'rupture_of_membranes_rom', width: 20 },
      { header: 'Smelly Amniotic Fluid', key: 'smelly_amniotic_fluid', width: 20 },
      { header: 'Chorioamnionitis', key: 'chorioamnionitis', width: 20 },
      { header: 'Gbs Infection', key: 'gbs_infection', width: 20 },
      { header: 'Colonisation Or Urinary Tract Infection', key: 'colonisation_or_urinary_tract_infection', width: 20 },
      { header: 'Torch Infections', key: 'torch_infections', width: 20 },
      { header: 'Type Of Delivery', key: 'type_of_delivery', width: 20 },
      { header: 'Delayed Cord Clamping', key: 'delayed_cord_clamping', width: 20 },
      { header: 'Vaginal Swab Culture Two', key: 'vaginal_swab_culture_two', width: 20 },
      { header: 'Vaginal Swab Culture Three', key: 'vaginal_swab_culture_three', width: 20 },
      { header: 'Amniotic Fluid Culture', key: 'amniotic_fluid_culture', width: 20 },
      { header: 'Amniotic Fluid Culture Three', key: 'amniotic_fluid_culture_three', width: 20 },
      { header: 'Amniotic Fluid Culture Two', key: 'amniotic_fluid_culture_two', width: 20 },
      { header: 'Rupture Of Membranes Rom Two', key: 'rupture_of_membranes_rom_two', width: 20 },
      { header: 'Vaginal Swab Culture', key: 'vaginal_swab_culture', width: 20 },
      { header: 'Baby Appearance', key: 'baby_appearance', width: 20 },
      { header: 'Baby Skin Colour', key: 'baby_skin_colour', width: 20 },
      { header: 'Baby Cry Sound', key: 'baby_cry_sound', width: 20 },
      { header: 'Baby Cry Sound Status', key: 'baby_cry_sound_status', width: 20 },
      { header: 'Hypotonia Muscular Response One Min After Birth', key: 'hypotonia_muscular_response_one_min_after_birth', width: 20 },
      { header: 'Hypotonia Muscular Response Five Min After Birth', key: 'hypotonia_muscular_response_five_min_after_birth', width: 20 },
      { header: 'Excessive Sleeping', key: 'excessive_sleeping', width: 20 },
      { header: 'Hypothermia', key: 'hypothermia', width: 20 },
      { header: 'Hypothermia Status Value', key: 'hypothermia_status_value', width: 20 },
      { header: 'Baby Feeding Status', key: 'baby_feeding_status', width: 20 },
      { header: 'Baby Jaundice', key: 'baby_jaundice', width: 20 },
      { header: 'Breast Feeding Initiation', key: 'breast_feeding_initiation', width: 20 },
      { header: 'Kangaroo Mother Care', key: 'kangaroo_mother_care', width: 20 },
      { header: 'Umbilical Discharge', key: 'umbilical_discharge', width: 20 },
      { header: 'Hypothermia Status', key: 'hypothermia_status', width: 20 },
      { header: 'Groaning', key: 'groaning', width: 20 },
      { header: 'Grunting', key: 'grunting', width: 20 },
      { header: 'Stridor', key: 'stridor', width: 20 },
      { header: 'Retraction', key: 'retraction', width: 20 },
      { header: 'Fast Breathing', key: 'fast_breathing', width: 20 },
      { header: 'Oxygen Saturation', key: 'oxygen_saturation', width: 20 },
      { header: 'Breathing Rate', key: 'breathing_rate', width: 20 },
      { header: 'Baby Chest Indrawing', key: 'baby_chest_indrawing', width: 20 },
      { header: 'Xray Status Done', key: 'x_ray_status_done', width: 20 },
      { header: 'Xray Result', key: 'x_ray_result', width: 20 },
      { header: 'Xray Diagnosis Any Other', key: 'x_ray_diagnosis_any_other', width: 20 },
      { header: 'Apnea Status', key: 'apnea_status', width: 20 },
      { header: 'Apnea Diagnosis', key: 'apnea_diagnosis', width: 20 },
      { header: 'Baby Respiratory Support', key: 'baby_respiratory_support', width: 20 },
      { header: 'Baby Respiratory Support If Yes', key: 'baby_respiratory_support_if_yes', width: 20 },
      { header: 'Heart Rate', key: 'heart_rate', width: 20 },
      { header: 'Urine Output', key: 'urine_output', width: 20 },
      { header: 'Baby Blood Pressure Mean Arterial Bp', key: 'baby_blood_pressure_mean_arterial_bp', width: 20 },
      { header: 'Baby Blood Pressure Upper Limb', key: 'baby_blood_pressure_upper_limb', width: 20 },
      { header: 'Baby Blood Pressure Lower Limb', key: 'baby_blood_pressure_lower_limb', width: 20 },
      { header: 'Capillary Refill Unit', key: 'capillary_refill_unit', width: 20 },
      { header: 'Low Peripheral Pulse Volume', key: 'low_peripheral_pulse_volume', width: 20 },
      { header: 'Cool Peripheries', key: 'cool_peripheries', width: 20 },
      { header: 'Two Echo Done', key: 'two_d_echo_done', width: 20 },
      { header: 'Two Echo Done If Yes', key: 'two_d_echo_done_if_yes', width: 20 },
      { header: 'Baby On Ionotropes', key: 'baby_on_ionotropes', width: 20 },
      { header: 'Central Line', key: 'central_line', width: 20 },
      { header: 'Skin Pustules', key: 'skin_pustules', width: 20 },
      { header: 'Infusion Of Blood Products', key: 'infusion_of_blood_products', width: 20 },
      { header: 'Features Of Encephalopathy', key: 'features_of_encephalopathy', width: 20 },
      { header: 'Seizures', key: 'seizures', width: 20 },
      { header: 'Abnormal Movements Like Tonic Posturing', key: 'abnormal_movements_like_tonic_posturing', width: 20 },
      { header: 'Af Bulge', key: 'af_bulge', width: 20 },
      { header: 'Abdominal Dystension', key: 'abdominal_dystension', width: 20 },
      { header: 'Frequency Of Stools', key: 'frequency_of_stools', width: 20 },
      { header: 'Diarrhea', key: 'diarrhea', width: 20 },
      { header: 'Vomiting', key: 'vomiting', width: 20 },
      { header: 'Feeding Intolerance', key: 'feeding_intolerance', width: 20 },
      { header: 'Baby Movement', key: 'baby_movement', width: 20 },
      { header: 'Baby Thyroid Status', key: 'baby_thyroid_status', width: 20 },
      { header: 'Baby Thyroid Result', key: 'baby_thyroid_result', width: 20 },
      { header: 'Baby Blood Glucose', key: 'baby_blood_glucose', width: 20 },
      { header: 'Baby Haemoglobin Levels', key: 'baby_haemoglobin_levels', width: 20 },
      { header: 'Baby Reactive Protien Levels', key: 'baby_c_reactive_protien_levels', width: 20 },
      { header: 'Micro Esr', key: 'micro_esr', width: 20 },
      { header: 'Baby Procalcitonin Levels', key: 'baby_procalcitonin_levels', width: 20 },
      { header: 'Total Leucocute Count Unit', key: 'total_leucocute_count_unit', width: 20 },
      { header: 'Total Leucocute Count', key: 'total_leucocute_count', width: 20 },
      { header: 'Absolute Neutrophil Count', key: 'absolute_neutrophil_count', width: 20 },
      { header: 'Absolute Neutrophil Count Unit', key: 'absolute_neutrophil_count_unit', width: 20 },
      { header: 'Immature To Mature Neutrophil Ratios', key: 'immature_to_mature_neutrophil_ratios', width: 20 },
      { header: 'Thrombocytopenia_unit', key: 'thrombocytopenia_unit', width: 20 },
      { header: 'Thrombocytopeni', key: 'thrombocytopenia', width: 20 },
      { header: 'Urine Rest For Pus Cells', key: 'urine_rest_for_pus_cells', width: 20 },
      { header: 'Urine Culture Test', key: 'urine_culture_test', width: 20 },
      { header: 'Blood Culture Report', key: 'blood_culture_report', width: 20 },
      { header: 'Gram Positive Bacteria', key: 'gram_positive_bacteria', width: 20 },
      { header: 'Gram Negative Bacteria', key: 'gram_negative_bacteria', width: 20 },
      { header: 'Gram Positive Bacteria If Other', key: 'gram_positive_bacteria_if_other', width: 20 },
      { header: 'Gram Negative Bacteria If Other', key: 'gram_negative_bacteria_if_other', width: 20 },
      { header: 'Fungi', key: 'fungi', width: 20 },
      { header: 'Other Organism', key: 'other_organism', width: 20 },
      { header: 'Other Organism', key: 'other_organism', width: 20 },
      { header: 'Sodium', key: 'sodium', width: 20 },
      { header: 'Potassium', key: 'potassium', width: 20 },
      { header: 'Chlorine', key: 'chlorine', width: 20 },
      { header: 'Calcium', key: 'calcium', width: 20 },
      { header: 'Phosphate', key: 'phosphate', width: 20 },
      { header: 'Magnesium', key: 'magnesium', width: 20 },
      { header: 'Urea', key: 'urea', width: 20 },
      { header: 'Creatinine', key: 'creatinine', width: 20 },
      { header: 'Lactate Levels', key: 'lactate_levels', width: 20 },
      { header: 'Bilirubin Levels', key: 'bilirubin_levels', width: 20 },
      { header: 'Cord Ph', key: 'cord_ph', width: 20 },
      { header: 'Arrhythmia', key: 'arrhythmia', width: 20 },
      { header: 'Csf Culture', key: 'csf_culture', width: 20 },
      { header: 'Csf Culture Tsb Value', key: 'csf_culture_tsb_value', width: 20 },
      { header: 'Antibiotic Status Value', key: 'antibiotic_status_value', width: 20 },
      { header: 'Antibiotic Given', key: 'antibiotic_given', width: 20 },
      { header: 'Date Of Administration Of Antiobiotic', key: 'date_of_administration_of_antiobiotic', width: 20 },
      { header: 'Time Of Administration Of Antiobiotic Hours', key: 'time_of_administration_of_antiobiotic_hours', width: 20 },
      { header: 'Time Of Administration Of Antiobiotic Minute', key: 'time_of_administration_of_antiobiotic_minute', width: 20 },
      { header: 'Antibiotic Name', key: 'antibiotic_name', width: 20 },
      { header: 'Antibiotic Name If Other', key: 'antibiotic_name_if_other', width: 20 },
      { header: 'Grade Of Antibiotic', key: 'grade_of_antibiotic', width: 20 },
      { header: 'Date Of Blood Samples Sent For Culture Test', key: 'date_of_blood_samples_sent_for_culture_test', width: 20 },
      { header: 'Time Of Blood Samples Sent For Culture Test Hours', key: 'time_of_blood_samples_sent_for_culture_test_hours', width: 20 },
      { header: 'Time Of Blood Samples Sent For Culture Test Minute', key: 'time_of_blood_samples_sent_for_culture_test_minute', width: 20 },
      { header: 'Blood Sample Taken Prior To Antiobiotic Administration', key: 'blood_sample_taken_prior_to_antiobiotic_administration', width: 20 },
      { header: 'Days Of Stay In Hospital', key: 'days_of_stay_in_hospital', width: 20 },
      { header: 'Final Diagnosis Sepsis', key: 'final_diagnosis_sepsis', width: 20 },
      { header: 'Final Diagnosis Rds', key: 'final_diagnosis_rds', width: 20 },
      { header: 'Final Diagnosis Ttnb', key: 'final_diagnosis_ttnb', width: 20 },
      { header: 'Final Diagnosis Jaundice', key: 'final_diagnosis_jaundice', width: 20 },
      { header: 'Final Diagnosis Lbw', key: 'final_diagnosis_lbw', width: 20 },
      { header: 'Final Diagnosis Lga', key: 'final_diagnosis_lga', width: 20 },
      { header: 'Final Diagnosis Aga', key: 'final_diagnosis_aga', width: 20 },
      { header: 'Final Diagnosis Sga', key: 'final_diagnosis_sga', width: 20 },
      { header: 'Final Diagnosis Anemia', key: 'final_diagnosis_anemia', width: 20 },
      { header: 'Final Diagnosis Dextochordia', key: 'final_diagnosis_dextochordia', width: 20 },
      { header: 'Final Diagnosis Hypoglycemia', key: 'final_diagnosis_hypoglycemia', width: 20 },
      { header: 'Final Diagnosis Hypocalcemia', key: 'final_diagnosis_hypocalcemia', width: 20 },
      { header: 'Final Diagnosis Gastroenteritis', key: 'final_diagnosis_gastroenteritis', width: 20 },
      { header: 'Final Diagnosis Perinatal Respiratory Depression', key: 'final_diagnosis_perinatal_respiratory_depression', width: 20 },
      { header: 'Final Diagnosis Shock', key: 'final_diagnosis_shock', width: 20 },
      { header: 'Final Diagnosis Feeding Intolerence', key: 'final_diagnosis_feeding_intolerence', width: 20 },
      { header: 'Baby Discharge Date', key: 'baby_discharge_date', width: 20 },
      { header: 'Antibiotic Status Resisitant', key: 'antibiotic_status_resisitant', width: 20 },
      { header: 'Antibiotic Status Intermediate', key: 'antibiotic_status_intermediate', width: 20 },
      { header: 'Baby Weight At Birth Unit', key: 'baby_weight_at_birth_unit', width: 20 },
      { header: 'Final Diagnosis Eos Los', key: 'final_diagnosis_eos_los', width: 20 },
      { header: 'Final Diagnosis Other', key: 'final_diagnosis_other', width: 20 },
      { header: 'Reading', key: 'reading', width: 20 },
      { header: 'Reading Date', key: 'reading_date', width: 20 },
      { header: 'Reading Time', key: 'reading_time', width: 20 },
      { header: 'Date of entry', key: 'createdAt', width: 10 },
    ]
    result.forEach((data, index) => {
      sheet.addRow(data)
    })
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader("Content-Disposition", "attachment; filename=" + filename)
    workbook.xlsx.write(res)
      .then(function (data) {
      });
  })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.saveBabyMedicalRecord = (req, res, next) => {
  var patientBasicInfos = patientObjects.patientBasicInfos(req)
  var patient =patientObjects.patient(req)
  pReadingModels.basic_model.create(patientBasicInfos)
    .then(result => {
      if (result != null) {
        patient.study_id = result.id
        patient = pReadingModels.patient_model.create(patient)
      }
      return patient
    })
    .then(result => {
      res.json(responseHelper.success(constant.success, result))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}

exports.getBabyMedicalRecord = (req, res, next) => {
  var start = (req.params.start - 1) * req.params.end
  sequelize.query(queries.getBabyMedicalRecord(req,start),
  {
    replacements: {
      hospital_id: req.params.hospitalId,
      hospital_branch_id:req.params.hospitalBranchId
    }, type: sequelize.QueryTypes.SELECT
  }
).then(result => {
  res.json(responseHelper.success(constant.success, result))
})
  .catch(err => {
    res.json(responseHelper.serveError(constant.error_msg, err))
  })
}

exports.updateBabyMedicalRecord = (req, res, next) => {
  pReadingModels.basic_model.findOne({
    where: {
      id: req.params.studyId
    } })
    .then(result => {
      if (result != null) {
        result = mapper.updateBabyMedicalRecordMapper(result, req)
        return result.save()
      } })
    .then(result => {
      if (result != null) {
        var patientResult = pReadingModels.patient_model.findOne({
          where: {
            patient_id: req.params.patientId
          }  })
        return patientResult
      } })
    .then(patientResult => {
      patientResult = mapper.patientResultMapper(result, req)
      return patientResult.save()
    })
    .then(patientResult => {
      res.json(responseHelper.success(constant.success, patientResult))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}


exports.babyMedicalRecordCount = (req, res, next) => {
  pReadingModels.basic_model
    .findAndCountAll({
      where: {
        hospital_id: req.params.hospitalId,
        hospital_branch_id: req.params.hospitalBranchId,
        deleted_flag: 0
      }
    })
    .then(result => {
      res.json(responseHelper.success(constant.success, { medical_record_count: result.count }))
    })
    .catch(err => {
      res.json(responseHelper.serveError(constant.error_msg, err))
    })
}