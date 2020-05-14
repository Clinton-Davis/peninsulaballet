# The Peninsula Ballet School

### User-Centric Frontend Development - _Code institute_

---

The _Peninsula Ballet school_ website is to show potential students and parents what the school is all about,
It has five pages that contain the essential information that the client and User stories have highlighted.

My clients brief was that she wanted an **_elegant_** website, with information at a click of a button.
The overall goal is to get more new students and give information to the existing students and parents.

---

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

---

## Demo

## A live Site **_[Here](https://clinton-davis.github.io/peninsulaballet/)_**

## UX

### User Stories

To get the user stories, I contacted the client and asked for her target demographic; Parents with a child or children between the ages of 3 and 18 years.
I contacted several parents that fitted the demographic, and I asked the question:
What are the top 3 things what you would be looking for in a ballet school?
Here are the most common answers we got back:

1. I would be looking for details on the Ballet school, its history, are the teachers qualified?
2. I want to get details of where to buy the uniforms and what I would need.
3. To be able to find the schedule of the classes and the studios quickly.

### Strategy

My Strategy was simple; to keep within the clients wants and needs.
This entailed having a page layout that was simple yet elegant and containing images that would inspire the young dancers inner ballerina.
In having a clean, easy to read and navigate website it would instill parental confidence in the school and allow them a sense of sercurity. They would feel their child would be well looked after.

### Scope

To show all the information in a clean and precise way, I decided to split up the website into five pages. Each page is dedicated to a different aspect of the school. The market research and user stories showed me the top 5 things that had to be displayed.

### Structure.

<details>
<summary>Landing page (index.html)</summary><br> 
This is the first thing they would see. In this page, I wanted to give a general overall feed for the site, Elegant and simple with a direct link to the enrollment form and the benfists of doing Ballet. 
</details>
<br>
<details>
<summary>Testimonals Section</summary><br>
The Testimonals Section with testimonial, to the page with quotes from social media.
</details>
<br>
<details>
<summary>Teachers Section</summary><br>
Here you will be able to read the teachers bios. There is also a history section on it,is a brief history of the school.
 </details>
 <br>
<details>
<summary>Location Section</summary><br>
Has a list of the studios the physical address and a button that links to a Google maps page that gives a pin if they need direction.
</details><br>
<details>
<summary>Schedule Section</summary><br>
This page has an easy to read table with the different classes and times at each studio.
 I added a download schedule pdf.
 </details>
 <br>
<details>
<summary>Enrollment Section</summary><br>
 This is the emrolment page that sends all the details to the teachers through EmaliJS, all the detials of the form are sent using method='POST' using JSON. The teachers will get a email and respond acordinly.
</details>
 <br>
 <details>
 <summary>Attire Section</summary><br>
 Ballet is an art-form with a set uniform for male and female, everything from hair to shoes has a strict rule on how and what to wear. This page gives an overview on how to tie hair (With Video) and where to go for the approriate iniforms — links to Outlets and videos on "how-to's".
 </details>

### Skeletons

#### Wireframe Mockups

### Surface

- The whole page background pictures were chosen for there grace and elegance, whitch gives an almost romantic feel that ballet has. They were chosen to inspire and instil the desire for the inner ballerina. Each page has a different picture, depending on what information is in the forefront.
- The heading font I Chose is _Italianno_. I chose it for its readability and elegant apperance. It has a script like apperance but is clear.
  The paragraphs font I chose is _Exo_. It is clear and easy to read and gives a moden feel.
- There are multiple options for downloading pdfs.

---

## Technologies

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaSript](https://en.wikipedia.org/wiki/JavaScript)
- [CSSMatric](https://cssmatic.com/)
- [Font-Awesome v 5.6.1](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [RBGA Color picker](https://www.december.com/html/spec/colorrgbadec.html)
- [TinyPNG](https://tinypng.com/)
- [Bitly \| URL Shortener](https://bitly.com/)
- [Google maps](https://www.google.com/maps)
- [Visual Studio Code](https://code.visualstudio.com/)
- [W3Schools](https://www.w3schools.com/)
- [YouTube](https://www.youtube.com/)
- [GitHub](https://github.com/)
- [Slack](https://slack.com/intl/en-ie/)
- [Boostnote](https://boostnote.io/)

---

## Features

- Collapsable Navbar - This is a custom Navbar with smoth scrolloing between section and a time delay when opening th burger menu
- Google Maps Links - I have links to various locations for outlets and physical address, From there they can get directions and links to other webpages.
- Enrolment form that is emailed to the hr department

### Features Left to Implement

- I want to add a gallery page with pictures. I was asked to hold off on this until the client can get the proper release documents signed by the students
- To make the newsletter email input work.

---

## Testing

Reading the user stories, gave me a good insight as to where and what the site needed to be and what to show,

- In the Teachers section, you will be able to find information on the teachers and their qualifications and also a brief description of the history of the school.
- On the Attire page is a description of the clothes (uniforms) that are needed and links to outlets/shops on a Google maps page. Here they can get directions to the physical address and webpages.
- In the Locations page there are addresses and Google Maps links to the studios. On the Schedule page there is a detailed table with Location Grade and Times, with a downloadable PDF

I used Visual Studio to make the site which has an extention called live server, this enabled me open an instance of Chrome to see live updates on what changes I have made. When I make a change to a design element, I then a look in the Developer tool that is provided to see how it works on different screen sizes and resolutions.

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
The fix was relatively easy, the reason it was creeping up was I hadn't given the browsers the height it was looking for, once I set the height of the HTML and the Body of the page:

```
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

```
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
<ol>
<li> Go to the repository you want to deploy.</li>
<li> Click on the setting tab.</li>
<li> Scroll down until you get GitHub Pages section about ¾ of the way down, In a light blue rectangle, you find the link.</li>
<li> Click on the Link.</li>
</ol>
</details>
<br>
<details>
<summary>Clone to a work station</summary>
<br>
<ol>
<li>On GitHub, navigate to the main page of the repository.</li>
<li>Under the repository name, click Clone or download.</li>
<li>To clone the repository using HTTPS, under "Clone with HTTPS", click. To clone the repository using an SSH key, including a certificate issued by your organisation's SSH certificate authority, click Use SSH, then click.</li>
<li>Open Git Bash.</li>
<li>Change the current working directory to the location where you want the cloned directory to be.</li>
<li>Type ‘’’git clone’’’ and then paste the URL you copied in Step 2.</li>
<li>Press Enter. Your local Clone will be created.</li>
<ol>
</details>

---

### Credits

##### Design:

I created the design of the web page, and I was heavily inspired by the
"The Whiskey Drop project".
Photo by Naitian（Tony） Wang on Unsplash
Photo by Gez Xavier Mansfield on Unsplash
Photo by Etienne Boulanger on Unsplash
Photo by Matthew Henry on Unsplash
Photo by Gaelle Marcel on Unsplash
Photo by Adam Walker on Unsplash

##### Content:

All information and bios credited to Tracy Davis and Lielanie Beer.

##### Media:

All pictures used are from:

- [Pixabay](https://pixabay.com/)
- [Shutterstock](https://www.shutterstock.com/home)
- [Unsplash](https://unsplash.com/)

- [Stockfresh](https://stockfresh.com/)
  and have [CC licences](https://en.wikipedia.org/wiki/Creative_Commons_license) or paid Standard licences.

### Acknowledgements

For the use of code and knowledge.

- [YouTube - Kevin Powell](https://www.youtube.com/user/KepowOb) for code snippets and [Sticky footer](https://bit.ly/2NAFAgW) advice
- [CSS-Tricks](https://css-tricks.com/) website for help with [BackGround Image](https://css-tricks.com/perfect-full-page-background-image/) / [Overflow](https://css-tricks.com/the-css-overflow-property/) / [FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) / code and Documentation.
- [W3Schools](https://www.w3schools.com/) for code snippets and documentation with [Creating a Custom Scrollbar](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) / General research on HTML CSS and Bootstrap implementation.
- [CSSMatric](https://cssmatic.com/) for [Box Shadow Generator ](https://cssmatic.com/box-shadow)
- [GitHub](https://github.com/) for documentation on how to [Deploy GitPages](https://bit.ly/2Kc5u8N) and [How to Clone Repository](https://bit.ly/32Emdbc).
- [Google Fonts](https://fonts.google.com/) for fonts and code snippets
- [Slack](https://slack.com/intl/en-ie/) community for Testing / Encouragement / Code Snippets and pointers.

---
