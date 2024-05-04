const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'CLIENT'
    }
});

const Trip = sequelize.define('trip', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    availableSeats: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    departureTime: { type: DataTypes.TIME, allowNull: false },
    arrivalTime: { type: DataTypes.TIME, allowNull: false },
    hour: {type: DataTypes.INTEGER, allowNull: false}
});

const Station = sequelize.define('station', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
});

const BusStation = sequelize.define('busStation', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
});

const Employee = sequelize.define('employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    hoursWorked: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
});

const Admin = sequelize.define('admin', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
});

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

// Определение связей между моделями
User.hasOne(Basket);
Basket.belongsTo(User);

User.hasOne(Employee);
Employee.belongsTo(User);

User.hasOne(Admin);
Admin.belongsTo(User);

// Определение связей с моделью Trip (Route)
Trip.belongsToMany(Employee, { through: 'EmployeeRoutes' });
Employee.belongsToMany(Trip, { through: 'EmployeeRoutes' });

Trip.belongsTo(Admin);
Admin.hasMany(Trip);

// Определение связей с моделями Station и BusStation
Station.hasMany(Trip, { foreignKey: 'departureStationId' });
Trip.belongsTo(Station, { as: 'departureStation' });

Station.hasMany(Trip, { foreignKey: 'arrivalStationId' });
Trip.belongsTo(Station, { as: 'arrivalStation' });

BusStation.hasMany(Trip, { foreignKey: 'busStationId' });
Trip.belongsTo(BusStation);
// Экспортируем модели
module.exports = {
    User,
    Trip,
    Station,
    BusStation,
    Employee,
    Admin,
    Basket
};


