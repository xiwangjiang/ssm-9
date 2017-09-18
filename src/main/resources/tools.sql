/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50527
Source Host           : 127.0.0.1:3306
Source Database       : tools

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2017-09-18 20:15:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tbUser
-- ----------------------------
DROP TABLE IF EXISTS `tbUser`;
CREATE TABLE `tbUser` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL COMMENT '登录账号',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `name` varchar(255) NOT NULL COMMENT '真实姓名',
  `x` int(11) NOT NULL COMMENT '横坐标',
  `y` int(11) NOT NULL COMMENT '纵坐标',
  `jsonMemo` text NOT NULL COMMENT '描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbUser
-- ----------------------------
INSERT INTO `tbUser` VALUES ('1', 'guest', '123', '王少鹏', '100', '40', '{desc:\'程序猿\'}');
INSERT INTO `tbUser` VALUES ('2', 'guest', '123', '郝超', '200', '120', '{desc:\'JAVA开发工程师\'}');
INSERT INTO `tbUser` VALUES ('3', 'guest', '123', '乔丹', '300', '80', '{desc:\'测试工程师\'}');
INSERT INTO `tbUser` VALUES ('4', 'guest', '123', '中国', '400', '120', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('5', 'guest', '123', '米国', '500', '80', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('6', 'guest', '123', '俄国', '700', '560', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('8', 'guest', '123', '朝鲜', '300', '40', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('9', 'guest', '123', '日本', '300', '0', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('10', 'guest', '123', '刚果', '300', '120', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('11', 'guest', '123', '老挝', '200', '40', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('12', 'guest', '123', '大数据', '1200', '520', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('13', 'guest', '123', '员工1', '100', '80', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('14', 'guest', '123', '员工2', '100', '120', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('15', 'guest', '123', '员工3', '100', '160', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('16', 'guest', '123', '员工4', '100', '200', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('20', 'guest', '123', '员工8', '100', '360', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('21', 'guest', '123', '员工9', '100', '400', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('22', 'guest', '123', '员工10', '100', '440', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('23', 'guest', '123', '员工11', '100', '480', '{desc:\'预留待开发\'}');
INSERT INTO `tbUser` VALUES ('24', 'guest', '123', '好像是吧', '200', '440', '{desc:\'预留待开发\'}');
