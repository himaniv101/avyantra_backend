const enumConst = require('../helper/enum')
module.exports= {

babyBasicProfileMapper :(result,req)=>{
     result.hospital_id= req.body.hospital_id,
     result. hospital_name= req.body.hospital_name ,
     result.hospital_branch_name= req.body.hospital_branch_name ,
     result.baby_medical_record_number= req.body.babyMedicalRecord,
     result. baby_mother_medical_record_number=req.body.babyMotherMedicalRecord,
     result.is_update=req.body.is_update
     return result
},

babyGeneralProfileMapper:(babyGeneralProfile,req)=>{
     babyGeneralProfile.record_type= req.body.record_type,
     babyGeneralProfile.baby_admission_type= req.body.baby_admission_type,
     babyGeneralProfile.baby_birth_date= req.body.baby_birth_date,
     babyGeneralProfile.study_id= req.body.study_id,
     babyGeneralProfile.baby_place_of_birth_pin_code= req.body.baby_place_of_birth_pin_code,
     babyGeneralProfile.baby_place_of_birth_name= req.body.baby_place_of_birth_name,
     babyGeneralProfile.baby_birth_time_hours= req.body.baby_birth_time_hours,
     babyGeneralProfile.baby_birth_time_minit= req.body.baby_birth_time_minit,
     babyGeneralProfile.baby_age_of_admission= req.body.baby_age_of_admission,
     babyGeneralProfile.baby_apgar_score_one_min= req.body.baby_apgar_score_one_min,
     babyGeneralProfile.baby_apgar_score_five_min= req.body.baby_apgar_score_five_min,
     babyGeneralProfile.baby_apgar_score_ten_min= req.body.baby_apgar_score_ten_min,
     babyGeneralProfile.baby_preterm= req.body.baby_preterm,
     babyGeneralProfile.baby_condition_yes_eos_los= req.body.baby_condition_yes_eos_los,
     babyGeneralProfile.baby_condition_rds_yes_no=req.body.baby_condition_rds_yes_no,
     babyGeneralProfile.baby_gender= req.body.baby_gender,
     babyGeneralProfile.baby_condition_jaundice_suspect= req.body.baby_condition_jaundice_suspect,
     babyGeneralProfile.baby_condition_ttnb_suspect= req.body.baby_condition_ttnb_suspect,
     babyGeneralProfile.baby_condition_lga_suspect= req.body.baby_condition_lga_suspect,
     babyGeneralProfile.baby_condition_aga_suspect= req.body.baby_condition_aga_suspect,
     babyGeneralProfile.baby_condition_sga_suspect= req.body.baby_condition_sga_suspect,
     babyGeneralProfile.baby_shock_aga_suspect= req.body.baby_shock_aga_suspect,
     babyGeneralProfile.baby_condition_dextrocordia_suspect= req.body.baby_condition_dextrocordia_suspect,
     babyGeneralProfile.baby_condition_anemia_suspect= req.body.baby_condition_anemia_suspect,
     babyGeneralProfile.baby_condition_lbw_suspect= req.body.baby_condition_lbw_suspect,
     babyGeneralProfile.place_of_delivery= req.body.place_of_delivery,
     babyGeneralProfile.birth_facility= req.body.birth_facility,
     babyGeneralProfile.baby_gestational_age= req.body.baby_gestational_age,
     babyGeneralProfile.baby_gestational_age_unit= req.body.baby_gestational_age_unit,
     babyGeneralProfile.baby_weight_at_birth= req.body.baby_weight_at_birth,
     babyGeneralProfile.baby_condition_suspect=req.body.baby_condition_suspect,
     babyGeneralProfile.baby_day_of_event= req.body.baby_day_of_event,
     babyGeneralProfile.baby_weight_at_admission= req.body.baby_weight_at_admission,
     babyGeneralProfile.baby_condition_other_if_suspect= req.body.baby_condition_other_if_suspect,
     babyGeneralProfile.prelim_diagnosis_perinatal=req.body.prelim_diagnosis_perinatal,
     babyGeneralProfile.prelim_diagnosis_hypoglycemia= req.body.prelim_diagnosis_hypoglycemia,
     babyGeneralProfile.prelim_diagnosis_hypocalcemia= req.body.prelim_diagnosis_hypocalcemia,
     babyGeneralProfile.prelim_diagnosis_feeding_intolerence= req.body.prelim_diagnosis_feeding_intolerence,
     babyGeneralProfile.prelim_diagnosis_gastroenteritis= req.body.prelim_diagnosis_gastroenteritis,
     babyGeneralProfile.baby_weight_at_admission_unit= req.body.baby_weight_at_admission_unit,
     babyGeneralProfile.baby_date_of_admission= req.body.baby_date_of_admission
     return babyGeneralProfile
},

babyMaternalProfileMapper:(maternalProfile,req)=>{
     maternalProfile.mother_age= req.body.mother_age,
     maternalProfile.mother_weight_unit=req.body.mother_weight_unit ,
     maternalProfile.mother_weight= req.body.mother_weight,
     maternalProfile.mother_height=req.body.mother_height,
     maternalProfile.mother_height_unit=req.body.mother_height_unit ,
     maternalProfile.mother_haemoglobin=req.body.mother_haemoglobin,
     maternalProfile.mother_bmi=req.body.mother_bmi ,
     maternalProfile.maternal_blood_pressure=req.body.maternal_blood_pressure ,
     maternalProfile.maternal_blood_pressure_diastolic=req.body.maternal_blood_pressure_diastolic,
     maternalProfile.maternal_diabetes=req.body.maternal_diabetes ,
     maternalProfile.maternal_fever= req.body.maternal_fever,
     maternalProfile.maternal_fever_unit= req.body.maternal_fever_unit,
     maternalProfile.maternal_fever_basic=req.body.maternal_fever_basic ,
     maternalProfile.maternal_thyroid_function=req.body.maternal_thyroid_function ,
     maternalProfile.maternal_thyroid_function_basic= req.body.maternal_thyroid_function_basic,
     maternalProfile.maternal_thyroid_function_unit_basic= req.body.maternal_thyroid_function_unit_basic,
     maternalProfile.maternal_thyroid_function_unit_basic_unit= req.body.maternal_thyroid_function_unit_basic_unit,
     maternalProfile.more_than_3_vaginal_examinations_during_labor= req.body.more_than_3_vaginal_examinations_during_labor,
     maternalProfile.rupture_of_membranes_rom_two= req.body.rupture_of_membranes_rom_two,
     maternalProfile.rupture_of_membranes_rom_one= req.body.rupture_of_membranes_rom_one,
     maternalProfile.rupture_of_membranes_rom= req.body.rupture_of_membranes_rom,
     maternalProfile.leaking_pv= req.body.leaking_pv,
     maternalProfile.smelly_amniotic_fluid= req.body.smelly_amniotic_fluid,
     maternalProfile.chorioamnionitis=req.body.chorioamnionitis ,
     maternalProfile.gbs_infection=req.body.gbs_infection ,
     maternalProfile.colonisation_or_urinary_tract_infection=req.body.colonisation_or_urinary_tract_infection ,
     maternalProfile.torch_infections= req.body.torch_infections,
     maternalProfile.type_of_delivery= req.body.type_of_delivery ,
     maternalProfile.delayed_cord_clamping= req.body.delayed_cord_clamping,
     maternalProfile.vaginal_swab_culture= req.body.vaginal_swab_culture ,
     maternalProfile.vaginal_swab_culture_two= req.body.vaginal_swab_culture_two,
     maternalProfile.vaginal_swab_culture_three= req.body.vaginal_swab_culture_three ,
     maternalProfile.amniotic_fluid_culture= req.body.amniotic_fluid_culture,
     maternalProfile.amniotic_fluid_culture_three= req.body.amniotic_fluid_culture_three,
     maternalProfile.amniotic_fluid_culture_two= req.body.amniotic_fluid_culture_two
     return maternalProfile
},

babyAppearsMapper : (babyAppear , req)=>{
     babyAppear. baby_appearance= req.body.baby_appearance,
     babyAppear. baby_skin_colour= req.body.baby_skin_colour,
     babyAppear.baby_cry_sound= req.body.baby_cry_sound,
     babyAppear.baby_cry_sound_status= req.body.baby_cry_sound_status,
     babyAppear.hypotonia_muscular_response_one_min_after_birth= req.body.hypotonia_muscular_response_one_min_after_birth,
     babyAppear.hypotonia_muscular_response_five_min_after_birth= req.body.hypotonia_muscular_response_five_min_after_birth,
     babyAppear.excessive_sleeping=req.body.excessive_sleeping,
     babyAppear.hypothermia= req.body.hypothermia,
     babyAppear.hypothermia_status=req.body.hypothermia_status,
     babyAppear.hypothermia_status_value=req.body.hypothermia_status_value,
     babyAppear.baby_feeding_status=req.body.baby_feeding_status,
     babyAppear.baby_presence_of_convulsions= req.body.baby_presence_of_convulsions,
     babyAppear.baby_jaundice=req.body.baby_jaundice,
     babyAppear.breast_feeding_initiation= req.body.breast_feeding_initiation,
     babyAppear.kangaroo_mother_care= req.body.kangaroo_mother_care,
     babyAppear.umbilical_discharge= req.body.umbilical_discharge,
     babyAppear.reading_date=req.body.reading_date,
     babyAppear.baby_weight_at_birth=req.body.baby_weight_at_birth,
     babyAppear.baby_weight_at_birth_unit=req.body.baby_weight_at_birth_unit,
     babyAppear.time_of_reading_minute=req.body.time_of_reading_minute,
     babyAppear.time_of_reading_hours=req.body.time_of_reading_hours
     return babyAppear
},

userMapper : (user , req)=>{
     user.user_name=req.body.username,
     user.user_type_id=enumConst.userType.hospital,
     user.password=req.body.password,
     user.email_address=req.body.email,
     user.parent_user_id=enumConst.parentUserType.super_admin,
     user.created_by=enumConst.userType.super_admin,
     user.deleted_flag=0,
     user.active_flag=1
     return user
},

hospitalMapper : (hospital , req)=>{
     hospital.hospital_name=req.body.hospital_name ,
     hospital.created_by= enumConst.userType.hospital,
     hospital.deleted_flag= 0,
     hospital.active_flag=1
     return hospital
},

roleMapper : (roles , req)=>{
     roles.created_by=enumConst.userType.hospital ,
     roles. deleted_flag= 0,
     roles.active_flag= 1
     return roles
},

branchRoleMapper:(branchRoles , result)=>{
     branchRoles.created_by=enumConst.userType.hospital_branch,
     branchRoles. deleted_flag= 0,
     branchRoles.active_flag= 1,
     branchRoles.user_id=result.user_id
     branchRoles.role_id=enumConst.roles.hospital_admin
     return branchRoles
},
hospBranchUserMapper : (branchUser , req)=>{
     branchUser.contact_number= req.body.contact_number
     branchUser.email_address= req.body.email
     branchUser.address=req.body.address
     branchUser.city= req.body.city
     branchUser.state= req.body.state
     branchUser.pincode= req.body.pin_code
     branchUser.user_name= req.body.user_name
     branchUser.password=req.body.password
     branchUser.user_type_id=enumConst.userType.hospital_branch
     branchUser.created_by=enumConst.userType.hospital
     branchUser.deleted_flag=0
     branchUser.active_flag=1
     branchUser.parent_user_id=enumConst.userType.hospital
     return branchUser
},
hospBranchMapper : (branch,result,req)=>{
     branch.branch_name= req.body.name
     branch.hospital_id = req.params.hospitalId
     branch.user_id=result.user_id
     branch.contact_person= req.body.contact_person
     branch.created_by=enumConst.userType.hospital
     branch.deleted_flag=0
     branch.active_flag=1
     return branch
},
hospitalBranchRolesMapper:(roles , req)=>{
     roles.created_by=enumConst.userType.hospital_branch,
     roles.updated_by=enumConst.userType.hospital_branch,
     roles.hospital_id=req.params.hospitalId
     roles.hospital_branch_id=req.params.hospitalBranchId
     roles.deleted_flag= 0,
     roles.active_flag= 1,
     roles.role=req.body.role
     return roles
},
hospitalBranchSpecialityMapper:(branchSpeciality , req)=>{
     branchSpeciality.created_by=enumConst.userType.hospital_branch,
     branchSpeciality.updated_by=enumConst.userType.hospital_branch,
     branchSpeciality.deleted_flag= 0,
     branchSpeciality.active_flag= 1,
     branchSpeciality.speciality=req.body.speciality
     return branchSpeciality
},
staffUserMapper : (staffUser , req)=>{
     staffUser.user_name=req.body.username,
     staffUser.user_type_id=enumConst.userType.hospital_staff,
     staffUser.password=req.body.password,
     staffUser.email_address=req.body.email,
     staffUser.contact_number=req.body.contactNumber,
     staffUser.parent_user_id=enumConst.userType.hospital_branch,
     staffUser.created_by=enumConst.userType.hospital_branch,
     staffUser.deleted_flag=0,
     staffUser.active_flag=1
     return staffUser
},
staff : (staff ,result, req)=>{
     staff.user_id=result.user_id,
     staff.hospital_branch_speciality_id=req.body.speciality,
     staff.hospital_branch_role_id=req.body.assignRole,
     staff.reporting_user_id=req.body.reportTo,
     staff.first_name=req.body.firstName,
     staff.last_name=req.body.lastName,
     staff.created_by=enumConst.userType.hospital_branch,
     staff.deleted_flag=0,
     staff.active_flag=1
     return staff
},
staffHospitalMapper : (staffHospital ,result, req)=>{
     staffHospital.hospital_id=req.params.hospitalId,
     staffHospital.hospital_branch_id=req.body.branch,
     staffHospital.staff_id=result.staff_id,
     staffHospital.created_by=enumConst.userType.hospital_branch,
     staffHospital.deleted_flag=0,
     staffHospital.active_flag=1
     return staffHospital
},
User :(user,req)=>{
     user.address =req.body.address
     user.city=req.body.city
     user.contact_number=req.body.contactNumber
     user.email_address=req.body.email
     user.pincode=req.body.pincode
     user.state=req.body.state
     user.user_type_id=enumConst.userType.referral_doctor
     user.created_by=enumConst.userType.hospital_branch
     user.deleted_flag=0
     user.active_flag=1
     user.parent_user_id=enumConst.userType.hospital_branch
     return user
},
Referral :(referral,req ,result)=>{
     referral.user_id =result.user_id
     referral.hospital_branch_speciality_id=req.body.speciality
     referral.first_name=req.body.firstName
     referral.last_name=req.body.lastName
     referral.created_by=enumConst.userType.hospital_branch
     referral.deleted_flag=0
     referral.active_flag=1
     return referral
},
ReferralHospital :(referralHospital,req,result)=>{
     referralHospital.hospital_id =req.params.hospitalId
     referralHospital.hospital_branch_id=req.params.hospitalBranchId
     referralHospital.referral_id=result.referral_id
     referralHospital.requester_type=enumConst.userType.hospital
     referralHospital.hospital_action_status=enumConst.action_status.pending_initiation
     referralHospital.referral_action_status=enumConst.action_status.accept_initiation
     referralHospital.created_by=enumConst.userType.hospital_branch
     referralHospital.deleted_flag=0
     referralHospital.active_flag=1
     return referralHospital
},
updateBabyRespMapper:(babyRespMapper,req)=>{
     var baby_respiratory_support = JSON.parse(req.body.baby_respiratory_support); 
     babyRespMapper.groaning =  req.body.groaning,
     babyRespMapper.grunting = req.body.grunting,
     babyRespMapper.stridor = req.body.stridor,
     babyRespMapper.retraction = req.body.retraction,
     babyRespMapper.fast_breathing = req.body.fast_breathing,
     babyRespMapper.oxygen_saturation = req.body.oxygen_saturation,
     babyRespMapper.breathing_rate = req.body.breathing_rate,
     babyRespMapper.baby_chest_indrawing = req.body.baby_chest_indrawing,
     babyRespMapper.x_ray_result = req.body.x_ray_result,
     babyRespMapper.x_ray_status_done = req.body.x_ray_status_done,
     babyRespMapper.x_ray_status = req.body.x_ray_status,
     babyRespMapper.x_ray_diagnosis_any_other = req.body.x_ray_diagnosis_any_other,
     babyRespMapper.apnea_diagnosis = req.body.apnea_diagnosis,
     babyRespMapper.apnea_status = req.body.apnea_status,
     babyRespMapper.baby_respiratory_support =baby_respiratory_support,
     babyRespMapper.baby_respiratory_support_if_yes = req.body.baby_respiratory_support_if_yes,
     babyRespMapper.tab_name = req.body.tab_name
     return babyRespMapper
},
updateBabyCVMapper:(babyCV,req)=>{
     babyCV.heart_rate= req.body.heart_rate ,
     babyCV.urine_output=req.body.urine_output,
     babyCV.baby_blood_pressure_mean_arterial_bp= req.body.baby_blood_pressure_mean_arterial_bp,
     babyCV.baby_blood_pressure_upper_limb=req.body.baby_blood_pressure_upper_limb ,
     babyCV.baby_blood_pressure_lower_limb=req.body.baby_blood_pressure_lower_limb ,
     babyCV.capillary_refill_unit=req.body.capillary_refill_unit ,
     babyCV.low_peripheral_pulse_volume=req.body.low_peripheral_pulse_volume ,
     babyCV.cool_peripheries=req.body.cool_peripheries,
     babyCV.two_d_echo_done=req.body.two_d_echo_done ,
     babyCV.two_d_echo_done_if_yes= req.body.two_d_echo_done_if_yes,
     babyCV.baby_on_ionotropes= req.body.baby_on_ionotropes ,
     babyCV.central_line= req.body.central_line,
     babyCV.skin_pustules= req.body.skin_pustules,
     babyCV.infusion_of_blood_products=req.body.infusion_of_blood_products
     return babyCV
},
updateBabyCNSMapper:(babyCNS,req)=>{
     babyCNS.features_of_encephalopathy= req.body.features_of_encephalopathy,
     babyCNS.seizures= req.body.seizures,
     babyCNS.abnormal_movements_like_tonic_posturing= req.body.abnormal_movements_like_tonic_posturing,
     babyCNS.af_bulge= req.body.af_bulge,
     babyCNS.tab_name= req.body.tab_name  
     return babyCNS
},
updateBabyGITMapper:(babyGIT,req)=>{
     babyGIT .abdominal_dystension= req.body.abdominal_dystension,
     babyGIT. frequency_of_stools= req.body.frequency_of_stools,
     babyGIT.diarrhea= req.body.diarrhea,
     babyGIT.vomiting= req.body.vomiting,
     babyGIT.feeding_intolerance= req.body.feeding_intolerance,
     babyGIT.baby_movement=req.body.baby_movement,
     babyGIT.tab_name= req.body.tab_name 
     return babyGIT
},
updateBabyInvestigationMapper:(babyInverstigation,req)=>{
     babyInverstigation.baby_thyroid_status= req.body.baby_thyroid_status,
     babyInverstigation.baby_thyroid_result= req.body.baby_thyroid_result,
     babyInverstigation.baby_blood_glucose= req.body.baby_blood_glucose,
     babyInverstigation.baby_haemoglobin_levels= req.body.baby_haemoglobin_levels,
     babyInverstigation.baby_c_reactive_protien_levels= req.body.baby_c_reactive_protien_levels,
     babyInverstigation.micro_esr=req.body.micro_esr,
     babyInverstigation.baby_procalcitonin_levels=req.body.baby_procalcitonin_levels,
     babyInverstigation.total_leucocute_count_unit=req.body.total_leucocute_count_unit,
     babyInverstigation.total_leucocute_count=req.body.total_leucocute_count,
     babyInverstigation.absolute_neutrophil_count=req.body.absolute_neutrophil_count,
     babyInverstigation.absolute_neutrophil_count_unit=req.body.absolute_neutrophil_count_unit,
     babyInverstigation.immature_to_mature_neutrophil_ratios=req.body.immature_to_mature_neutrophil_ratios,
     babyInverstigation.thrombocytopenia_unit=req.body.thrombocytopenia_unit,
     babyInverstigation.thrombocytopenia=req.body.thrombocytopenia,
     babyInverstigation.urine_rest_for_pus_cells=req.body.urine_rest_for_pus_cells,
     babyInverstigation.urine_culture_test=req.body.urine_culture_test,
     babyInverstigation.blood_culture_report=req.body.blood_culture_report,
     babyInverstigation.gram_positive_bacteria=req.body.gram_positive_bacteria,
     babyInverstigation.gram_positive_bacteria_if_other=req.body.gram_positive_bacteria_if_other,
     babyInverstigation.gram_negative_bacteria=req.body.gram_negative_bacteria,
     babyInverstigation.gram_negative_bacteria_if_other=req.body.gram_negative_bacteria_if_other,
     babyInverstigation.fungi=req.body.fungi,
     babyInverstigation.other_organism=req.body.other_organism,
     babyInverstigation.antibiotic_status_resisitant=req.body.antibiotic_status_resisitant,
     babyInverstigation.antibiotic_status_intermediate=req.body.antibiotic_status_intermediate,
     babyInverstigation.antibiotic_status_value=req.body.antibiotic_status_value,
     babyInverstigation.sodium=req.body.sodium,
     babyInverstigation.potassium=req.body.potassium,
     babyInverstigation.chlorine=req.body.chlorine,
     babyInverstigation.calcium= req.body.calcium,
     babyInverstigation.phosphate= req.body.phosphate,
     babyInverstigation.magnesium=req.body.magnesium,
     babyInverstigation.urea=req.body.urea,
     babyInverstigation.creatinine=req.body.creatinine,
     babyInverstigation.lactate_levels=req.body.lactate_levels,
     babyInverstigation.bilirubin_levels=req.body.bilirubin_levels,
     babyInverstigation.cord_ph=req.body.cord_ph,
     babyInverstigation.arrhythmia=req.body.arrhythmia,
     babyInverstigation.csf_culture=req.body.csf_culture,
     babyInverstigation.csf_culture_tsb_value=req.body.csf_culture_tsb_value,
     babyInverstigation.tab_name=req.body.tab_name
     return babyInverstigation
  },
  updateBabyAntibioticMapper:(babyAntibiotic,req)=>{
     babyAntibiotic.antibiotic_given= req.body.antibiotic_given,
     babyAntibiotic.date_of_administration_of_antiobiotic= req.body.date_of_administration_of_antiobiotic,
     babyAntibiotic.time_of_administration_of_antiobiotic_hours=req.body.time_of_administration_of_antiobiotic_hours,
     babyAntibiotic.time_of_administration_of_antiobiotic_minute=req.body.time_of_administration_of_antiobiotic_minute,
     babyAntibiotic.antibiotic_name= req.body.antibiotic_name,
     babyAntibiotic.antibiotic_name_if_other= req.body.antibiotic_name_if_other,
     babyAntibiotic.date_of_blood_samples_sent_for_culture_test= req.body.date_of_blood_samples_sent_for_culture_test,
     babyAntibiotic.time_of_blood_samples_sent_for_culture_test_hours= req.body.time_of_blood_samples_sent_for_culture_test_hours,
     babyAntibiotic.time_of_blood_samples_sent_for_culture_test_minute= req.body.time_of_blood_samples_sent_for_culture_test_minute,
     babyAntibiotic.blood_sample_taken_prior_to_antiobiotic_administration= req.body.blood_sample_taken_prior_to_antiobiotic_administration
     return babyAntibiotic
  },
  updateBabyFinalMapper:(babyFinal,req)=>{
     babyFinal.days_of_stay_in_hospital= req.body.days_of_stay_in_hospital,
     babyFinal.final_diagnosis_sepsis=req.body.final_diagnosis_sepsis,
     babyFinal.final_diagnosis_rds= req.body.final_diagnosis_rds,
     babyFinal.final_diagnosis_ttnb=req.body.final_diagnosis_ttnb,
     babyFinal.final_diagnosis_jaundice=req.body.final_diagnosis_jaundice,
     babyFinal.final_diagnosis_lbw=req.body.final_diagnosis_lbw,
     babyFinal.final_diagnosis_lga=req.body.final_diagnosis_lga,
     babyFinal.final_diagnosis_aga=req.body.final_diagnosis_aga,
     babyFinal.final_diagnosis_anemia= req.body.final_diagnosis_anemia,
     babyFinal.final_diagnosis_dextochordia=req.body.final_diagnosis_dextochordia,
     babyFinal.final_diagnosis_hypoglycemia=req.body.final_diagnosis_hypoglycemia,
     babyFinal.final_diagnosis_hypocalcemia=req.body.final_diagnosis_hypocalcemia,
     babyFinal.final_diagnosis_gastroenteritis=req.body.final_diagnosis_gastroenteritis,
     babyFinal.final_diagnosis_perinatal_respiratory_depression=req.body.final_diagnosis_perinatal_respiratory_depression,
     babyFinal.final_diagnosis_shock=req.body.final_diagnosis_shock,
     babyFinal.final_diagnosis_feeding_intolerence=req.body.final_diagnosis_feeding_intolerence,
     babyFinal.baby_discharge_date=req.body.baby_discharge_date,
     babyFinal.final_diagnosis_sga=req.body.final_diagnosis_sga,
     babyFinal.final_diagnosis_eos_los=req.body.final_diagnosis_eos_los,
     babyFinal.final_diagnosis_other=req.body.final_diagnosis_other
      return babyFinal
  },
  updateBabyMedicalRecordMapper:(babyMedicalRecord,req)=>{
     babyMedicalRecord.hospital_id=req.params.hospitalId
     babyMedicalRecord.hospital_branch_id=req.params.hospitalBranchId
     babyMedicalRecord.hospital_name=req.body.hospital_name
     babyMedicalRecord.hospital_branch_name=req.body.hospital_branch_name
     babyMedicalRecord.baby_medical_record_number=req.body.bmrn
     babyMedicalRecord.baby_mother_medical_record_number=req.body.mmrn
     return babyMedicalRecord
 },
 patientResultMapper:(patientResult,req)=>{
     patientResult.baby_name = req.body.babyName
     patientResult.mother_name = req.body.motherName
     patientResult.father_name = req.body.fatherName
     patientResult.state = req.body.state
     patientResult.address = req.body.address
     patientResult.city = req.body.city
     patientResult.nationality = req.body.nationality
     patientResult.email_id = req.body.email
     patientResult.primary_contact_no = req.body.contactNumberPrimary
     patientResult.secondary_contact_no = req.body.contactNumberSecondary
     patientResult.pincode = req.body.pincode
     patientResult.updated_by = enumConst.userType.hospital_branch
     patientResult.active_flag = req.body.status
     return patientResult
 },
 updateHospitalMapper:(hospitalResult,req)=>{
     hospitalResult.address = req.body.address
     hospitalResult.city= req.body.city
     hospitalResult.contact_number=req.body.contact_number
     hospitalResult.email_address=req.body.email_address
     hospitalResult.pincode=req.body.pincode
     hospitalResult.state=req.body.state
     hospitalResult.user_name=req.body.user_name
     hospitalResult.password=req.body.password
     return hospitalResult
 },
 hospitalBranchRoleMapper:(hospitalBranchRoles,result,req)=>{
     hospitalBranchRoles.role_id=result.role_id
     hospitalBranchRoles.hospital_id=req.params.hospitalId
     hospitalBranchRoles.hospital_branch_id=req.params.hospitalBranchId
     hospitalBranchRoles.deleted_flag=0
     hospitalBranchRoles.active_flag=1
     return hospitalBranchRoles
 },
 hospitalRoleMapper:(hospitalRole,req)=>{
     hospitalRole.created_by=enumConst.userType.hospital_branch,
     hospitalRole.updated_by=enumConst.userType.hospital_branch,
     hospitalRole.deleted_flag= 0,
     hospitalRole.active_flag= 1,
     hospitalRole.role=req.body.role
     return hospitalRole
 },
 hospBranchRoleMapper:(hospitalBranchRole,result,req)=>{
     hospitalBranchRole.role_id=result.role_id
     hospitalBranchRole.hospital_id=req.params.hospitalId
     hospitalBranchRole.hospital_branch_id=req.params.hospitalBranchId
     hospitalBranchRole.deleted_flag=0
     hospitalBranchRole.active_flag=1
     return hospitalBranchRole
 },
 addSpecialityMapper:(specialities,result,req)=>{
     specialities.speciality_id=result.speciality_id
     specialities.hospital_id=req.params.hospitalId
     specialities.hospital_branch_id=req.params.hospitalBranchId
     specialities.deleted_flag=0
     specialities.active_flag=1
     return specialities
 },
 specialityMapper:(speciality,req)=>{
     speciality.created_by=enumConst.userType.hospital_branch,
     speciality.updated_by=enumConst.userType.hospital_branch,
     speciality.deleted_flag= 0,
     speciality.active_flag= 1,
     speciality.speciality=req.body.speciality
     return speciality
 },
 hospitalBrancheSpecialitiesMapper:(hospitalBranchSpeciality,result,req)=>{
     hospitalBranchSpeciality.speciality_id=result.speciality_id
     hospitalBranchSpeciality.hospital_id=req.params.hospitalId
     hospitalBranchSpeciality.hospital_branch_id=req.params.hospitalBranchId
     hospitalBranchSpeciality.deleted_flag=0
     hospitalBranchSpeciality.active_flag=1
     return hospitalBranchSpeciality
 },
 staffModelMapper:(staffModel,req)=>{
     staffModel.first_name=req.body.firstName
     staffModel.last_name=req.body.lastName
     staffModel.hospital_branch_speciality_id=req.body.speciality
     staffModel.hospital_branch_role_id=req.body.assignRole
     staffModel.active_flag= req.body.status
     staffModel.reporting_user_id=req.body.reportTo
     return staffModel
 },
 userModelMapper:(userResult ,req)=>{
     userResult.contact_number=req.body.contactNumber
     userResult.email_address=req.body.email
     userResult.user_name=req.body.username
     userResult.password=req.body.password
     return userResult
 }
}
