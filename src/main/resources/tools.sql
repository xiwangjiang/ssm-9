/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50527
Source Host           : 127.0.0.1:3306
Source Database       : tools

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2017-09-22 11:16:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tbEmployee
-- ----------------------------
DROP TABLE IF EXISTS `tbEmployee`;
CREATE TABLE `tbEmployee` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL COMMENT '登录账号',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `name` varchar(255) NOT NULL COMMENT '真实姓名',
  `x` int(11) NOT NULL COMMENT '横坐标',
  `y` int(11) NOT NULL COMMENT '纵坐标',
  `jsonMemo` text NOT NULL COMMENT '描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbEmployee
-- ----------------------------
INSERT INTO `tbEmployee` VALUES ('1', 'guest', '123', '门口', '1800', '1400', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('2', 'guest', '123', '货梯口', '1800', '1960', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('3', 'guest', '123', '洗手间', '1000', '1960', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('4', 'guest', '123', '王少鹏', '2000', '1400', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('5', 'guest', '123', '郝超', '2100', '1400', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('6', 'guest', '123', '老哥', '2200', '1400', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('7', 'guest', '123', '宋昕雨', '2300', '1400', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('8', 'guest', '123', '隗佳欣', '2500', '1480', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('9', 'guest', '123', '王娟', '2600', '1480', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('10', 'guest', '123', '机房', '2400', '1240', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('11', 'guest', '123', '11会议室', '2400', '1360', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('12', 'guest', '123', '胡强胜', '2000', '1200', '{desc:\'预留待开发\'}');
INSERT INTO `tbEmployee` VALUES ('13', 'guest', '123', '魏少龙', '2000', '1120', '{desc:\'预留待开发\'}');
