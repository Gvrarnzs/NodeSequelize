const db = require('../models')

// create main Model
const Employees = db.employees

module.exports = {
    getSingleEmployee: async(req,res) => {
        try {
            let id = req.params.id
            let employee = await Employees.findOne({ where: { id: id }})
            return res.status(200).send(employee)
        } catch (error) {
            console.log(error)
            return res.status(500).send(error || { message: error.message });
        }
    }, 
    deleteSingleEmployee : async(req,res) => {
        try {
            let id = req.params.id
            await Employees.destroy({ where: { id: id }} )
            res.status(200).send('Employee is deleted !')
        } catch (error) {
            console.log(error)
            return res.status(500).send(error || { message: error.message });
        }
    }
}