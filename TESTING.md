# Destination Film - Testing details

[Back to README.md file](README.md)

[Live Website](https://mosull20.github.io/destination-film-ms2/)

## Code Validation

1. HTML validated on [W3C Markup Validation Servive](https://validator.w3.org/)
    * Home Page - no errors or warnings 
    * Destinations Page - at first pass, 53 errors/warnings were shown. This turned out to be a handful of errors that were repeated through the different sections on the page, details as follows: 
    1. Too many consecutive hypens in some of my comments, I corrected this
    2. Stray end `</a>` tag - I removed this
    3. Empty headings (repeated through each section) in the `<h2 class="city-name d-inline"></h2>` and `<h3 class="city-temp d-inline"></h3>` headings. This was empty as being filled using a weather API in JavaScript. I corrected this error by putting in placeholder text describing the content to go in ie. 'City' and 'Temperature'. That eliminated this error and provided a semantic description of the content of that heading.
    4. Error re Bad value for attribute src on element img: must be non empty. This was left empty originally as being filled with content pulled from Weather API in JavaScript. I found a solution to this on [Stack Overflow](https://stackoverflow.com/questions/30658663/bad-value-for-attribute-src-on-element-img-must-be-non-empty-for-dynamically) which was simply to put a placeholder '#' in the src attribute. This worked and eliminated the error warnings. Again, I had this repeated in each of 5 sections so that error message was repeated. 
    5. Stray end tag (repeated in each section) `</img>` - I removed this as the img tag is self closing and does not need an end tag. 
    6. Error re 'span not allowed as child element of ul in this context' - I had a span tag after my li closing tag in order to put a '|' in between the li items that would not be affected by the hover.css class I had on the li elements. I corrected this error by simply removing the span tag and replacing it with li tag to encompass the '|' in it's own element without the 'hvr-skew-forward' class on it. Again, this error was repeated approx 20 times across all the different sections.
    7. Duplicate id 'icon' - this was an id I had on the div enclosing the `<img>` for the weather icon being pulled from the weather API. I had put in this id when I was originally writing this section of code, but didn't need it as I had used the class name instead to target each section to manipulate the content using JavaScript. I simply removed all the `div id="icon"` occurances.
    + On correcting each repetition of the above 7 basic errors/warnings, the code then passed with no further errors or warnings.


    * Contact Page - 2 warnings and 1 error were shown. 
    ![HTML warning](assets/testing-images/html-contact-errors.png)
    + I removed the type attribute from both instances as shown above and I removed the stray script tag as above
    + After making the above amendments and running the code through the validator again, it passed with no warnings or errors. 


2. CSS validated on [Jigsaw W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator)
    *  Passed with no errors found
![Error image](assets/testing-images/css-valid-result.png)
    * One warning was found
![Warning image](assets/testing-images/css-valid-warn.png)
    * No action required as the @import content cannot be checked


3. JavaScript validated on [JSHint](https://jshint.com/)

    * All js files run through JSHint, on first run I got many errors to do with es6, on searching Code Institute Slack community, I found adding the following lines `/* jshint esversion: 6 */
/* globals $:false */` corrected many of these warnings. 

    * Weather.js file: most errors related to the recommendation of using dot notation in places, and missing or unnecessary semi-colons. All these I was able to correct. Another warning related to "one unused variable $". This refers to the second line above (`/* globals $:false */`). I removed this as it was not required in this file. No warnings remain.
    ![Warning image](assets/testing-images/weather-jshint-warnings.png)

    * Maps.js - The second file with multiple errors was my maps.js file. The warnings were due to the fact that I was reusing variables that were already defined. I have detailed this below in bugs and fixes. 
    ![Warning image](assets/testing-images/maps-jshint-warnings.png)
    After taking the actions detailed below and running the code through again, 2 warnings remain - one to do with 'google' being an undefined variable. As this is from google maps api code, I did not want to change any code but I found a solution on [Ember.js](https://discuss.emberjs.com/t/google-is-not-defined-jshint-error/5762) which was to add `/* global google */` at the top of the file. It also shows initMap as an unused variable. My initMap() function defined here is called in destinations.html as per google api code, so jshint does not see this. 


    * Destinations.js file passes with no errors or warnings

    * SendEmail.js - logs one undefined variable (emailjs) and one unused variable (sendMail). This code is from the emailJS API and is called in my contact.html file. 

    * Script.js - two warnings. I have not yet resolved these warnings. 
     ![Warning image](assets/testing-images/scripts-jshint-warnings.png) 



    
## Manual Testing
### Lighthouse Testing

* Tested each page at mobile size and desktop size. 
* Home page - mobile 
![Home page mobile image](assets/testing-images/home-mobile-lighthouse.png)
* Home page - desktop
![Home page desktop image](assets/testing-images/home-desktop-lighthouse.png)

* Destinations page - mobile 
![Destinations page mobile image](assets/testing-images/destinations-mobile-lighthouse.png)

* Destinations page - desktop
![Destinations page desktop image](assets/testing-images/destinations-desktop-lighthouse.png)

* Contact page - mobile
![Contact page mobile image](assets/testing-images/contact-mobile-lighthouse.png)
* Contact page - desktop
![Contatc page desktop image](assets/testing-images/contact-desktop-lighthouse.png)


### Functionality Testing

I used Google Chrome Tools at all stages of this project to continuously check how each detail worked, particularly in ensuring responsiveness of each section and feature as I worked on them. 

Here are the steps taken to manually test each feature of the website. 

Home Page 

* Nav Bar 
    + clicked on 'Destination Film' title at left of nav bar to ensure home page loads 
    + clicked on 'Home" to ensure home page loads
    + clicked on 'Destinations' - brings the user to the Destinations page
    + clicked on 'Contact' - brings the user to the Contact page



* Main section 
    + clicked on 'learn more' - page scrolls down to intro section

* Intro section
    + clicked on 'See all our destinations' - brings the user to the Destinations Page

* Footer
    + Clicked on 'Get in Touch' - brings the user to the Contact page
    + clicked on the Facebook icon - opens the facebook home page in a new window (no social media exists for this fictional website)
    + clicked on the Twitter icon - opens the Twitter home page in a new window
    + clicked on the Instagram icon - opens the Instagram home page in a new window

Destinations Page

* Repeated all the steps above for both the Nav Bar and footer to ensure all links worked as expected.

* Iceland section
    + clicked on the down arrow under the country title - opens and scrolls down to display the info about Iceland
    + weather section works as expected
    + clicked on each of the five placenames to ensure the correct relevant image and info displays in the box
    + clicked on the markers on the map to ensure the correct place name is shown in an info window so the user knows what that location is
    + clicked on the up arrow to ensure the user is brought back to the top of the page

* Malta section, New Zealand section, Morocco section, Ireland section

    + repeated all the above steps taken for each country section to ensure all functioned as expected


Contact Page 
* Repeated all the steps above for both the Nav Bar and footer to ensure all links worked as expected.

* Contact Form 
    + clicked on 'send it' button to check if form validation works, message is shown to ensure the user fills in the name field, filled in a name and clicked send again to ensure it requests the user to fill in a valid email address. Filled in an email address, clicked send again to ensure the form could not be sent without a message in the message field. 
    + filled all fields in and clicked 'send it' button to ensure modal appears to inform user whether their message has been submitted successfully or not. 




#### Responsiveness

* Checked responiveness of website using Chrome Dev Tools at every stage of development.
* Also checked the responsiveness at [Responsinator.com](http://www.responsinator.com/)


#### Cross Browser Testing

The website was developed and tested primarily using the Chrome browser. I then checked the website on the following browsers - Firefox, Opera, Safari & Microsoft Edge.


### User Stories Testing

* _As a user of this website, I want to find some ideas for interesting places for my next holiday._

The website showcases five different countries. The user can click through each country for more detailed information, images and places of interest where particular film or tv shows have been filmed giving some ideas of places to visit.

* _As a user, I love films and TV and want to travel to see where my favourite shows were filmed._ 

The website details exactly what parts of each country have been used as locations so that if they would like to visit the country they know where to see places they have seen on screen.

* _As a user, I want to find out where my favourite film or tv show was filmed and learn more about that location._ 

As well as detailing what was shot at various places within each country, the website also gives a little information about the place and what makes it attractive.

* _As a user, I want to be able to follow them on social media for the very latest updates._

Social Media links are in the footer section with the icon for each social media platform that will open in a new browser window to ensure the user can easily come back to this website.

* _As a user, I want to be able to easily find out how to contact the business if I want more information or have more questions._ 

There is a link in the footer of each page titled 'Get in Touch' so the user can click on that and it will take them to the contact page where they can fill out a simple form to contact the website for further info. In the Nav Bar there is a clear link to the Contact Page, clicking on this will bring the user to that page to fill out a form. 

* _As a user, I would like to be able to contact the company to make suggestions of what countries or places the site should feature in the future._

On the contact page, the website encourages the user to get in touch to offer up ideas for where they would like to see featured in the future. 

### Bugs & Fixes

* After including Google Maps API as per the documentation, I kept getting an error in the console to say that `'initMap' is not a function`. On searching the internet, I found the solution [here - at elharony.com](https://www.elharony.com/initmap-is-not-a-function/). The solution that worked for me was to switch the order so that my maps.js file loads ahead of the google maps script. Otherwise, the function is called when the computer has not yet loaded the file containing the function itself. 

* I was getting an error message in the console of `Uncaught TypeError: Cannot set property 'innerHTML' of null at script.js` when on the home page. After going through what scripts I had linked on the index.html page and what I had in the script.js file which utilized the innerHTML property, I discovered I had included the script.js file on the index.html page where it was not required and the element with the id of 'quotes-box' that I was targeting with innerHTML did not exist on that page, hence the error message. Once I removed the link to script.js on index.html, the issue was resolved. 

* Issue with height on the contact page. When setting height to 100vh as desired for the background image to always cover the browser window, content in the form div would spill out over the footer if browser window height made small. But if I set the height in pixels, the content would leave a gap at the foot of the window if made too large. Tried many different fixes with adjusting height of the parent and child divs, positioning of parent and child divs etc. After much searching, I found a solution on Stack Overflow [here](https://stackoverflow.com/questions/52394425/100vh-cuts-off-content-when-window-height-is-small) which recommended a very simple fix - set height to `min-height: 100vh` instead of `height:100vh`.

* Issue with fixing the maps.js map function so as to correct my orginial mistake of repeating variables that were already defined - This took me a while to fix as when I tried to give the variables a different name, the markers stopped being visible on the maps. I tried a number of fixes, asked for tutor assistance but in the end I wrapped each map in a separate function to be called when the arrow would be clicked by the user. I feel while this solution worked for me, I'm aware it may not be the best, most efficient way but I do need to do further study on that outside the time constraints of this project. It is my intention to come back to this project in the future and refactor much of my JS code once I have gained some further experience and have more time to practice JavaScript outside the course time frame. 

* Lighthouse test - issue with performance on the destinations page on mobile devices. This is something I was unable to fully resolve to get a better performance result and will need to look at ways to improve the 'Largest Contentful Paint' time and 'Time to interactive' as these two measures are showing problematic times as much of the recommended steps were outside the scope of my current level of knowledge. I did take the recommended step of further optimizing images and this did help to improve the initial score slightly. 