# Destination Film


View the live website [here](https://mosull20.github.io/destination-film-ms2/).

---

Destination Film is a travel inspiration website focusing specifically on countries often used as filming locations for many famous film and tv shows. 
It showcases a number of destinations, giving an overview about what has been filmed there, what places to visit in particular.

The primary goal of the website from the site owner's perspective is to provide film and tv fans with some ideas for their next holiday to visit places they have seen on screen in their favourite tv shows or films. 

The primary goal of the website from a user's perspective is to find out about some interesting places to visit where they could see some famous filming locations, thus combining their love of film with their love of travel! 

 
## UX

### Project goals
* This website aims to provide the user with a responsive, intuitive website that is easy to navigate and find relevant information, that the user can interact with to get more information as desired. 
* As a user, they can find out an overview about the various destinations featured, along with more details for each country with key locations detailed, and a map that shows the location of those places. The user can also get in touch and ask for more information or also make suggestions about other countries or destinations that should be featured on the site in the future.
* As a site owner, this website is aimed at providing film and tv fans with some inspiration about where they can go to see some locations made famous in various film and tv shows. 

### User Stories

* As a user of this website, I want to find some ideas for interesting places for my next holiday.
* As a user, I love films and TV and want to travel to see where my favourite shows were filmed. 
* As a user, I want to find out where my favourite film or tv show was filmed and learn more about that location. 
* As a user, I want to be able to follow them on social media for the very latest updates.
* As a user, I want to be able to easily find out how to contact the business if I want more information or have more questions. 
* As a user, I would like to be able to contact the company to make suggestions of what countries or places the site should feature in the future.


### Wireframes

* [Home page](assets/wireframes/home-page.pdf)
* [Destinations page](assets/wireframes/destinations-page.pdf)
* [Contact page](assets/wireframes/contact-page.pdf)


### Design

#### Overall Design
The aim with the design of this project is to present the user with an elegant, visually appealing, easy to navigate website that draws attention to the beautiful locations being showcased.  From the destinations page, the user can explore all the different locations in detail without an overload of information being shown all at once. The aim is to provide the user with a calm feeling when exploring the site, ensuring the user does not feel overwhelemed when exploring the content.
The overall design is to present the user with a site they can engage and interact with, clicking on different areas to discover more content.
For the contact page, I chose to add in a little interest for the user by having a section displaying some repeating quotes that the user may find interesting. These quotes were chosen specifically to connect the theme of travelling with film and televsion. 
#### Images
The images used were chosen carefully to engage the user and encourage the user to want to explore the site and content at their own pace. 
I used a filter on the images both ensure the content overlaying it would be easier to read and I also feel this contributes to a more consistent look across the site and the images have a slightly uniform feel with the colors in the photo more toned down than vivid.
#### Typefont
I chose the Josefin Sans font from Google Fonts with the aim of giving the content a spophisticated, elegant feel. I chose a cursive font for the quotes displaying, specifically Caveat font, to make it stand out from the rest of the content. 
#### Note about Wireframes
The final design has differed from the wireframes based on what I felt worked better to provide a better, more consistent experience for the user. Specifically on the destinations page, where in the wireframes the details would drop down underneath that country, I ultimately felt it worked better to have that detail in the one section underneath all the countries and implemented scrolling to that section when the user clicks. I also implemented a modal to display when the user has sent the contact form rather than the pop-up box in the wireframes. Again, I felt this improved the user experience. 

## Features
#### Existing Features
* Home Page
  + Navigation bar with simple company name (linked back to home page), and links to each of the 3 pages. This will be consistent through all pages wiht consistent transparent styling.
  + Landing area to take full screen when site opened with headline and short explanation of the site overlayed over a background image. Link to 'learn more' which will scroll users down to next section of home page for a further explanation of what the site is about, along with a link to click to the destionations page.
  + Footer which will be consistent across all pages. Footer simply contains a link to the contact page, links fo social media (home pages only as this website is created for the purposes if the Code Institute project and so does not have a social media prescence), and copyright info. 

* Destinations Page
  + Nav Bar as above 
  + Five main sections with country name and arrow to encourage user to click to reveal relevant info for each country. 
  + On reveal the section with the country info contains a short introduction to the country's background as a film and tv location, mentioning what shows have been filmed there and then encourages the user to click through to see all five places of interest. This section will also show the current weather for the capital city, along with a map with the places of interest mentioned marked and named. Each place of interest box has an image and some content to detail what makes these places of interest with regard in particular to film and tv. 
  + The section will show one country at a time determined by what the user has last clicked on. 
  + Footer as before
  + This page makes use of a weather api, maps api as well as using JavaScript to encourage user interaction to explore rather than presenting a large amount of information all at once. 

* Contact page
  + Nav Bar as above
  + Contact Form using emailjs to handle the contact form submission. 
  + Modal displays on submission of the form to let the user know if their message has been sent successfully or if there has been an error. 
  + Interesting travel related quotes from films displayed in repeating, random order (10 in total on repeat). 
  + Footer as above


### Features Left to Implement 

There are two features which this project may benefit from in the future, outside of the project assessment timeline. 

1. A regular Blog post - including taking contributions from users of their own experiences. This would keep the content current and changing so users will come back to check out the latest posts.
2. Add a flight and accommodation booking service/api so users could begin all aspects of planning a trip without having to leave the site. 


## Technologies Used

#### Languages

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

#### Programs, Frameworks, Resources

* [Bootstrap](https://getbootstrap.com/) - used for styling throughout
* [jQuery](https://jquery.com/) - used for various methods & simpler DOM manipulation
* [Google Fonts](https://fonts.google.com/) - used for all fonts chosen
* [Font awesome](https://fontawesome.com/) - used for arrow icons & social media icons
* [Hover.css](https://ianlunn.github.io/Hover/) - used for the skew forward effect on clickable links
* [Pixlr](https://pixlr.com/e/) - used for image editing - resizing & adding filters
* [TinyPNG](https://tinypng.com/) - used to compress all images 
* [Favicon.io](https://favicon.io/favicon-generator/) - used to generate favicon
* [OpenWeatherMap](https://openweathermap.org/api) - Weather API used to generate current weather details for capital cities in each country featured
* [EmailJS](https://www.emailjs.com/) - Email API used to send an email when user submits the contact form
* [Google Maps](https://developers.google.com/maps) - Map API used to show the location of each place of interest featured in each country.
* [Gitpod](https://www.gitpod.io/) - IDE used for writing and editing code, version control
* [GitHub](https://github.com/) - Code hosting platform

## Testing
Testing is detailed in a seperate document, [here](TESTING.md).


## Deployment

This project was deployed using the Gitpod IDE, committed using git version control and pushed to GitHub. The project was then deployed to GitHub Pages using the following steps: 

1. Log into GitHub.
2. From the list of repositories, select **mosull20/destination-film-ms2**.
3. From the menu items above the repository contents, select **Settings**.
4. In the menu that appears at the left hand side, select **Pages** or alternatively, scroll down to the GtHub Pages section and select *Check it out here!*
5. Under **Source**, select **Master Branch** from the dropdown menu and click **Save**.
6. The website is now deployed.
7. To retrieve the link to the live website, return to the **GitHub Pages** section.

How to run this project locally 

To clone or fork this project you will need a [GitHub](https://github.com/) account
* Forking this project

If you wish to make a forked copy of this repository to potentially collaborate, take the following steps: 
1. Open the [Project repository homepage](https://github.com/mosull20/destination-film-ms2).
2. At the top right of the repository page, above the Settings button, click on the **Fork** button.
3. This will create a copy of this project in your own GitHub account. 

If you wish to clone or download the project to work on locally, take the following steps:
1. Open the [Project repository homepage](https://github.com/mosull20/destination-film-ms2).
2. Click on the **Code** button at the top right of the file list.
3. Under **Clone** with the HTTPS option selected, copy the url link.
4. In your local IDE, open the terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type in `git clone` and then paste the url you copied in step 3.
7. Press enter and your local clone will be created.

## Credits

### Content

* Home page paragraph text content taken from [National Geographic](https://www.nationalgeographic.com/travel/article/visit-movie-film-sites-nat-geo-almanac) 

* Destinations page
  + Iceland content taken from [Guide to Iceland](https://guidetoiceland.is/history-culture/movie-locations-in-iceland#fortitude-2015-reydarfjordur-fjord) & [Film in Iceland](https://filminiceland.com/made-in-iceland/)

  + Malta content taken primarily from [The Culture Trip](https://theculturetrip.com/europe/malta/articles/a-guide-to-the-spectacular-film-and-tv-locations-of-malta/) with the addition of some content from [Visit Malta](https://www.visitmalta.com/en/filming-in-malta)

  + New Zealand content taken from [New Zealand.com](https://www.newzealand.com/us/feature/top-10-film-locations-in-new-zealand/) & [The Culture Trip](https://theculturetrip.com/?s=new+zealand+filming) & [Trips to discover.com](https://www.tripstodiscover.com/top-fantasy-film-locations-in-new-zealand/)

  + Morocco content taken from [The Culture Trip](https://theculturetrip.com/africa/morocco/articles/the-majestic-beauty-of-morocco-captured-on-film/) 

  + Ireland content taken primarily from [The Independent](https://www.independent.ie/life/travel/ireland/top-25-movie-and-tv-locations-to-visit-in-ireland-from-father-ted-to-game-of-thrones-38006573.html) with additional content from [Wild Rover Tours](https://wildrovertours.com/blog/spectacular-filming-locations-ireland/) & [Ireland before you die.com](https://www.irelandbeforeyoudie.com/ten-filming-locations-ireland-you-can-visit/)

* Contact page - movie/travel quotes taken from [Buzzfeed.com](https://www.buzzfeed.com/kimberleydadds/adventure-is-out-there)

### Code

+ Code for how to display the weather icon from OpenWeatherMap api - solution found on [Stack Overflow - here](https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon/62369654#62369654)

+ Code in destinations.js to handle the different places of interest in each country was refactored from what I originally wrote to make it slightly shorter and more logical. Functionality remained the same. My mentor (Nishant Kumar) provided me assistance in rewriting this section (as noted in the js file). 

+ Smooth scrolling effect in CSS found in [W3 schools - here](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2)


### Media

#### Images
* Home Page image
  + Main Background Image - Photo by [Frank Denney](https://unsplash.com/@frnkdnny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@frnkdnny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* Destinations Page images - Main Background photos on page opening

  + Iceland image - Photo by [Emma Francis](https://unsplash.com/@efranciswork?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@efranciswork?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
  + Malta image - Photo by [Andrew Slifkin](https://unsplash.com/@andrewslifkin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@andrewslifkin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
  + New Zealand image - Photo by [Thomas Schweighofer](https://unsplash.com/@thomasschweighofer_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/thomas-schweighofer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
  + Morocco image - Photo taken by myself (Maeve O'Sullivan)
  + Ireland image - Photo by [Robert Thomas](https://unsplash.com/@welshbob1964?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@welshbob1964?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
* Destinations Page - individual sections featured locations photos

  + Iceland - Dettifoss image - Photo by <a href="https://unsplash.com/@dozza88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Richard Dorran</a> on <a href="https://unsplash.com/@dozza88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + Iceland - Mýrdalssandur Beach image - Photo by <a href="https://unsplash.com/@westbeach013?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Casey Allen</a> on <a href="https://unsplash.com/@westbeach013?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + Iceland - Reyðarfjörður fjord image - Photo by <a href="https://unsplash.com/@lucianohbraga?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luciano Braga</a> on <a href="https://unsplash.com/@lucianohbraga?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + Iceland - Skógafoss image - Photo by <a href="https://unsplash.com/@timberfoster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Foster</a> on <a href="https://unsplash.com/@timberfoster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + Iceland - Hverfjall mountain image - Photo by <a href="https://unsplash.com/@daveherring?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dave Herring</a> on <a href="https://unsplash.com/collections/4742309/iceland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

  + Malta - Gozo image - Photo by <a href="https://unsplash.com/@ktagata?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">catalina gonzalez</a> on <a href="https://unsplash.com/s/photos/gozo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  + Malta - Popeye village image - Photo by <a href="https://unsplash.com/@magdaleny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Magdalena Smolnicka</a> on <a href="https://unsplash.com/@magdaleny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + Malta - Blue Lagoon image - Photo by <a href="https://unsplash.com/@jannerboy62?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Fewings</a> on <a href="https://unsplash.com/collections/9333525/malta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + Malta - Valetta image - Photo by <a href="https://unsplash.com/@saluken?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luke Tanis</a> on <a href="https://unsplash.com/@saluken?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + Malta - Mdina image - Image by <a href="https://pixabay.com/users/photosforyou-124319/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1988027">photosforyou</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1988027">Pixabay</a>

  + New Zealand - Lake Pukaki image - Photo by <a href="https://unsplash.com/@mischievous_penguins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Casey Horner</a> on <a href="https://unsplash.com/@mischievous_penguins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + New Zealand - Hobbiton image - Photo by <a href="https://unsplash.com/@andresiga?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andres Iga</a> on <a href="https://unsplash.com/@andresiga?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + New Zealand - Cathedral Cove image - Photo by <a href="https://unsplash.com/@mischievous_penguins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Casey Horner</a> on <a href="https://unsplash.com/collections/2121798/the-new-zealand-collection?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  + New Zealand - Fiordland National Park image - Photo by <a href="https://unsplash.com/@samferrara?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samuel Ferrara</a> on <a href="https://unsplash.com/@samferrara?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + New Zealand - Mount Taranaki image - Photo by <a href="https://unsplash.com/@walraven1956?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Walter Walraven</a> on <a href="https://unsplash.com/@walraven1956?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

  + Morocco - Aït Benhaddou image - Photo by <a href="https://unsplash.com/@lelektraklm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Elektra Klimi</a> on <a href="https://unsplash.com/@lelektraklm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + Morocco - Tangier image - Photo by <a href="https://unsplash.com/@raulcachophoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raul Cacho Oses</a> on <a href="https://unsplash.com/s/photos/tangier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  + Morocco - Erg Chebbi image - Photo by <a href="https://unsplash.com/@markkuiper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mark Kuiper</a> on <a href="https://unsplash.com/@markkuiper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  + Morocco - Marrakesh image - Photo by <a href="https://unsplash.com/@sabriofficial?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Oussama sabri</a> on <a href="https://unsplash.com/s/photos/marrakech?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  + Morocco - Essaouira image - Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a href="https://unsplash.com/s/photos/essaouira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

  + Ireland - Skellig Michael image - Photo by <a href="https://unsplash.com/@michael75?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael</a> on <a href="https://unsplash.com/s/photos/skellig-michael?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  + Ireland - Powerscourt Estate image - Photo by <a href="https://unsplash.com/@anikinearthwalker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dimitry Anikin</a> on <a href="https://unsplash.com/s/photos/powerscourt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  + Ireland - Cliffs of Moher image - Photo by <a href="https://unsplash.com/@guigui1410?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Guillaume Henrotte</a> on <a href="https://unsplash.com/@guigui1410?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  + Ireland - Kilmainham Gaol image - Image by <a href="https://pixabay.com/users/jimcintosh-1951355/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2325721">Jim McIntosh</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2325721">Pixabay</a>
  + Ireland - Lough Tay image - Photo by <a href="https://unsplash.com/@gabrieluizramos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gabriel Ramos</a> on <a href="https://unsplash.com/s/photos/lough-tay?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

* Contact page image 
  + Photo by <a href="https://unsplash.com/@r3dmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonatan Pie</a> on <a href="https://unsplash.com/s/photos/night-iceland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

### Acknowledgements
* The Code Institute Slack community has been a tremendous resource throughout this project. I would like to mention in particular the Live API Coding video with Aukje van der Wal (pinned in the Slack channel).
* Stack Overflow is also a valuable resource for finding answers to numerous questions
* My mentor, Nishant Kumar has been very supportive and encouraging throughout and has guided me through this process with some great advice. 

