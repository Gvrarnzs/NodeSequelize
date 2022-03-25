const express = require("express")
const router = express.Router()
const {employeeControllers} = require("../controllers")
const {getSingleEmployee, deleteSingleEmployee} = employeeControllers



router.get("/employees/:id", getSingleEmployee)
router.delete("/employees/:id", deleteSingleEmployee)
module.exports = router