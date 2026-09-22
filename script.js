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

    // ── SECTION 2: Simple Reg Form (index 19) ───────────────────────────────

    // 19. Simple Registration Form (HTML Inline)
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

    // ── SECTION 3: Feedback Form (index 20) ─────────────────────────────────

    // 20. Feedback Form (HTML Inline)
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
  --white: #ffffff;
  --bg: #f1f5f9;
  --text: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); }

.navbar-header { background: var(--white); border-bottom: 1px solid var(--border); }
.navbar-container {
  max-width: 1100px; margin: auto; padding: 0 24px; height: 62px;
  display: flex; align-items: center; justify-content: space-between;
}
.brand-section { display: flex; align-items: center; gap: 10px; }
.brand-icon-box {
  width: 34px; height: 34px; border-radius: 8px;
  background: var(--blue); color: #fff;
  display: flex; align-items: center; justify-content: center;
}
.brand-title { font-size: 17px; font-weight: 700; }
.nav-menu { display: flex; gap: 6px; }
.nav-link-btn {
  text-decoration: none; font-size: 14px; color: var(--muted);
  padding: 7px 16px; border-radius: 999px; transition: 0.2s;
}
.nav-link-btn:hover, .nav-link-btn.active { background: #eff6ff; color: var(--blue); font-weight: 600; }

.app-layout { min-height: 100vh; display: flex; flex-direction: column; }
.main-wrapper { flex: 1; display: flex; justify-content: center; padding: 32px 16px; }
.portal-card {
  background: var(--white); border: 1px solid var(--border); border-radius: 14px;
  width: 100%; max-width: 880px; padding: 36px 32px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
}

.home-heading, .about-heading { font-size: 28px; font-weight: 800; margin-bottom: 20px; }
.about-summary { font-size: 14px; color: var(--muted); max-width: 620px; line-height: 1.6; margin-bottom: 24px; }
.gov-badge {
  background: #eff6ff; border: 1px solid #bfdbfe; color: var(--blue);
  padding: 5px 16px; border-radius: 999px; font-size: 12px; font-weight: 600; margin-bottom: 14px;
}
.image-frame { width: 100%; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); margin-bottom: 24px; }
.college-photo { width: 100%; max-height: 400px; object-fit: cover; display: block; }
.portal-btn-primary {
  display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
  background: var(--blue); color: #fff; padding: 10px 22px;
  border-radius: 8px; font-size: 14px; font-weight: 600; transition: 0.2s;
}
.portal-btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); }

.details-container {
  width: 100%; max-width: 640px; background: #f8fafc;
  border: 1px solid #edf2f7; border-radius: 10px;
  padding: 4px 20px; margin-bottom: 24px; text-align: left;
}
.details-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13.5px; }
.details-row:last-child { border-bottom: none; }
.details-label { color: var(--muted); }
.details-value { font-weight: 700; }
.details-link { color: var(--blue); font-weight: 600; }

.cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; width: 100%; max-width: 760px; margin-bottom: 24px; text-align: left; }
.feature-box { background: var(--white); border: 1px solid var(--border); border-radius: 10px; padding: 18px 16px; }
.feature-icon-wrapper { font-size: 20px; margin-bottom: 10px; }
.feature-title { font-size: 13.5px; font-weight: 700; margin-bottom: 6px; }
.feature-desc { font-size: 12px; color: var(--muted); line-height: 1.55; }

@media (max-width: 700px) {
  .cards-grid { grid-template-columns: 1fr; }
  .portal-card { padding: 24px 16px; }
}`,

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

    // 41. Create Home.jsx
    `Home.jsx`,

    // 42. Home.jsx
    `import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="portal-card">
      <h1 className="home-heading">Welcome to home page</h1>
      <div className="image-frame">
        <img src="https://placehold.co/600x400?text=Government+Polytechnic+Kadur" alt="Government Polytechnic Kadur" className="college-photo" />
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

    // 45. Create Contact.jsx
    `Contact.jsx`,

    // 46. Contact.jsx
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

    // 47. Run Development Server
    `npm run dev`
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
        pageTitle.textContent = 'Simple Registration Form (HTML Inline)';
      } else if (targetId === 'feedback-form') {
        pageTitle.textContent = 'Feedback Form (HTML Inline)';
      } else if (targetId === 'simple-ts-program') {
        pageTitle.textContent = 'Simple TypeScript Program';
      } else if (targetId === 'registration') {
        pageTitle.textContent = 'Registration Form (React)';
      } else if (targetId === 'react-router') {
        pageTitle.textContent = 'React Router Code Snippets';
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
