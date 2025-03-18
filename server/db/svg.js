import { Model, DataTypes } from 'sequelize';

class SVG extends Model {}
function onConnection(sequelize) {
  SVG.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'svg',
      timestamps: false,
    }
  );
}

export { onConnection };
export default SVG;
