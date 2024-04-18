Hi,

I'm Felipe and welcome to my cypress based test project focused on gmail login/register process, this project is intended to be used in Mozilla Firefox.

In order to run the tests you'll need cypress installed, here's a quick how:

1.Open the console and run the command: npm install cypress

Each test is located in the E2E folder, inside Cypress. Here's the path: \cypress\E2E\testname.cy.js

Check below how to run each test:

Cypress interface:
1.Open the console and run the command: npx cypress open

Headless mode:
1.Open the console and run the command: npx cypress run --browser firefox

Notes:
16:04 18/04/2024: There's a little quirk I've noticed with the selectors, theres two selectors i've found:

jsname;
id;

However I'm not sure about using "jsname" since it's use is rather inconsistent, I've also found some duplicates using the same "jsname". Id is also used as a selector, once again 
its use is inconsistent(but I haven't found duplicates like "jsname" has). It seems "id" is being used for inputs and "jsname" for buttons and other types of html contents.