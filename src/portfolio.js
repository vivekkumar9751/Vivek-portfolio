/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vivek",
  title: "Hi all, I'm Vivek 👋",
  subTitle:
    "A passionate Data Analyst skilled in Python, SQL, and Tableau. I love transforming data into actionable insights that help businesses make smarter decisions. Currently pursuing B.Tech at Galgotias University and exploring real-world projects in analytics.",
  resumeLink: "https://drive.google.com/your-resume-link", // upload your resume to Google Drive and replace this
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vivekkumar9751",
  linkedin: "https://linkedin.com/in/vivek-kumar-649130285",
  gmail: "vivek.da.0007@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "DATA-DRIVEN DECISIONS • INSIGHTS FROM NUMBERS • BUSINESS PROBLEM SOLVER",
  skills: [
    "⚡ Analyze data using Python libraries like Pandas, NumPy, Matplotlib",
    "⚡ Write complex SQL queries to extract and transform data from relational databases",
    "⚡ Create interactive and executive-ready dashboards with Tableau & Power BI",
    "⚡ Use statistics and machine learning to solve real-world problems like churn and forecasting",
    "⚡ Communicate insights using data storytelling and visualizations"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "logos:python" },
    { skillName: "SQL", fontAwesomeClassname: "vscode-icons:file-type-sql" },
    { skillName: "Tableau", fontAwesomeClassname: "logos:tableau-icon" },
    { skillName: "Excel", fontAwesomeClassname: "logos:microsoft-excel" },
    { skillName: "Power BI", fontAwesomeClassname: "logos:powerbi" },
    { skillName: "Git", fontAwesomeClassname: "devicon:git" },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Galgotias University",
      logo: require("./assets/images/galgotiasLogo.png"),
      subHeader: "Bachelor of Technology (B.Tech), Computer Science",
      duration: "2021 - 2025",
      desc: "Pre-final year student with a strong interest in data analytics and business intelligence.",
      descBullets: [
        "CGPA: 8.3"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, // Hiding work experience section since Vivek is a student
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY DATA ANALYTICS AND SOFTWARE DEVELOPMENT PROJECTS",
  projects: [
    {
      image: require("./assets/images/project1.png"),
      projectName: "Toddler Talk",
      projectDesc: "A social media platform for parents to share their toddler's development journey, featuring post creation and user interaction capabilities.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/vivekkumar9751/Toddler_Talk_vivek1"
        }
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "TodBite",
      projectDesc: "An innovative platform focused on toddler development and parenting resources.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/vivekkumar9751/TodBite"
        }
      ]
    },
    {
      image: require("./assets/images/project3.png"),
      projectName: "Team19_SCM",
      projectDesc: "Collaborative software configuration management project showcasing version control and team development practices.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/vivekkumar9751/Team19_SCM"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Accomplishments and Recognition",
  achievementsCards: [
    {
      title: "GitHub Quickdraw Achievement",
      subtitle: "Recognized for making first pull request within 5 minutes of opening an issue.",
      image: require("./assets/images/quickdrawLogo.png"),
      imageAlt: "Quickdraw Achievement Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://github.com/vivekkumar9751"
        }
      ]
    },
    {
      title: "GitHub Pull Shark Achievement",
      subtitle: "Earned for having multiple pull requests successfully merged.",
      image: require("./assets/images/pullsharkLogo.png"),
      imageAlt: "Pull Shark Achievement Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://github.com/vivekkumar9751"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  display: false // Hiding blog section
};

// Talks Sections

const talkSection = {
  display: false // Hiding talks section
};

// Podcast Section

const podcastSection = {
  display: false // Hiding podcast section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Open to data analyst roles, internships, and startup opportunities.",
  number: "7817831929",
  email_address: "vivek.da.0007@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
