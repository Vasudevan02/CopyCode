// Section: Spring Boot Employee Project (Steps 1, 2, 3, 4)
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['spring-boot'] = {
    "id": "spring-boot",
    "title": "Spring Boot",
    "pageTitle": "Spring Boot Employee Project",
    "cards": [
        {
            "title": "1. Employ.java (Entity)",
            "code": "package com.example.dipdb.Entity;\n\nimport jakarta.persistence.*;\n\n@Entity\n@Table(name = \"employ\")\npublic class Employ {\n\n    @Id\n    private int empno;\n\n    @Column(name = \"ename\")\n    private String ename;\n    @Column(name = \"job\")\n    private String job;\n    @Column(name = \"salary\")\n    private String salary;\n\n    public int getEmpno() {\n        return empno;\n    }\n\n    public void setEmpno(int empno) {\n        this.empno = empno;\n    }\n\n    public String getEname() {\n        return ename;\n    }\n\n    public void setEname(String ename) {\n        this.ename = ename;\n    }\n\n    public String getJob() {\n        return job;\n    }\n\n    public void setJob(String job) {\n        this.job = job;\n    }\n\n    public String getSalary() {\n        return salary;\n    }\n\n    public void setSalary(String salary) {\n        this.salary = salary;\n    }\n}"
        },
        {
            "title": "2. application.properties",
            "code": "spring.application.name=dipdb\n\nspring.datasource.url=jdbc:mysql://localhost:3306/factory\nspring.datasource.username=root\nspring.datasource.password=123\n\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect\n\n# Replace 123 with your actual MySQL password"
        },
        {
            "title": "3. EmployRepo.java",
            "code": "package com.example.dipdb.Repo;\n\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport com.example.dipdb.Entity.Employ;\n\npublic interface EmployRepo extends JpaRepository<Employ, Integer> {\n\n}"
        },
        {
            "title": "4. FactoryController.java",
            "code": "package com.example.dipdb.Controller;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.*;\nimport com.example.dipdb.Entity.Employ;\nimport com.example.dipdb.Repo.EmployRepo;\n\n@RestController\npublic class FactoryController {\n\n    @Autowired\n    EmployRepo db;\n\n    @PostMapping(\"/newemploy\")\n    public void saveEmploy(@RequestBody Employ obj) {\n        db.save(obj);\n    }\n}"
        }
    ]
};
