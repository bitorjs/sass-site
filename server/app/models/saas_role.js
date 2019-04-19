/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_role', {
    'roleId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "è§’è‰²Id",
      autoIncrement: true
    },
    'roleName': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "è§’è‰²åç§°"
    },
    'roleDesc': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "è§’è‰²æè¿°"
    },
    'role': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "è§’è‰²æ ‡å¿—"
    }
  }, {
    tableName: 'saas_role'
  });
};
