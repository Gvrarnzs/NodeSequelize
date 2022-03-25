const dbConfig = require("../config/dbConfig.js")

const {Sequelize, DataTypes} = require('sequelize')


const sequilize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,


        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)
sequilize.authenticate()
.then(() => {
    console.log('connected')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequilize = sequilize

db.companies = require('./companiesModel')(sequilize, DataTypes)
db.employees = require("./employeesModel")(sequilize, DataTypes)

// force true berarti ketika dijalankan jika ada table dengan nama yang sama maka dia akan menghapus yang lama dan membuat yang baru, yang mana ini dapat menyebabkan kita kehilangan data
db.sequilize.sync({force: false})
.then(() => {
    console.log('yes re-sync done!')
})
.catch(err => {
    console.log('Error' + err)
})

db.companies.hasMany(db.employees, {
    foreignKey: 'company_id',
    as: 'employees'
})

db.employees.belongsTo(db.companies, {
    foreignKey: 'company_id',
    as: 'companies'
})


module.exports = db