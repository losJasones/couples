--CREATE MASTER DATA CARDS
INSERT INTO cards (id, img, is_visible, name) VALUES (0, "javascript.jpg", "false", "javascript");
INSERT INTO cards (id, img, is_visible, name) VALUES (1, "grunt.jpg", "false", "grunt");
INSERT INTO cards (id, img, is_visible, name) VALUES (2, "node.jpg", "false", "node");
INSERT INTO cards (id, img, is_visible, name) VALUES (3, "gulp.jpg", "false", "gulp");
INSERT INTO cards (id, img, is_visible, name) VALUES (4, "angular.jpg", "false", "angular");
INSERT INTO cards (id, img, is_visible, name) VALUES (5, "css.jpg", "false", "css");
INSERT INTO cards (id, img, is_visible, name) VALUES (6, "html.jpg", "false", "html");
INSERT INTO cards (id, img, is_visible, name) VALUES (7, "sass.jpg", "false", "sass");
INSERT INTO cards (id, img, is_visible, name) VALUES (8, "javascript.jpg", "false", "javascript");
INSERT INTO cards (id, img, is_visible, name) VALUES (9, "grunt.jpg", "false", "grunt");
INSERT INTO cards (id, img, is_visible, name) VALUES (10, "node.jpg", "false", "node");
INSERT INTO cards (id, img, is_visible, name) VALUES (11, "gulp.jpg", "false", "gulp");
INSERT INTO cards (id, img, is_visible, name) VALUES (12, "angular.jpg", "false", "angular");
INSERT INTO cards (id, img, is_visible, name) VALUES (13, "css.jpg", "false", "css");
INSERT INTO cards (id, img, is_visible, name) VALUES (14, "html.jpg", "false", "html");
INSERT INTO cards (id, img, is_visible, name) VALUES (15, "sass.jpg", "false", "sass");

--CREATE MASTER DATA AVATAR
INSERT INTO avatars (id,name,img) VALUES (1,"avatar1","avatar1.png");
INSERT INTO avatars (id,name,img) VALUES (2,"avatar2","avatar2.png");
INSERT INTO avatars (id,name,img) VALUES (3,"avatar3","avatar3.png");



----INSERT EN USERS
INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,AVATAR_ID) VALUES ("Aida","Gomez","aida@email.com",2);
INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,AVATAR_ID) VALUES ("Jacobo","Martinez","jacobo@email.com",3);
INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,AVATAR_ID) VALUES ("Miguel","Fontaneda","miguel@email.com",1);
INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,AVATAR_ID) VALUES ("Jose","Bermejo","jose@email.com",1);

----INSERT EN SCORES
INSERT INTO SCORES (numfails) VALUES ( 1);
INSERT INTO SCORES (numfails) VALUES ( 10);
INSERT INTO SCORES (numfails) VALUES ( 15);
INSERT INTO SCORES (numfails) VALUES ( 20);
INSERT INTO SCORES (numfails) VALUES ( 10);