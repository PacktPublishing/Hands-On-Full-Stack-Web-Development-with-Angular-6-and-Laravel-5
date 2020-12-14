## $5 Tech Unlocked 2021!
[Buy and download this Book for only $5 on PacktPub.com](https://www.packtpub.com/product/hands-on-full-stack-web-development-with-angular-6-and-laravel-5/9781788833912)
-----
*If you have read this book, please leave a review on [Amazon.com](https://www.amazon.com/gp/product/1788833910).     Potential readers can then use your unbiased opinion to help them make purchase decisions. Thank you. The $5 campaign         runs from __December 15th 2020__ to __January 13th 2021.__*

# Hands-On Full Stack Web Development with Angular 6 and Laravel 5

<a href="https://www.packtpub.com/web-development/hands-full-stack-web-development-angular-6-and-laravel-5?utm_source=GitHub&utm_medium=repository&utm_campaign=9781788833912"><img src="https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B09877.png" alt="Hands-On Full Stack Web Development with Angular 6 and Laravel 5" height="256px" align="right"></a>

This is the code repository for [Hands-On Full Stack Web Development with Angular 6 and Laravel 5](https://www.packtpub.com/web-development/hands-full-stack-web-development-angular-6-and-laravel-5?utm_source=GitHub&utm_medium=repository&utm_campaign=9781788833912), published by Packt.

**Become fluent in both frontend and backend web development with Docker, Angular and Laravel**

## What is this book about?
Angular, considered as one of the most popular and powerful frontend frameworks, has undergone a major overhaul to embrace emerging web technologies so that developers can build cutting-edge web applications.
This book gives you practical knowledge of building modern full-stack web apps from scratch using Angular with a Laravel Restful back end. The book begins with a thorough introduction to Laravel and Angular and its core concepts like custom errors messages, components, routers, and Angular-cli, with each concept being explained first, and then put into practice in the case-study project.
With the basics covered, you will learn how sophisticated UI features can be added using NgBootstrao and a component-based architecture. You will learn to extend and customize variables from Bootstrap CSS framework.

This book covers the following exciting features: 
* Explore the core features of Angular 6 to create sophisticated user interfaces
* Use Laravel 5 to its full extent to create a versatile backend layer based on RESTful APIs
* Configure a web application in order to accept user-defined data and persist it into the database using server-side APIs
* Build an off-line-first application using service-worker and manifest file
* Deal with token based authentication on single page application (SPA).

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1788833910) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter02.

The code will look like the following:
```
{
 "require": {
     "laravel/framework": "5.*.*",
 }
}
```

**Following is what you need for this book:**
This book targets developers who are new to Angular, Laravel, or both, and are seeking a practical, best-practice approach to development with these technologies. They must have some knowledge of HTML, CSS and JavaScript. Familiarity of PHP is assumed to get the most from this book.

With the following software and hardware list you can run all code files present in the book (Chapter 1-15).

### Software and Hardware List

| Chapter  | Software required                   | OS required                        |
| -------- | ------------------------------------| -----------------------------------|
| 1 - 11   | Docker                              | Windows, Mac OS X, and Linux (Any) |
| 1 - 11   | VS Code                             | Windows, Mac OS X, and Linux (Any) |
| 2 - 11   | Node.js                             | Windows, Mac OS X, and Linux (Any) |
| 4        | Workbench                           | Windows, Mac OS X, and Linux (Any) |


## Development environment
**All chapters and examples are based on Docker and Docker-compose**.

- Docker:
  * Go to https://docs.docker.com/install/.
  * Choose your platform and follow the installation steps.
  * Start Docker.
- VS Code:
  * Go to the https://code.visualstudio.com/Download
  * Choose your platform and follow the installation steps.
  * Follow the installation steps for your platform.
- MySQL Workbench:
  * Go to https://dev.mysql.com/downloads/workbench/
  * Choose your platform and follow the installation steps.
- Node.js:
  * Go to https://nodejs.org/en/
  * Choose your platform and follow the installation steps.

## Using the sample code

After download the individual chapters from repository, we need to take a few steps before running our application.

Here is the steps (Remember you must have all the softwares installed on your machine mentioned on Software list).

Installation process for chapters: 01, 04, 05, 06, 10, 11.

1. Edit `.env.example` to: `.env` if you can't see the `.env`.
**Important Note: on some operating systems `.dot` files are hidden by default**,
so you need a code editor to see and edit this kind of file, we strong recommend the use of VS.code. Open your terminal inside the chapter folder and type the following command on your Terminal: `cp .env.example .env`.
2. Change the `.env` database configuration using the `docker-compose.yml` MySql configuration as follow:
    ```
      DB_CONNECTION=mysql
      DB_HOST=mysql
      DB_PORT=3306
      DB_DATABASE=chapter-04 # Note here you need to use the right chapter number
      DB_USERNAME=chapter-04
      DB_PASSWORD=123456
      ```
3. Open your Terminal window inside the project folder and type the following command: `docker-compose up -d` to start all **Docker containers**, this should take some minutes do download and build the images.
4. Type the following command: `docker-compose exec php-fpm bash` to access container **bash**.
5. Inside the container bash, type the following command: `composer install`, this command may take a few minutes to download all the project dependencies, depending on your internet connection.
6. Run `php artisan key:generate`
7. Run `php artisan migrate`
8. Run `php artisan db:seed`

**Congratulations** now we have everything we need to see the application running.

Open your default browser and go to http://localhost:8081. and we can see the Laravel welcome screen.

---
**Important note: On some chapters the url must be different. We advise you to use the individual instructions in each chapter to have access to the correct urls.**
**if you are on windows, use the IP address generated by Docker-tools-cmd**

---

### Special instructions for some chapters

**chapter 02**:
Open your terminal inside the chapter folder and type the folloing command: `npm install`.

**chapter 03**:
1. Open your terminal inside the chapter folder and type the folloing command: `npm install`.
2. Type on your terminal: `npm start`.
3. Go to http://localhost:4200/

**chapter 07**:

In this chapter you must conbine instruction for back-end chapters (01, 04, 05, 06, 10, 11) with front-end chapters (01, 03). So here is the step by step;

1. Edit `.env.example` to: `.env` if you can't see the `.env`.
**Important Note: on some operating systems `.dot` files are hidden by default**,
so you need a code editor to see and edit this kind of file, we strong recommend the use of VS.code. Open your terminal inside the chapter folder and type the following command on your Terminal: `cp .env.example .env`.
2. Change the `.env` database configuration using the `docker-compose.yml` MySql configuration as follow:
    ```
      DB_CONNECTION=mysql
      DB_HOST=mysql
      DB_PORT=3306
      DB_DATABASE=chapter-04 # Note here you need to use the right chapter number
      DB_USERNAME=chapter-04
      DB_PASSWORD=123456
      ```
3. Open your Terminal window inside the project folder and type the following command: `docker-compose up -d` to start all **Docker containers**, this should take some minutes do download and build the images.
4. Type the following command: `docker-compose exec php-fpm bash` to access container **bash**.
5. Inside the container bash, type the following command: `composer install`, this command may take a few minutes to download all the project dependencies, depending on your internet connection.
6. Run `php artisan key:generate`
7. Run `php artisan migrate`
8. Run `php artisan db:seed`

Open your terminal inside `chapter/Client` folder and type the following commands:

9. Open your terminal inside the chapter folder and type the folloing command: `npm install`.
10. Type on your terminal: `npm start`.

---


We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://www.packtpub.com/sites/default/files/downloads/HandsOnFullStackWebDevelopmentwithAngular6andLaravel5_ColorImages.pdf).

### Related products <Paste books from the Other books you may enjoy section>
* Full-Stack Vue.js 2 and Laravel 5 [[Packt]](https://www.packtpub.com/application-development/full-stack-vuejs-2-and-laravel-5?utm_source=GitHub&utm_medium=repository&utm_campaign=9781788299589) [[Amazon]](https://www.amazon.com/dp/1788299582)

* ASP.NET Core 2 and Angular 5 [[Packt]](https://www.packtpub.com/application-development/aspnet-core-2-and-angular-5?utm_source=GitHub&utm_medium=repository&utm_campaign=9781788293600) [[Amazon]](https://www.amazon.com/dp/1788293606)

## Get to Know the Author
**Fernando Monteiro**
 is a full-stack engineer, speaker, and open source contributor. He has built and made some of his personal projects open source such as Responsive Boilerplate, Frontend Boilerplate, Angm-Generator, and TrelloMetrics. With around 16 years of experience in information technology, his current focus is on web and mobile enterprise JavaScript applications. He has worked as graphic designer for various companies and products, including mobile applications.


## Other books by the authors
* <a href="http://www.packtpub.com/html5-responsive-table-design-how-to/book" target="_blank">Instant HTML5 Responsive Table Design</a>
* <a href="https://www.packtpub.com/web-development/learning-single-page-web-application-development?utm_source=GitHub&utm_medium=repository&utm_campaign=9781783552092" target="_blank">Learning Single-page Web Application Development</a>
* <a href="https://www.packtpub.com/web-development/angularjs-directives-cookbook?utm_source=GitHub&utm_medium=repository&utm_campaign=9781784395896" target="_blank">AngularJS Directives Cookbook</a>
* <a href="https://www.packtpub.com/web-development/nodejs-6x-blueprints" target="_blank">Node.JS 6.x Blueprints</a>

### Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.
