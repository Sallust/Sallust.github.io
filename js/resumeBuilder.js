var bio = {
	"name" : "Danny Haile",
	"role" : "Front-End Ninja in Training",
	"contacts" : {
		"mobile" : "240-476-7892",
		"email": "daniyom@gmail.com",
		"github" : "Sallust",
		"twitter" : "@SallustV",
		"location" : "Washington, DC"
	},
	"welcome" : '"Welcome to the awesomeness that is my resume"',
	"pictureURL" : "images/me.jpg",
	"skills" : ["awesomeness","amazingness","JS","HTML","CSS"]
};

var work = {
	"jobs": [
		{
			"employer":"J.Crew",
			"title":"Merchandising Manager",
			"location":"Bethesda, MD",
			"dates":"Dec 2010-May2014",
			"description":"•	Increased annual store sales from $5.1 to $5.9 over 3 years through customer-focused service behavior, client outreach and staff talent development.•	Identified and developed talent: •	Analyzed product sales data for trends and losses as to maximize real estate and react to underperformers and sell-through.•	Compiled insightful product feedback incorporating both sales data and individual customer reactions.•	Executed 3 successful new store openings as part of a team of merchants and logistics partners."
		},
		{
			"employer":"Banana Republic",
			"title":"Merchandising Manager",
			"location":"Chevy Chase, MD",
			"dates":"Feb 2008-Oct 2009",
			"description": "Generated a year over year sales margin increase despite economic climate, 13% greater than average store performance.  Analyzed inventory levels, gross margin, product, division and overall sales in-store and globally to identify opportunity. Executed solutions through product placement, product marketing, visual displays and sales team management.  Hired, trained, coached and developed 50 person team comprised of assistant supervisors, sales, stock and visual associates."
		},
		{
			"employer":"Becker & Associates Consulting Inc",
			"title":"Research Associate",
			"location":"M St. Washington, DC",
			"dates":"Oct 2006-Feb 2007",
			"description": "Provided client research support through database creation and aggregating scientific, industry and regulatory information.Prepared briefs for both senior staff and clients of pertinent scientific data and regulatory history."
		},
		{
			"employer":"The Columbia Bank",
			"title":"Account Manager",
			"location":"Columbia, MD",
			"dates":"2003, Dec 2005-Aug 2006",
			"description": " Developed and maintained relationships with commercial clients with average daily deposits of $1 million. Evaluated retail loan applications of up to $250,000 for credit worthiness and closed loans."
		},
		{
			"employer":"Wells Fargo",
			"title":"Intern",
			"location":"San Francisco, CA",
			"dates":"Summer 2004",
			"description": " Underwrote equity-equivalent investments to qualifying non-profit agencies with assets up to $40 million."
		}
	]
};

var projects = {
	"project": [
		{
			"title":"HEALTH TRACKER SINGLE-PAGE APPLICATION",
			"dates":"Jan 2016",
			"description": "A nutrition tracker single page web app",
			"images":["images/Washington-800-1x.jpg"],
			"bullets":[
				"Used Backbone.js to develop a single-page responsive app to track user’s caloric intake and related metrics both daily and over time.",
				"Integrated food data through user-initiated AJAX calls to nutritionix autocomplete API and nutrionix search API. ",
				"Provided dynamically generated food images through flickr API.",
				"Persisted data through BackboneFire, Backbone’s binding for  Firebase.",
				"Graphically presented caloric intake over time and daily percent of caloric consumption to goal as a donut chart using d3.js.",
				"Used npm to manage dependencies and incorporate build tools through gulp to deliver production quality, minified code."
			]
		},
		{
			"title":"FEED READER TESTING",
			"dates":"February 2016",
			"description": "Using Jasmine Testing Suite",
			"images":["images/Washington-800-1x.jpg"],
			"bullets":[
				"Tested functionality of  features and AJAX calls of a given web-based application using Jasmine and mock AJAX requests.",
				"Included additional testing suites for future test-driven development."
				]
		},
		{
			"title":"NEIGHBORHOOD MAP PROJECT",
			"dates":"December 2015",
			"description": "a single-page application built with Knockout.js framework, responsively rendered for all screen sizes.",
			"images":["images/Washington-800-1x.jpg"],
			"bullets":[
				"Developed a map of  points of interest in Charlottesville, VA by combining data from AJAX requests to foursquare and wikipedia API’s with data from  googlemaps API.",
		       	"Persisted place data by saving to and retrieving data from localStorage.",
		        "Created filter feature with jquery autocomplete widget and radio buttons dynamically generated from place data.",
		        "Used npm to manage dependencies and incorporate build tools through gulp to deliver production "
			]
		},
		{
			"title":"WEBSITE OPTIMIZATION PROJECT",
			"dates":"November 2015",
			"description": "Online Portfolio using HTML & CSS",
			"images":["images/Washington-800-1x.jpg"],
			"bullets":[
				"Optimized the critical rendering path of an existing website to achieve PageSpeed Insights score of 99.",
		     	"Eliminated inefficiencies in the website's scroll animation.  Site scrolls at 60 frames per second."
			]
		},
		{
			"title":"HTML5 CANVAS GAME",
			"dates":"October 2015",
			"description": "A side-scrolling shooter game written in JavaScript",
			"images":["images/Washington-800-1x.jpg"],
			"bullets":[
				"Coded player, enemies, and other game entities in JavaScript's object-oriented pseudo-classical style.",
				"Used canvas and JS to create special effects such as explosions and used sprite-boards to create cycled animation."
			]
		},
		{
			"title":"INTERACTIVE ONLINE RESUME",
			"dates":"September 2015",
			"description":"This online resume",
			"images":["images/turtles.jpg"],
			"bullets":[
			 	"Used Polymer and Google material design features to create an interactive online resume.",
	  			"Incorporated a google API map that populates pins with photos based on locations in resume.",
	      		"Used Bower to incorporate and keep Polymer and other dependencies updated."
			]
		},
		{
			"title":"ONLINE PORTFOLIO",
			"dates":"August 2015",
			"description":"An online portfolio",
			"images":["images/Washington-800-1x.jpg"],
			"bullets":[
				"Based on principles of responsive web design, created an online portfolio suitable for all screen sizes.",
				"Incorporated Grunt into workflow to deliver strong images without download byte overhead.",
				"Used the srcset attribute of HTML5 image tags to serve optimized images to users on all device sizes."
]
		},
		{
			"title":"Movie Website",
			"dates":"June 2015",
			"description":"Using Python classes to create a movie website showcasing my favorite movies",
			"images":["images/movies.jpg"],
			"bullets":[]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Harvard University",
			"location": "Cambridge, MA",
			"degree": "BA",
			"dates": "2000-2005",
			"major": "Economics",
			"url":"http://www.harvard.edu/"
		},
		{
			"name": "University of California Berkeley",
			"location": "Berkeley, CA",
			"degree": "coursework",
			"dates": "Summer 2004",
			"major": "Accounting",
			"url":"http://www.berkeley.edu/"
		}
	],
	"onlineCourses":[
		{
			"title":"JavaScript",
			"school":"Udacity",
			"dates":"Summer 2015",
			"url":"https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title":"Intro to HTML & CSS",
			"school":"Udacity",
			"dates":"Summer 2015",
			"url":"https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title":"Programming Foundations with Python",
			"school":"Udacity",
			"dates":"Summer 2015",
			"url":"https://www.udacity.com/course/programming-foundations-with-python--ud036"
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);

	function capital (str) {        //for consistent variable naming in next few lines
		return str[0].toUpperCase()+str.substr(1);
	}

	for (var contact in bio.contacts) {
		window['formatted' + capital(contact)] = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
	}  //Creation of formattedContact variables using HTMLcontactGeneric

	$("#toolbar-header").prepend(formattedName,formattedRole);
	$(".bio-page").prepend(formattedPicture,formattedWelcome);

	$(".topContacts").append(formattedMobile,formattedEmail,formattedGithub);
	$("#footerContacts").append(formattedEmail,formattedMobile,formattedTwitter);

	if (bio.skills.length > 0) {
		$(".topContacts").after(HTMLskillsStart);
	}
	for (var skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").prepend(formattedSkill);
	}
};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDate+formattedLocation+formattedworkDescription);
	}
};

projects.display = function() {
	for (var project in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.project[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		var formattedImages = "";
		for (var image in projects.project[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
			formattedImages = formattedImages + formattedImage;
		}
		var formattedBullets = '<ul class="bullets">';
		for (var bullet in projects.project[project].bullets) {
			var formattedBullet = HTMLprojectBullet.replace("%data%", projects.project[project].bullets[bullet]);
			formattedBullets = formattedBullets + formattedBullet;
		}
		formattedBullets = formattedBullets + '</ul>';
		$(".project-entry:last").append(formattedTitle,formattedDate,formattedDescription,formattedImages,formattedBullets);
	}
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedSchool+formattedDegree+formattedDates+formattedLocation+formattedMajor)
	}
	$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		$("#education").append(HTMLonlineClassStart)
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".online-entry:last").append(formattedTitle+formattedSchool+formattedDates+formattedURL);
	}
}

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

$("#mid-header").append(internationalizeButton)
$("#mapDiv").append(googleMap);
