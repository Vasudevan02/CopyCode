(function () {
  const codeSnippets = [

    // ── SECTION 1: Git Commands (indices 0–18) ──────────────────────────────

    // 0. Add Username
    `git config --global user.name "Our Name"`,

    // 1. Add Email
    `git config --global user.email "Our email"`,

    // 2. Check Username
    `git config --global user.name`,

    // 3. Check Email
    `git config --global user.email`,

    // 4. Change Directory
    `cd DirectoryName`,

    // 5. Go Back Directory
    `cd ..`,

    // 6. List Files/Folders
    `ls`,

    // 7. Create File
    `touch FileName`,

    // 8. Initialize Repository
    `git init`,

    // 9. Display Status
    `git status`,

    // 10. Add Changes (Stage All)
    `git add .`,

    // 11. Commit to Repository
    `git commit -m "UserCommit"`,

    // 12. Display Commit History
    `git log`,

    // 13. List Branches
    `git branch`,

    // 14. Switch Branch
    `git checkout <branch>`,

    // 15. Merge Branch
    `git merge <branch>`,

    // 16. Set GitHub Origin URL
    `git remote add origin "OurRepositoryURL"`,

    // 17. Push to GitHub
    `git push`,

    // 18. Pull from GitHub
    `git pull`,

    // ── SECTION 2: Simple Reg Form (index 19 = HTML, 19b = CSS, 19c = JS) ───

    // 19a. Simple Reg Form — index.html
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Register</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form id="regForm">
      <h2>Register</h2>
      <p>Username:<br /><input type="text" id="username" required /></p>
      <p>Email:<br /><input type="email" id="email" required /></p>
      <p>Password:<br /><input type="password" id="password" required /></p>
      <button type="submit">Sign Up</button>
    </form>
    <script src="script.js"></script>
  </body>
</html>`,

    // 19b. Simple Reg Form — style.css
    `body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
  background: #f7f8fc;
}
form {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 280px;
}
p {
  margin: 0 0 15px 0;
}
input {
  width: 100%;
  padding: 6px;
  border: 1px solid #767676;
  border-radius: 2px;
  box-sizing: border-box;
  margin-top: 5px;
}
button {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}`,

    // 19c. Simple Reg Form — script.js
    `document.getElementById('regForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Registration Successful!');
  this.reset();
});`,

    // ── SECTION 3: Feedback Form (index 20) ─────────────────────────────────

    // 20. Feedback Form (HTML Inline)
    `<!doctype html>
<html>
<head>
  <title>Feedback</title>
  <style>
    body { display:flex; justify-content:center; align-items:center; min-height:100vh; margin:0; font-family:sans-serif; background:#f7f8fc; }
    form { background:#fff; padding:28px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,.05); width:300px; }
    h2 { margin:0 0 16px; }
    p { margin:0 0 12px; }
    input, textarea, select { width:100%; padding:6px; border:1px solid #767676; border-radius:2px; box-sizing:border-box; margin-top:4px; font-family:sans-serif; }
    textarea { resize:vertical; height:80px; }
    button { width:100%; padding:10px; background:#28a745; color:#fff; border:none; border-radius:6px; font-weight:bold; cursor:pointer; margin-top:8px; }
  </style>
</head>
<body>
  <form onsubmit="event.preventDefault();alert('Thank you for your feedback!');this.reset();">
    <h2>Feedback Form</h2>
    <p>Name:<br><input type="text" placeholder="Your name" required></p>
    <p>Email:<br><input type="email" placeholder="Your email" required></p>
    <p>Rating:<br>
      <select required>
        <option value="">-- Select Rating --</option>
        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
        <option value="4">⭐⭐⭐⭐ Good</option>
        <option value="3">⭐⭐⭐ Average</option>
        <option value="2">⭐⭐ Poor</option>
        <option value="1">⭐ Very Poor</option>
      </select>
    </p>
    <p>Message:<br><textarea placeholder="Write your feedback here..." required></textarea></p>
    <button type="submit">Submit Feedback</button>
  </form>
</body>
</html>`,

    // ── SECTION 4: Simple TS Program (indices 21–29) ─────────────────────────

    // 21. Install TypeScript Globally
    `npm install -g typescript`,

    // 22. Verify TypeScript Installation
    `tsc -v`,

    // 23. Install ts-node Globally
    `npm install -g ts-node`,

    // 24. Create TypeScript Directory
    `mkdir TypeScript`,

    // 25. Change Directory
    `cd TypeScript`,

    // 26. Install TypeScript as Dev Dependency
    `npm install typescript --save-dev`,

    // 27. TypeScript Program (TypeScript.ts)
    `console.log("Hellow world");
console.log("Arithmetic operation");

var num1 = 10;
var num2 = 2;
var res = 0;

res = num1 - num2;
console.log("Difference: " + res);

res = num1 * num2;
console.log("Multiplication: " + res);

res = num1 % num2;
console.log("Remainder: " + res);

res = num1 + num2;
console.log("Remainder: " + res); 

num1++;
console.log("value of num1 after increment: " + num1);

num2--;
console.log("value of num2 after decrement: " + num2);`,

    // 28. Compile TypeScript File
    `tsc TypeScript.ts`,

    // 29. Run Compiled JavaScript with Node
    `node TypeScript.js`,

    // ── SECTION 5: Registration Form React (indices 30–33) ───────────────────

    // 30. Create Vite Project
    `npm create vite@latest`,

    // 31. App.jsx (Registration Form)
    `import React from 'react'
import './App.css'

function App() {
  const hello = (e) => {
      e.preventDefault();
      alert("Registration succesfull")
    }
  return (
    <div className="main">
      <div className="App">
        <form onSubmit={hello}>
          <h1 className="heading">Registration Form</h1>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your first name"
          />
          <input
            type="text"
            className="input-field"
            placeholder="Enter your last name"
          />
          <input
            type="email"
            className="input-field"
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter your password"
          />
          <div>
            <input type="checkbox" className="checkbox" />I agree to the terms and conditions
          </div>
          <button type="submit">Register Now</button>
        </form>
      </div>
      <h1 className="side-text">
        GPTK <br></br>REGISTRATION<br></br> FORM
      </h1>
    </div>
  );
}
export default App`,

    // 32. App.css (Registration Form)
    `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gill Sans', sans-serif;
}

.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #7681ff;
  gap: 10px;
}

.App {
  background-color: #f9f8f8;
  padding: 20px;
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  width: 300px;
  height: 400px;
}

.heading { font-size: 20px; font-weight: bold; }

.input-field {
  width: 250px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #7a7a7a;
  padding-left: 10px;
}

.checkbox { margin-right: 10px; }

button {
  width: 150px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #7681ff;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.side-text {
  color: white;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
}`,

    // 33. Run Development Server
    `npm run dev`,

    // ── SECTION 6: React Router Code (indices 34–43) ─────────────────────────

    // 34. Create Vite Project
    `npm create vite@latest`,

    // 35. Install React Router
    `npm install react-router-dom`,

    // 36. App.jsx (React Router)
    `import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}`,

    // 37. App.css (React Router)
    `:root {
  --blue: #2563eb;
  --bg: #f1f5f9;
  --text: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); }

.navbar-header {
  background: #fff;
  border-bottom: 1px solid var(--border);
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-link-btn { text-decoration: none; color: var(--muted); padding: 6px 14px; border-radius: 20px; }
.nav-link-btn:hover, .nav-link-btn.active { background: #eff6ff; color: var(--blue); font-weight: 600; }

.portal-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  max-width: 860px;
  margin: 28px auto;
  padding: 28px;
  text-align: center;
}
.portal-btn-primary { display: inline-flex; background: var(--blue); color: #fff; padding: 10px 22px; border-radius: 8px; font-weight: 600; text-decoration: none; }
.portal-btn-primary:hover { background: #1d4ed8; }
.details-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border); }
.details-label { color: var(--muted); }
.details-value { font-weight: 700; }
.cards-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-bottom: 20px; }
.feature-box { background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 16px; text-align: left; }
@media (max-width: 700px) { .cards-grid { grid-template-columns: 1fr; } .portal-card { padding: 20px 14px; } }`,

    // 38. main.jsx (React Router)
    `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)`,

    // 39. Create About.jsx
    `About.jsx`,

    // 40. About.jsx
    `import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="portal-card">
      <h1>About Government Polytechnic, Kadur</h1>
      <p>A premier AICTE-approved state technical institution in Karnataka.</p>
      <Link to="/" className="portal-btn-primary">⌂ Home</Link>
    </div>
  );
}`,

    // 41. Create Home.jsx
    `Home.jsx`,

    // 42. Home.jsx
    `import React from "react";
import { Link } from "react-router-dom";
import clgImg from "./images.jpg";

export default function Home() {
  return (
    <div className="portal-card">
      <h1 className="home-heading">Welcome to home page</h1>
      <div className="image-frame">
        <img src={clgImg} alt="Government Polytechnic Kadur" className="college-photo" />
      </div>
      <Link to="/about" className="portal-btn-primary">
        Go to About page &rarr;
      </Link>
    </div>
  );
}`,

    // 43. Create Navbar.jsx
    `Navbar.jsx`,

    // 44. Navbar.jsx
    `import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-header">
      <span className="brand-title">GP Kadur Portal</span>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link-btn active" : "nav-link-btn"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link-btn active" : "nav-link-btn"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link-btn active" : "nav-link-btn"}>Contact</NavLink>
      </nav>
    </header>
  );
}`,

    // 45. Create Contact.jsx
    `Contact.jsx`,

    // 46. Contact.jsx
    `import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="portal-card">
      <h1>Contact Us</h1>
      <p>📍 Kadur - Birur Bypass Road, Kadur, Karnataka 577548</p>
      <p>📞 +91 8267 221234 / 221235</p>
      <p>✉️ gptkadur.principal@karnataka.gov.in</p>
      <Link to="/" className="portal-btn-primary">⌂ Home</Link>
    </div>
  );
}`,

    // 47. Run Development Server
    `npm run dev`,

            // ── SECTION: MongoDB Cmds ────────────────────────────────────────────────

    // M1. 1. Show Databases
    `show dbs`,

    // M2. 2. Use Database
    `use college`,

    // M3. 3. Create Collection
    `db.createCollection("students")`,

    // M4. 4. Insert One Document
    `db.students.insertOne({
  name: "Pavan B C",
  rgno: "197CS24020",
  age: 22
})`,

    // M5. 5. Insert Many Documents
    `db.students.insertMany([
  { name: "Nithish K", rgno: "197CS54021", age: 18 },
  { name: "Goutham E", rgno: "197CS2408", age: 21 }
])`,

    // M6. 6. Find All Documents
    `db.students.find();`,

    // M7. 7. Find by rgno
    `db.students.find({ rgno: "197CS24020" });`,

    // M8. 8. Find by Age
    `db.students.find({ age: 18 });`,

    // M9. 9. Update One Document
    `db.students.updateOne(
  { name: "Goutham E" },
  { $set: { rgno: "197CS24080" } }
);`,

    // M10. 10. Find Updated Document
    `db.students.find({ rgno: "197CS24080" });`,

    // M11. 11. Create Index (Age & Name)
    `db.students.createIndex({ age: 1 });
db.students.createIndex({ name: 1 });`,

    // M12. 12. Find Data Using Index
    `db.students.find({ rgno: "197CS24080" });`,

    // M13. 13. Find Age Exactly 18 ($eq)
    `db.students.find({ age: { $eq: 18 } });`,

    // M14. 14. Find Age Greater Than 20 ($gt)
    `db.students.find({ age: { $gt: 20 } });`,

    // M15. 15. Find Age Less Than 21 ($lt)
    `db.students.find({ age: { $lt: 21 } });`,

    // M16. 16. Find Age Between 18 and 21 ($gte, $lte)
    `db.students.find({ age: { $gte: 18, $lte: 21 } });`,

    // M17. 17. Filter, Sort and Limit
    `db.students.find({ age: { $gte: 18, $lte: 21 } }).sort({ age: -1 }).limit(2);`,

    // M18. 18. Sort Youngest to Oldest
    `db.students.find().sort({ age: 1 });`,

    // M19. 19. Sort Alphabetically (A-Z)
    `db.students.find().sort({ name: 1 });`,

    // M20. 20. Sort Oldest to Youngest
    `db.students.find().sort({ age: -1 });`,

    // M21. 21. Set Limit (First 3)
    `db.students.find().limit(3);`,

    // M22. 22. Delete One Document
    `db.students.deleteOne({ rgno: "197CS54021" });`,

    // M23. 23. Verify Deletion
    `db.students.find({ rgno: "197CS54021" });`,

    // M24. 24. Find All (After Delete)
    `db.students.find();`,

    // M25. 25. Drop Collection
    `db.students.drop();`,

    // M26. 26. Drop Database
    `db.dropDatabase();`
  ,

    // ── SECTION: MySQL Cmds ──────────────────────────────────────────────────

    // SQL1. 1. Show Databases
    `SHOW DATABASES;`,

    // SQL2. 2. Create Database
    `CREATE DATABASE college;`,

    // SQL3. 3. Show Databases
    `SHOW DATABASES;`,

    // SQL4. 4. Use Database
    `USE college;`,

    // SQL5. 5. Create Students Table
    `CREATE TABLE students (
  id INT PRIMARY KEY,
  std_name VARCHAR(50),
  rgno VARCHAR(20),
  age INT
);`,

    // SQL6. 6. Insert Table Values
    `INSERT INTO students (id, std_name, rgno, age) VALUES
(2, 'Nithish K', '197CS24031', 18),
(4, 'Nanda Kumar Y D', '197CS25709', 19),
(3, 'Darshan H R', '197CS25706', 20),
(1, 'Jeevan A O', '197CS24015', 21),
(5, 'Pavan B C', '197CS24032', 22);`,

    // SQL7. 7. Select All Records
    `SELECT * FROM students;`,

    // ── SECTION: Spring Boot Employee Project ───────────────────────────

    // SB1. Create Database
    `CREATE DATABASE factory;

USE factory;`,

    // SB2. Spring Initializr Setup
    `Project:  Maven
Language: Java
Packaging: Jar
Java: 17 or 21

Dependencies:
- Spring Web
- Spring Data JPA
- MySQL Driver

Artifact: dipdb
Generate → Open in Eclipse / STS``,

    // SB3. Package Structure
    `com.example.dipdb
│
├── Entity
├── Repo
└── Controller``,

    // SB4. Employ.java (Entity)
    `package com.example.dipdb.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employ")
public class Employ {

    @Id
    private int empno;

    @Column(name = "ename")
    private String ename;
    @Column(name = "job")
    private String job;
    @Column(name = "salary")
    private String salary;

    public int getEmpno() {
        return empno;
    }

    public void setEmpno(int empno) {
        this.empno = empno;
    }

    public String getEname() {
        return ename;
    }

    public void setEname(String ename) {
        this.ename = ename;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }
}``,

    // SB5. application.properties
    `spring.application.name=dipdb

spring.datasource.url=jdbc:mysql://localhost:3306/factory
spring.datasource.username=root
spring.datasource.password=123

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# Replace 123 with your actual MySQL password``,

    // SB6. EmployRepo.java
    `package com.example.dipdb.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.dipdb.Entity.Employ;

public interface EmployRepo extends JpaRepository<Employ, Integer> {

}``,

    // SB7. FactoryController.java
    `package com.example.dipdb.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.dipdb.Entity.Employ;
import com.example.dipdb.Repo.EmployRepo;

@RestController
public class FactoryController {

    @Autowired
    EmployRepo db;

    @PostMapping("/newemploy")
    public void saveEmploy(@RequestBody Employ obj) {
        db.save(obj);
    }
}``,

    // SB8. Main Class
    `package com.example.dipdb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DipdbApplication {

    public static void main(String[] args) {
        SpringApplication.run(DipdbApplication.class, args);
    }

}``,

    // SB9. Run the Project
    `Right-click project / main class
→ Run As
→ Spring Boot App

Wait for:
Tomcat started on port 8080`,

    // SB10. Check MySQL Table
    `USE factory;

SHOW TABLES;
-- Result: employ

DESC employ;
-- Columns: empno | ename | job | salary`,

    // SB11. Open Postman
    `Method : POST
URL    : http://localhost:8080/newemploy

Body → raw → JSON`,

    // SB12. Employee JSON Body
    `{
    "empno": 101,
    "ename": "Nithish",
    "job": "Director",
    "salary": "50000"
}`,

    // SB13. Check Data in MySQL
    `USE factory;

SELECT * FROM employ;

-- Result:
-- 101 | Nithish | Director | 50000`
  ];

  const cards = document.querySelectorAll('.code-card');

  function calculateCardHeights() {
    requestAnimationFrame(() => {
      cards.forEach(card => {
        const codeBlock = card.querySelector('.code-content');
        const preBlock = card.querySelector('pre');
        const lineNumbers = card.querySelector('.line-numbers');
        if (lineNumbers && codeBlock) {
          const fullHeight = Math.max(
            lineNumbers.scrollHeight,
            preBlock ? preBlock.scrollHeight : 0,
            codeBlock.scrollHeight
          );
          if (fullHeight > 0) {
            lineNumbers.style.minHeight = `${fullHeight}px`;
          }
        }
      });
    });
  }

  cards.forEach((card, index) => {
    const codeBlock = card.querySelector('.code-content');
    const lineNumbers = card.querySelector('.line-numbers');
    const copyBtn = card.querySelector('.btn-copy');
    const copyIcon = card.querySelector('.copy-icon');
    const checkIcon = card.querySelector('.check-icon');
    const btnText = card.querySelector('.btn-text');

    // Populate pure text if snippet is defined
    if (codeSnippets[index] && codeBlock) {
      codeBlock.textContent = codeSnippets[index];
    }

    // Generate matching line numbers and enforce continuous height
    if (codeBlock && lineNumbers) {
      const text = codeBlock.textContent || "";
      const lines = text.split('\n');
      lineNumbers.innerHTML = lines.map((_, i) => `<span>${i + 1}</span>`).join('');
    }

    // Individual Copy handler for this card
    if (copyBtn && codeBlock) {
      let resetTimer = null;

      copyBtn.addEventListener('click', async () => {
        const textToCopy = codeBlock.textContent;
        let copySuccess = false;

        if (navigator.clipboard && window.isSecureContext) {
          try {
            await navigator.clipboard.writeText(textToCopy);
            copySuccess = true;
          } catch (err) {
            console.warn('Clipboard API failed, trying fallback...', err);
          }
        }

        if (!copySuccess) {
          try {
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.top = '-9999px';
            textarea.style.left = '-9999px';
            textarea.setAttribute('readonly', '');
            document.body.appendChild(textarea);
            textarea.select();
            copySuccess = document.execCommand('copy');
            document.body.removeChild(textarea);
          } catch (e) {
            console.error('Fallback copy failed:', e);
          }
        }

        if (copySuccess) {
          copyBtn.classList.add('copied');
          if (copyIcon) copyIcon.style.display = 'none';
          if (checkIcon) checkIcon.style.display = 'inline-block';
          if (btnText) btnText.textContent = 'Copied!';

          if (resetTimer) clearTimeout(resetTimer);

          resetTimer = setTimeout(() => {
            copyBtn.classList.remove('copied');
            if (copyIcon) copyIcon.style.display = 'inline-block';
            if (checkIcon) checkIcon.style.display = 'none';
            if (btnText) btnText.textContent = 'Copy';
          }, 1800);
        }
      });
    }
  });

  calculateCardHeights();

  // Sidebar navigation logic
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.code-section');
  const pageTitle = document.getElementById('page-title');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      const targetId = item.getAttribute('data-target');

      if (targetId === 'git-commands') {
        pageTitle.textContent = 'Git Commands';
      } else if (targetId === 'simple-reg-form') {
        pageTitle.textContent = 'Simple Registration Form using HTML, CSS, JS';
      } else if (targetId === 'feedback-form') {
        pageTitle.textContent = 'Feedback Form (HTML Inline)';
      } else if (targetId === 'simple-ts-program') {
        pageTitle.textContent = 'Simple TypeScript Program';
      } else if (targetId === 'registration') {
        pageTitle.textContent = 'Registration Form (React)';
      } else if (targetId === 'react-router') {
        pageTitle.textContent = 'React Router Code Snippets';
      } else if (targetId === 'mongodb-cmds') {
        pageTitle.textContent = 'MongoDB Commands';
      }

      sections.forEach(section => {
        if (section.id === targetId) {
          section.style.display = 'flex';
        } else {
          section.style.display = 'none';
        }
      });

      calculateCardHeights();
    });
  });

})();
