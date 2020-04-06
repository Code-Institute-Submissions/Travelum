## Testing
:electric_plug:

* [W3C Markup Validation](https://validator.w3.org/)
    - Was used to check HTML5 validation.
* [W3C CSS Validation](https://jigsaw.w3.org/css-validator/#validate_by_input)
    - Was used to check CSS3 validation.
* [JShint](https://jshint.com/)
    - Was used to check Javascript validation.
* [AutoPrefixer](https://autoprefixer.github.io/)
    - Was used to make sure that CSS3 was valid for all web browsers.
* [Google Chrome](https://www.google.com/intl/sv/chrome/)
    - Was used to test the web browser.
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
    - Was used to test the responsive design for different devices. 

#### User Stories Testing
1. As __David__, I want to have a visual map overview of the destinations offered by the company.
    - A map is applied on the landing page and works as intended.
2. As __Maria__, I want to see engaging images/videos for each destination.
    - Engaging images are applied for each destination. 
3. As __Jacob__, I want to be able to interact on all my devices. On my laptop, iPad and smartphone.
    - Responsive design has been tested, to make sure that the website works well on all devices.
4. As __John__ I would like to see different activities that are possible to do in each destination.
    - We have now applied images with different activity suggestions to do on each destination.
5. As __Richard__ I want some visual information of local foods that each destination offers.
    - We have now applied images with different local food suggestions to try for each destination.
6. As __Jake__ I want to be able to visit and see different landmarks on each destination.
    - We have now applied images with different landmark suggestions to visit for each destination.

#### Manual Testing

1. __Navbar__
    1. Ensure that the logo icon and contact link loads correctly.      
    2. Ensure positioning works properly.
    3. Ensure that navbar is fixed when scrolling down.
    4. Click on logo.
    5. Ensure that logo work and takes you to start position when clicking.
    6. Click on contact link.
    7. Ensure links works properly and takes you to the contact page.

1. __Map__
    1. Ensure that markers drop for each destination, when page is loaded.
    2. Click on a marker/destination.
    3. Ensure that info window pops up with content and image.
    4. Click on the link on the info window.
    5. Ensure that the link works and takes you to the correct page.

1. __Videos__
    1. Ensure that videos loads.
    2. Ensure that video shadow works.
    3. Ensure that correct position is coded.
    4. Ensure that videos works on all devices.
    5. Ensure that responsive design works.

1. __Social Media Icons__
    1. Ensure that icons loads correctly.
    2. Ensure that positioning worked properly.
    3. Ensure that hover works.
    4. Click on icons.
    5. Ensure links works properly and opened in a new tab for each icon. 

1. __Contact form__
    1. Go to the "Contact" page.
    2. Try to submit the empty form and verify that an error message about the required fields appears.
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears.
    4. Try to submit the form with all inputs valid and verify that message has been sent.

1. __Chrome__
    1. Test that website works on Chrome web browser.

1. __Responsiveness__
    1. Use Bootstrap for a responsive website.
    2. Test the different breakpoints.
    3. Test regularly with DevTools to make sure that pages are responsive, on all devices.

#### Bugs
1. __Markers__
    - Did not show info window with content, when clicking.
    - Solution: Added a event.addListener with a function.

    ``` javascript
    	google.maps.event.addListener(
	            marker,
	            "click",
	            (function (marker, i) {
	                return function () {
	                    infowindow.setContent(locations[i][0]);
	                    infowindow.open(map, marker);
	                };
	            })(marker, i)
	        );
	    }
    ```

2. __Drop Markers__
    - Markers did not drop when loading landing page.
    - Solution: Figured out how the iteration with the for loop worked.
    ```  javascript
    let marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            // Creates a drop marker for each destination, when loading or refreshing page 
            animation: google.maps.Animation.DROP,
            // Shows title of destinations when having cursor over marker
            title: markerTitle[i][0]
        });
    ```

3. __One marker responsive__
    - Only New York marker worked as intended.
    - All markers suppose to load images of the destination, when clicking on the link, in the info window.
    - Tried many different ways, many hours of googling and Youtube-videos to learn and find the solution.
    - I was no able to solve the problem and making the different coding approaches to work. 
    - At the end closing in on the deadline on the project, I chose to connect the links/destinations to .html files instead.
    ``` javascript
    function displayDestination() {
        let myLocation = document.getElementById("myCountry");
        if (myLocation.style.display === "none") {
          myLocation.style.display = "block";
        } else {
          myLocation.style.display = "none";
        }
      } 
      
      <a href="javascript:;" onclick="displayDestination()">New York</a><br>
      
      ```
      ``` HTML
      	<section class="container-fluid text-center" id="myCountry">
		<div class="row">
			<div class="col-12">
            <!-- page headline -->
				<h1 class="video-gallery-headline text-center">NEW YORK</h1>
				<img class="flag-icon" src="https://image.flaticon.com/icons/svg/197/197484.svg" >
			</div>
            <!-- videos gallery -->
				<div class="col-sm-12 col-md-4">
					<h2>LANDMARKS <i class="fa fa-binoculars" aria-hidden="true"></i></h2>
					<iframe class="videos-gallery" src="https://www.youtube.com/embed/9QM0tipFQ9c"
						allowfullscreen></iframe>
				</div>
				<div class="col-sm-12 col-md-4">
					<h2>ACTIVITIES <i class="fa fa-bicycle" aria-hidden="true"></i></h2>
					<iframe class="videos-gallery" src="https://www.youtube.com/embed/1JJfWnAryrM"
						allowfullscreen></iframe>
				</div>
				<div class="col-sm-12 col-md-4">
					<h2>FOOD <i class="fa fa-cutlery" aria-hidden="true"></i></h2>
					<iframe class="videos-gallery" src="https://www.youtube.com/embed/YvPqrwGDgnM"
						allowfullscreen></iframe>
				</div>
			</div>
	</section>

4. __Contact alignment__
    - Did not align to the right. Kept to the left next to brand logo.
    - Solution: added Bootstrap “mr-auto” class.
    ``` HTML
    	<nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
			<a class="navbar-brand mr-auto" href="index.html"></a>
			<div class="navbar-nav">
				<span class="nav-item active">
						<a class="nav-link" href="contact.html" aria-hidden="true">Contact</a>
                        </span>
			</div>
		</nav>
    ```

5. __Form/E-mail__
    - Did not work when testing to “Send”.
    - Solution: Added “response” and “error” as parameters to functions.

    ``` javascript
                function (response) {
                console.log("SUCCESS", response);
            },
            // Confirms in the console if submit was unsuccesful
            function (error) {
                console.log("FAILED", error)
            })
    // blocks loading a new page
    return false;
}
    ```

6. __Fontawesome icons__
    - Some of the Icons from Font Awesome did not work as intended. 
    - Realized that the icons were from different versions of Font Awesome. 
    - Solution: find all icons that was responsive for the applied Font Awesome CDN version. 

7. __Google Maps API__
    - API did not load and was not working.
    - Realized that there are different API keys for different maps.
    - Soultuion: Found the correct API key that worked for the chosen map.

8. __Loading map laging__
    - Map was lagging when loading page.
    - Had the “script src” at the top.
    - Solution: erased async/defer and put the “script src” at the bottom.

9. __maps-js file__
    - Started to work on this file, with searchbox and markers.
    - Got stuck on this project and could not find the solution, to make intended markers appear with the searchbox.
    - Started instead with main.js file. 
    - Was doing A/B testing and it worked better with B, which was the main.js file.
    - Here is a link to the project with the file: [maps.js](https://github.com/Sebastian-Torres-Matrix/Travelum/blob/master/assets/js/maps.js)

10. __Wireframes__
    - Project and wireframes are not fully synced.
    - Was not able to figure out, how to make .html files load through Javascript, when clicking on marker. 

11. __Responsive Design__
    - Responsive design was not working on all devices.
    - Responsive design shows different in different devices on the same breakpoints.
    - Solution: Added media queries in css and through testing in DevTools. 
