# GraphQL & React Simple Program Practice

To learn and do this application yourself please start here [GraphQL Tutorial by Net Ninja](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=1)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://bitbucket.org/lbesson/ansi-colors)

# Table of Contents
1. [License MIT](#license-information)
2. [Description](#application-description)
3. [Installation](#installation-instructions)
4. [Usage](#application-usage)
5. [Contribution Guidelines](#contribution-guidelines)
6. [Testing](#testing-instrutions)
7. [Known Issues/Errors](#known-issues/errors)
8. [Dependencies Used](#dependencies-used)
9. [Questions](#questions)

# License Information

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://www.mit.edu/~amini/LICENSE.md) Documentation

Please refer to license documentation for any questions regarding reusing 
this software or any code within this application.

[Back to Top](#table-of-contents)

# Application Description

Using the express for our backend, mongodb for our database, react for our front end and graphql for data manipulation, and following the tutorial created by Net Ninja on youtube, I have created a simple application to add new books to an existing set of authors

[Dependencies Used](#dependencies-used)

[Back to Top](#table-of-contents)

# Installation Instructions

To install, Git clone onto your device. Open up a terminal and cd into the server director and run 'npm install'

Once all dependencies are installed in the server directory, run 'nodemon app.js' and spin up the backend server. File should say 'now listening for requests on port 4000' followed by 'connected to database' - if it does not say connected to databse, you will need to create a database on mongoose for this file. 

That is something I unfortunately do not have covered. If you are capable, create your mongoose backend and connect it in the app.js file for mongoose where it says mongoose connect - inside of the brackets should be the link with your name and password for the mongoose collection. 

Once this is all complete, open a new terminal window and cd into the client directory of this program. Run 'npm install' to install all necessary dependencies. Once that is copmlete run npm start to spin up the server. The application should not be live.

[Dependencies Used](#dependencies-used)

[Back to Top](#table-of-contents)

# Application Usage

The purpose of this application is to learn the basics of graphql and to learn how to connect graphql to a backend server, a database, and a front end specifally using react.

[Back to Top](#table-of-contents)

# Contribution Guidelines

NA

[Back to Top](#table-of-contents)

# Testing Instrutions

NA

[Back to Top](#table-of-contents)

# Known Issues/Errors

There are some front end issues with scrolling when too many books are added. Also there are no type of verification tests that exist to see if these books actually exist. Also, there is no way to add or verify more authors.

[Back to Top](#table-of-contents)

# Dependencies Used

Here are the dependencies that were used and their latest version they were used.

### Server Side
    "cors": "^2.8.5"
    "express": "^4.17.1"
    "express-graphql": "^0.12.0"
    "graphql": "^15.5.1"
    "lodash": "^4.17.21"
    "mongoose": "^6.0.2"
    "nodemon": "^2.0.12"
### Front-End
    "apollo-boost": "^0.4.9"
    "graphql": "^15.5.1"
    "lodash": "^4.17.21"
    "react": "^17.0.2"
    "react-apollo": "^3.1.5"
    "react-dom": "^17.0.2"
    "react-scripts": "4.0.3"

[Back to Top](#table-of-contents)

# Questions

If you have any questions that have not been answered, please send me an email: jpatterson933@ucla.edu

## Checkout My GitHub!

[Back to Top](#table-of-contents)

### [jpatterson933](https://github.com/jpatterson933)
### [Live Application](NA)
### [GitHub Repository](https://github.com/jpatterson933/graphQL)