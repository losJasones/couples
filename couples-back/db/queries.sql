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
INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,AVATAR_ID) VALUES ("Aida","apellido","aida@email.com",2);
INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,AVATAR_ID) VALUES ("Jacobo","apellido","jacobo@email.com",3);
INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,AVATAR_ID) VALUES ("Miguel","apellido","miguel@email.com",1);
INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,AVATAR_ID) VALUES ("Jose","apellido","jose@email.com",1);

----INSERT EN SCORES
INSERT INTO SCORES (numfails, email) VALUES ( 1,"jose@email.com");
INSERT INTO SCORES (numfails, email) VALUES ( 100,"jose@email.com");
INSERT INTO SCORES (numfails, email) VALUES ( 100,"aida@email.com");
INSERT INTO SCORES (numfails, email) VALUES ( 10,"jose@email.com");
INSERT INTO SCORES (numfails, email) VALUES ( 9,"miguel@email.com");
INSERT INTO SCORES (numfails, email) VALUES ( 9,"jacobo@email.com");
INSERT INTO SCORES (numfails, email) VALUES ( 7,"aida@email.com");