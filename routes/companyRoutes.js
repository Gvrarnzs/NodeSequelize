const express = require("express")
const router = express.Router()
const {companyControllers} = require("../controllers")
const {addCompany, getCompany, updateCompany,getCompanyEmployee, addEmployee, updateEmployee} = companyControllers



router.post("/companies", addCompany)
router.post("/companies/:company_id/employees", addEmployee)
router.get("/companies/:id/employees", getCompanyEmployee)
router.get("/companies", getCompany)
router.put("/companies/:id/set_active", updateCompany )
router.put("/companies/:company_id/employees/:employee_id", updateEmployee)

module.exports = router