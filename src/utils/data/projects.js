const projects = [
  {
    name: "Fantasy Fisticuffs",
    type: "Game",
    languages: ["HTML", "CSS", "JS"],
    media: require("../../Assets/Images/2.png"),
    blurb:
      "This enthralling project was inspired by an enlightening tutorial by Chris Courses, an exceptional guide whose expertise illuminated the intricacies of developing a 2-player game. Eager to delve deeper into the captivating realm of gameplay mechanics, I meticulously followed along, crafting 'Fantasy Fisticuffs'—a riveting 2-player fighting game that sparks excitement, challenging players in an immersive battle for victory. This endeavor marked the inception of my journey into the dynamic universe of gaming development.",
    submedia: [
      require("../../Assets/Images/FF/1.png"),
      require("../../Assets/Images/FF/2.png"),
      require("../../Assets/Images/FF/3.png"),
    ],
    video: require("../../Assets/Images/FF/FFVideo.mp4"),
    links: {
      live: "https://exquisite-liger-a0907e.netlify.app",
      gitFront: "https://github.com/brookelove/Fantasy-Fisticuffs",
      gitBack: "",
    },
  },
  {
    name: "FRESH GLOW",
    type: "E-commerce",
    languages: ["React", "CSS", "JavaScript"],
    media: require("../../Assets/Images/1.png"),
    blurb:
      "Fresh Glow stands as an elegantly designed website, a captivating mock-up e-commerce store seamlessly integrated with a robust Sequelize backend and a dynamic React front end. Crafted with intention, this application serves as a testament to my expertise, meticulously designed to push the boundaries of my proficiency in both areas.",
    submedia: [
      require("../../Assets/Images/Makeup/1.png"),
      require("../../Assets/Images/Makeup/2.png"),
      require("../../Assets/Images/Makeup/4.png"),
      require("../../Assets/Images/Makeup/3.png"),
    ],
    video: require("../../Assets/Images/Makeup/makeup.mp4"),
    links: {
      live: "https://exquisite-liger-a0907e.netlify.app",
      gitFront: "https://github.com/brookelove/fresh-grow-fe",
      gitBack: "https://github.com/brookelove/FreshGlow",
    },
  },
  {
    name: "Computer Science Department",
    type: "Organization",
    languages: ["Java"],
    media: require("../../Assets/Images/4.png"),
    blurb: "",
    submedia: [
      require("../../Assets/Images/Makeup/1.png"),
      require("../../Assets/Images/Makeup/2.png"),
      require("../../Assets/Images/Makeup/4.png"),
    ],
    video: require("../../Assets/Images/FF/FFVideo.mp4"),
    links: [""],
  },
  {
    name: "The Sylver Effect",
    type: "Portfolio",
    languages: ["React", "CSS", "JavaScript"],
    media: require("../../Assets/Images/3.png"),
    blurb: "",
    submedia: [
      require("../../Assets/Images/FF/1.png"),
      require("../../Assets/Images/FF/2.png"),
      require("../../Assets/Images/FF/3.png"),
    ],
    video: require("../../Assets/Images/FF/FFVideo.mp4"),
    links: ["https://endearing-longma-9eecbd.netlify.app"],
  },
  // {
  //   name: "The Sylver Effect",
  //   type: "Portfolio",
  //   languages: ["React", "PostGres"],
  //   media: require("../../Assets/Images/3.png"),
  //   blurb: "",
  //   submedia: [
  //     require("../../Assets/Images/FF/01.png"),
  //     require("../../Assets/Images/FF/02.png"),
  //     require("../../Assets/Images/FF/03.png"),
  //     require("../../Assets/Images/FF/04.png"),
  //   ],
  //   links: ["https://endearing-longma-9eecbd.netlify.app"],
  // },
];

module.exports = projects;
