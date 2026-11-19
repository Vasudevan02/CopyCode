// Section: Registration Form
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['registration'] = {
    "title":  "Registration Form",
    "cards":  [
                  {
                      "code":  "npm create vite@latest",
                      "title":  "1. Create Vite Project"
                  },
                  {
                      "code":  "import React from \u0027react\u0027\r\nimport \u0027./App.css\u0027\r\n\r\nfunction App() {\r\n  const hello = (e) =\u003e {\r\n      e.preventDefault();\r\n      alert(\"Registration succesfull\")\r\n    }\r\n  return (\r\n    \u003cdiv className=\"main\"\u003e\r\n      \u003cdiv className=\"App\"\u003e\r\n        \u003cform onSubmit={hello}\u003e\r\n          \u003ch1 className=\"heading\"\u003eRegistration Form\u003c/h1\u003e\r\n          \u003cinput\r\n            type=\"text\"\r\n            className=\"input-field\"\r\n            placeholder=\"Enter your first name\"\r\n          /\u003e\r\n          \u003cinput\r\n            type=\"text\"\r\n            className=\"input-field\"\r\n            placeholder=\"Enter your last name\"\r\n          /\u003e\r\n          \u003cinput\r\n            type=\"email\"\r\n            className=\"input-field\"\r\n            placeholder=\"Enter your email\"\r\n          /\u003e\r\n          \u003cinput\r\n            type=\"password\"\r\n            className=\"input-field\"\r\n            placeholder=\"Enter your password\"\r\n          /\u003e\r\n          \u003cdiv\u003e\r\n            \u003cinput type=\"checkbox\" className=\"checkbox\" /\u003eI agree to the terms and conditions\r\n          \u003c/div\u003e\r\n          \u003cbutton type=\"submit\"\u003eRegister Now\u003c/button\u003e\r\n        \u003c/form\u003e\r\n      \u003c/div\u003e\r\n      \u003ch1 className=\"side-text\"\u003e\r\n        GPTK \u003cbr\u003e\u003c/br\u003eREGISTRATION\u003cbr\u003e\u003c/br\u003e FORM\r\n      \u003c/h1\u003e\r\n    \u003c/div\u003e\r\n  );\r\n}\r\nexport default App",
                      "title":  "2. App.jsx"
                  },
                  {
                      "code":  "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \u0027Gill Sans\u0027, sans-serif;\r\n}\r\n\r\n.main {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  background-color: #7681ff;\r\n  gap: 10px;\r\n}\r\n\r\n.App {\r\n  background-color: #f9f8f8;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  gap: 15px;\r\n  width: 300px;\r\n  height: 400px;\r\n}\r\n\r\n.heading { font-size: 20px; font-weight: bold; }\r\n\r\n.input-field {\r\n  width: 250px;\r\n  height: 35px;\r\n  border-radius: 5px;\r\n  border: 1px solid #7a7a7a;\r\n  padding-left: 10px;\r\n}\r\n\r\n.checkbox { margin-right: 10px; }\r\n\r\nbutton {\r\n  width: 150px;\r\n  height: 35px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: #7681ff;\r\n  color: white;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.side-text {\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 50px;\r\n  text-align: center;\r\n}",
                      "title":  "3. App.css"
                  },
                  {
                      "code":  "npm run dev",
                      "title":  "4. Run Development Server"
                  }
              ],
    "id":  "registration",
    "pageTitle":  "Registration Form (React)"
};
