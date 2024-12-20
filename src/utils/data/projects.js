const projects = [
  {
    id: 0,
    name: "Fantasy Fisticuffs",
    category: "personal",
    type: "Game",
    isFeatured: true,
    languages: ["HTML", "CSS", "JS"],
    media: require("../../Assets/Images/2.png"),
    blurb:
      "This enthralling project was inspired by an enlightening tutorial by Chris Courses, an exceptional guide whose expertise illuminated the intricacies of developing a 2-player game. Eager to delve deeper into the captivating realm of gameplay mechanics, I meticulously followed along, crafting 'Fantasy Fisticuffs'—a riveting 2-player fighting game that sparks excitement, challenging players in an immersive battle for victory. This endeavor marked the inception of my journey into the dynamic universe of gaming development.",
    video: require("../../Assets/Images/FF/FFVideo.mp4"),
    links: {
      live: "https://exquisite-liger-a0907e.netlify.app",
      gitFront: "https://github.com/brookelove/Fantasy-Fisticuffs",
      gitBack: "",
    },
  },
  {
    id: 1,
    name: "FRESH GLOW",
    category: "professional",
    type: "E-commerce",
    isFeatured: false,
    languages: ["React", "CSS", "JavaScript", "MYSQL", "Sequelize"],
    media: require("../../Assets/Images/1.png"),
    blurb:
      "Fresh Glow stands as an elegantly designed website, a captivating mock-up e-commerce store seamlessly integrated with a robust Sequelize backend and a dynamic React front end. Crafted with intention, this application serves as a testament to my expertise, meticulously designed to push the boundaries of my proficiency in both areas.",
    video: require("../../Assets/Images/Makeup/makeup.mp4"),
    links: {
      live: "https://freshglow.netlify.app/",
      gitFront: "https://github.com/brookelove/fresh-grow-fe",
      gitBack: "https://github.com/brookelove/FreshGlow",
    },
  },
  {
    id: 2,
    name: "Computer Science Department",
    category: "school",
    type: "Organization",
    isFeatured: false,
    languages: ["Java"],
    media: require("../../Assets/Images/4.png"),
    blurb:
      "I have to create a mock computer science department. The point of this is to create a project using design patterns. Using several design patterns some of which include, behavioral, creational, and structural to create the CS department. THis project taught me the order of putting the best plan foreward.",
    video: require("../../Assets/Images/CSDepart/CSDepartment.mp4"),
    links: {
      live: "https://www.canva.com/design/DAFzCfUDKjA/4sHYBgBlmjlXPDZPWd_jeg/watch?utm_content=DAFzCfUDKjA&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      gitFront: "https://github.com/brookelove/CSDepartment",
      gitBack: "",
    },
  },
  {
    id: 3,
    name: "The Sylver Effect",
    category: "professional",
    type: "Portfolio",
    isFeatured: false,
    languages: ["React", "CSS", "JavaScript"],
    media: require("../../Assets/Images/3.png"),
    blurb:
      "Welcome to The Sylver Effect makeup website! Immerse yourself in the nostalgic 90s vibe with a touch of beachy and summer aesthetics. The website represents a young makeup artist's talent and passion for creating stunning looks inspired by the era. Discover the artist's unique style and explore the range of services and products offered.",
    video: require("../../Assets/Images/Effect/theEffect.mp4"),
    links: {
      live: "https://effortless-scone-fd5266.netlify.app",
      gitFront: "https://github.com/brookelove/CSDepartment",
      gitBack: "",
    },
  },
  {
    id: 4,
    name: "Evergreen Body Mod",
    category: "professional",
    type: "Website",
    isFeatured: true,
    languages: ["React", "CSS", "JavaScript"],
    media: require("../../Assets/Images/5.png"),
    blurb:
      "Evergreen Body Mod is the place to go for the most comforting place to express yourself  through piercings",
    video: require("../../Assets/Images/Evergreen/evergreen.mp4"),
    links: {
      live: "https://effortless-pothos-753abd.netlify.app",
      gitFront: "https://github.com/brookelove/evergreen-body-mod",
    },
  },
  {
    id: 5,
    name: "Find The Words",
    category: "school",
    type: "Game",
    isFeatured: false,
    languages: ["Vue", "CSS", "JavaScript", "HTML"],
    media: require("../../Assets/Images/6.png"),
    blurb:
      "Are you ready to embark on this word search adventure? Clone the repository, fire up the game, and let the quest for decryption begin!",
    video: require("../../Assets/Images/FTW/ftw.mp4"),
    links: {
      live: "https://stately-tanuki-928a3c.netlify.app",
      gitFront: "https://github.com/brookelove/cipher-game",
    },
  },
  {
    id: 6,
    name: "Offline Scan Webapp",
    category: "professional",
    type: "Login Database",
    isFeatured: true,
    languages: ["React", "NoSQL", "AWS", "Docker", "PassportJS"],
    media: require("../../Assets/Images/7.png"),
    blurb:
      "Offline WEbScan app is an application to give to employees to show what data is in what house! It allows useres to interacting with the api in order to update user information",
    video: require("../../Assets/Images/OfflineScan/citadel-cyber.mp4"),
    links: {
      live: "https://www.canva.com/design/DAF1yyx1u-U/IXylHHMDs-wpVuAYukk1FA/watch?utm_content=DAF1yyx1u-U&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      gitFront: "https://github.com/brookelove/offfline-scan-webapp-v2",
      gitBack: "https://github.com/brookelove/offline-scan-webapp-backend",
    },
  },
];

module.exports = projects;
