var bio = {
	"name" : "R. Todd Stephens, Ph.D.",
	"role" : "IT Professional and Information Architect",
	"welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	"skills" : ["Collaboration","Reuse","Architecture Governance","Data Architecture","Knowledge Management"],
	"biopic" : "images/rtodd.jpg",
	"contacts" : [
		{
		"email" : "todd@rtodd.com",
		"mobile" : "(678) 262-7293",
		"github" : "rtodd777",
		"twitter" : "rtodd",
		"location" : "Fayetteville, GA"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer" : "AT&T",
			"title" : "Senior Technical Architect",
			"location" : "Atlanta, GA",
			"dates": "1997 - Present",
			"description" : "Areas of Responsibility: Adobe Technology Manager, Cloud Computing, Collaborative Technology and Social Media, Enterprise, Data, Desktop, and Application Architecture, Enterprise Metadata and Repository Services, UI/UX Design and Development.",
		},
		{
			"employer" : "Georgia Pacific Corporation",
			"title" : "Lead Analyst",
			"location" : "Atlanta, GA",
			"dates": "1996 - 1997",
			"description" : "Areas of Responsibility: Enterprise Desktop Support, Human Resources Applications, Application Design, Analysis, and Development and Team Management (45 Employees).",
		},
		{
			"employer" : "The Coca-Cola Company",
			"title" : "Senior Systems Technologist",
			"location" : "Atlanta, GA",
			"dates": "1990 - 1996",
			"description" : "Areas of Responsibility: Office Productivity, Backend Email Systems, and Application Design, Analysis, and Development.",
		},
		{
			"employer" : "Southern Linen",
			"title" : "Assistant MIS Manager",
			"location" : "Norcross, GA",
			"dates": "1989 - 1990",
			"description" : "Areas of Responsibility: Retail Applications, Application Design, Analysis, and Development.",
		},
		{
			"employer" : "Fannie Mae Software Systems",
			"title" : "Senior Programmer Analyst",
			"location" : "Norcross, GA",
			"dates": "1989 - 1989",
			"description" : "Areas of Responsibility: Financial and Tax Applications, Application Design, Analysis, and Development.",
		},
		{
			"employer" : "Lummus Industries",
			"title" : "Senior Programmer Analyst",
			"location" : "Columbus, GA",
			"dates": "1988 - 1989",
			"description" : "Areas of Responsibility: Manufacturing Applications, Application Design, Analysis, and Development, Engineering Software Development.",
		},
		{
			"employer" : "The Georgia Company",
			"title" : "Assistant Vice President",
			"location" : "Columbus, GA",
			"dates": "1983 - 1988",
			"description" : "Areas of Responsibility: Mortgage and Financial Applications, Workflow Automation and Design, Operational Support and Customer Service Applications, Application Design, Analysis, and Development.",
		}
	]
};

var projects = {
	"projects": [
		{
			"title" : "Application Development",
			"dates": "1998 - 2015",
			"description" : "My portfolio of application delivery and program ownership stretches back 25 years across many different platforms and languages. The images above are just a few recent examples that leveraged both my business skills and technology knowledge to ensure on time delivery and a quality product.  My role would also include the strategy, planning, and execution to ensure the greatest utility and value to the business. Our Enterprise Metadata application collection won Industry Awards in 2002 and 2003.",
			"images" : ["images/projectA1.jpg","images/projectA2.jpg","images/projectA3.jpg"],
		},
		{
			"title" : "Web Development",
			"dates": "1990 - 2015",
			"description" : "Over the past decade, I have focused on online communications, collaboration, and social media.  From web environments to newsletters, my interest is using design and usability to enhance trust, improve communications, and drive business growth has provided a portfolio of success.  The sites above are a small set of my work that demonstrates a level of expertise and attention to detail.",
			"images" : ["images/projectB1.jpg","images/projectB2.jpg","images/projectB3.jpg","images/projectB4.jpg","images/projectB5.jpg"],
		},
		{
			"title" : "Staffing Experience",
			"dates": "1998 - 2010",
			"description" : "I have over 18 years experience in leading both large and small teams.  My roles has varied from development to customer service.  In all cases, my focus on reaching higher and higher levels of customer satisfaction is essential.  One of my unique values to teams is my experience and knowledge of employee development.  I pride myself on continually pushing myself as well as my team to develop their portfolio of skills. ",
			"images" : ["images/projectC1.jpg"],
		},
		{
			"title" : "Business Value",
			"dates": "1983 - 2015",
			"description" : "The business value being presented here focuses on the cost reductions and success criteria used to measure progress. Each of these programs demonstrate examples where my leadership and a dedicated team delivered enormous business value.  In many cases, changing the culture and behavior of the organization in the process.",
			"images" : ["images/projectD1.jpg"],
		},
	]
};

var education = {
    "schools": [
        {
            "name": "Nova Southeastern University",
            "location": "Davie, FL",
            "degree": "Ph.D.: Doctor of Philosophy",
            "major": "Information Systems",
            "date": 2004,
            "url": "http://www.nova.edu",
        },
        {
            "name": "Georgia State University",
            "location": "Atlanta, GA",
            "degree": "MBA: Master of Business Adminstration",
            "major": "Information Systems Management",
            "date": 1990,
            "url": "http://www.gsu.edu",
        },
        {
            "name": "Columbus State University",
            "location": "Columbus, GA",
            "degree": "BS: Bachelor of Science",
            "major": "Mathematics and Computer Science",
            "date": 1986,
            "url": "http://www.columbusstate.edu",
        }
    ],
	"onlineCourses": [
		{
			"title": "Nano-Degree: Front-End Development",
			"school": "Udacity",
            "date": 2015,
			"url": "http://udacity.com/"
		}
	]
};


// ---------------------------------------------------------------------------------------------
// JSON Update Functions
// ---------------------------------------------------------------------------------------------
bio.JSON = function () {

// Header Updates
// ---------------------------------------------------------------------------------------------
    var bioRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(bioRole);
    var bioName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(bioName);
    var bioWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(bioWelcomeMessage);


// Contacts Updates
// ---------------------------------------------------------------------------------------------
    var bioEmail = HTMLemail.replace("%data%", bio.contacts[0].email);
    $("#topContacts").append(bioEmail);
    var bioMobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
    $("#topContacts").append(bioMobile);
    var bioTwitter = HTMLtwitter.replace("%data%", bio.contacts[0].twitter);
    $("#topContacts").append(bioTwitter);
    var bioGithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
    $("#topContacts").append(bioGithub);
    var bioLocation = HTMLlocation.replace("%data%", bio.contacts[0].location);
    $("#topContacts").append(bioLocation);

    var bioEmail = HTMLemail.replace("%data%", bio.contacts[0].email);
    $("#footerContacts").append(bioEmail);
    var bioMobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
    $("#footerContacts").append(bioMobile);
    var bioTwitter = HTMLtwitter.replace("%data%", bio.contacts[0].twitter);
    $("#footerContacts").append(bioTwitter);
    var bioGithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
    $("#footerContacts").append(bioGithub);
    var bioLocation = HTMLlocation.replace("%data%", bio.contacts[0].location);
    $("#footerContacts").append(bioLocation);


// BioImage and Skills Loop
// ---------------------------------------------------------------------------------------------
    var bioImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioImage);

    var bioSkills = HTMLskillsStart;
	for (i = 0; i < bio.skills.length; i++) { 
	    bioSkills = bioSkills + HTMLskills.replace("%data%", bio.skills[i]);
	}
	$("#header").append(bioSkills);

};

education.JSON = function () {

// Education Updates
// ---------------------------------------------------------------------------------------------
    var eduHTML = HTMLschoolStart;
	for (i = 0; i < education.schools.length; i++) { 
	    eduHTML = eduHTML + HTMLschoolName.replace("%data%", education.schools[i].name);
	    eduHTML = eduHTML + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
	    eduHTML = eduHTML + HTMLschoolDates.replace("%data%", education.schools[i].date);
	    eduHTML = eduHTML + HTMLschoolMajor.replace("%data%", education.schools[i].major);
	}
    $("#education").append(eduHTML);

    eduHTML = HTMLonlineClasses;
	for (i = 0; i < education.onlineCourses.length; i++) { 
	    eduHTML = eduHTML + HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
	    eduHTML = eduHTML + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
	    eduHTML = eduHTML + HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
	    eduHTML = eduHTML + HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
	}
    $("#education").append(eduHTML);

};

work.JSON = function () {

// Work History Updates
// ---------------------------------------------------------------------------------------------
    var workHTML = HTMLworkStart;
	for (i = 0; i < work.jobs.length; i++) { 
	    workHTML = workHTML + HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	    workHTML = workHTML + HTMLworkTitle.replace("%data%", work.jobs[i].title);
	    workHTML = workHTML + HTMLworkDates.replace("%data%", work.jobs[i].dates);
	    workHTML = workHTML + HTMLworkLocation.replace("%data%", work.jobs[i].location);
	    workHTML = workHTML + HTMLworkDescription.replace("%data%", work.jobs[i].description);
	}
    $("#workExperience").append(workHTML);

};

projects.JSON = function () {

// Project Spotlight
// ---------------------------------------------------------------------------------------------
    var projectHTML = HTMLprojectStart;
	for (i = 0; i < projects.projects.length; i++) {
	    projectHTML = projectHTML + HTMLprojectTitle.replace("%data%", projects.projects[i].title);
	    projectHTML = projectHTML + HTMLprojectDates.replace("%data%", projects.projects[i].dates);
	    projectHTML = projectHTML + HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		for (j = 0; j < projects.projects[i].images.length; j++) {
		    projectHTML = projectHTML + HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
		}
	}
    $("#projects").append(projectHTML);

};

// ---------------------------------------------------------------------------------------------
// Main Routine: Start Here
// ---------------------------------------------------------------------------------------------
bio.JSON();
education.JSON();
work.JSON();
projects.JSON();
$("#mapDiv").append(googleMap);
 