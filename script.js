(function () {
  const codeSnippets = [
    // 1. Navbar.jsx (from D:\Roter Program\src\Navbar.jsx)
    `import React from "react";
import './App.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="NavBAR">
            <Link to="/">HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/about">ABOUT</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/contact">CONTACT</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    );
};

export default Navbar;`,

    // 2. Home.jsx (from D:\Roter Program\src\Home.jsx)
    `import React from "react";

const Home=()=>{
    return(
        <div><h2>Welcome to home page</h2></div>
    )
}

export default Home`,

    // 3. About.jsx (from D:\Roter Program\src\About.jsx)
    `import React from "react";

const About=()=>{
    return(
        <div><h2>This is about page</h2></div>
    )
}

export default About;`,

    // 4. Contact.jsx (from D:\Roter Program\src\Contact.jsx)
    `import React from "react";

const Contact=()=>{
    return(
        <h2>This is Contact</h2>
    )
}

export default Contact;`,

    // 5. App.jsx (from D:\Roter Program\src\App.jsx)
    `import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contant from "./Contact"; 
import "./App.css";

const App = () => {
    return (
        <div className="App">
            {/* The outer Router tag has been removed because it is handled by main.jsx */}
            <Navbar /> 
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contant" element={<Contant />} />
            </Routes>
        </div>
    );
};

export default App;`,

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

    // 28. All Git Commands (Complete Cheatsheet)
    `# ==========================================
# GIT CONFIGURATION
# ==========================================
# To add the username name to git
git config --global user.name "Our Name"

# To add the user email to git
git config --global user.email "Our email"

# To check user name on git
git config --global user.name

# To check user email on git
git config --global user.email


# ==========================================
# DIRECTORY & FILE NAVIGATION
# ==========================================
# To change directory on git
cd DirectoryName

# To go back directory on git
cd ..

# To list files/folders on directory in git
ls

# To create file on git
touch FileName


# ==========================================
# REPOSITORY & COMMITS
# ==========================================
# To initialize the Project to repository on git
git init

# To display status on git
git status

# To add changes file before committing
git add .

# To commit on repository in git
git commit -m "UserCommit"

# To display the history of all commits in repository
git log


# ==========================================
# BRANCHING & MERGING
# ==========================================
# To list the branches on repository in git
git branch

# To switch the branch into current branch on git
git checkout <branch>

# To combine the 2 branches into one on git
git merge <branch>


# ==========================================
# GITHUB REMOTE, PUSH & PULL
# ==========================================
# To set origin of github on git
git remote add origin "OurRepositoryURL"

# To upload our local commit to github on git
git push

# To download & merge the latest changes from github to our computer
git pull`
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
