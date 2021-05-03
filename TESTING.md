# Destination Film - Testing details

[Back to README.md file](README.md)

[Live Website](https://mosull20.github.io/destination-film-ms2/)

## Code Validation

1. HTML validated on 
2. CSS validated on [Jigsaw W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator)
    *  Passed with no errors found
![Error image](assets/testing-images/css-valid-result.png)
    * One error was found
![Warning image](assets/testing-images/css-valid-warn.png)
    * No action required as the @import content cannot be checked


3. JavaScript validated on [JSHint](https://jshint.com/)

    * All js files run through JSHint, on first run I got many errors to do with es6, on searching Code Institute Slack community, I found adding the following lines `/* jshint esversion: 6 */
/* globals $:false */` corrected many of these warnings. 
    * Two files produced multiple errors - 
    weather.js file: most errors related to the recommendation of using dot notation in places, and missing or unnecessary semi-colons. All these I was able to correct. One warning remains relating to "one unused variable $". This refers to the second line above (`/* globals $:false */`). 
    ![Warning image](assets/testing-images/weather-jshint-warnings.png)

    * The second file with multiple errors was my maps.js file. The warnings were due to the fact that I was reusing variables that were already defined. I have detailed this below in bugs and fixes. 
    ![Warning image](assets/testing-images/maps-jshint-warnings.png)

    
## Manual Testing
### Lighthouse Testing
### Functionality Testing
### User Stories Testing
### Bugs & Fixes

* After including Google Maps API as per the documentation, I kept getting an error in the console to say that `'initMap' is not a function`. On searching the internet, I found the solution [here - at elharony.com](https://www.elharony.com/initmap-is-not-a-function/). The solution that worked for me was to switch the order so that my maps.js file loads ahead of the google maps script. Otherwise, the function is called when the computer has not yet loaded the file containing the function itself. 

* I was getting an error message in the console of `Uncaught TypeError: Cannot set property 'innerHTML' of null at script.js` when on the home page. After going through what scripts I had linked on the index.html page and what I had in the script.js file which utilized the innerHTML property, I discovered I had included the script.js file on the index.html page where it was not required and the element with the id of 'quotes-box' that I was targeting with innerHTML did not exist on that page, hence the error message. Once I removed the link to script.js on index.html, the issue was resolved. 

* Issue with height on the contact page. When setting height to 100vh as desired for the background image to always cover the browser window, content in the form div would spill out over the footer if browser window height made small. But if I set the height in pixels, the content would leave a gap at the foot of the window if made too large. Tried many different fixes with adjusting height of the parent and child divs, positioning of parent and child divs etc. After much searching, I found a solution on Stack Overflow [here](https://stackoverflow.com/questions/52394425/100vh-cuts-off-content-when-window-height-is-small) which recommended a very simple fix - set height to `min-height: 100vh` instead of `height:100vh`.

* Issue with fixing the maps.js map function so as to correct my orginial mistake of repeating variables that were already defined - This took me a while to fix as when I tried to give the variables a different name, the markers stopped being visible on the maps. I tried a number of fixes, asked for tutor assistance but in the end I wrapped each map in a separate function to be called when the arrow would be clicked by the user. I feel while this solution worked for me, it may not be the best, most efficient way but I do need to do further study on that outside the time constraints of this project. 