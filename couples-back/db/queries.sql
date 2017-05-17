--LIST

SELECT MAX(s.numfails),u.NAME,u.EMAIL,u.AVATAR FROM SCORES s, USERS u WHERE s.USER_ID=u.ID;



--GET USER

SELECT s.numfails,u.NAME,u.EMAIL,u.AVATAR FROM SCORES s, USERS u WHERE s.USER_ID=u.ID;


--CREATE
INSERT INTO USERS (NAME, EMAIL,AVATAR) VALUES (?, ?,?);
INSERT INTO SCORES (numfails, USERS_ID) VALUES ( ?, ?);
INSERT INTO AVATAR (ID,PATH) VALUES (?, ?);
INSERT INTO CARDS (ID, PATH,ISVISIBLE) VALUES (?, ?,?);

--DELETE
DELETE FROM SCORES WHERE id =?;
DELETE FROM USERS WHERE id =?;

--UPDATE
SELECT USERS_ID FROM SCORES WHERE id=?;
UPDATE USERS SET NAME=?,EMAIL=?,AVATAR=? WHERE id=?;
UPDATE SCORES SET numfails=? WHERE id=?;


--CREATE MASTER DATA CARDS
INSERT INTO card (id, img, is_visible, name) VALUES (0, "javascript.jpg", "false", "javascript");
INSERT INTO card (id, img, is_visible, name) VALUES (1, "grunt.jpg", "false", "grunt");
INSERT INTO card (id, img, is_visible, name) VALUES (2, "node.jpg", "false", "node");
INSERT INTO card (id, img, is_visible, name) VALUES (3, "gulp.jpg", "false", "gulp");
INSERT INTO card (id, img, is_visible, name) VALUES (4, "angular.jpg", "false", "angular");
INSERT INTO card (id, img, is_visible, name) VALUES (5, "css.jpg", "false", "css");
INSERT INTO card (id, img, is_visible, name) VALUES (6, "html.jpg", "false", "html");
INSERT INTO card (id, img, is_visible, name) VALUES (7, "sass.jpg", "false", "sass");
INSERT INTO card (id, img, is_visible, name) VALUES (8, "javascript.jpg", "false", "javascript");
INSERT INTO card (id, img, is_visible, name) VALUES (9, "grunt.jpg", "false", "grunt");
INSERT INTO card (id, img, is_visible, name) VALUES (10, "node.jpg", "false", "node");
INSERT INTO card (id, img, is_visible, name) VALUES (11, "gulp.jpg", "false", "gulp");
INSERT INTO card (id, img, is_visible, name) VALUES (12, "angular.jpg", "false", "angular");
INSERT INTO card (id, img, is_visible, name) VALUES (13, "css.jpg", "false", "css");
INSERT INTO card (id, img, is_visible, name) VALUES (14, "html.jpg", "false", "html");
INSERT INTO card (id, img, is_visible, name) VALUES (15, "sass.jpg", "false", "sass");

--CREATE MASTER DATA AVATAR
INSERT INTO avatar (id,name,img) VALUES (1,"avatar1","avatar1.jpg");
INSERT INTO avatar (id,name,img) VALUES (2,"avatar2","avatar2.jpg");
INSERT INTO avatar (id,name,img) VALUES (3,"avatar3","avatar3.jpg");