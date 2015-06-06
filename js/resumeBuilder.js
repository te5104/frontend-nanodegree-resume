//
/* Define arrays and objects. */
//
var bio = {
    "name" : "Terry Eisenbraun",
    "role" : "JS Ninja",
    "contacts": {
      "mobile" : "(NPA)NXX-XXXX",
      "email" : "me@gmail.com",
      "twitter" : "@aintgotone",
      "github" : "i'll git it later",
      "location" : "Marietta, GA"
    },
    "welcomeMessage" : "Ipsum bacontard fatback dolorum maximus eatimus." +
                       " Septis colordum underis octavius flavius.",
    "skills":   [
      "Awesomeness", "Always Crushed It", "Programming", "Never MetaComb"
    ],
    "bioPic" : "images/fry.jpg",
    "blog" : "",
    "display" : function () {
      var fmtdRole, fmtdName, fmtdMobile, fmtdEmail, fmtdTwitter, fmtdGitHub, fmtdBlog, fmtdSkill, fmtdLocation, fmtdBioPic, fmtdWelcomeMsg, i;
      fmtdRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(fmtdRole);
      fmtdName = HTMLheaderName.replace("%data%", bio.name);
      $("#header").prepend(fmtdName);
      if (bio.contacts.mobile !== "") {
        fmtdMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(fmtdMobile);
        $("#footerContacts").append(fmtdMobile);
      }
      if (bio.contacts.email !== "") {
        fmtdEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(fmtdEmail);
        $("#footerContacts").append(fmtdEmail);
      }
      if (bio.contacts.twitter !== "") {
        fmtdTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(fmtdTwitter);
        $("#footerContacts").append(fmtdTwitter);
      }
      if (bio.contacts.github !== "") {
        fmtdGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(fmtdGitHub);
        $("#footerContacts").append(fmtdGitHub);
      }
      if (bio.blog !== "") {
        fmtdBlog = HTMLblog.replace("%data%", bio.blog);
        $("#header").append(fmtdBlog);
      }
      // Formatting skills loop
      if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i += 1) {
          fmtdSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(fmtdSkill);
        }
      }
      fmtdLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts").append(fmtdLocation);
      $("#footerContacts").append(fmtdLocation);
      fmtdBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
      $("#header").append(fmtdBioPic);
      fmtdWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").append(fmtdWelcomeMsg);
    }
  };
var work =
    {
      "jobs" : [
        {
          "employer" : "AT&T",
          "title" : "SE",
          "location" : "Brookhaven, GA",
          "dates" : "2011 - Present",
          "description" : "Pre-sales\/Pre-launch technical support for 3G\/LTE Connected Car." +
                          " Automaticus data plan perpetual renewus happines Wi-Fi hoto spoto." +
                          " Download speed fast 20 - 30+ Mbps. Use data don't text and drive." +
                          " Kids back seat watch movies shutup."
        },
        {
          "employer" : "Frontier Unlimited LLC",
          "title" : "Consultant",
          "location" : "Lombard, IL",
          "dates" : "2005 - 2011",
          "description" : "Consultant maximus to Major Telecom company." +
                          " Designed on boarding and configuration management tools and process." +
                          " Ipsum dolorum 1099 invoice corp to corp."
        }
      ],
      "display" : function () {
        var fmtdWorkEmployer, fmtdWorkTitle, fmtdYearsWorked, fmtdWorkLocation, fmtdWorkDescription;
        for (var objs in work.jobs) {
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
    };
var education =
    {
      "schools" : [
        {
          "name" : "Triton",
          "location" : "River Grove, IL",
          "degree" : "A.S.",
          "majors" : [
            "Comp Sci",
            "Business"
          ],
          "dates" : 1982,
          "url" : "http://www.triton.edu"
        },
        {
          "name" : "Cisco",
          "location" : "San Jose, CA",
          "degree" : "CCIE",
          "majors" : [
            "Route/Switch"
          ],
          "dates" : 2000,
          "url" : "http://www.cisco.com"
        }
      ],
      "onlineCourses" : [
        {
          "title" : "Front End Web Developer",
          "school" : "Udacity",
          "date" : 2015,
          "url" : "www.udacity.com/course/nd001"
        }
      ],
      "display" : function () {
        var fmtdSchoolName, fmtdSchoolDegree, fmtdSchoolDates, fmtdSchoolLocation, schoolMajors, fmtdSchoolMajor, fmtdOnlineTitle, fmtdOnlineSchool, fmtdOnlineDates, fmtdOnlineUrl, obj;
        for (obj in education.schools) {
          $("#education").append(HTMLschoolStart);
          fmtdSchoolName = HTMLschoolName.replace("%data%", education.schools[obj].name);
          fmtdSchoolName = fmtdSchoolName.replace("#", education.schools[obj].url);
          fmtdSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[obj].degree);
          $("#education-entry").append(fmtdSchoolName + fmtdSchoolDegree);
          fmtdSchoolDates = HTMLschoolDates.replace("%data%", education.schools[obj].dates);
          $("#education-entry").append(fmtdSchoolDates);
          fmtdSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[obj].location);
          $("#education-entry").append(fmtdSchoolLocation);
          schoolMajors = education.schools[obj].majors[0];
          if (education.schools[obj].majors.length > 1) {
            schoolMajors += ", " + education.schools[obj].majors[1];
          }
          fmtdSchoolMajor = HTMLschoolMajor.replace("%data%", schoolMajors);
          $("#education-entry").append(fmtdSchoolMajor);
        }
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
    };
var projects =
    {
      "projects" : [
        {
          "title" : "Connected Vehicle",
          "dates" : "2013 - 2014",
          "description" : "Connected vehicles with LTE radio and Wi-Fi hotspot." +
                          " Assisted engineers with test drives and other field testing.",
          "images" : [
            "images/audia3.jpg",
            "images/2015-chevrolet-malibu.jpg"
          ]
        },
        {
          "title" : "Connected eReader; Connected Tablet",
          "dates" : "2009 - 2013",
          "description" : "On boarding and launch of the most successful e-reader and tablet on the market.",
          "images" : [
            "images/kindle.jpg",
            "images/fire.jpg"
          ]
        }
      ],
      "display" : function () {
        var fmtdProjectTitle, fmtdProjectDates, fmtdProjectDescription, fmtdProjectImage, obj, i;
        for (obj in projects.projects) {
          $("#projects").append(HTMLprojectStart);
          fmtdProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[obj].title);
          $("#project-entry").append(fmtdProjectTitle);
          fmtdProjectDates = HTMLprojectDates.replace("%data%", projects.projects[obj].dates);
          $("#project-entry").append(fmtdProjectDates);
          fmtdProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[obj].description);
          $("#project-entry").append(fmtdProjectDescription);
          for (i = 0; i < projects.projects[obj].images.length; i += 1) {
            fmtdProjectImage = HTMLprojectImage.replace("%data%", projects.projects[obj].images[i]);
            $("#project-entry").append(fmtdProjectImage);
          }
        }
      }
    };
//
/* Map object function. */
//
function fmtMap(mapObj) {
  $("#mapDiv").append(mapObj);
}
//
// Call the functions necessary to format the resume.
//
bio.display();
work.display();
projects.display();
education.display();
fmtMap(googleMap);