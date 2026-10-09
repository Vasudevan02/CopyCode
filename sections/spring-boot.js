// Section: Spring Boot Employee Project
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['spring-boot'] = {
    "title":  "Spring Boot",
    "cards":  [
                  {
                      "code":  "CREATE DATABASE factory;\n\nUSE factory;",
                      "title":  "1. Create Database"
                  },
                  {
                      "code":  "Project:  Maven\nLanguage: Java\nPackaging: Jar\nJava: 17 or 21\n\nDependencies:\n- Spring Web\n- Spring Data JPA\n- MySQL Driver\n\nArtifact: dipdb\nGenerate -\u003e Open in Eclipse / STS",
                      "title":  "2. Spring Initializr Setup"
                  },
                  {
                      "code":  "com.example.dipdb\n|\n|-- Entity\n|-- Repo\n\\-- Controller",
                      "title":  "3. Package Structure"
                  },
                  {
                      "code":  "package com.example.dipdb.Entity;\n\nimport jakarta.persistence.*;\n\n@Entity\n@Table(name = \"employ\")\npublic class Employ {\n\n    @Id\n    private int empno;\n\n    @Column(name = \"ename\")\n    private String ename;\n    @Column(name = \"job\")\n    private String job;\n    @Column(name = \"salary\")\n    private String salary;\n\n    public int getEmpno() {\n        return empno;\n    }\n\n    public void setEmpno(int empno) {\n        this.empno = empno;\n    }\n\n    public String getEname() {\n        return ename;\n    }\n\n    public void setEname(String ename) {\n        this.ename = ename;\n    }\n\n    public String getJob() {\n        return job;\n    }\n\n    public void setJob(String job) {\n        this.job = job;\n    }\n\n    public String getSalary() {\n        return salary;\n    }\n\n    public void setSalary(String salary) {\n        this.salary = salary;\n    }\n}",
                      "title":  "4. Employ.java (Entity)"
                  },
                  {
                      "code":  "spring.application.name=dipdb\n\nspring.datasource.url=jdbc:mysql://localhost:3306/factory\nspring.datasource.username=root\nspring.datasource.password=123\n\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect\n\n# Replace 123 with your actual MySQL password",
                      "title":  "5. application.properties"
                  },
                  {
                      "code":  "package com.example.dipdb.Repo;\n\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport com.example.dipdb.Entity.Employ;\n\npublic interface EmployRepo extends JpaRepository\u003cEmploy, Integer\u003e {\n\n}",
                      "title":  "6. EmployRepo.java"
                  },
                  {
                      "code":  "package com.example.dipdb.Controller;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.*;\nimport com.example.dipdb.Entity.Employ;\nimport com.example.dipdb.Repo.EmployRepo;\n\n@RestController\npublic class FactoryController {\n\n    @Autowired\n    EmployRepo db;\n\n    @PostMapping(\"/newemploy\")\n    public void saveEmploy(@RequestBody Employ obj) {\n        db.save(obj);\n    }\n}",
                      "title":  "7. FactoryController.java"
                  },
                  {
                      "code":  "package com.example.dipdb;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n@SpringBootApplication\npublic class DipdbApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(DipdbApplication.class, args);\n    }\n\n}",
                      "title":  "8. Main Class"
                  },
                  {
                      "code":  "Right-click project / main class\n-\u003e Run As\n-\u003e Spring Boot App\n\nWait for:\nTomcat started on port 8080",
                      "title":  "9. Run the Project"
                  },
                  {
                      "code":  "USE factory;\n\nSHOW TABLES;\n-- Result: employ\n\nDESC employ;\n-- Columns: empno | ename | job | salary",
                      "title":  "10. Check MySQL Table"
                  },
                  {
                      "code":  "Method : POST\nURL    : http://localhost:8080/newemploy\n\nBody -\u003e raw -\u003e JSON",
                      "title":  "11. Open Postman"
                  },
                  {
                      "code":  "{\n    \"empno\": 101,\n    \"ename\": \"Nithish\",\n    \"job\": \"Director\",\n    \"salary\": \"50000\"\n}",
                      "title":  "12. Employee JSON Body"
                  },
                  {
                      "code":  "USE factory;\n\nSELECT * FROM employ;\n\n-- Result:\n-- 101 | Nithish | Director | 50000",
                      "title":  "13. Check Data in MySQL"
                  }
              ],
    "id":  "spring-boot",
    "pageTitle":  "Spring Boot Employee Project"
};
