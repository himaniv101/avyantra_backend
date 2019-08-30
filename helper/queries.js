class queries{

    static getBabyMedicalRecord(req,start){
        let sql = 'SELECT ' +
        ' patient_infos.baby_name,patient_infos.mother_name, ' +
        ' patient_infos.father_name,patient_infos.primary_contact_no,patient_infos.secondary_contact_no,patient_infos.createdAt,patient_infos.updated_by, ' +
        ' patient_infos.address,patient_infos.city,patient_infos.state,patient_infos.pincode, ' +
        ' patient_infos.nationality,patient_infos.email_id,patient_infos.study_id, ' +
        ' patient_infos.active_flag AS status , patient_infos.patient_id,patient_infos.created_by, ' +
        ' patient_basic_infos.hospital_id,patient_basic_infos.hospital_name,patient_basic_infos.hospital_branch_id, ' +
        ' patient_basic_infos.baby_medical_record_number,patient_basic_infos.baby_mother_medical_record_number, ' +
        ' m_hospitals_branches.branch_name,patient_basic_infos.id AS patient_basic_infos_id ' +
        ' FROM patient_infos ' +
        ' JOIN patient_basic_infos ON patient_basic_infos.id=patient_infos.study_id ' +
        ' JOIN m_hospitals_branches ON  m_hospitals_branches.hospital_branch_id=patient_basic_infos.hospital_branch_id ' +
        ' WHERE patient_basic_infos.hospital_id=:hospital_id AND patient_basic_infos.hospital_branch_id=:hospital_branch_id '+
        ' LIMIT ' + req.params.end + ' OFFSET ' + start;
        return sql;           
    }  
    
    static searchReadingIdByStudyIdAndMrn(){
        let sql ='SELECT DISTINCT pbai.study_id,pbi.baby_medical_record_number,pbai.reading FROM patient_baby_appears_infos AS pbai,patient_basic_infos AS pbi WHERE pbai.study_id= pbi.id AND pbi.baby_medical_record_number= :baby_medical_record_number AND pbi.hospital_id =:hospital_id' ;
        return sql;           
    }  

    static getBabyFinalModel(){
        let sql ='SELECT  DISTINCT * FROM patient_baby_finals pbai  JOIN patient_basic_infos pbi ON  pbai.study_id = pbi.id WHERE study_id =:study_id AND hospital_id=:hospital_id AND reading = :reading LIMIT 1' ;
        return sql;           
    }  

    static getBabyAntibioticModel(){
        let sql ='SELECT  DISTINCT * FROM patient_baby_antibiotics pbai  JOIN patient_basic_infos pbi ON  pbai.study_id = pbi.id WHERE study_id =:study_id AND hospital_id=:hospital_id AND reading = :reading LIMIT 1' ;
        return sql;           
    }  

    static getBabyInvestigationModel(){
        let sql ='SELECT  DISTINCT * FROM patient_baby_investigations pbai  JOIN patient_basic_infos pbi ON  pbai.study_id = pbi.id WHERE study_id =:study_id AND hospital_id=:hospital_id AND reading = :reading LIMIT 1' ;
        return sql;           
    }  

    static getBabyGITModel(){
        let sql ='SELECT  DISTINCT * FROM patient_baby_git_infos pbai  JOIN patient_basic_infos pbi ON  pbai.study_id = pbi.id WHERE study_id =:study_id AND hospital_id=:hospital_id AND reading = :reading LIMIT 1' ;
        return sql;           
    }  

    static getBabyCNSModel(){
        let sql ='SELECT  DISTINCT * FROM patient_baby_cns_infos pbai  JOIN patient_basic_infos pbi ON  pbai.study_id = pbi.id WHERE study_id =:study_id AND hospital_id=:hospital_id AND reading = :reading LIMIT 1' ;
        return sql;           
    }  

    static getBabyCVModel(){
        let sql = 'SELECT  DISTINCT * FROM patient_baby_cv_infos pbai  JOIN patient_basic_infos pbi ON  pbai.study_id = pbi.id WHERE study_id =:study_id AND hospital_id=:hospital_id AND reading = :reading LIMIT 1';
        return sql;           
    }  

    static getBabyRespModel(){
        let sql = 'SELECT  DISTINCT * FROM patient_baby_resp_infos pbai  JOIN patient_basic_infos pbi ON  pbai.study_id = pbi.id WHERE study_id =:study_id AND hospital_id=:hospital_id AND reading = :reading LIMIT 1';
        return sql;           
    }  

    static getBabyAppearsModel(){
        let sql = 'SELECT  DISTINCT * FROM patient_baby_appears_infos pbai  JOIN patient_basic_infos pbi ON  pbai.study_id = pbi.id WHERE study_id =:study_id AND hospital_id=:hospital_id AND reading = :reading LIMIT 1';
        return sql;           
    } 

    static getHospitalProfile(){
        let sql = 'SELECT m_hospitals.hospital_id,m_hospitals.user_id,m_hospitals.hospital_name, '+
        ' m_users.address,m_users.city, m_users.contact_number,m_users.email_address, m_users.pincode, m_users.state, m_users.user_name, m_users.password '+
        ' FROM m_hospitals '+
        ' JOIN m_users ON m_hospitals.user_id = m_users.user_id '+
        ' WHERE m_hospitals.hospital_id = :hospital_id ';
        return sql;           
    } 

    static getHospitalBranches(){
        let sql ='SELECT * FROM  m_hospitals_branches , m_users WHERE m_hospitals_branches.user_id=m_users.user_id AND m_hospitals_branches.hospital_id=:hospitalId';
        return sql;           
    } 

    static getHopitalBranchRoles(){
        let sql ='SELECT m_roles.role ,m_roles.role_id,m_hospital_branch_roles.id AS hospital_branch_role_id ,m_hospital_branch_roles.hospital_branch_id,m_hospital_branch_roles.hospital_id FROM  m_roles  JOIN  m_hospital_branch_roles ON m_roles.role_id = m_hospital_branch_roles.role_id WHERE   m_hospital_branch_roles.hospital_branch_id =:hospital_branch_id AND m_hospital_branch_roles.hospital_id=:hospital_id AND m_hospital_branch_roles.deleted_flag=0 ORDER BY m_hospital_branch_roles.createdAt DESC';
        return sql;           
    } 

    static getHopitalBranchspecialities(){
        let sql ='SELECT m_specialities.speciality, m_specialities.speciality_id ,m_hospital_branch_specialities.id AS hospital_branch_speciality_id ,m_hospital_branch_specialities.hospital_id , m_hospital_branch_specialities.hospital_branch_id FROM m_specialities JOIN m_hospital_branch_specialities ON m_specialities.speciality_id =m_hospital_branch_specialities.speciality_id WHERE m_hospital_branch_specialities.hospital_id=:hospital_id AND m_hospital_branch_specialities.hospital_branch_id=:hospital_branch_id AND m_hospital_branch_specialities.deleted_flag=0 ORDER BY m_hospital_branch_specialities.createdAt DESC';
        return sql;           
    } 

    static getHospitalStaffRoles(){
        let sql ='SELECT m_hospital_branch_roles.id AS hospital_branch_roles_id ,m_roles.role_id ,m_roles.role ,m_hospital_branch_roles.hospital_id, m_hospital_branch_roles.hospital_branch_id  FROM  m_roles JOIN m_hospital_branch_roles ON m_roles.role_id = m_hospital_branch_roles.role_id WHERE hospital_id =:hospital_id';
        return sql;           
    } 
    
    static getHospitalStaffSpecialities(){
        let sql ='SELECT m_hospital_branch_specialities.id AS  hospital_branch_speciality_id ,m_specialities.speciality_id , m_specialities.speciality , m_hospital_branch_specialities.hospital_id,m_hospital_branch_specialities.hospital_branch_id FROM m_specialities  JOIN m_hospital_branch_specialities ON m_specialities.speciality_id = m_hospital_branch_specialities.speciality_id WHERE  hospital_id =:hospital_id';
        return sql;           
    }
    
    static getStaffs(req,start){
        let sql ='SELECT * FROM vw_get_staffs '+
        ' WHERE hospital_id=:hospital_id AND hospital_branch_id=:hospital_branch_id AND deleted_flag=0 '+
        ' LIMIT ' + req.params.end +' OFFSET ' +start
        return sql;           
    }

    static getStaffsPermission(req,start){
        let sql =' SELECT user_id , permission_id  ,map_user_permissions.active_flag, permission '+
        ' FROM map_user_permissions '+
        ' JOIN m_permissions ON m_permissions.permision_Id=map_user_permissions.permission_id '+
        ' WHERE user_id=:user_id '
        return sql;           
    }
    
    static getStaffDetails(){
        let sql ='SELECT  m_users.user_name, m_users.contact_number, m_users.email_address,m_staffs.staff_id,m_staffs.first_name,m_staffs.last_name,m_hospital_branch_specialities.speciality_id, '+
        'm_specialities.speciality,m_hospital_branch_roles.role_id,m_roles.role,map_staff_hospitals.hospital_id,map_staff_hospitals.hospital_branch_id,map_staff_hospitals.staff_hospital_id, '+
        'm_staffs.staff_id FROM m_users '+ 
        'JOIN m_staffs ON  m_users.user_id= m_staffs.user_id '+
        'JOIN map_staff_hospitals ON map_staff_hospitals.staff_id = map_staff_hospitals.staff_id '+
        'JOIN m_hospital_branch_specialities ON m_hospital_branch_specialities.id=m_staffs.hospital_branch_speciality_id '+
        'JOIN m_specialities ON m_hospital_branch_specialities.speciality_id=m_specialities.speciality_id '+
        'JOIN m_hospital_branch_roles ON m_hospital_branch_roles.id=m_staffs.hospital_branch_role_id '+
        'JOIN m_roles ON m_roles.role_id = m_hospital_branch_roles.role_id '+
        'WHERE m_staffs.staff_id=:staff_id AND map_staff_hospitals.hospital_id =:hospital_id AND map_staff_hospitals.hospital_branch_id=:hospital_branch_id  LIMIT 1';
        return sql;           
    }

    static getReferralDoctor(req,start){
        let sql ='SELECT '+
        ' map_referral_hospitals.hospital_id , map_referral_hospitals.hospital_branch_id,map_referral_hospitals.referral_id ,map_referral_hospitals.hospital_action_status AS hospital_action_status_id , map_referral_hospitals.referral_action_status AS referral_action_status_id,map_referral_hospitals.active_flag, '+
        ' m_referral_doctors.user_id,m_referral_doctors.first_name,m_referral_doctors.last_name,m_referral_doctors.hospital_branch_speciality_id, '+
        ' m_users.address,m_users.email_address,m_users.state,m_users.city,m_users.pincode,m_users.contact_number , '+
        ' m_hospital_branch_specialities.speciality_id , '+
        ' m_specialities.speciality, '+
        ' m_status.status_name AS hospital_action_status, '+
        ' ms.status_name AS referral_action_status '+
        ' FROM map_referral_hospitals '+
        ' JOIN m_referral_doctors ON m_referral_doctors.referral_id = map_referral_hospitals.referral_id '+
        ' JOIN m_status ON m_status.status_id = map_referral_hospitals.hospital_action_status '+
        ' JOIN m_status  ms ON ms.status_id = map_referral_hospitals.referral_action_status '+
        ' JOIN m_users ON m_users.user_id = m_referral_doctors.user_id '+
        ' JOIN  m_hospital_branch_specialities ON m_hospital_branch_specialities.speciality_id=m_referral_doctors.hospital_branch_speciality_id '+
        ' JOIN  m_specialities ON m_specialities.speciality_id = m_hospital_branch_specialities.speciality_id '+
        ' WHERE map_referral_hospitals.hospital_id=:hospital_id AND map_referral_hospitals.hospital_branch_id=:hospital_branch_id '+
        ' LIMIT ' + req.params.end +' OFFSET ' +start
        return sql;           
    }
}

module.exports= queries;