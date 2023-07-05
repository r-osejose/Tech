CREATE TABLE EMPLOYEES(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    LAST_NAME VARCHAR(50) NOT NULL,
    FIRST_NAME VARCHAR(50) NOT NULL,
    MIDDLE_NAME VARCHAR(50),
    AGE INT NOT NULL,
    CURRENT_STATUS VARCHAR(100) NOT NULL DEFAULT 'EMPLOYED'
    );
    
DESC EMPLOYEES;

INSERT INTO EMPLOYEES (LAST_NAME,FIRST_NAME,MIDDLE_NAME,AGE)
	VALUES('VIZHALIL','ROSE','JOSE',23);
    
INSERT INTO EMPLOYEES (LAST_NAME,FIRST_NAME,AGE)
	VALUES('JOSE','MINI',50);
    
INSERT INTO EMPLOYEES (LAST_NAME,FIRST_NAME,AGE,CURRENT_STATUS)
	VALUES('JOSE','JEGGY',24,'NOT EMPLOYED');
    
SELECT * FROM EMPLOYEES;