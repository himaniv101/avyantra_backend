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
    
}

module.exports= queries;