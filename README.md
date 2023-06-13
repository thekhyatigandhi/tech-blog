# TECH CONNECT </br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)
[![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)](https://nodemon.io/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)

## Description

Tech Connect is a blog site designed following the Model-View-Controller (MVC) paradigm. Leveraging Handlebars.js as the templating language, Sequelize as the Object-Relational Mapping (ORM) tool, and the express-session npm package for authentication, it offers a seamless user experience. Logged-in users enjoy complete control over posts and comments, including creation, editing, and deletion. On the other hand, non-members can only browse posts and comments. If they wish to engage further, they are prompted to log in, ensuring a secure and interactive environment. </br>

- [Application](#Application)
- [Technologies Used](#TechnologiesUsed)
- [Installation](#Installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Application

The following [video](https://youtu.be/Yw5SnOgDlVI) shows the application's set-up in VScode and demonstarted all API routes using Insomnia.

https://github.com/thekhyatigandhi/E-Commerce-Back-End/assets/125392517/e6371e19-5e57-422e-85e2-81474ad1d8c4

## Technologies Used

MySQL </br>
NODE JS </br>
Insomnia

## Installation

-To access the project without any installation, simply visit the deployed Heroku link.

If you prefer to run the project locally, follow these steps:

-Check if you have Node.js installed on your computer. Open your command line and type node -v. If Node.js is not installed, visit the Node.js website to install it.

-Clone the project repository to your local machine.

-Open the project directory in your command line.

-Run the command npm i to install the necessary dependencies.

-Create a file in the root directory called .env and provide your database name and personal MySQL login information in the following format:

```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PW='YOUR PASSWORD'
```

-Open MySQL by running the command mysql -u root -p and enter your personal MySQL password.

-Create the database by running the command source schema.sql. Once completed, exit MySQL by typing \q.

-Seed the database with initial data by running the command npm run seed.

-Start the server by running the command npm start.

-Alternatively, if you want the server to automatically restart whenever you make changes to the code, use Nodemon by running the command npm run watch.

-By following these steps, you can run the project locally and have full control over its functionality.

## Usage

Access the [deployed Heroku link](link) using your preferred browser.

- Sign up by creating a unique username and strong password. (Passwords must contain one uppercase letter, one lowercase letter, a digit, and a special character.) After confirming your password and clicking `submit`, you will be logged in automatically after account creation. Remember your log in credentials for future visits!
- Create a new post from _anywhere_ on the site by clicking `NEW` in the nav bar. Enter a title and post body and click `POST`. The new post is now viewable on the 'main feed' and 'dash' view.
- The homepage ('main feed') shows all blog post previews by all users and can be accessed by clicking the logo in the nav or `HOME`. This view is public and can also be accessed when logged out.
- The `DASH` shows only blog post previews written by the user who is currently logged in.
- Post previews from the homepage and dash feeds are clickable and take you to a single page view of that specific post. Here you can read comments, write comments, and/or update the post _if_ you are the author.
- Log out of the current session by clicking `LOG OUT` in the nav bar.

Local users can access `http://localhost:3001` using `npm start`.

## Credits

https://nodejs.org/en </br>
</br>

## License

MIT License.
For more information on the license, please refer to the LICENSE file in the repo
