// Section: Simple Reg Form
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['simple-reg-form'] = {
    "title":  "Simple Reg Form",
    "cards":  [
                  {
                      "code":  "\u003c!doctype html\u003e\r\n\u003chtml lang=\"en\"\u003e\r\n  \u003chead\u003e\r\n    \u003cmeta charset=\"UTF-8\" /\u003e\r\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /\u003e\r\n    \u003ctitle\u003eRegister\u003c/title\u003e\r\n    \u003clink rel=\"stylesheet\" href=\"style.css\" /\u003e\r\n  \u003c/head\u003e\r\n  \u003cbody\u003e\r\n    \u003cform id=\"regForm\"\u003e\r\n      \u003ch2\u003eRegister\u003c/h2\u003e\r\n      \u003cp\u003eUsername:\u003cbr /\u003e\u003cinput type=\"text\" id=\"username\" required /\u003e\u003c/p\u003e\r\n      \u003cp\u003eEmail:\u003cbr /\u003e\u003cinput type=\"email\" id=\"email\" required /\u003e\u003c/p\u003e\r\n      \u003cp\u003ePassword:\u003cbr /\u003e\u003cinput type=\"password\" id=\"password\" required /\u003e\u003c/p\u003e\r\n      \u003cbutton type=\"submit\"\u003eSign Up\u003c/button\u003e\r\n    \u003c/form\u003e\r\n    \u003cscript src=\"script.js\"\u003e\u003c/script\u003e\r\n  \u003c/body\u003e\r\n\u003c/html\u003e",
                      "title":  "1. index.html"
                  },
                  {
                      "code":  "body {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n  background: #f7f8fc;\r\n}\r\nform {\r\n  background: white;\r\n  padding: 30px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\r\n  width: 280px;\r\n}\r\np {\r\n  margin: 0 0 15px 0;\r\n}\r\ninput {\r\n  width: 100%;\r\n  padding: 6px;\r\n  border: 1px solid #767676;\r\n  border-radius: 2px;\r\n  box-sizing: border-box;\r\n  margin-top: 5px;\r\n}\r\nbutton {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background: #007bff;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 6px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n}",
                      "title":  "2. style.css"
                  },
                  {
                      "code":  "document.getElementById(\u0027regForm\u0027).addEventListener(\u0027submit\u0027, function (e) {\r\n  e.preventDefault();\r\n  alert(\u0027Registration Successful!\u0027);\r\n  this.reset();\r\n});",
                      "title":  "3. script.js"
                  }
              ],
    "id":  "simple-reg-form",
    "pageTitle":  "Simple Registration Form using HTML, CSS, JS"
};
