import { sequelize, DataTypes, Op } from '../utils/sequelize';

const collection = require('./saas_collection');
const menu = require('./saas_menu');
const operation = require('./saas_operation');
const permission_operation = require('./saas_permission_operation');
const permission = require('./saas_permission');
const role_permission = require('./saas_role_permission');
const role = require('./saas_role');
const user_role = require('./saas_user_role');
const users = require('./saas_users');
const wiki_article = require('./saas_wiki_article');
const wiki_type = require('./saas_wiki_type');


export default {
  sequelize: sequelize,
  Collection: collection(sequelize, DataTypes, Op),
  Menu: menu(sequelize, DataTypes, Op),
  Operation: operation(sequelize, DataTypes, Op),
  PermissionOperation: permission_operation(sequelize, DataTypes, Op),
  Permission: permission(sequelize, DataTypes, Op),
  RolePermission: role_permission(sequelize, DataTypes, Op),
  Role: role(sequelize, DataTypes, Op),
  UserRole: user_role(sequelize, DataTypes, Op),
  Users: users(sequelize, DataTypes, Op),
  WikiArticle: wiki_article(sequelize, DataTypes, Op),
  WikiType: wiki_type(sequelize, DataTypes, Op),
}