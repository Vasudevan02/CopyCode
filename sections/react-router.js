// Section: React Router Code
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['react-router'] = {
    "title": "React Router Code",
    "cards": [
        {
            "code": "npm create vite@latest",
            "title": "1. Create Vite Project"
        },
        {
            "code": "npm install react-router-dom",
            "title": "2. Install React Router"
        },
        {
            "code": "import React from \"react\";\nimport { Routes, Route } from \"react-router-dom\";\nimport Navbar from \"./Navbar\";\nimport Home from \"./Home\";\nimport About from \"./About\";\nimport Contact from \"./Contact\";\nimport \"./App.css\";\n\nexport default function App() {\n  return (\n    <div className=\"app-layout\">\n      <Navbar />\n      <main className=\"main-wrapper\">\n        <Routes>\n          <Route path=\"/\" element={<Home />} />\n          <Route path=\"/about\" element={<About />} />\n          <Route path=\"/contact\" element={<Contact />} />\n        </Routes>\n      </main>\n    </div>\n  );\n}",
            "title": "3. App.jsx"
        },
        {
            "code": ":root {\n  --blue: #2563eb;\n  --bg: #f1f5f9;\n  --text: #0f172a;\n  --muted: #64748b;\n  --border: #e2e8f0;\n}\n* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); }\n\n.navbar-header {\n  background: #fff;\n  border-bottom: 1px solid var(--border);\n  padding: 12px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav-link-btn { text-decoration: none; color: var(--muted); padding: 6px 14px; border-radius: 20px; }\n.nav-link-btn:hover, .nav-link-btn.active { background: #eff6ff; color: var(--blue); font-weight: 600; }\n\n.portal-card {\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  max-width: 860px;\n  margin: 28px auto;\n  padding: 28px;\n  text-align: center;\n}\n.portal-btn-primary { display: inline-flex; background: var(--blue); color: #fff; padding: 10px 22px; border-radius: 8px; font-weight: 600; text-decoration: none; }\n.portal-btn-primary:hover { background: #1d4ed8; }\n.details-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border); }\n.details-label { color: var(--muted); }\n.details-value { font-weight: 700; }\n.cards-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-bottom: 20px; }\n.feature-box { background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 16px; text-align: left; }\n@media (max-width: 700px) { .cards-grid { grid-template-columns: 1fr; } .portal-card { padding: 20px 14px; } }",
            "title": "4. App.css"
        },
        {
            "code": "import { StrictMode } from 'react'\nimport { createRoot } from 'react-dom/client'\nimport { BrowserRouter } from 'react-router-dom'\nimport './index.css'\nimport App from './App.jsx'\n\ncreateRoot(document.getElementById('root')).render(\n  <BrowserRouter>\n    <StrictMode>\n      <App />\n    </StrictMode>\n  </BrowserRouter>\n)",
            "title": "5. main.jsx"
        },
        {
            "code": "About.jsx",
            "title": "6. Create About.jsx File"
        },
        {
            "code": "import React from \"react\";\nimport { Link } from \"react-router-dom\";\n\nexport default function About() {\n  return (\n    <div className=\"portal-card\">\n      <h1>About Government Polytechnic, Kadur</h1>\n      <p>A premier AICTE-approved state technical institution in Karnataka.</p>\n      <Link to=\"/\" className=\"portal-btn-primary\">Home</Link>\n    </div>\n  );\n}",
            "title": "7. About.jsx"
        },
        {
            "code": "Home.jsx",
            "title": "8. Create Home.jsx File"
        },
        {
            "code": "import React from \"react\";\nimport { Link } from \"react-router-dom\";\nimport clgImg from \"./images.jpg\";\n\nexport default function Home() {\n  return (\n    <div className=\"portal-card\">\n      <h1 className=\"home-heading\">Welcome to home page</h1>\n      <div className=\"image-frame\">\n        <img src={clgImg} alt=\"Government Polytechnic Kadur\" className=\"college-photo\" />\n      </div>\n      <Link to=\"/about\" className=\"portal-btn-primary\">\n        Go to About page &rarr;\n      </Link>\n    </div>\n  );\n}",
            "title": "9. Home.jsx"
        },
        {
            "code": "Navbar.jsx",
            "title": "10. Create Navbar.jsx File"
        },
        {
            "code": "import React from \"react\";\nimport { NavLink } from \"react-router-dom\";\n\nexport default function Navbar() {\n  return (\n    <header className=\"navbar-header\">\n      <span className=\"brand-title\">GP Kadur Portal</span>\n      <nav>\n        <NavLink to=\"/\" className={({ isActive }) => isActive ? \"nav-link-btn active\" : \"nav-link-btn\"}>Home</NavLink>\n        <NavLink to=\"/about\" className={({ isActive }) => isActive ? \"nav-link-btn active\" : \"nav-link-btn\"}>About</NavLink>\n        <NavLink to=\"/contact\" className={({ isActive }) => isActive ? \"nav-link-btn active\" : \"nav-link-btn\"}>Contact</NavLink>\n      </nav>\n    </header>\n  );\n}",
            "title": "11. Navbar.jsx"
        },
        {
            "code": "Contact.jsx",
            "title": "12. Create Contact.jsx File"
        },
        {
            "code": "import React from \"react\";\nimport { Link } from \"react-router-dom\";\n\nexport default function Contact() {\n  return (\n    <div className=\"portal-card\">\n      <h1>Contact Us</h1>\n      <p>📍 Kadur - Birur Bypass Road, Kadur, Karnataka 577548</p>\n      <p>📞 +91 8267 221234 / 221235</p>\n      <p>✉️ gptkadur.principal@karnataka.gov.in</p>\n      <Link to=\"/\" className=\"portal-btn-primary\">Home</Link>\n    </div>\n  );\n}",
            "title": "13. Contact.jsx"
        },
        {
            "code": "npm run dev",
            "title": "14. Run Development Server"
        }
    ],
    "id": "react-router",
    "pageTitle": "React Router Code Snippets"
};
