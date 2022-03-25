const db = require('../models')

// create main Model
const Companies = db.companies
const Employees = db.employees

module.exports = {
    addCompany: async (req,res) => {
        try {
            const { company_name, telephone_number, address } = req.body;
            let data = {
                company_name: company_name,
                telephone_number: telephone_number,
                address: address
            }
            const company = await Companies.create(data)
            if (company){
                let result = {status : 201, code : 201, data: {id : company.id}, message: "Success"}
                return res.status(200).send(result)
            }else {
                throw {message: 'Cannot Add Company'}
            }
        } catch (error) {
            console.log(error)
            return res.status(500).send(error || { message: error.message });
        }
    },
    getCompany: async(req,res) => {
        try {
            const {count, rows}  = await Companies.findAndCountAll({})
            if (rows){
                let result = {status : 201, code : 201, data: {count : count, rows: [...rows]}, message: "Success"}
                return res.status(200).send(result)
            }else {
                throw {message: 'Cannot Get Company'}
            }
        } catch (error) {
            console.log(error)
            return res.status(500).send(error || { message: error.message });
        }
    },
    updateCompany: async(req,res) => {
        try {
            let id = req.params.id
            const company = await Companies.update({is_active: 1},{ where: { id: id }})
            if(company[0] !== 0){
                let result = {status: 201, code: 201, data: {id: req.params.id, is_active: "true"}, message: "Success"}
                return res.status(200).send(result)
            }else {
                throw {message: 'Tidak Berhasil Update'}
            }
            
        } catch (error) {
            console.log(error)
            return res.status(500).send(error || { message: error.message });
        }
    },
    getCompanyEmployee : async (req,res) => {
        try {
            const id = req.params.id

            const company = await Companies.findOne({
                include: [{
                    model: Employees,
                    as: 'employees'
                }],
                where: { id: id }
            })
            if(company === null){
                throw {message: "Id Company Tidak Ditemukan"}
            }
            let result = {status: 200, code: 200, data: {
                id: company.id,
                company_name: company.company_name,
                is_active: company.is_active,
                employees: company.employees
            }, message: "Success"}
            return res.status(200).send(result)
        } catch (error) {
            console.log(error)
            return res.status(500).send( error );
        }
    },
    addEmployee: async (req,res) => {
        console.log("masuk")
        const company_id = req.params.company_id
        try {
            const { name, email, phone_number, jobtitle } = req.body;
            let data = {
                name: name,
                email: email,
                phone_number: phone_number,
                jobtitle: jobtitle,
                company_id : company_id
            }
            const employee = await Employees.create(data)
            if (employee){
                let result = {status : 201, code : 201, data: {id : employee.id, company_id: employee.company_id}, message: "Success"}
                return res.status(200).send(result)
            }else {
                throw {message: 'Cannot Add Company'}
            }
        } catch (error) {
            console.log(error)
            return res.status(500).send(error || { message: error.message });
        }
    },
    updateEmployee: async(req,res) => {
        try {
            let id = req.params.employee_id
            let compId = req.params.company_id
            const employee = await Employees.update(req.body,{ where: { id: id, company_id: compId }})
            console.log(employee)
            if(employee[0] !== 0){
                let result = {status: 201, code: 201, data: {id: req.params.employee_id, company_id: req.params.company_id}, message: "Success"}
                return res.status(200).send(result)
            }else {
                throw {message: 'Tidak Berhasil Update'}
            }
            
        } catch (error) {
            console.log(error)
            return res.status(500).send(error || { message: error.message });
        }
    },
}