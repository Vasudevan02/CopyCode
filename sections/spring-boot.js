// Section: Spring Boot Projects (Factory, Hospital, Bike Showroom)
window.SECTIONS_DATA = window.SECTIONS_DATA || {};

// 1. Factory (Employee)
window.SECTIONS_DATA['spring-boot-factory'] = {
    "id": "spring-boot-factory",
    "title": "Factory",
    "pageTitle": "Spring Boot — Factory (Employee) Project",
    "cards": [
        {
            "title": "1. Employ.java (Entity)",
            "code": "package com.example.dipdb.Entity;\n\nimport jakarta.persistence.*;\n\n@Entity\n@Table(name = \"employ\")\npublic class Employ {\n\n    @Id\n    private int empno;\n\n    @Column(name = \"ename\")\n    private String ename;\n    @Column(name = \"job\")\n    private String job;\n    @Column(name = \"salary\")\n    private String salary;\n\n    public int getEmpno() {\n        return empno;\n    }\n\n    public void setEmpno(int empno) {\n        this.empno = empno;\n    }\n\n    public String getEname() {\n        return ename;\n    }\n\n    public void setEname(String ename) {\n        this.ename = ename;\n    }\n\n    public String getJob() {\n        return job;\n    }\n\n    public void setJob(String job) {\n        this.job = job;\n    }\n\n    public String getSalary() {\n        return salary;\n    }\n\n    public void setSalary(String salary) {\n        this.salary = salary;\n    }\n}"
        },
        {
            "title": "2. application.properties",
            "code": "spring.application.name=dipdb\n\nspring.datasource.url=jdbc:mysql://localhost/factory\nspring.datasource.username=root\nspring.datasource.password=root@123\n\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect"
        },
        {
            "title": "3. EmployRepo.java",
            "code": "package com.example.dipdb.Repo;\n\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport com.example.dipdb.Entity.Employ;\n\npublic interface EmployRepo extends JpaRepository<Employ, Integer> {\n\n}"
        },
        {
            "title": "4. FactoryController.java",
            "code": "package com.example.dipdb.Controller;\n\nimport java.util.List;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport com.example.dipdb.Entity.Employ;\nimport com.example.dipdb.Repo.EmployRepo;\n\n@RestController\npublic class FactoryController {\n\n    @Autowired\n    private EmployRepo db;\n\n    @PostMapping(\"/newemploy\")\n    @ResponseStatus(HttpStatus.CREATED)\n    public void saveEmploy(@RequestBody Employ obj) {\n        db.save(obj);\n    }\n\n    @GetMapping(\"/find\")\n    public List<Employ> getAllEmployees() {\n        return db.findAll();\n    }\n\n    @DeleteMapping(\"/deleteemploy/{id}\")\n    public ResponseEntity<String> deleteEmploy(@PathVariable int id) {\n        db.deleteById(id);\n        return ResponseEntity.ok(\"Employee deleted successfully with ID: \" + id);\n    }\n}"
        },
        {
            "title": "5. MySQL Dependency (pom.xml)",
            "code": "<!-- Source: https://mvnrepository.com/artifact/mysql/mysql-connector-java -->\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>8.0.33</version>\n    <scope>compile</scope>\n</dependency>"
        }
    ]
};

// 2. Hospital (Patient)
window.SECTIONS_DATA['spring-boot-hospital'] = {
    "id": "spring-boot-hospital",
    "title": "Hospital",
    "pageTitle": "Spring Boot — Hospital (Patient) Project",
    "cards": [
        {
            "title": "1. Patient.java (Entity)",
            "code": "package com.example.dipdb.Entity;\n\nimport jakarta.persistence.*;\n\n@Entity\n@Table(name = \"patient\")\npublic class Patient {\n\n    @Id\n    @Column(name = \"p_id\")\n    private int p_id;\n\n    @Column(name = \"p_name\")\n    private String p_name;\n\n    @Column(name = \"p_address\")\n    private String p_address;\n\n    @Column(name = \"p_phoneNo\")\n    private String p_phoneNo;\n\n    public int getP_id() {\n        return p_id;\n    }\n\n    public void setP_id(int p_id) {\n        this.p_id = p_id;\n    }\n\n    public String getP_name() {\n        return p_name;\n    }\n\n    public void setP_name(String p_name) {\n        this.p_name = p_name;\n    }\n\n    public String getP_address() {\n        return p_address;\n    }\n\n    public void setP_address(String p_address) {\n        this.p_address = p_address;\n    }\n\n    public String getP_phoneNo() {\n        return p_phoneNo;\n    }\n\n    public void setP_phoneNo(String p_phoneNo) {\n        this.p_phoneNo = p_phoneNo;\n    }\n}"
        },
        {
            "title": "2. application.properties",
            "code": "spring.application.name=dipdb\n\nspring.datasource.url=jdbc:mysql://localhost/hospital\nspring.datasource.username=root\nspring.datasource.password=root@123\n\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect"
        },
        {
            "title": "3. PatientRepo.java",
            "code": "package com.example.dipdb.Repo;\n\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport com.example.dipdb.Entity.Patient;\n\npublic interface PatientRepo extends JpaRepository<Patient, Integer> {\n\n}"
        },
        {
            "title": "4. HospitalController.java",
            "code": "package com.example.dipdb.Controller;\n\nimport java.util.List;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport com.example.dipdb.Entity.Patient;\nimport com.example.dipdb.Repo.PatientRepo;\n\n@RestController\npublic class HospitalController {\n\n    @Autowired\n    private PatientRepo db;\n\n    @PostMapping(\"/newpatient\")\n    @ResponseStatus(HttpStatus.CREATED)\n    public void savePatient(@RequestBody Patient obj) {\n        db.save(obj);\n    }\n\n    @GetMapping(\"/find\")\n    public List<Patient> getAllPatients() {\n        return db.findAll();\n    }\n\n    @DeleteMapping(\"/deletepatient/{id}\")\n    public ResponseEntity<String> deletePatient(@PathVariable int id) {\n        db.deleteById(id);\n        return ResponseEntity.ok(\"Patient deleted successfully with ID: \" + id);\n    }\n}"
        },
        {
            "title": "5. MySQL Dependency (pom.xml)",
            "code": "<!-- Source: https://mvnrepository.com/artifact/mysql/mysql-connector-java -->\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>8.0.33</version>\n    <scope>compile</scope>\n</dependency>"
        }
    ]
};

// 3. Bike Showroom
window.SECTIONS_DATA['spring-boot-bike'] = {
    "id": "spring-boot-bike",
    "title": "Bike Showroom",
    "pageTitle": "Spring Boot — Bike Showroom Project",
    "cards": [
        {
            "title": "1. Bike.java (Entity)",
            "code": "package com.example.dipdb.Entity;\n\nimport jakarta.persistence.*;\n\n@Entity\n@Table(name = \"bike\")\npublic class Bike {\n\n    @Id\n    @Column(name = \"bike_id\")\n    private int bike_id;\n\n    @Column(name = \"model_nuber\")\n    private String model_nuber;\n\n    @Column(name = \"brand\")\n    private String brand;\n\n    @Column(name = \"color\")\n    private String color;\n\n    public int getBike_id() {\n        return bike_id;\n    }\n\n    public void setBike_id(int bike_id) {\n        this.bike_id = bike_id;\n    }\n\n    public String getModel_nuber() {\n        return model_nuber;\n    }\n\n    public void setModel_nuber(String model_nuber) {\n        this.model_nuber = model_nuber;\n    }\n\n    public String getBrand() {\n        return brand;\n    }\n\n    public void setBrand(String brand) {\n        this.brand = brand;\n    }\n\n    public String getColor() {\n        return color;\n    }\n\n    public void setColor(String color) {\n        this.color = color;\n    }\n}"
        },
        {
            "title": "2. application.properties",
            "code": "spring.application.name=dipdb\n\nspring.datasource.url=jdbc:mysql://localhost/bikeshowroom\nspring.datasource.username=root\nspring.datasource.password=root@123\n\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect"
        },
        {
            "title": "3. BikeRepo.java",
            "code": "package com.example.dipdb.Repo;\n\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport com.example.dipdb.Entity.Bike;\n\npublic interface BikeRepo extends JpaRepository<Bike, Integer> {\n\n}"
        },
        {
            "title": "4. BikeController.java",
            "code": "package com.example.dipdb.Controller;\n\nimport java.util.List;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport com.example.dipdb.Entity.Bike;\nimport com.example.dipdb.Repo.BikeRepo;\n\n@RestController\npublic class BikeController {\n\n    @Autowired\n    private BikeRepo db;\n\n    @PostMapping(\"/newbike\")\n    @ResponseStatus(HttpStatus.CREATED)\n    public void saveBike(@RequestBody Bike obj) {\n        db.save(obj);\n    }\n\n    @GetMapping(\"/find\")\n    public List<Bike> getAllBikes() {\n        return db.findAll();\n    }\n\n    @DeleteMapping(\"/deletebike/{id}\")\n    public ResponseEntity<String> deleteBike(@PathVariable int id) {\n        db.deleteById(id);\n        return ResponseEntity.ok(\"Bike deleted successfully with ID: \" + id);\n    }\n}"
        },
        {
            "title": "5. MySQL Dependency (pom.xml)",
            "code": "<!-- Source: https://mvnrepository.com/artifact/mysql/mysql-connector-java -->\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>8.0.33</version>\n    <scope>compile</scope>\n</dependency>"
        }
    ]
};

// Default alias
window.SECTIONS_DATA['spring-boot'] = window.SECTIONS_DATA['spring-boot-factory'];
