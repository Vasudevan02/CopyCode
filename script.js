(function () {
  const codeSnippets = [
    // 1. Navbar.jsx (from D:\Roter Program\src\Navbar.jsx)
    `import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="brand-section">
          <div className="brand-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.5L4.5 9 12 4.9 19.5 9 12 11.5zM6 12.35v3.82c0 2.21 2.69 4 6 4s6-1.79 6-4v-3.82l-6 3.27-6-3.27z"/>
            </svg>
          </div>
          <span className="brand-title">GP Kadur Portal</span>
        </div>
        <nav className="nav-menu">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => (isActive ? "nav-link-btn active" : "nav-link-btn")}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}`,

    // 2. Home.jsx (from D:\Roter Program\src\Home.jsx)
    `import React from "react";
import { Link } from "react-router-dom";
import clgImg from "./clg.png";

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

    // 3. About.jsx (from D:\Roter Program\src\About.jsx)
    `import React from "react";
import { Link } from "react-router-dom";

const info = [
  ["Institution Name", "Government Polytechnic, Kadur"],
  ["Affiliation & Recognition", "DTE Karnataka & AICTE Approved"],
  ["Inaugurated By", "Dr. M. C. Sudhakar"],
  ["Official Portal", "gpt.karnataka.gov.in/gptkadur", true],
];

const cards = [
  { icon: "📱", title: "Academics & Admissions", desc: "Offering diploma programs across odd and even semesters, 1st year induction programs, and lateral entry opportunities." },
  { icon: "📄", title: "Circulars & Regulatory", desc: "Transparent public administration in compliance with AICTE standards, RTI guidelines, exam updates, and official government circulars." },
  { icon: "⭐", title: "Activities & Co-Curricular", desc: "Active student life featuring technical industrial visits, community Shramadana initiatives, annual sports meets, and cultural events." },
];

export default function About() {
  return (
    <div className="portal-card">
      <div className="gov-badge">❖ Govt. of Karnataka · Dept. of Technical Education</div>
      <h1 className="about-heading">About Government Polytechnic, Kadur</h1>
      <p className="about-summary">Government Polytechnic Kadur is a premier state technical institution approved by AICTE, committed to imparting high-standard diploma engineering education and skill development in Karnataka.</p>
      <div className="details-container">
        {info.map(([k, v, isLink]) => (
          <div key={k} className="details-row"><span className="details-label">{k}</span><span className={isLink ? "details-link" : "details-value"}>{v}</span></div>
        ))}
      </div>
      <div className="cards-grid">
        {cards.map((c) => (
          <div key={c.title} className="feature-box"><div className="feature-icon-wrapper">{c.icon}</div><h3 className="feature-title">{c.title}</h3><p className="feature-desc">{c.desc}</p></div>
        ))}
      </div>
      <Link to="/" className="portal-btn-primary"><span>⌂</span> Go to Home Page</Link>
    </div>
  );
}`,

    // 4. Contact.jsx (from D:\Roter Program\src\Contact.jsx)
    `import React from "react";
import { Link } from "react-router-dom";

const contactData = [
  { icon: "📍", label: "Address", val: "Kadur - Birur Bypass Road, Kadur, Karnataka 577548" },
  { icon: "📞", label: "Phone", val: "+91 8267 221234 / 221235" },
  { icon: "✉️", label: "Email", val: "gptkadur.principal@karnataka.gov.in" },
  { icon: "⏰", label: "Office Timings", val: "Monday to Saturday, 9:00 AM – 5:00 PM" },
];

export default function Contact() {
  return (
    <div className="portal-card">
      <div className="gov-badge">📞 Helpdesk & Inquiries</div>
      <h1 className="about-heading">Contact Us</h1>
      <p className="about-summary">Reach out to Government Polytechnic, Kadur administration for admissions, document verification, and academic support.</p>
      <div className="details-container">
        {contactData.map((item) => (
          <div key={item.label} className="details-row">
            <span className="details-label">{item.icon} {item.label}</span>
            <span className="details-value">{item.val}</span>
          </div>
        ))}
      </div>
      <Link to="/" className="portal-btn-primary"><span>⌂</span> Go to Home Page</Link>
    </div>
  );
}`,

    // 5. App.jsx (from D:\Roter Program\src\App.jsx)
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

    // 6. main.jsx (from D:\Roter Program\src\main.jsx)
    `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)`,

    // 7. Registration App.jsx
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

    // 8. Registration App.css
    `*{
  padding:0;
  margin:0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  box-sizing: border-box;
}
.main{
  width:100vw;
  height:100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #7681ff;
  gap:10px;
}
.App{
  color:rgb(0, 0, 0);
  background-color: #f9f8f8;
  display: flex;
  justify-content: center;
  align-items: space-around;
  padding: 20px;
  border-radius: 10px;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap:20px;
  width:300px;
  height:400px;
}
.heading{
  font-size: 20px;
  font-weight: bold;
}
.input-field{
  width: 250px;
  height:30px;
  border-radius: 5px;
  border: 1px solid #7a7a7a;
  padding-left: 10px;
}
.checkbox{
  margin-right: 10px;
}
button{
  width: 150px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #7681ff;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.side-text{
  color:white;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
}`,

    // 9. Git: Add Username
    `git config --global user.name "Our Name"`,

    // 10. Git: Add Email
    `git config --global user.email "Our email"`,

    // 11. Git: Check Username
    `git config --global user.name`,

    // 12. Git: Check Email
    `git config --global user.email`,

    // 13. Git: Change Directory
    `cd DirectoryName`,

    // 14. Git: Go Back Directory
    `cd ..`,

    // 15. Git: List Files/Folders
    `ls`,

    // 16. Git: Create File
    `touch FileName`,

    // 17. Git: Initialize Repository
    `git init`,

    // 18. Git: Display Status
    `git status`,

    // 19. Git: Add Changes (Stage All)
    `git add .`,

    // 20. Git: Commit to Repository
    `git commit -m "UserCommit"`,

    // 21. Git: Display Commit History
    `git log`,

    // 22. Git: List Branches
    `git branch`,

    // 23. Git: Switch Branch
    `git checkout <branch>`,

    // 24. Git: Merge Branch
    `git merge <branch>`,

    // 25. Git: Set GitHub Origin URL
    `git remote add origin "OurRepositoryURL"`,

    // 26. Git: Push to GitHub
    `git push`,

    // 27. Git: Pull from GitHub
    `git pull`,

    // 28. Simple Registration Form (HTML Inline)
    `<!doctype html>
<html>
  <head>
    <title>Register</title>
    <style>
      body {
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
      }
    </style>
  </head>
  <body>
    <form
      onsubmit="
        event.preventDefault();
        alert('Registration Successful!');
        this.reset();
      "
    >
      <h2 style="margin: 0 0 20px 0">Register</h2>
      <p>Username:<br /><input type="text" required /></p>
      <p>Email:<br /><input type="email" required /></p>
      <p>Password:<br /><input type="password" required /></p>
      <button type="submit">Sign Up</button>
    </form>
  </body>
</html>`,

    // 29. Feedback Form (HTML Inline)
    `<!doctype html>
<html>
  <head>
    <title>Feedback</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        font-family: sans-serif;
        background: #f7f8fc;
      }
      form {
        background: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        width: 320px;
      }
      h2 {
        margin: 0 0 20px 0;
      }
      p {
        margin: 0 0 15px 0;
      }
      input,
      textarea,
      select {
        width: 100%;
        padding: 6px;
        border: 1px solid #767676;
        border-radius: 2px;
        box-sizing: border-box;
        margin-top: 5px;
        font-family: sans-serif;
      }
      textarea {
        resize: vertical;
        height: 90px;
      }
      button {
        width: 100%;
        padding: 10px;
        background: #28a745;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <form
      onsubmit="
        event.preventDefault();
        alert('Thank you for your feedback!');
        this.reset();
      "
    >
      <h2>Feedback Form</h2>
      <p>Name:<br /><input type="text" placeholder="Your name" required /></p>
      <p>Email:<br /><input type="email" placeholder="Your email" required /></p>
      <p>
        Rating:
        <br />
        <select required>
          <option value="">-- Select Rating --</option>
          <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
          <option value="4">⭐⭐⭐⭐ Good</option>
          <option value="3">⭐⭐⭐ Average</option>
          <option value="2">⭐⭐ Poor</option>
          <option value="1">⭐ Very Poor</option>
        </select>
      </p>
      <p>
        Message:<br />
        <textarea placeholder="Write your feedback here..." required></textarea>
      </p>
      <button type="submit">Submit Feedback</button>
    </form>
  </body>
</html>`,

    // 30. Install TypeScript Globally
    `npm install -g typescript`,

    // 31. Verify TypeScript Installation
    `tsc -v`,

    // 32. Install ts-node Globally
    `npm install -g ts-node`,

    // 33. Create TypeScript Directory
    `mkdir TypeScript`,

    // 34. Change Directory
    `cd TypeScript`,

    // 35. Install TypeScript as Dev Dependency
    `npm install typescript --save-dev`,

    // 36. TypeScript Program (TypeScript.ts)
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

    // 37. Compile TypeScript File
    `tsc TypeScript.ts`,

    // 38. Run Compiled JavaScript with Node
    `node TypeScript.js`
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

      if (targetId === 'react-router') {
        pageTitle.textContent = 'React Router Code Snippets';
      } else if (targetId === 'registration') {
        pageTitle.textContent = 'Registration Form Code Snippets';
      } else if (targetId === 'git-commands') {
        pageTitle.textContent = 'Git Commands';
      } else if (targetId === 'simple-reg-form') {
        pageTitle.textContent = 'Simple Registration Form (HTML Inline)';
      } else if (targetId === 'feedback-form') {
        pageTitle.textContent = 'Feedback Form (HTML Inline)';
      } else if (targetId === 'simple-ts-program') {
        pageTitle.textContent = 'Simple TypeScript Program';
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
