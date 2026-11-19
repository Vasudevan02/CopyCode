// Section: Simple Ts Program
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['simple-ts-program'] = {
    "title": "Simple Ts Program",
    "cards": [
        {
            "code": "npm install -g typescript",
            "title": "1. Install TypeScript Globally"
        },
        {
            "code": "tsc -v",
            "title": "2. Verify TypeScript Installation"
        },
        {
            "code": "npm install -g ts-node",
            "title": "3. Install ts-node Globally"
        },
        {
            "code": "mkdir TypeScript",
            "title": "4. Create TypeScript Directory"
        },
        {
            "code": "cd TypeScript",
            "title": "5. Change Directory to TypeScript"
        },
        {
            "code": "npm install typescript --save-dev",
            "title": "6. Install TypeScript as Dev Dependency"
        },
        {
            "code": "console.log(\"Hello World\");\nconsole.log(\"Arithmetic operation\");\n\nvar num1 = 10;\nvar num2 = 2;\nvar res = 0;\n\nres = num1 - num2;\nconsole.log(\"Difference: \" + res);\n\nres = num1 * num2;\nconsole.log(\"Multiplication: \" + res);\n\nres = num1 % num2;\nconsole.log(\"Remainder: \" + res);\n\nres = num1 + num2;\nconsole.log(\"Sum: \" + res);\n\nnum1++;\nconsole.log(\"value of num1 after increment: \" + num1);\n\nnum2--;\nconsole.log(\"value of num2 after decrement: \" + num2);",
            "title": "7. TypeScript.ts"
        },
        {
            "code": "tsc TypeScript.ts",
            "title": "8. Compile TypeScript Code"
        },
        {
            "code": "node TypeScript.js",
            "title": "9. Run Compiled Program with Node"
        }
    ],
    "id": "simple-ts-program",
    "pageTitle": "Simple TypeScript Program"
};
