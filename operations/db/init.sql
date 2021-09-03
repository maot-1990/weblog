CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `type` varchar(32) NOT NULL,
  `content` longtext NOT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `img_base64` text,
  `img_type` varchar(32) DEFAULT NULL,
  `category` varchar(64) NOT NULL,
  `author` varchar(64) DEFAULT NULL,
  `read_count` int(11) DEFAULT NULL,
  `like_count` int(11) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;