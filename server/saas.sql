/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50643
 Source Host           : localhost
 Source Database       : saas

 Target Server Type    : MySQL
 Target Server Version : 50643
 File Encoding         : utf-8

 Date: 04/21/2019 12:16:29 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `saas_collection`
-- ----------------------------
DROP TABLE IF EXISTS `saas_collection`;
CREATE TABLE `saas_collection` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL,
  `utc_create` datetime DEFAULT NULL,
  `utc_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `saas_collection`
-- ----------------------------
BEGIN;
INSERT INTO `saas_collection` VALUES ('1', '运维笔记', 'https://www.kancloud.cn/devops-centos/centos-linux-devops/361133', '1', '2019-04-19 10:08:17', '2019-04-19 10:08:17'), ('2', '二维码', 'http://www.wwei.cn/', '1', '2019-04-19 10:10:12', '2019-04-19 10:10:12'), ('3', 'Json 格式化', 'https://www.json.cn/', '1', '2019-04-19 10:10:38', '2019-04-19 10:10:38'), ('6', 'TinyPNG', 'https://tinypng.com/', '1', '2019-04-19 10:17:59', '2019-04-19 10:17:59');
COMMIT;

-- ----------------------------
--  Table structure for `saas_menu`
-- ----------------------------
DROP TABLE IF EXISTS `saas_menu`;
CREATE TABLE `saas_menu` (
  `menuId` int(11) NOT NULL AUTO_INCREMENT COMMENT '菜单Id',
  `parentId` int(11) DEFAULT NULL COMMENT '上级Id',
  `menuName` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单名称',
  `menuIcon` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单图标',
  `menuUrl` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单链接',
  `menuType` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单类型',
  `menuOrder` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单排序',
  `menuStatus` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单状态',
  PRIMARY KEY (`menuId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records of `saas_menu`
-- ----------------------------
BEGIN;
INSERT INTO `saas_menu` VALUES ('1', '0', '用户管理', '&#xe610', '#', '1', '1', '1'), ('2', '1', '管理员管理', '&#xe604', 'user/queryAll.do', '2', '2', '1'), ('3', '1', '用户统计', '&#xe604', 'test', '2', '3', '1'), ('4', '0', '在线管理', '&#xe610', '#', '1', '4', '1'), ('5', '4', '在线情况', '&#xe604', null, '2', '5', '1'), ('6', '4', '在线聊天', '&#xe604', 'article/list.do', '2', '6', '1'), ('7', '0', '系统管理', '&#xe610', '#', '1', '7', '1'), ('8', '7', '角色管理', '&#xe604', 'role/queryAll.do', '2', '8', '1'), ('9', '7', '权限管理', '&#xe604', 'permission/queryAll.do', '2', '9', '1'), ('10', '7', '菜单管理', '&#xe604', 'menu/getMenus.do', '2', '10', '1'), ('11', '0', '平台资料', '&#xe610', '#', '1', '11', '1');
COMMIT;

-- ----------------------------
--  Table structure for `saas_operation`
-- ----------------------------
DROP TABLE IF EXISTS `saas_operation`;
CREATE TABLE `saas_operation` (
  `id` int(11) NOT NULL COMMENT '操作Id，主键',
  `desc` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '操作描述',
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '操作名称',
  `operation` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '操作标志',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_o_1` (`operation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records of `saas_operation`
-- ----------------------------
BEGIN;
INSERT INTO `saas_operation` VALUES ('1', '创建操作', '创建', 'create'), ('2', '编辑权限', '编辑', 'edit'), ('3', '删除权限', '删除', 'delete'), ('4', '浏览权限', '浏览', 'view');
COMMIT;

-- ----------------------------
--  Table structure for `saas_permission`
-- ----------------------------
DROP TABLE IF EXISTS `saas_permission`;
CREATE TABLE `saas_permission` (
  `id` int(11) NOT NULL COMMENT '权限Id',
  `pdesc` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '权限描述',
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '权限名称',
  `menuId` int(11) DEFAULT NULL COMMENT '菜单Id',
  PRIMARY KEY (`id`),
  KEY `p_fk_1` (`menuId`),
  CONSTRAINT `p_fk_1` FOREIGN KEY (`menuId`) REFERENCES `saas_menu` (`menuId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records of `saas_permission`
-- ----------------------------
BEGIN;
INSERT INTO `saas_permission` VALUES ('1', '用户管理的权限', '用户管理', '1'), ('2', '管理员管理的权限', '管理员管理', '2'), ('3', '用户统计的权限', '用户统计', '3'), ('4', '在线管理的权限', '在线管理', '4'), ('5', '在线情况的权限', '在线情况', '5'), ('6', '在线聊天的权限', '在线聊天', '6'), ('7', '系统管理的权限', '系统管理', '7'), ('8', '角色管理的权限', '角色管理', '8'), ('9', '权限管理的权限', '权限管理', '9'), ('10', '菜单管理的权限', '菜单管理', '10'), ('11', '平台资料的权限', '平台资料', '11');
COMMIT;

-- ----------------------------
--  Table structure for `saas_permission_operation`
-- ----------------------------
DROP TABLE IF EXISTS `saas_permission_operation`;
CREATE TABLE `saas_permission_operation` (
  `permissionId` int(11) NOT NULL,
  `operationId` int(11) NOT NULL,
  PRIMARY KEY (`permissionId`,`operationId`),
  KEY `po_fk_1` (`operationId`),
  CONSTRAINT `po_fk_1` FOREIGN KEY (`operationId`) REFERENCES `saas_operation` (`id`),
  CONSTRAINT `po_fk_2` FOREIGN KEY (`permissionId`) REFERENCES `saas_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records of `saas_permission_operation`
-- ----------------------------
BEGIN;
INSERT INTO `saas_permission_operation` VALUES ('1', '1'), ('2', '2'), ('3', '3');
COMMIT;

-- ----------------------------
--  Table structure for `saas_project_deploy`
-- ----------------------------
DROP TABLE IF EXISTS `saas_project_deploy`;
CREATE TABLE `saas_project_deploy` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `utc_create` datetime DEFAULT NULL,
  `utc_modified` datetime DEFAULT NULL,
  `is_done` tinyint(4) DEFAULT '0' COMMENT '0 未审核 1 待发布, 2 正在发布  3 发布成功, 4发布失败  5已回滚 10 拒绝发布 ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Table structure for `saas_project_user`
-- ----------------------------
DROP TABLE IF EXISTS `saas_project_user`;
CREATE TABLE `saas_project_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pro_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `utc_create` datetime DEFAULT NULL,
  `utc_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Table structure for `saas_role_permission`
-- ----------------------------
DROP TABLE IF EXISTS `saas_role_permission`;
CREATE TABLE `saas_role_permission` (
  `rpId` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '表Id',
  `roleId` int(11) NOT NULL COMMENT '角色Id',
  `permissionId` int(11) NOT NULL COMMENT '权限Id',
  PRIMARY KEY (`rpId`),
  KEY `rp_fk_2` (`permissionId`),
  KEY `rp_fk_1` (`roleId`),
  CONSTRAINT `rp_fk_1` FOREIGN KEY (`roleId`) REFERENCES `saas_role` (`roleId`),
  CONSTRAINT `rp_fk_2` FOREIGN KEY (`permissionId`) REFERENCES `saas_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records of `saas_role_permission`
-- ----------------------------
BEGIN;
INSERT INTO `saas_role_permission` VALUES ('02a97146f6f4', '2', '1'), ('0bc217ced57a', '1', '1'), ('1623edee1d80', '1', '2'), ('2897c5ff0aa8', '1', '3'), ('421ddf008a05', '1', '4'), ('4b76f155fd74', '9', '1'), ('4dcadb89531b', '1', '7'), ('55eb164457e2', '9', '2'), ('59084a9f6914', '2', '2'), ('5a2b34b2f1a7', '1', '10'), ('63a5d5a8dae6', '1', '9'), ('9ad0b2c3be28', '1', '8'), ('9fa9725142c1', '2', '3'), ('ba83ae853640', '1', '6'), ('d5aec431edf6', '1', '5');
COMMIT;

-- ----------------------------
--  Table structure for `saas_user_role`
-- ----------------------------
DROP TABLE IF EXISTS `saas_user_role`;
CREATE TABLE `saas_user_role` (
  `userId` int(11) NOT NULL COMMENT '用户Id,联合主键',
  `roleId` int(11) NOT NULL COMMENT '角色Id，联合主键',
  PRIMARY KEY (`userId`,`roleId`),
  KEY `ur_fk_2` (`roleId`),
  CONSTRAINT `ur_fk_1` FOREIGN KEY (`userId`) REFERENCES `saas_user` (`id`),
  CONSTRAINT `ur_fk_2` FOREIGN KEY (`roleId`) REFERENCES `saas_role` (`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records of `saas_user_role`
-- ----------------------------
BEGIN;
INSERT INTO `saas_user_role` VALUES ('1', '1'), ('1', '2'), ('2', '2'), ('1', '3'), ('2', '3'), ('3', '3'), ('1', '4'), ('3', '4'), ('1', '6'), ('1', '7'), ('3', '7'), ('9', '9');
COMMIT;

-- ----------------------------
--  Table structure for `saas_users`
-- ----------------------------
DROP TABLE IF EXISTS `saas_users`;
CREATE TABLE `saas_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `passwd` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `salt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `utc_create` datetime DEFAULT NULL,
  `utc_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records of `saas_users`
-- ----------------------------
BEGIN;
INSERT INTO `saas_users` VALUES ('1', 'bitores', null, null, null, '0910f968c112b7a592f81a1ed979b142aecae039', '87956fb5b14e06ed78d71fb909984da0bfd77daaa747bbb12118cf99e8f5', '2019-04-18 19:20:02', '2019-04-18 19:20:02');
COMMIT;

-- ----------------------------
--  Table structure for `saas_wiki_article`
-- ----------------------------
DROP TABLE IF EXISTS `saas_wiki_article`;
CREATE TABLE `saas_wiki_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` int(11) NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `keywords` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `summary` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `utc_create` datetime DEFAULT NULL,
  `utc_modified` datetime DEFAULT NULL,
  `star` int(10) unsigned DEFAULT '0',
  `view` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records of `saas_wiki_article`
-- ----------------------------
BEGIN;
INSERT INTO `saas_wiki_article` VALUES ('13', '入职引导', '9', '男怕入错行，女怕嫁错郎。在如今快节奏的生活中，我们最怕的是自己的工作没有强大的福利保障。阿里巴巴、百度、腾讯、京东等企业你更想去哪家公司？看看这些福利有没有hin扎心？\n\n![img](https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3218811595,1827682254&fm=173&s=329615CD0E5122574E14093D03009052&w=458&h=299&img.JPEG)\n\n腾讯微信团队在岁末发放iPhone作为“阳光普照奖”已成惯例。今年每名微信员工又获赠一支白色顶配版256GB的iPhone X。据报道，自2016年起，包括微信在内的腾讯员工每人未来3年内，每年能拿到腾讯100股股票，3年能拿300股，市价约港币14万。在一线城市租房的员工，每年还有人民币1.5万住房补贴。\n\n![img](https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2099357509,3462915328&fm=173&s=C728B244121305D000B3F4370300304B&w=480&h=294&img.JPEG)\n\n至于阿里巴巴的员工福利之一则是能以市价6折购买员工房。另外，阿里巴巴给每名员工提供3年免息的人民币30万贷款。服务满两年且符合条件的正式员工，可向公司申请。杭州阿里总部附近更新建了380户阿里员工专享公寓，售价仅市价6折。\n\n![img](https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2324771187,2690511327&fm=173&s=BD8A377E58A3E49CB0047CE30300E0E0&w=536&h=385&img.JPEG)\n\n一向在意员工福利的刘强东，在给员工宿舍改造升级后，又将京东的“安居计划”升级，基本在京东总部1.5小时范围内。在北京工作的员工可购房地区扩展为：北京市、天津市、河北三河市、河北廊坊市、河北高碑店市和河北涿州市。从2012年起，京东就设立专项基金4.5亿元，向符合条件的员工提供最高100万的无抵押、无担保、无利息的购房借款，用于支付可支持地区范围内的员工家庭首套房首付款。', '引导', '入职时必要的文档,包括 入职导引, 公司相关资料, 公司福利等', '2019-04-18 21:36:24', '2019-04-18 21:36:24', '0', '0'), ('14', 'hh', '9', '# bbe\n\n### yys\n\n- a\n- b\n- c\n- h\n\n```javascript\nlet y = 1;\nfunction a(){\n  const r = 0;\n}\n```\n', 'h|u|p|q', 'test', '2019-04-19 07:40:27', '2019-04-19 07:40:27', '0', '0'), ('15', '大公司福利令人喷血！行业大佬都为员工做了什么？', '10', '男怕入错行，女怕嫁错郎。在如今快节奏的生活中，我们最怕的是自己的工作没有强大的福利保障。阿里巴巴、百度、腾讯、京东等企业你更想去哪家公司？看看这些福利有没有hin扎心？\n\n![img](https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3218811595,1827682254&fm=173&s=329615CD0E5122574E14093D03009052&w=458&h=299&img.JPEG)\n\n腾讯微信团队在岁末发放iPhone作为“阳光普照奖”已成惯例。今年每名微信员工又获赠一支白色顶配版256GB的iPhone X。据报道，自2016年起，包括微信在内的腾讯员工每人未来3年内，每年能拿到腾讯100股股票，3年能拿300股，市价约港币14万。在一线城市租房的员工，每年还有人民币1.5万住房补贴。\n\n![img](https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2099357509,3462915328&fm=173&s=C728B244121305D000B3F4370300304B&w=480&h=294&img.JPEG)\n\n至于阿里巴巴的员工福利之一则是能以市价6折购买员工房。另外，阿里巴巴给每名员工提供3年免息的人民币30万贷款。服务满两年且符合条件的正式员工，可向公司申请。杭州阿里总部附近更新建了380户阿里员工专享公寓，售价仅市价6折。\n\n![img](https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2324771187,2690511327&fm=173&s=BD8A377E58A3E49CB0047CE30300E0E0&w=536&h=385&img.JPEG)\n\n一向在意员工福利的刘强东，在给员工宿舍改造升级后，又将京东的“安居计划”升级，基本在京东总部1.5小时范围内。在北京工作的员工可购房地区扩展为：北京市、天津市、河北三河市、河北廊坊市、河北高碑店市和河北涿州市。从2012年起，京东就设立专项基金4.5亿元，向符合条件的员工提供最高100万的无抵押、无担保、无利息的购房借款，用于支付可支持地区范围内的员工家庭首套房首付款。', '福利|行业|公司', '大佬都为自己的员工准备的足够的福利 没有对比就没有伤害 扎铁了 老心！', '2019-04-19 07:42:06', '2019-04-19 11:45:04', '2', '4'), ('16', 'a', '9', 'a', 'b', 'c', '2019-04-19 08:04:12', '2019-04-19 20:35:49', '0', '2');
COMMIT;

-- ----------------------------
--  Table structure for `saas_wiki_type`
-- ----------------------------
DROP TABLE IF EXISTS `saas_wiki_type`;
CREATE TABLE `saas_wiki_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `utc_create` datetime DEFAULT NULL,
  `utc_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
--  Records of `saas_wiki_type`
-- ----------------------------
BEGIN;
INSERT INTO `saas_wiki_type` VALUES ('9', '入职文档', '2019-04-18 21:34:20', '2019-04-18 21:34:20'), ('10', '新闻', '2019-04-19 07:41:17', '2019-04-19 07:41:17');
COMMIT;

-- ----------------------------
--  Table structure for `saas_work_unit`
-- ----------------------------
DROP TABLE IF EXISTS `saas_work_unit`;
CREATE TABLE `saas_work_unit` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `utc_create` datetime DEFAULT NULL,
  `utc_motified` datetime DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` int(10) unsigned DEFAULT '2' COMMENT '1: 机构  2: 公司',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
