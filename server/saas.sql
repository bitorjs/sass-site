/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost
 Source Database       : sass

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : utf-8

 Date: 04/15/2019 11:20:12 AM
*/

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `saas_role`
-- ----------------------------
DROP TABLE IF EXISTS `saas_role`;
CREATE TABLE `saas_role` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `saas_user`
-- ----------------------------
DROP TABLE IF EXISTS `saas_user`;
CREATE TABLE `saas_user` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(50) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `delete_time` datetime DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `saas_wiki_article`
-- ----------------------------
DROP TABLE IF EXISTS `saas_wiki_article`;
CREATE TABLE `saas_wiki_article` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL,
  `content` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `saas_wiki_type`
-- ----------------------------
DROP TABLE IF EXISTS `saas_wiki_type`;
CREATE TABLE `saas_wiki_type` (
  `id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
