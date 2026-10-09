// Section: React Router Code
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['react-router'] = {
    "title":  "React Router Code",
    "cards":  [
                  {
                      "code":  "npm create vite@latest",
                      "title":  "1. Create Vite Project"
                  },
                  {
                      "code":  "npm install react-router-dom",
                      "title":  "2. Install React Router"
                  },
                  {
                      "code":  "import React from \"react\";\r\nimport { Routes, Route } from \"react-router-dom\";\r\nimport Navbar from \"./Navbar\";\r\nimport Home from \"./Home\";\r\nimport About from \"./About\";\r\nimport Contact from \"./Contact\";\r\nimport \"./App.css\";\r\n\r\nexport default function App() {\r\n  return (\r\n    \u003cdiv className=\"app-layout\"\u003e\r\n      \u003cNavbar /\u003e\r\n      \u003cmain className=\"main-wrapper\"\u003e\r\n        \u003cRoutes\u003e\r\n          \u003cRoute path=\"/\" element={\u003cHome /\u003e} /\u003e\r\n          \u003cRoute path=\"/about\" element={\u003cAbout /\u003e} /\u003e\r\n          \u003cRoute path=\"/contact\" element={\u003cContact /\u003e} /\u003e\r\n        \u003c/Routes\u003e\r\n      \u003c/main\u003e\r\n    \u003c/div\u003e\r\n  );\r\n}",
                      "title":  "3. App.jsx"
                  },
                  {
                      "code":  ":root {\r\n  --blue: #2563eb;\r\n  --bg: #f1f5f9;\r\n  --text: #0f172a;\r\n  --muted: #64748b;\r\n  --border: #e2e8f0;\r\n}\r\n* { box-sizing: border-box; margin: 0; padding: 0; }\r\nbody { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); }\r\n\r\n.navbar-header {\r\n  background: #fff;\r\n  border-bottom: 1px solid var(--border);\r\n  padding: 12px 24px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.nav-link-btn { text-decoration: none; color: var(--muted); padding: 6px 14px; border-radius: 20px; }\r\n.nav-link-btn:hover, .nav-link-btn.active { background: #eff6ff; color: var(--blue); font-weight: 600; }\r\n\r\n.portal-card {\r\n  background: #fff;\r\n  border: 1px solid var(--border);\r\n  border-radius: 12px;\r\n  max-width: 860px;\r\n  margin: 28px auto;\r\n  padding: 28px;\r\n  text-align: center;\r\n}\r\n.portal-btn-primary { display: inline-flex; background: var(--blue); color: #fff; padding: 10px 22px; border-radius: 8px; font-weight: 600; text-decoration: none; }\r\n.portal-btn-primary:hover { background: #1d4ed8; }\r\n.details-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border); }\r\n.details-label { color: var(--muted); }\r\n.details-value { font-weight: 700; }\r\n.cards-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-bottom: 20px; }\r\n.feature-box { background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 16px; text-align: left; }\r\n@media (max-width: 700px) { .cards-grid { grid-template-columns: 1fr; } .portal-card { padding: 20px 14px; } }",
                      "title":  "4. App.css"
                  },
                  {
                      "code":  "import { StrictMode } from \u0027react\u0027\r\nimport { createRoot } from \u0027react-dom/client\u0027\r\nimport { BrowserRouter } from \u0027react-router-dom\u0027\r\nimport \u0027./index.css\u0027\r\nimport App from \u0027./App.jsx\u0027\r\n\r\ncreateRoot(document.getElementById(\u0027root\u0027)).render(\r\n  \u003cBrowserRouter\u003e\r\n    \u003cStrictMode\u003e\r\n      \u003cApp /\u003e\r\n    \u003c/StrictMode\u003e\r\n  \u003c/BrowserRouter\u003e\r\n)",
                      "title":  "5. main.jsx"
                  },
                  {
                      "code":  "About.jsx",
                      "title":  "6. Create About.jsx File"
                  },
                  {
                      "code":  "import React from \"react\";\r\nimport { Link } from \"react-router-dom\";\r\n\r\nexport default function About() {\r\n  return (\r\n    \u003cdiv className=\"portal-card\"\u003e\r\n      \u003ch1\u003eAbout Government Polytechnic, Kadur\u003c/h1\u003e\r\n      \u003cp\u003eA premier AICTE-approved state technical institution in Karnataka.\u003c/p\u003e\r\n      \u003cLink to=\"/\" className=\"portal-btn-primary\"\u003eâŒ‚ Home\u003c/Link\u003e\r\n    \u003c/div\u003e\r\n  );\r\n}",
                      "title":  "7. About.jsx"
                  },
                  {
                      "code":  "Home.jsx",
                      "title":  "8. Create Home.jsx File"
                  },
                  {
                      "code":  "import React from \"react\";\r\nimport { Link } from \"react-router-dom\";\r\nimport clgImg from \"./images.jpg\";\r\n\r\nexport default function Home() {\r\n  return (\r\n    \u003cdiv className=\"portal-card\"\u003e\r\n      \u003ch1 className=\"home-heading\"\u003eWelcome to home page\u003c/h1\u003e\r\n      \u003cdiv className=\"image-frame\"\u003e\r\n        \u003cimg src={clgImg} alt=\"Government Polytechnic Kadur\" className=\"college-photo\" /\u003e\r\n      \u003c/div\u003e\r\n      \u003cLink to=\"/about\" className=\"portal-btn-primary\"\u003e\r\n        Go to About page \u0026rarr;\r\n      \u003c/Link\u003e\r\n    \u003c/div\u003e\r\n  );\r\n}",
                      "title":  "9. Home.jsx"
                  },
                  {
                      "code":  "Navbar.jsx",
                      "title":  "10. Create Navbar.jsx File"
                  },
                  {
                      "code":  "import React from \"react\";\r\nimport { NavLink } from \"react-router-dom\";\r\n\r\nexport default function Navbar() {\r\n  return (\r\n    \u003cheader className=\"navbar-header\"\u003e\r\n      \u003cspan className=\"brand-title\"\u003eGP Kadur Portal\u003c/span\u003e\r\n      \u003cnav\u003e\r\n        \u003cNavLink to=\"/\" className={({ isActive }) =\u003e isActive ? \"nav-link-btn active\" : \"nav-link-btn\"}\u003eHome\u003c/NavLink\u003e\r\n        \u003cNavLink to=\"/about\" className={({ isActive }) =\u003e isActive ? \"nav-link-btn active\" : \"nav-link-btn\"}\u003eAbout\u003c/NavLink\u003e\r\n        \u003cNavLink to=\"/contact\" className={({ isActive }) =\u003e isActive ? \"nav-link-btn active\" : \"nav-link-btn\"}\u003eContact\u003c/NavLink\u003e\r\n      \u003c/nav\u003e\r\n    \u003c/header\u003e\r\n  );\r\n}",
                      "title":  "11. Navbar.jsx"
                  },
                  {
                      "code":  "Contact.jsx",
                      "title":  "12. Create Contact.jsx File"
                  },
                  {
                      "code":  "import React from \"react\";\r\nimport { Link } from \"react-router-dom\";\r\n\r\nexport default function Contact() {\r\n  return (\r\n    \u003cdiv className=\"portal-card\"\u003e\r\n      \u003ch1\u003eContact Us\u003c/h1\u003e\r\n      \u003cp\u003eðŸ“ Kadur - Birur Bypass Road, Kadur, Karnataka 577548\u003c/p\u003e\r\n      \u003cp\u003eðŸ“ž +91 8267 221234 / 221235\u003c/p\u003e\r\n      \u003cp\u003eâœ‰ï¸ gptkadur.principal@karnataka.gov.in\u003c/p\u003e\r\n      \u003cLink to=\"/\" className=\"portal-btn-primary\"\u003eâŒ‚ Home\u003c/Link\u003e\r\n    \u003c/div\u003e\r\n  );\r\n}",
                      "title":  "13. Contact.jsx"
                  },
                  {
                      "code":  "npm run dev",
                      "title":  "14. Run Development Server"
                  }
              ],
    "id":  "react-router",
    "pageTitle":  "React Router Code Snippets"
};
