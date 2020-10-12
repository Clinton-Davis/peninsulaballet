# The Peninsula Ballet School

<!-- ### User-Centric Frontend Development - _Code institute_ -->

---

The **_Peninsula Ballet_** school website is to show potential students and parents what the school is all about,
It contain the essential information that the client and User stories have highlighted.

My clients brief was that she wanted an **_elegant_** website, with information at a click of a button.
The overall goal is to get more new students and give information to the existing students and parents.

---

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) [![Netlify Status](https://api.netlify.com/api/v1/badges/10354c29-56de-4e3e-a7f1-cec8fcf95f2a/deploy-status)](https://app.netlify.com/sites/zealous-franklin-48c672/deploys)

---

[![Generic badge](https://img.shields.io/badge/Peninsula_Ballet_Website-is_Here-<>.svg)](https://www.southpeninsulaballet.com/)

---

## UX

### User Stories

1. As a user, I would be looking for details on the Ballet school, its history, are the teachers qualified?
2. As a user, I want to get details of where to buy the uniforms and what I would need.
3. As a user, To be able to find the schedule of the classes and the studios quickly.
4. As a user, I would like to know if they are Covid-19 conscious and what prescautions have been taken.

### Strategy

A full page layout, simple yet elegant and containing images that would inspire the young dancers inner ballerina.
In having a clean, easy to read and navigate website it would instill parental confidence in the school and allow them a sense of sercurity. They would feel their child would be well looked after.

### Scope

To show all the information in a clean and precise way, I decided to split up the website into pages. Each page is dedicated to a different aspect of the school. The market research and user stories showed me the top 5 things that had to be displayed.

### Structure

**Landing page (index.html)**
This is the first thing they would see. In this page, I wanted to give a general overall feed for the site, Elegant and simple with a direct link to the enrollment form and the benfists of doing Ballet.

**Testimonals Section**
The Testimonals Section with testimonial, to the page with quotes from social media.

**Teachers Section**
Here you will be able to read the teachers bios. There is also a history section on it,is a brief history of the school.

**Location Section**
Has a list of the studios the physical address and a button that links to a Google maps page that gives a pin if they need direction.

**Schedule Section**
This page has an easy to read table with the different classes and times at each studio.
I added a download schedule pdf.

**Enrollment Section**
This is the emrolment page that sends all the details to the teachers through EmaliJS, all the detials of the form are sent using method='POST' using JSON. The teachers will get a email and respond acordinly.

**Attire Section**
Ballet is an art-form with a set uniform for male and female, everything from hair to shoes has a strict rule on how and what to wear. This page gives an overview on how to tie hair (With Video) and where to go for the approriateforms — links to Outlets and videos on "how-to's".

**Covid-19**
Containing all the Covid safety regulations for the ballet school.

### Skeletons

#### Wireframe Mockups

### Surface

**Fonts**

* [Exo](https://fonts.google.com/specimen/Exo+2?query=Exo) - Primary Font: It is clear and easy to read and gives a moden feel. I use this for the main body of the page.
* [Italianno](https://fonts.google.com/specimen/Italianno?query=Italianno) - Secondary Font: "Italianno is an elegant calligraphic script with clean connectors and classic forms. Perfect for warm, inviting situations."

**Images**

* The whole page background pictures were chosen for there grace and elegance, whitch gives an almost romantic feel that ballet has. They were chosen to inspire and instil the desire for the inner ballerina. Each page has a different picture, depending on what information is in the forefront.

---

## Technologies

### Core Languages, Frameworks, Editors

* [HTML](https://en.wikipedia.org/wiki/HTML) ~ Markup language designed to be displayed in a web browser.
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) ~ Style sheet language used for describing the presentation of a document in HTML.
* [JavaSript](https://en.wikipedia.org/wiki/JavaScript)
* [Boostnote](https://boostnote.io/) ~ Design and customize responsive mobile-first sites.
* [Visual Studio Code](https://code.visualstudio.com/) ~ Code editor redefined and optimized for building and debugging modern web and cloud applications.

#### Third-Party Tools

* [Google Fonts](https://fonts.google.com/)
* [RBGA Color picker](https://www.december.com/html/spec/colorrgbadec.html)
[W3 Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) ~ Check Cascading Style Sheets (CSS) and (X)HTML documents with style sheets
[W3C CSS Validation](https://jigsaw.w3.org/css-validator/#validate_by_input) ~ A CSS validator checks your Cascading Style Sheets to make sure that they comply with the CSS standards set by the W3 Consortium.
* [Font-Awesome v 5.6.1](https://fontawesome.com/) ~ Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit.

 Start Using
* [TinyPNG](https://tinypng.com/) ~ Smart PNG and JPEG compression
* [Bitly \| URL Shortener](https://bitly.com/) ~ A URL shortener built with powerful tools to help you grow and protect your brand.
* [Google maps](https://www.google.com/maps)
* [GitHub](https://github.com/) ~ Distributed version control and source code management (SCM) functionality of Git, plus its own features.
* [Slack](https://slack.com/intl/en-ie/) ~ A workspaces allowing you to organize communications by channels for group discussions and allows for private messages to share information.
* [CSSMatric](https://cssmatic.com/) ~ The ultimate CSS tools for web designers

---

## Features

* *Collapsable Navbar* - This is a custom Navbar with smoth scrolloing between section and a time delay when opening th burger menu
* *Google Maps Links* - I have links to various locations for outlets and physical address, From there they can get directions and links to other webpages.
* *Enrolment form:* - Emailes owners directly.

### Features Left to Implement

* I want to add a gallery page with pictures. I was asked to hold off on this until the client can get the proper release documents signed by the students

---

## Testing

Reading the user stories, gave me a good insight as to where and what the site needed to be and what to show,

* In the Teachers section, you will be able to find information on the teachers and their qualifications and also a brief description of the history of the school.
* On the Attire page is a description of the clothes (uniforms) that are needed and links to outlets/shops on a Google maps page. Here they can get directions to the physical address and webpages.
* In the Locations page there are addresses and Google Maps links to the studios. On the Schedule page there is a detailed table with Location Grade and Times, with a downloadable PDF

I used [Visual Studio Code](https://code.visualstudio.com/) to make the site which has an extention called "Live Server by ritwickdey.liveserver", this enabled me open an instance of Chrome to see live updates on what changes I have made. When I make a change to a design element, I then a look in the Developer tool that is provided to see how it works on different screen sizes and resolutions.

I used GitHub web hosting service called Gitpages to host an instance of the page, I then went through all the pages and links in the Nav Bar and footer to make sure they work, and make sure my: _target="\_blank"_ - is working as planned.

I do this for every page, and I use the different browsers, *Chrome, FireFox, Windows Edge, Safari.\*\* In each browser, I try to break the layout. In *Chrome and FireFox\*, I make use of the preset they have for mobile/tablets. On the other browsers, I resize the window manually to see their response.

I also viewed it on different mobile phone types to see how it worked.

<details>
<summary>List of Moblie devices I've tested on</summary>
<ul>
<li>iPhone 4 / 6 / 8</li>
<li>Samsung J5 / A5</li>
<li>Sony Xperia 10</li>
<li>Mi A3</li>
<li>iPad</li>

</details>
<br>

The next stage of testing was external testing. I sent the code and the webpage into peer-to-peer code testing in Code Institute section on Slack.

### Bugs

I found a bug in the footer section on the page. On pages that had less information and used less real state, the footer kept on creeping up, and on some devices, the page length was not filling the entire screen. I reached out to the Slack community and was pointed in the right direction. After a little figgering out I what able to fix it.
>The fix was relatively easy, the reason it was creeping up was I hadn't given the browsers the height it was looking for, once I set the height of the HTML and the Body of the page:

```html
html {
    height: 100%;
}

body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
```

everything sealed down, and the footer stayed at the foot.

Another bug I have is on the landing page, portrait view on a mobile the screen is not scrolling. Looking into this further I fond that the _Landing page (index HTML)_ and the _Contact page_ were not filling the iPad resolutions at all, only half of the page was being utilised.
My fix was to give the to pages a separate class with its own _min-height_ giving the footer _(12vh)_ the rest of the height.

```css
.max-container {
    padding: 20px;
    min-height: 88vh;
}
```

That fix has worked.

---

## Deployment

<details>
<summary>To deploy on GitHub pages:</summary>
<br>

 1. Go to the repository you want to deploy.
 2. Click on the setting tab.
 3. Scroll down until you get GitHub Pages section about ¾ of the way down, In a light blue rectangle, you find the link.
 4. Click on the Link.

</details>
<br>
<details>
<summary>Clone to a work station</summary>
<br>

1. On GitHub, navigate to the main page of the repository.
2. Under the repository name, click Clone or download.
3. o clone the repository using HTTPS, under "Clone with HTTPS", click. To clone the repository using an SSH key, including a certificate issued by your organisation's SSH certificate authority, click Use SSH, then click.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be.
6. Type `git clone` and then paste the URL you copied in Step 2.
7. Press Enter. Your local Clone will be created.

</details>

---

### Credits

#### Design

I created the design of the web page, and I was heavily inspired by the
"The Whiskey Drop project".
Photo by Naitian（Tony） Wang on Unsplash
Photo by Gez Xavier Mansfield on Unsplash
Photo by Etienne Boulanger on Unsplash
Photo by Matthew Henry on Unsplash
Photo by Gaelle Marcel on Unsplash
Photo by Adam Walker on Unsplash

##### Content

All information and bios credited to Tracy Davis and Lielanie Beer.

##### Media

All pictures used are from:

* [Pixabay](https://pixabay.com/)
* [Shutterstock](https://www.shutterstock.com/home)
* [Unsplash](https://unsplash.com/)

* [Stockfresh](https://stockfresh.com/)
  and have [CC licences](https://en.wikipedia.org/wiki/Creative_Commons_license) or paid Standard licences.

### Acknowledgements

For the use of code and knowledge.

* [YouTube - Kevin Powell](https://www.youtube.com/user/KepowOb) for code snippets and [Sticky footer](https://bit.ly/2NAFAgW) advice
* [CSS-Tricks](https://css-tricks.com/) website for help with [BackGround Image](https://css-tricks.com/perfect-full-page-background-image/) / [Overflow](https://css-tricks.com/the-css-overflow-property/) / [FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) / code and Documentation.
* [W3Schools](https://www.w3schools.com/) for code snippets and documentation with [Creating a Custom Scrollbar](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) / General research on HTML CSS and Bootstrap implementation.

* [CSSMatric](https://cssmatic.com/) for [Box Shadow Generator](https://cssmatic.com/box-shadow)
* [GitHub](https://github.com/) for documentation on how to [Deploy GitPages](https://bit.ly/2Kc5u8N) and [How to Clone Repository](https://bit.ly/32Emdbc).

* [Google Fonts](https://fonts.google.com/) for fonts and code snippets
* [Slack](https://slack.com/intl/en-ie/) community for Testing / Encouragement / Code Snippets and pointers.

---
