module.exports= (sequilize, DataTypes) => {
    const Companies = sequilize.define("companies", {
        company_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        telephone_number: {
            type: DataTypes.STRING(16)
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        address: {
            type: DataTypes.STRING(50)
        }
    })
    return Companies
}