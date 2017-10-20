# 用户表
create table user(
  id int(11) not NULL AUTO_INCREMENT PRIMARY KEY ,
  nickname VARCHAR(50) not NULL ,
  email VARCHAR(50) not NULL UNIQUE ,
  password VARCHAR(50) not NULL ,
  enabled tinyint(4) DEFAULT '1' COMMENT '1---可用，0--禁用',
  create_time timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_time timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
);

# 待办事项
create table schedule(
  id int(11) not NULL AUTO_INCREMENT PRIMARY KEY ,
  content VARCHAR(256) NOT NULL COMMENT '内容',
  email VARCHAR(50) not NULL ,
  enabled tinyint(4) DEFAULT '1' COMMENT '1---可用，0--禁用',
  create_time timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_time timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  foreign key(email) references user(email)
);

# 日记简记

create table diary(
  id int(11) not NULL AUTO_INCREMENT PRIMARY KEY ,
  topic VARCHAR(100) COMMENT '关键词、标题' ,
  content VARCHAR(256) NOT NULL COMMENT '内容',
  email VARCHAR(50) not NULL ,
  enabled tinyint(4) DEFAULT '1' COMMENT '1---可用，0--禁用',
  create_time timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_time timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  foreign key(email) references user(email)
);

# 知识点
create table knowledge(
  id int(11) not NULL AUTO_INCREMENT PRIMARY KEY ,
  question VARCHAR(128) NOT NULL COMMENT '问题',
  answer VARCHAR(256) NOT NULL  COMMENT '答案',
  proficiency int(4) DEFAULT '0' COMMENT '熟练度',
  email VARCHAR(50) not NULL ,
  enabled tinyint(4) DEFAULT '1' COMMENT '1---可用，0--禁用',
  create_time timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_time timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  foreign key(email) references user(email)
);