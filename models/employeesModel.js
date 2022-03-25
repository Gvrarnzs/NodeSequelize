module.exports= (sequilize, DataTypes) => {
    const Employees = sequilize.define("employees", {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phone_number : {
            type: DataTypes.STRING(16),
        },
        jobtitle: {
            type: DataTypes.ENUM('manager', 'director', 'staff'),
            allowNull: false
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Employees
}