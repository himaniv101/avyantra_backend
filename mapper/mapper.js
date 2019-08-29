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

babyGeneralProfileMapper:(result,req)=>{
     result.record_type= req.body.record_type,
     result.baby_admission_type= req.body.baby_admission_type,
     result.baby_birth_date= req.body.baby_birth_date,
     result.study_id= req.body.study_id,
     result.baby_place_of_birth_pin_code= req.body.baby_place_of_birth_pin_code,
     result.baby_place_of_birth_name= req.body.baby_place_of_birth_name,
     result.baby_birth_time_hours= req.body.baby_birth_time_hours,
     result.baby_birth_time_minit= req.body.baby_birth_time_minit,
     result.baby_age_of_admission= req.body.baby_age_of_admission,
     result.baby_apgar_score_one_min= req.body.baby_apgar_score_one_min,
     result.baby_apgar_score_five_min= req.body.baby_apgar_score_five_min,
     result.baby_apgar_score_ten_min= req.body.baby_apgar_score_ten_min,
     result.baby_preterm= req.body.baby_preterm,
     result.baby_condition_yes_eos_los= req.body.baby_condition_yes_eos_los,
     result.baby_condition_rds_yes_no=req.body.baby_condition_rds_yes_no,
     result.baby_gender= req.body.baby_gender,
     result.baby_condition_jaundice_suspect= req.body.baby_condition_jaundice_suspect,
     result.baby_condition_ttnb_suspect= req.body.baby_condition_ttnb_suspect,
     result.baby_condition_lga_suspect= req.body.baby_condition_lga_suspect,
     result.baby_condition_aga_suspect= req.body.baby_condition_aga_suspect,
     result.baby_condition_sga_suspect= req.body.baby_condition_sga_suspect,
     result.baby_shock_aga_suspect= req.body.baby_shock_aga_suspect,
     result.baby_condition_dextrocordia_suspect= req.body.baby_condition_dextrocordia_suspect,
     result.baby_condition_anemia_suspect= req.body.baby_condition_anemia_suspect,
     result.baby_condition_lbw_suspect= req.body.baby_condition_lbw_suspect,
     result.place_of_delivery= req.body.place_of_delivery,
     result.birth_facility= req.body.birth_facility,
     result.baby_gestational_age= req.body.baby_gestational_age,
     result.baby_gestational_age_unit= req.body.baby_gestational_age_unit,
     result.baby_weight_at_birth= req.body.baby_weight_at_birth,
     result.baby_condition_suspect=req.body.baby_condition_suspect,
     result.baby_day_of_event= req.body.baby_day_of_event,
     result.baby_weight_at_admission= req.body.baby_weight_at_admission,
     result.baby_condition_other_if_suspect= req.body.baby_condition_other_if_suspect,
     result.prelim_diagnosis_perinatal=req.body.prelim_diagnosis_perinatal,
     result.prelim_diagnosis_hypoglycemia= req.body.prelim_diagnosis_hypoglycemia,
     result.prelim_diagnosis_hypocalcemia= req.body.prelim_diagnosis_hypocalcemia,
     result.prelim_diagnosis_feeding_intolerence= req.body.prelim_diagnosis_feeding_intolerence,
     result.prelim_diagnosis_gastroenteritis= req.body.prelim_diagnosis_gastroenteritis,
     result.baby_weight_at_admission_unit= req.body.baby_weight_at_admission_unit,
     result.baby_date_of_admission= req.body.baby_date_of_admission
     return result
},

babyMaternalProfileMapper:(result,req)=>{
     result.mother_age= req.body.mother_age,
     result.mother_weight_unit=req.body.mother_weight_unit ,
     result.mother_weight= req.body.mother_weight,
     result.mother_height=req.body.mother_height,
     result.mother_height_unit=req.body.mother_height_unit ,
     result.mother_haemoglobin=req.body.mother_haemoglobin,
     result.mother_bmi=req.body.mother_bmi ,
     result.maternal_blood_pressure=req.body.maternal_blood_pressure ,
     result.maternal_blood_pressure_diastolic=req.body.maternal_blood_pressure_diastolic,
     result.maternal_diabetes=req.body.maternal_diabetes ,
     result.maternal_fever= req.body.maternal_fever,
     result.maternal_fever_unit= req.body.maternal_fever_unit,
     result.maternal_fever_basic=req.body.maternal_fever_basic ,
     result.maternal_thyroid_function=req.body.maternal_thyroid_function ,
     result.maternal_thyroid_function_basic= req.body.maternal_thyroid_function_basic,
     result.maternal_thyroid_function_unit_basic= req.body.maternal_thyroid_function_unit_basic,
     result.maternal_thyroid_function_unit_basic_unit= req.body.maternal_thyroid_function_unit_basic_unit,
     result.more_than_3_vaginal_examinations_during_labor= req.body.more_than_3_vaginal_examinations_during_labor,
     result.rupture_of_membranes_rom_two= req.body.rupture_of_membranes_rom_two,
     result.rupture_of_membranes_rom_one= req.body.rupture_of_membranes_rom_one,
     result.rupture_of_membranes_rom= req.body.rupture_of_membranes_rom,
     result.leaking_pv= req.body.leaking_pv,
     result.smelly_amniotic_fluid= req.body.smelly_amniotic_fluid,
     result.chorioamnionitis=req.body.chorioamnionitis ,
     result.gbs_infection=req.body.gbs_infection ,
     result.colonisation_or_urinary_tract_infection=req.body.colonisation_or_urinary_tract_infection ,
     result.torch_infections= req.body.torch_infections,
     result.type_of_delivery= req.body.type_of_delivery ,
     result.delayed_cord_clamping= req.body.delayed_cord_clamping,
     result.vaginal_swab_culture= req.body.vaginal_swab_culture ,
     result.vaginal_swab_culture_two= req.body.vaginal_swab_culture_two,
     result.vaginal_swab_culture_three= req.body.vaginal_swab_culture_three ,
     result.amniotic_fluid_culture= req.body.amniotic_fluid_culture,
     result.amniotic_fluid_culture_three= req.body.amniotic_fluid_culture_three,
     result.amniotic_fluid_culture_two= req.body.amniotic_fluid_culture_two
     return result
},

babyAppearsMapper : (result , req)=>{
     result. baby_appearance= req.body.baby_appearance,
     result. baby_skin_colour= req.body.baby_skin_colour,
     result.baby_cry_sound= req.body.baby_cry_sound,
     result.baby_cry_sound_status= req.body.baby_cry_sound_status,
     result.hypotonia_muscular_response_one_min_after_birth= req.body.hypotonia_muscular_response_one_min_after_birth,
     result.hypotonia_muscular_response_five_min_after_birth= req.body.hypotonia_muscular_response_five_min_after_birth,
     result.excessive_sleeping=req.body.excessive_sleeping,
     result.hypothermia= req.body.hypothermia,
     result.hypothermia_status=req.body.hypothermia_status,
     result.hypothermia_status_value=req.body.hypothermia_status_value,
     result.baby_feeding_status=req.body.baby_feeding_status,
     result.baby_presence_of_convulsions= req.body.baby_presence_of_convulsions,
     result.baby_jaundice=req.body.baby_jaundice,
     result.breast_feeding_initiation= req.body.breast_feeding_initiation,
     result.kangaroo_mother_care= req.body.kangaroo_mother_care,
     result.umbilical_discharge= req.body.umbilical_discharge,
     result.reading_date=req.body.reading_date,
     result.baby_weight_at_birth=req.body.baby_weight_at_birth,
     result.baby_weight_at_birth_unit=req.body.baby_weight_at_birth_unit,
     result.time_of_reading_minute=req.body.time_of_reading_minute,
     result.time_of_reading_hours=req.body.time_of_reading_hours
     return result
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

branchRoleMapper:(roles , result)=>{
     roles.created_by=enumConst.userType.hospital_branch,
     roles. deleted_flag= 0,
     roles.active_flag= 1,
     roles.user_id=result.user_id
     roles.role_id=enumConst.roles.hospital_admin
     return roles
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
hospitalBranchRoleMapper:(roles , req)=>{
     roles.created_by=enumConst.userType.hospital_branch,
     roles.updated_by=enumConst.userType.hospital_branch,
     roles.hospital_id=req.params.hospitalId
     roles.hospital_branch_id=req.params.hospitalBranchId
     roles.deleted_flag= 0,
     roles.active_flag= 1,
     roles.role=req.body.role
     return roles
},
hospitalBranchSpecialityMapper:(speciality , req)=>{
     speciality.created_by=enumConst.userType.hospital_branch,
     speciality.updated_by=enumConst.userType.hospital_branch,
     speciality.deleted_flag= 0,
     speciality.active_flag= 1,
     speciality.speciality=req.body.speciality
     return speciality
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
staffHospitalMapper : (staff ,result, req)=>{
     staff.hospital_id=req.params.hospitalId,
     staff.hospital_branch_id=req.body.branch,
     staff.staff_id=result.staff_id,
     staff.created_by=enumConst.userType.hospital_branch,
     staff.deleted_flag=0,
     staff.active_flag=1
     return staff
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
updateBabyRespMapper:(result,req)=>{
     var baby_respiratory_support = JSON.parse(req.body.baby_respiratory_support); 
     result.groaning =  req.body.groaning,
     result.grunting = req.body.grunting,
     result.stridor = req.body.stridor,
     result.retraction = req.body.retraction,
     result.fast_breathing = req.body.fast_breathing,
     result.oxygen_saturation = req.body.oxygen_saturation,
     result.breathing_rate = req.body.breathing_rate,
     result.baby_chest_indrawing = req.body.baby_chest_indrawing,
     result.x_ray_result = req.body.x_ray_result,
     result.x_ray_status_done = req.body.x_ray_status_done,
     result.x_ray_status = req.body.x_ray_status,
     result.x_ray_diagnosis_any_other = req.body.x_ray_diagnosis_any_other,
     result.apnea_diagnosis = req.body.apnea_diagnosis,
     result.apnea_status = req.body.apnea_status,
     result.baby_respiratory_support =baby_respiratory_support,
     result.baby_respiratory_support_if_yes = req.body.baby_respiratory_support_if_yes,
     result.tab_name = req.body.tab_name
     return result
},
updateBabyCVMapper:(result,req)=>{
     result.heart_rate= req.body.heart_rate ,
     result.urine_output=req.body.urine_output,
     result.baby_blood_pressure_mean_arterial_bp= req.body.baby_blood_pressure_mean_arterial_bp,
     result.baby_blood_pressure_upper_limb=req.body.baby_blood_pressure_upper_limb ,
     result.baby_blood_pressure_lower_limb=req.body.baby_blood_pressure_lower_limb ,
     result.capillary_refill_unit=req.body.capillary_refill_unit ,
     result.low_peripheral_pulse_volume=req.body.low_peripheral_pulse_volume ,
     result.cool_peripheries=req.body.cool_peripheries,
     result.two_d_echo_done=req.body.two_d_echo_done ,
     result.two_d_echo_done_if_yes= req.body.two_d_echo_done_if_yes,
     result.baby_on_ionotropes= req.body.baby_on_ionotropes ,
     result.central_line= req.body.central_line,
     result.skin_pustules= req.body.skin_pustules,
     result.infusion_of_blood_products=req.body.infusion_of_blood_products
     return result
},
updateBabyCNSMapper:(result,req)=>{
     result.features_of_encephalopathy= req.body.features_of_encephalopathy,
     result.seizures= req.body.seizures,
     result.abnormal_movements_like_tonic_posturing= req.body.abnormal_movements_like_tonic_posturing,
     result.af_bulge= req.body.af_bulge,
     result.tab_name= req.body.tab_name  
     return result
},
updateBabyGITMapper:(result,req)=>{
   result .abdominal_dystension= req.body.abdominal_dystension,
   result. frequency_of_stools= req.body.frequency_of_stools,
   result.diarrhea= req.body.diarrhea,
   result.vomiting= req.body.vomiting,
   result.feeding_intolerance= req.body.feeding_intolerance,
   result.baby_movement=req.body.baby_movement,
   result.tab_name= req.body.tab_name 
     return result
},
updateBabyInvestigationMapper:(result,req)=>{
     result.baby_thyroid_status= req.body.baby_thyroid_status,
     result.baby_thyroid_result= req.body.baby_thyroid_result,
     result.baby_blood_glucose= req.body.baby_blood_glucose,
     result.baby_haemoglobin_levels= req.body.baby_haemoglobin_levels,
     result.baby_c_reactive_protien_levels= req.body.baby_c_reactive_protien_levels,
     result.micro_esr=req.body.micro_esr,
     result.baby_procalcitonin_levels=req.body.baby_procalcitonin_levels,
     result.total_leucocute_count_unit=req.body.total_leucocute_count_unit,
     result.total_leucocute_count=req.body.total_leucocute_count,
     result.absolute_neutrophil_count=req.body.absolute_neutrophil_count,
     result.absolute_neutrophil_count_unit=req.body.absolute_neutrophil_count_unit,
     result.immature_to_mature_neutrophil_ratios=req.body.immature_to_mature_neutrophil_ratios,
     result.thrombocytopenia_unit=req.body.thrombocytopenia_unit,
     result.thrombocytopenia=req.body.thrombocytopenia,
     result.urine_rest_for_pus_cells=req.body.urine_rest_for_pus_cells,
     result.urine_culture_test=req.body.urine_culture_test,
     result.blood_culture_report=req.body.blood_culture_report,
     result.gram_positive_bacteria=req.body.gram_positive_bacteria,
     result.gram_positive_bacteria_if_other=req.body.gram_positive_bacteria_if_other,
     result.gram_negative_bacteria=req.body.gram_negative_bacteria,
     result.gram_negative_bacteria_if_other=req.body.gram_negative_bacteria_if_other,
     result.fungi=req.body.fungi,
     result.other_organism=req.body.other_organism,
     result.antibiotic_status_resisitant=req.body.antibiotic_status_resisitant,
     result.antibiotic_status_intermediate=req.body.antibiotic_status_intermediate,
     result.antibiotic_status_value=req.body.antibiotic_status_value,
     result.sodium=req.body.sodium,
     result.potassium=req.body.potassium,
     result.chlorine=req.body.chlorine,
     result.calcium= req.body.calcium,
     result.phosphate= req.body.phosphate,
     result.magnesium=req.body.magnesium,
     result.urea=req.body.urea,
     result.creatinine=req.body.creatinine,
     result.lactate_levels=req.body.lactate_levels,
     result.bilirubin_levels=req.body.bilirubin_levels,
     result.cord_ph=req.body.cord_ph,
     result.arrhythmia=req.body.arrhythmia,
     result.csf_culture=req.body.csf_culture,
     result.csf_culture_tsb_value=req.body.csf_culture_tsb_value,
     result.tab_name=req.body.tab_name
     return result
  },
  updateBabyAntibioticMapper:(result,req)=>{
     result.antibiotic_given= req.body.antibiotic_given,
     result.date_of_administration_of_antiobiotic= req.body.date_of_administration_of_antiobiotic,
     result.time_of_administration_of_antiobiotic_hours=req.body.time_of_administration_of_antiobiotic_hours,
     result.time_of_administration_of_antiobiotic_minute=req.body.time_of_administration_of_antiobiotic_minute,
     result.antibiotic_name= req.body.antibiotic_name,
     result.antibiotic_name_if_other= req.body.antibiotic_name_if_other,
     result.date_of_blood_samples_sent_for_culture_test= req.body.date_of_blood_samples_sent_for_culture_test,
     result.time_of_blood_samples_sent_for_culture_test_hours= req.body.time_of_blood_samples_sent_for_culture_test_hours,
     result.time_of_blood_samples_sent_for_culture_test_minute= req.body.time_of_blood_samples_sent_for_culture_test_minute,
     result.blood_sample_taken_prior_to_antiobiotic_administration= req.body.blood_sample_taken_prior_to_antiobiotic_administration
     return result
  },
  updateBabyFinalMapper:(result,req)=>{
      result.days_of_stay_in_hospital= req.body.days_of_stay_in_hospital,
      result.final_diagnosis_sepsis=req.body.final_diagnosis_sepsis,
      result.final_diagnosis_rds= req.body.final_diagnosis_rds,
      result.final_diagnosis_ttnb=req.body.final_diagnosis_ttnb,
      result.final_diagnosis_jaundice=req.body.final_diagnosis_jaundice,
      result.final_diagnosis_lbw=req.body.final_diagnosis_lbw,
      result.final_diagnosis_lga=req.body.final_diagnosis_lga,
      result.final_diagnosis_aga=req.body.final_diagnosis_aga,
      result.final_diagnosis_anemia= req.body.final_diagnosis_anemia,
      result.final_diagnosis_dextochordia=req.body.final_diagnosis_dextochordia,
      result.final_diagnosis_hypoglycemia=req.body.final_diagnosis_hypoglycemia,
      result.final_diagnosis_hypocalcemia=req.body.final_diagnosis_hypocalcemia,
      result.final_diagnosis_gastroenteritis=req.body.final_diagnosis_gastroenteritis,
      result.final_diagnosis_perinatal_respiratory_depression=req.body.final_diagnosis_perinatal_respiratory_depression,
      result.final_diagnosis_shock=req.body.final_diagnosis_shock,
      result.final_diagnosis_feeding_intolerence=req.body.final_diagnosis_feeding_intolerence,
      result.baby_discharge_date=req.body.baby_discharge_date,
      result.final_diagnosis_sga=req.body.final_diagnosis_sga,
      result.final_diagnosis_eos_los=req.body.final_diagnosis_eos_los,
      result.final_diagnosis_other=req.body.final_diagnosis_other
      return result
  },
  updateBabyMedicalRecordMapper:(result,req)=>{
     result.hospital_id=req.params.hospitalId
     result.hospital_branch_id=req.params.hospitalBranchId
     result.hospital_name=req.body.hospital_name
     result.hospital_branch_name=req.body.hospital_branch_name
     result.baby_medical_record_number=req.body.bmrn
     result.baby_mother_medical_record_number=req.body.mmrn
     return result
 },
 patientResultMapper:(result,req)=>{
     result.baby_name = req.body.babyName
     result.mother_name = req.body.motherName
     result.father_name = req.body.fatherName
     result.state = req.body.state
     result.address = req.body.address
     result.city = req.body.city
     result.nationality = req.body.nationality
     result.email_id = req.body.email
     result.primary_contact_no = req.body.contactNumberPrimary
     result.secondary_contact_no = req.body.contactNumberSecondary
     result.pincode = req.body.pincode
     result.updated_by = enumConst.userType.hospital_branch
     result.active_flag = req.body.status
     return result
 },
}
