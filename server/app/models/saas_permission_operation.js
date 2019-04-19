/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_permission_operation', {
    'permissionId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'saas_permission',
        key: 'id'
      }
    },
    'operationId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'saas_operation',
        key: 'id'
      }
    }
  }, {
    tableName: 'saas_permission_operation'
  });
};
