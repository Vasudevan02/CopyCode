// Section: MySQL Cmds
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['mysql-cmds'] = {
    "title":  "MySQL Cmds",
    "cards":  [
                  {
                      "code":  "SHOW DATABASES;",
                      "title":  "1. Show Databases"
                  },
                  {
                      "code":  "CREATE DATABASE college;",
                      "title":  "2. Create Database"
                  },
                  {
                      "code":  "SHOW DATABASES;",
                      "title":  "3. Show Databases"
                  },
                  {
                      "code":  "USE college;",
                      "title":  "4. Use Database"
                  },
                  {
                      "code":  "CREATE TABLE students (\r\n  id INT PRIMARY KEY,\r\n  std_name VARCHAR(50),\r\n  rgno VARCHAR(20),\r\n  age INT\r\n);",
                      "title":  "5. Create Students Table"
                  },
                  {
                      "code":  "INSERT INTO students (id, std_name, rgno, age) VALUES\r\n(2, \u0027Nithish K\u0027, \u0027197CS24031\u0027, 18),\r\n(4, \u0027Nanda Kumar Y D\u0027, \u0027197CS25709\u0027, 19),\r\n(3, \u0027Darshan H R\u0027, \u0027197CS25706\u0027, 20),\r\n(1, \u0027Jeevan A O\u0027, \u0027197CS24015\u0027, 21),\r\n(5, \u0027Pavan B C\u0027, \u0027197CS24032\u0027, 22);",
                      "title":  "6. Insert Table Values"
                  },
                  {
                      "code":  "SELECT * FROM students;",
                      "title":  "7. Select All Records"
                  }
              ],
    "id":  "mysql-cmds",
    "pageTitle":  "MySQL Commands"
};
