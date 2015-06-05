//
/* Define arrays and objects. */
//
var bio = {
		"name":"Terry Eisenbraun",
		"role":"JS Ninja",
		"contacts": {
			"mobile":"(NPA)NXX-XXXX",
			"email":"me@gmail.com",
			"twitter":"@aintgotone",
			"github":"i'll git it later",
			"location":"Marietta, GA"
			},
		"welcomeMessage":"Ipsum bacontard fatback dolorum maximus eatimus. Septis colordum underis octavius flavius.",	
		"skills":	[
			"Awesomeness", "Always Crushed It", "Programming", "Never MetaComb"
			],
		"bioPic":"images/fry.jpg",
		"blog":"",
		"display": "myfunc()"
	};
var work =
	{
		"jobs":[
			{
				"employer":"AT&T",
				"title":"SE",
				"location":"Brookhaven, GA",
				"dates":"2011 - Present",
				"description":"Pre-sales\/Pre-launch technical support for Connected Car. Automaticus data plan perpetual \
				renewus happines Wi-Fi hoto spoto. Download speed fast 20 - 30+ Mbps. Use data don't text and drive. Kids \
				back seat watch movies shutup."
			},
			{
				"employer":"Frontier Unlimited LLC",
				"title":"Consultant",
				"location":"Lombard, IL",
				"dates":"2005 - 2011",
				"description":"Consultant maximus to Major Telecom company. Designed on boarding and configuration management \
				tools and process. Ipsum dolorum 1099 invoice corp to corp."
			}
		],
		"display":"myfunc()"
	};
var education =
	{
		"schools":[
			{
				"name":"Triton",
				"location":"River Grove, IL",
				"degree":"A.S.",
				"majors":[
					"Comp Sci",
					"Business"
				],
				"dates":1982,
				"url":"http://www.triton.edu"
			},
			{
				"name":"Cisco",
				"location":"San Jose, CA",
				"degree":"CCIE",
				"majors":[
					"Route/Switch"
				],
				"dates":2000,
				"url":"http://www.cisco.com"
			}
		],
		"onlineCourses":[
			{
				"title":"Front End Web Developer",
				"school":"Udacity",
				"date":2015,
				"url":"www.udacity.com/course/nd001"
			}
		],
		"display":"myfunc()"
	};
var projects =
	{
		"projects":[
			{
				"title":"Connected Vehicle",
				"dates":"2013 - 2014",
				"description":"Connected vehicles with LTE radio and Wi-Fi hotspot. Assisted engineers with test drives and other field testing.",
				"images":[
					"images/audia3.jpg",
					"images/2015-chevrolet-malibu.jpg"
				]
			},
			{
				"title":"Connected eReader; Connected Tablet",
				"dates":"2009 - 2013",
				"description":"On boarding and launch of the most successful e-reader and tablet on the market.",
				"images":[
					"images/kindle.jpg",
					"images/fire.jpg"
				]
			}
		],
		"display":"myfunc()"
	};
//
// Call the functions necessary to format the resume.
// 
fmtHeader(bio);
fmtWork();
fmtProjects(projects);
fmtEducation(education);
fmtOnline();
fmtMap(googleMap);
//
/* Header/Footer processing function. */
//
function fmtHeader(hdrArr) {
	var fmtdRole, fmtdName, fmtdMobile, fmtdEmail, fmtdTwitter, fmtdGitHub, fmtdBlog, fmtdSkill;
	var fmtdLocation, fmtdBioPic, fmtdWelcomeMsg;
	fmtdRole = HTMLheaderRole.replace("%data%", hdrArr.role);
	$("#header").prepend(fmtdRole);
	fmtdName = HTMLheaderName.replace("%data%", hdrArr.name);
	$("#header").prepend(fmtdName);
	if (hdrArr.contacts.mobile !== "") {
		fmtdMobile = HTMLmobile.replace("%data%", hdrArr.contacts.mobile);
		$("#topContacts").append(fmtdMobile);
		$("#footerContacts").append(fmtdMobile);
	}
	if (hdrArr.contacts.email !== "") {
		fmtdEmail = HTMLemail .replace("%data%", hdrArr.contacts.email);
		$("#topContacts").append(fmtdEmail);
		$("#footerContacts").append(fmtdEmail);
	}
	if (hdrArr.contacts.twitter !== "") {
		fmtdTwitter = HTMLtwitter.replace("%data%", hdrArr.contacts.twitter);
		$("#topContacts").append(fmtdTwitter);
		$("#footerContacts").append(fmtdTwitter);
	}
	if (hdrArr.contacts.github !== "") {
		fmtdGitHub = HTMLgithub.replace("%data%", hdrArr.contacts.github);
		$("#topContacts").append(fmtdGitHub);
		$("#footerContacts").append(fmtdGitHub);
	}
	if (hdrArr.blog !== "") {
		fmtdBlog = HTMLblog.replace("%data%", hdrArr.blog);
		$("#header").append(fmtdBlog);
	}
	// Formatting skills loop
	if (hdrArr.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (i = 0; i < hdrArr.skills.length; i++) {
			fmtdSkill = HTMLskills.replace("%data%", hdrArr.skills[i]);
			$("#skills").append(fmtdSkill);
		}
	}
	fmtdLocation = HTMLlocation.replace("%data%", hdrArr.contacts.location);
	$("#topContacts").append(fmtdLocation);
	$("#footerContacts").append(fmtdLocation);
	fmtdBioPic = HTMLbioPic.replace("%data%", hdrArr.bioPic);
	$("#header").append(fmtdBioPic);
	fmtdWelcomeMsg = HTMLwelcomeMsg.replace("%data%", hdrArr.welcomeMessage);
	$("#header").append(fmtdWelcomeMsg);
}
//
/* Projects formatting function*/
//
function fmtProjects(projArr) {
	var fmtdProjectTitle, fmtdProjectDates, fmtdProjectDescription,fmtdProjectImage, i;
	for (obj in projArr.projects) {
		$("#projects").append(HTMLprojectStart);
		fmtdProjectTitle = HTMLprojectTitle.replace("%data%", projArr.projects[obj].title);
		$("#project-entry").append(fmtdProjectTitle);
		fmtdProjectDates = HTMLprojectDates.replace("%data%", projArr.projects[obj].dates);
		$("#project-entry").append(fmtdProjectDates);
		fmtdProjectDescription = HTMLprojectDescription.replace("%data%", projArr.projects[obj].description);
		$("#project-entry").append(fmtdProjectDescription);
		for (i = 0; i < projArr.projects[obj].images.length; i++) {
			fmtdProjectImage = HTMLprojectImage.replace("%data%", projArr.projects[obj].images[i]);
			$("#project-entry").append(fmtdProjectImage);
		}
	}
}
//
/* Work Experience formatting function. */
//
function fmtWork() {
	var fmtdWorkEmployer, fmtdWorkTitle, fmtdYearsWorked, fmtdWorkLocation, fmtdWorkDescription;
	for (objs in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		fmtdWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[objs].employer);
		fmtdWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[objs].title);
		$(".work-entry:last").append(fmtdWorkEmployer + fmtdWorkTitle);
		fmtdYearsWorked = HTMLworkDates.replace("%data%", work.jobs[objs].dates);
		$(".work-entry:last").append(fmtdYearsWorked);
		fmtdWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[objs].location);
		$(".work-entry:last").append(fmtdWorkLocation);
		fmtdWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[objs].description);
		$(".work-entry:last").append(fmtdWorkDescription);
	}
}
//
/* Education formatting function. */
//
function fmtEducation(schArr) {
	var fmtdSchoolName, fmtdSchoolDegree, fmtdSchoolDates, fmtdSchoolLocation, schoolMajors, fmtdSchoolMajor;
	for (obj in schArr.schools) {
		$("#education").append(HTMLschoolStart);
		fmtdSchoolName = HTMLschoolName.replace("%data%", schArr.schools[obj].name);
		fmtdSchoolName = fmtdSchoolName.replace("#", schArr.schools[obj].url);
		fmtdSchoolDegree = HTMLschoolDegree.replace("%data%", schArr.schools[obj].degree);
		$("#education-entry").append(fmtdSchoolName + fmtdSchoolDegree);
		fmtdSchoolDates = HTMLschoolDates.replace("%data%", schArr.schools[obj].dates);
		$("#education-entry").append(fmtdSchoolDates);
		fmtdSchoolLocation = HTMLschoolLocation.replace("%data%", schArr.schools[obj].location);
		$("#education-entry").append(fmtdSchoolLocation);
		schoolMajors = schArr.schools[obj].majors[0];
		if (schArr.schools[obj].majors.length > 1) {
			schoolMajors += ", " + schArr.schools[obj].majors[1];
		}
		fmtdSchoolMajor = HTMLschoolMajor.replace("%data%", schoolMajors);
		$("#education-entry").append(fmtdSchoolMajor);		
	}
}
//
/* Online course formatting function. */
//
function fmtOnline() {
	var fmtdOnlineTitle, fmtdOnlineSchool, fmtdOnlineDates, fmtdOnlineUrl;
	for (obj in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLonlineStart);
		fmtdOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[obj].title);
		fmtdOnlineTitle = fmtdOnlineTitle.replace("#", "http://" + education.onlineCourses[obj].url);
		fmtdOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[obj].school);
		$("#online-entry").append(fmtdOnlineTitle + fmtdOnlineSchool);
		fmtdOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[obj].date);
		$("#online-entry").append(fmtdOnlineDates);
		fmtdOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[obj].url);
		fmtdOnlineUrl = fmtdOnlineUrl.replace("#", "http://" + education.onlineCourses[obj].url);
		$("#online-entry").append(fmtdOnlineUrl);
	}
}
//
/* Map object function. */
//
function fmtMap(mapObj) {
$("#mapDiv").append(mapObj);
}