module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    mtaId: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    discount: { type: DataTypes.FLOAT, defaultValue: 0.0 },
    qrCode: { type: DataTypes.STRING },
    token: { type: DataTypes.STRING },
  });
};
