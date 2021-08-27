# 14 Model-View-Controller (MVC): Tech Blog
# technology-blog

## Description

In this project I will build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The site was built completely from scratch and deployed to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Instructions

```md
This application is a CMS-style blog site
When you visit the site for the first time you are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the MyPage; and the option to log in.
When you click on the homepage option you are taken to the homepage.
When you click on any other links in the navigation, you are prompted to either sign up or sign in.
If you choose to sign up, you are prompted to create a username and password.
After you click on the sign-up button, then your new user credentials are saved and you are logged into the site.
If you revisit the site at a later time and choose to sign in, you ate prompted to enter a username and password.
After you are signed in to the site you will be presented with navigation links for the homepage, the MyPage, and the option to log out.
If you click on the homepage option in the navigation, then you will be directed to the homepage and presented with existing blog posts that include the post title and the date created.
When you click on an existing blog post you will be presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
Once you enter a comment and click on the submit button while signed in,
the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
If you click on the MyPage option in the navigation
Then you are taken to the MyPage and presented with any blog posts you have. already created and the option to add a new blog post
If you click on the button to add a new blog post,
then you will be prompted to enter both a title and contents for you blog post.
Once you click on the button to create a new blog post, the title and contents of my post are saved and you will be taken back to an updated MyPage with my new blog post.
If you click on one of my existing posts in the MyPage, then you will be able to delete or update my post and taken back to an updated MyPage.
Once you click on the logout option in the navigation, you will be signed out of the site.
If you are idle on the site for more than a set time, you will only be able to view comments and will be prompted to log in again before you can add, update, or delete comments.
```

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./assets/images/14-mvc-homework-demo-01.gif) 

## Technology Used

* The application’s folder structure follows the Model-View-Controller paradigm. 

* The program uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for its Views. 

* The [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages connect to a MySQL database through the Heroku based JAWSDB app for DB Models, and uses an Express.js API for the Controllers.

* The app requires the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables.

* The [bcrypt package](https://www.npmjs.com/package/bcrypt) is used to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages are used to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior.

* Uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views.

## Links:

* GitHub: https://github.com/PurpleAmaranth/technology-blog
* Heroku: https://purpleamaranth-technology-blog.herokuapp.com/