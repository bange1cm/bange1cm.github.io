// Project data structure
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  images?: string[];
  video?: string;
  technologies?: string[];
  link?: string;
  pdf?: string;
  details?: string | string[];
  captions?: string[];
}

export const projects: Project[] = [
  {
    id: "Labs@Home",
    title: "Labs@Home Application",
    category: "UX",
    description:
      "A full-stack desktop application designed to help CMU computer science students complete lab assignments using virtual machines.",
    image: "/projects/Labs@Home.png",
    video: "https://youtu.be/AZbAEzI8MvU",
    link: "https://github.com/bange1cm/Labs-Home",
    technologies: [
      "Usability Studies",
      "Design Thinking",
      "Tauri",
      "React",
      "Rust",
      "React Router",
      "React Bootstrap",
    ],
  },
  {
    id: "ExpenseReport",
    title: "Expense Reporting System",
    category: "UX",
    description:
      "A redesign of the Auto-Owners Associate expense reporting system, focused on improving usability and streamlining the reporting process for employees.",
    image: "/projects/expensereports.png",
    technologies: ["Design Thinking", "Axure", "Lucid", "Usability Studies"],
  },
  {
    id: "Target0",
    title: "Target 0 Website",
    category: "UX",
    description:
      "UX and UI design for a website that promotes zero food waste practices by reducing waste and changing individual habits.",
    image: "/projects/target0.png",
    technologies: ["Figma", "Personas", "User Journey Mapping"],
    details: `TBD`,
  },
  {
    id: "HopOff",
    title: "HopOff iOS Application",
    category: "Coding",
    description:
      "An iOS app designed and developed at SpartaHack, Michigan State University’s annual hackathon. With my teammates, I worked to solve the problem of mindless scrolling. ",
    image: "/projects/HopOff.png",
    video: "https://www.youtube.com/watch?v=JJGqt5VNKuY",
    technologies: ["Swift", "Xcode"],
    link: "https://devpost.com/software/hopoff?ref_content=my-projects-tab&ref_feature=my_projects",
    details: `People often scroll because they’re bored, tired, or unsure what to do. Our app, HopOff, encourages you to do other activities and reduce your phone usage.
    With HopOff, users pick an app that they want to limit time on and input some activities they would rather (or should…) do, like hobbies, schoolwork, chores, and exercises. They also remove the app they want to use less from their phone home screen, and replace its space with the HopOff app. Because of muscle memory, users will then open HopOff and be suggested an activity instead. Users can always continue to the original app, leaving them in control without any extreme limits. 
		After lots of struggles with setting up React Native and an Android emulator, we pivoted and built the app for iOS using Xcode and Swift, relying on storyboards to design and manage the interface. Rather than letting technical setbacks stall the project, we embraced the change, adapting and making quick decisions to keep moving. I’m proud of our teamwork and problem solving skills that allowed us to deliver a completed app against all odds.`,
  },
  {
    id: "MyCows",
    title: "My Cows!",
    category: "Coding",
    description:
      "A mobile game developed at SpartaHack, Michigan State University’s annual hackathon. The game encourages competition on road trips to spot cows and turn them into hamburgers.",
    image: "/projects/MyCows.png",
    technologies: ["React", "Node.js", "Convex"],
    link: "https://devpost.com/software/my-cows-roadtrip-wrapped?ref_content=my-projects-tab&ref_feature=my_projects",
    details: `After spending too much time on phones during road trips, we wanted to create a competition to encourage passangers to look out the window and enjoy the scenery.
    For our project, we created an interface for fun road trip game called "My Cows!" In this game, different players keep track of how many cows they spot on the trip, and are able increase their cows, decrease other players' cows, and turn their cows into hamburgers. The goal is to have as many hamburgers as possible at the end of the road trip. We did not invent the road trip game but instead made a website for users to be able create and join games, making keeping track of everyone's cows much easier and more fun!
	On the technical side, we used next.js framework and used convex for our backend database. Our graphics and our database were set up by my teammates. 
	I really enjoyed taking the project from the ground up by deciding how the game would be translated to a mobile version, what features were required, and what we needed to do to ensure a good game. After outlining the specs, I spent most of my time creating the front end with React. 
  With only 24 hours to complete the project, we were able to create a functional and fun game that we were proud of.`,
  },
  {
    id: "CustomerAPI",
    title: "Customer API",
    category: "Coding",
    description:
      "Customer API is a backend service that manages customer data and interactions for a fictional company.",
    image: "/projects/customerAPI.png",
    technologies: ["Python", "FastAPI", "SQLite", "Pydantic"],
    link: "https://gitlab.com/cmich1/crm/-/tree/9a4e6c186a04bb57152cf1d12662772b32f8ba4a/cmich",
    details: `This project provides a RESTful API for managing customer information. It supports operations such as creating, retrieving, searching, and deleting customers. The API is built using FastAPI for high performance and clean design, Pydantic for data validation, and SQLite as the primary database backend. 
    Our team featured three CMU students who worked on creating the API and the database. A group of students from a German University built a frontend utilizing our backend. When then tested and evaluated eachother's code.
    This project was a great opportunity to apply backend development skills and create a functional API that could be used in real-world applications.`,
  },
  {
    id: "VetDBMS",
    title: "Veterinary Database Management System",
    category: "Coding",
    description:
      "A database management system for veterinary clinics that handles pet records, owner records, vet records, and breed information.",
    image: "/projects/sql.png",
    technologies: ["SQL", "PL/SQL"],
    details: ` Our team featured three CMU students who worked on creating the database schema and implementing the necessary procedures. We designed and implemented a relational database for an imaginary veterinary clinic using SQL. The system had four entities - vet, pet, owner, breed - and included keys, constraints, and some example queries.
    It supports operations such as creating, retrieving, searching, and deleting records. The system is built using SQL and PL/SQL for efficient data management and querying.`,
  },
  {
    id: "FamilyFixUp",
    title: "Family Fix-Up",
    category: "Coding",
    description:
      "Award winning Java and JavaFX game focused on pun filled fighting of website bugs.",
    image: "/projects/FamilyFixUp.png",
    technologies: ["Java", "JavaFX"],
    link: "https://github.com/bange1cm/FinalGame",
    details: `As part of an object-oriented programming class at Central Michigan University, we were tasked with creating a project throughout the semester using Java and JavaFX (a GUI library). 
    For our project, we created a short game that would be enjoyable for people interested in software and programming. The premise of the game is tracking down things that are visually wrong with a website that turn out to be bugs, like insect bugs, that you fight in a Pokemon esque fight sequence. The game is filled with little coding puns like this that we had a great time creating and incorporating. 
    The game specifications, backend Java, frontend GUI, testing, and project management were all done by our group. Throughout the project we collaborated, adapted, and problem solved. I ended up taking on a project management like role, doing documentation, overseeing our timeline, and coordinating tasks. 
    At end of the semester, we ended up winning best project in the class for our game!`,
  },
  {
    id: "AfricanForestElephant",
    title: "African Forest Elephant Logo",
    category: "Graphic Design",
    description:
      "Logo design for the African Forest Elephant. The design incorporates earthy tones and natural elements to reflect the elephant's habitat and conservation efforts.",
    image: "/projects/AfricanForestElephant.png",
    technologies: ["Graphic Design"],
    pdf: "/projects/AfricanForestElephant.pdf",
    details: `For a class assignment, we were tasked with creating a logo for an endangered animal that could be used for conservation efforts. After researching different endangered animals, I decided to create a logo for the African Forest Elephant. I wanted to create a logo that was simple, memorable, and reflected the elephant's habitat and conservation efforts.
    After sketching out different ideas, the final logo was created in Adobe Illustrator.`,
  },
  {
    id: "WestMichiganPropertyLogo",
    title: "Alaska Property Management and West Michigan Homes Logos",
    category: "Graphic Design",
    description:
      "Logo design for two sister companies in the real estate industry.",
    images: ["/projects/APM.png", "/projects/WMH.png"],
    technologies: ["Graphic Design"],
    details: `Some of my family owns two sister companies in the real estate industry, Alaska Property Management and West Michigan Homes. I was tasked with creating logos for both companies that would be simple, memorable, and tie the companies together in a cohesive brand identity
    After sketching out different ideas, the owners chose this logo design, and specified on the colors they wanted to use. The logos were created in Adobe Illustrator, and the logo suite with different size variations were delivered to the owners for use in their marketing materials.`,
  },
  {
    id: "Botanica",
    title: "Botanica Typeface",
    category: "Graphic Design",
    description:
      "A custom typeface made for a typography class with a focus on botanical and natural elements.",
    image: "/projects/botanica.png",
    pdf: "/projects/BotanicaType.pdf",
    technologies: ["Graphic Design"],
    details: `To understand and appreciate typography, we were tasked with creating our own typeface. I wanted to create a typeface that was inspired by nature and plants, so I created Botanica. The typeface features leaf and vine elements, as well as 6 icons that can be used as decorative elements (flower pot, shovel, snail, butterflies, plant, mushroom). 
    Then, to showcase the typeface, I created a sample poster that incorporates the typeface and its botanical elements.`,
  },
  {
    id: "FontsFaithful",
    title: "Fonts of the Faithful booklet",
    category: "Graphic Design",
    description:
      "A custom typeface made for a typography class with a focus on botanical and natural elements.",
    image: "/projects/FOTF/FontsOfTheFaithful.png",
    pdf: "/projects/FOTF/FontsOfTheFaithful.pdf",
    technologies: ["Graphic Design"],
    details: `TBD`,
  },
  {
    id: "TypographersBooklet",
    title: "Typographers Booklet",
    category: "Graphic Design",
    description:
      "A custom typeface made for a typography class with a focus on botanical and natural elements.",
    image: "/projects/TypeBooklet/TypographerBooklet.png",
    pdf: "/projects/TypeBooklet/BookMockup.pdf",
    technologies: ["Graphic Design"],
    details: `TBD`,
  },
  {
    id: "WiTLogo",
    title: "Women in Tech Logo",
    category: "Graphic Design",
    description:
      "Logo design for a student organization at Central Michigan University.",
    image: "/projects/WiT.png",
    technologies: ["Graphic Design"],
    details: `TBD`,
  },
  {
    id: "Vases",
    title: "Vases",
    category: "Ceramics",
    description:
      "Ceramic vases made with coil construction. Vases are inspired by flowers, movement, and bubbles",
    images: ["/projects/vaseflower.png", "/projects/vasebubbles.png"],
    technologies: ["Ceramics"],
    details: `The vases are my first exploration into ceramics. I learned about the process of making clay, its different stages, and glazing. I created the vases using coil construction, which involves rolling out long coils of clay and stacking them to build up the shape. 
    I enjoyed experimenting with different forms and textures, and learning about the properties of clay throughout the process.`,
  },
  {
    id: "WatchYourBack",
    title: "Watch Your Back",
    category: "Video Production",
    description:
      "A video production project exploring horror themes and storytelling.",
    video: "https://youtu.be/5SaPLDKKBS0",
    images: ["/projects/WatchYourBack.png"],
    technologies: ["Video Production"],
    details: `For a video production class, we were tasked with taking a very basic script, with almost no plot, and creating a short film. My group decided to create a horror film, and we had a lot of fun brainstorming and executing on the project. We created the shot list, filmed, and edited the video ourselves. 
    We had a lot of fun with the project, and I’m proud of how it turned out!`,
  },
  {
    id: "PhotoSeries",
    title: "Student Life Photo Series",
    category: "Photography",
    description: "A photo series documenting student life on campus.",
    images: [
      "/projects/photography/series1.jpg",
      "/projects/photography/series2.jpg",
      "/projects/photography/series3.jpg",
      "/projects/photography/series4.jpg",
      "/projects/photography/series5.jpg",
      "/projects/photography/series6.jpg",
    ],
    captions: [
      "Olivia Johnson poses in her apartment in Mount Pleasant, Michigan, Friday, November 1, 2024. Olivia is a student at Central Michigan University and is studying Speech Language Pathology",
      "Olivia Johnson attends CSD 551, Autism Spectrum Disorders: A Clinical Focus, taught by Professor MaryBeth Smith on the campus of Central Michigan University, Mount Pleasant, Michigan, Tuesday, November 5, 2024. The class focuses on how to interact with individuals who have autism in the context of speech interventions.",
      "Olivia Johnson studies in the library on the campus of Central Michigan University, Mount Pleasant, Michigan, Friday, November 22, 2024. Olivia is finishing up her last year of undergrad and preparing to go to grad school next year.",
      "Olivia Johnson, left, and Dakota Krahulik, right, walk out of Health Professions Building, on the campus of Central Michigan University, Mount Pleasant, Michigan, Thursday, November 14, 2024. The two have classes together in speech language pathology and have become friends.",
      "Olivia Johnson, middle, chats with roommates Marissa Weaver, left, and Kate Schmidt, right, over dinner at their apartment in Mount Pleasant, Michigan, Tuesday, November 19, 2024. The dinner topics included updates about their favorite tv shows and the upcoming Central Michigan University vs Western Michigan University football game.",
      "Olivia Johnson, second from the left, talks to friends, from right to left, Annie Beech, Jordan Oklo, Hadley Nobliski , and Sarah Lator at Community Church, Mount Pleasant, Michigan, Tuesday, November 12, 2024. Olivia regularly attends a young adult's church service on Tuesday nights at Community Church.",
    ],
    technologies: ["Photography"],
    details: `For a photojournalism class, we were tasked with creating a photo series documenting a student's life on campus. I took photos of the same student, Olivia Johnson, during her natural routines, capturing her daily life and interactions. 
    The project helped me improve my composition and lighting skills. as well as my ability to tell a story through images.`,
  },
  {
    id: "StudentInterview",
    title: "Student Interview",
    category: "Video Production",
    description: "A video interview with a student.",
    image: "/projects/interview.png",
    video: "https://youtu.be/C8CVLkxDzNc",
    technologies: ["Video Production"],
    details: `For a video production class, we were tasked with creating a short interview video with a student about their favorite place on campus. 
    I focused on capturing good A and B rolls, as well as clear audio.`,
  },

  // Add more projects as needed
];

export function getCategories(): string[] {
  const categories = new Set(projects.map((p) => p.category));
  return Array.from(categories).sort();
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}
