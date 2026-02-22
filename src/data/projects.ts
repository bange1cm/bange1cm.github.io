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
}

export const projects: Project[] = [
  // Coding Projects
  {
    id: "Labs@Home",
    title: "Labs@Home Application",
    category: "UX",
    description:
      "A full-stack desktop application designed to help CMU computer science students complete lab assignments using virtual machines, without needing to understand all the technical complexity behind the scenes. ",
    image: "/projects/Labs@Home.png",
    video: "https://youtu.be/AZbAEzI8MvU",
    technologies: [
      "Usability Studies",
      "Design Thinking",
      "Tauri",
      "React",
      "Rust",
      "React Router",
      "React Bootstrap",
    ],
    details: `This project started from Professor Patrick Seeling’s research on virtualized lab environments and delta files. I took that foundation and built a full-stack application with a strong emphasis on UX-driven development.
    The Process: 
		1. Designed and developed a cross-platform desktop app using Tauri v2
		2. Built a Rust backend to handle system-level logic like virtual machines and file management
		3. Created a React frontend focused on minimalism and ease of use
		4. Utilized the 5 step Design Process (Empathize, Define, Ideate, Prototype, Test)
		5. Applied UX design principles and usability heuristics to create clarity
		6. Conducted usability testing with real students and iterated based on feedback

		This project challenged me to take a very technical system and design an experience that actually makes sense to users. I’m so excited to have the application utilized in upcoming semesters!

		Huge thanks to Professor Patrick Seeling for the guidance and support throughout this project. Additional thanks to the Central Michigan University Honors Program for supporting this work and funding the poster presentation.`,
  },
  {
    id: "ExpenseReport",
    title: "Expense Reporting Application",
    category: "UX",
    description:
      "A redesign of the Auto-Owners Associate expense reporting system, focused on improving usability and streamlining the reporting process for employees.",
    image: "/projects/ExpenseReport.png",
    technologies: ["Axure", "Lucid", "Design Thinking", "Usability Studies"],
    link: "https://github.com/bange1cm/Labs-Home",
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
    link: "https://lnkd.in/g2mqBxHB",
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
	I really enjoyed taking the project from the ground up by deciding how the game would be translated to a mobile version, what features were required, and what we needed to do to ensure a good game. After outlining the specs, I spent most of my time creating the front end with React. `,
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
    technologies: ["SQL", "PL/SQL"],
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
    technologies: ["Adobe Illustrator"],
    pdf: "/projects/AfricanForestElephant.pdf",
    details: `To be finished`,
  },
  {
    id: "WestMichiganPropertyLogo",
    title: "Alaska Property Management and West Michigan Homes Logos",
    category: "Graphic Design",
    description:
      "Logo design for the Alaska Property Management and West Michigan Homes. The design incorporates earthy tones and natural elements to reflect the properties' habitats and conservation efforts.",
    images: ["/projects/APM.png", "/projects/WMH.png"],
    technologies: ["Adobe Illustrator"],
    pdf: "/projects/WestMichiganPropertyLogo.pdf",
    details: `To be finished`,
  },
  {
    id: "Vases",
    title: "Vases",
    category: "Small Projects",
    description:
      "Ceramic vases made with coil construction. Vases are inspired by flowers, movement, and bubbles",
    images: [
      "/projects/vase1.jpg",
      "/projects/vase2.jpg",
      "/projects/vase3.jpg",
      "/projects/vase4.jpg",
    ],
    technologies: ["Ceramics"],
  },
  {
    id: "WatchYourBack",
    title: "Watch Your Back",
    category: "Small Projects",
    description:
      "A video production project exploring horror themes and storytelling.",
    video: "https://youtu.be/5SaPLDKKBS0",
    technologies: ["Video Production"],
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
