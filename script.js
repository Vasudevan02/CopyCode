(function () {
  const codeSnippets = [
    // 1. Userdetails.jsx
    `import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    const { userId } = useParams();
    return (
        <div>
            <h1>User Details:</h1>
            <p>User information is:{userId}</p>
        </div>
    );
};

export default UserDetail;`,

    // 2. Home.jsx
    `import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const goabout = () => {
        navigate("/about");
    };
    return (
        <div>
            <h3>Welcome to home page</h3>
            <button onClick={goabout}>Go to About page</button>
        </div>
    );
};

export default Home;`,

    // 3. App.jsx
    `import React from "react";
import Home from "./Home";
import About from "./About";
import UserDetail from "./Userdetails";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <nav>
                    <ul style={{ display: "flex", gap: "20px" }}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/user/123">User Details</Link>
                        </li>
                        <li>
                            <Link to="/profile">User Profile</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user/:userId" element={<UserDetail />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;`,

    // 4. About.jsx
    `import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const gohome = () => {
        navigate(-1);
    };
    return (
        <div>
            <h3>Welcome to about us page</h3>
            <button onClick={gohome}>Go to Home Page</button>
        </div>
    );
};

export default About;`,

    // 5. UserProfile.jsx
    `import React from "react";

const UserProfile = () => {
    // Optional placeholder data for the user profile
    const profileData = {
        name: "John Doe",
        email: "johndoe@example.com",
        joined: "January 2026"
    };

    return (
        <div>
            <h1>User Profile</h1>
            <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px", borderRadius: "5px", maxWidth: "300px" }}>
                <p><strong>Name:</strong> {profileData.name}</p>
                <p><strong>Email:</strong> {profileData.email}</p>
                <p><strong>Member Since:</strong> {profileData.joined}</p>
            </div>
        </div>
    );
};

export default UserProfile;`
  ];

  const cards = document.querySelectorAll('.code-card');

  cards.forEach((card, index) => {
    const codeBlock = card.querySelector('.code-content');
    const preBlock = card.querySelector('pre');
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

      // Guarantee the line-numbers column matches the pre content height continuously
      requestAnimationFrame(() => {
        const fullHeight = Math.max(
          lineNumbers.scrollHeight,
          preBlock ? preBlock.scrollHeight : 0,
          codeBlock.scrollHeight
        );
        if (fullHeight > 0) {
          lineNumbers.style.minHeight = `${fullHeight}px`;
        }
      });
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
})();
