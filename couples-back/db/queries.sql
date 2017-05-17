--LIST

SELECT MAX(s.numfails),u.NAME,u.EMAIL,u.AVATAR FROM SCORES s, USERS u WHERE s.EMAIL=u.EMAIL;



--GET USER

SELECT s.numfails,u.NAME,u.EMAIL,u.AVATAR FROM SCORES s, USERS u WHERE s.EMAIL=u.EMAIL;


--CREATE
INSERT INTO USERS (NAME, EMAIL,AVATAR) VALUES (?, ?,?);
INSERT INTO SCORES (numfails, EMAIL) VALUES ( ?, ?);
INSERT INTO AVATAR (ID,NAME,IMG) VALUES (?, ?,?);
INSERT INTO CARDS (ID, NAME,IMG,ISVISIBLE) VALUES (?, ?,?,?);

--DELETE
DELETE FROM SCORES WHERE id =?;
DELETE FROM USERS WHERE id =?;

--UPDATE
SELECT s FROM SCORES s WHERE EMAIL=?;
UPDATE USERS SET NAME=?,EMAIL=?,AVATAR=? WHERE id=?;
UPDATE SCORES SET numfails=? WHERE EMAIL=?;


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
INSERT INTO avatar (id,name,img) VALUES (1,"avatar1","avatar1.png");
INSERT INTO avatar (id,name,img) VALUES (2,"avatar2","avatar2.png");
INSERT INTO avatar (id,name,img) VALUES (3,"avatar3","avatar3.png");