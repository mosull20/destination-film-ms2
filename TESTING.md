# Destination Film - Testing details

[Back to README.md file](README.md)

[Live Website](https://mosull20.github.io/destination-film-ms2/)

## Code Validation

## Manual Testing
### Lighthouse Testing
### Functionality Testing
### User Stories Testing
### Bugs & Fixes

* After including Google Maps API as per the documentation, I kept getting an error in the console to say that 'initMap' is not a function. On searching the internet, I found the solution [here - at elharony.com](https://www.elharony.com/initmap-is-not-a-function/). The solution that worked for me was to switch the order so that my maps.js file loads ahead of the google maps script. Otherwise, the function is called when the computer has not yet loaded the file containing the function itself. 

* I was getting an error message in the console of `Uncaught TypeError: Cannot set property 'innerHTML' of null at script.js` when on the home page. After going through what scripts I had linked on the index.html page and what I had in the script.js file which utilized the innerHTML property, I discovered I had included the script.js file on the index.html page where it was not required and the element with the id of 'quotes-box' that I was targeting with innerHTML did not exist on that page, hence the error message. Once I removed the link to script.js on index.html, the issue was resolved. 
