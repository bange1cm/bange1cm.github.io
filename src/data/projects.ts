// Project data structure
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  video?: string;
  technologies?: string[];
  link?: string;
  details?: string | string[];
}

export const projects: Project[] = [
  // Coding Projects
  {
    id: "Labs@Home",
    title: "Labs@Home Application",
    category: "UX",
    description:
      "Labs@Home is a full-stack desktop application designed to help CMU computer science students complete lab assignments using virtual machines, without needing to understand all the technical complexity behind the scenes. This project started from Professor Patrick Seeling’s research on virtualized lab environments and delta files. I took that foundation and built a full-stack application with a strong emphasis on UX-driven development.",
    image: "/projects/Labs@Home.png",
    video: "https://youtu.be/AZbAEzI8MvU",
    technologies: ["Tauri", "React", "Rust", "React Router", "React Bootstrap"],
    link: "https://github.com/bange1cm/Labs-Home",
    details: `The Process: 
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
    id: "HopOff",
    title: "HopOff iOS Application",
    category: "Coding",
    description:
      "An iOS app designed and developed at SpartaHack, Michigan State University’s annual hackathon. With my teammates, I worked to solve the problem of mindless scrolling. People often scroll because they’re bored, tired, or unsure what to do. Our app, HopOff, encourages you to do other activities and reduce your phone usage.",
    image: "/projects/HopOff.png",
    video: "https://www.youtube.com/watch?v=JJGqt5VNKuY",
    technologies: ["Swift", "Xcode"],
    link: "https://lnkd.in/g2mqBxHB",
    details: `Users pick an app that they want to limit time on and input some activities they would rather (or should…) do, like hobbies, schoolwork, chores, and exercises. They also remove the app they want to use less from their phone home screen, and replace its space with the HopOff app. Because of muscle memory, users will then open HopOff and be suggested an activity instead. Users can always continue to the original app, leaving them in control without any extreme limits. 
		After lots of struggles with setting up React Native and an Android emulator, we pivoted and built the app for iOS using Xcode and Swift, relying on storyboards to design and manage the interface. Rather than letting technical setbacks stall the project, we embraced the change, adapting and making quick decisions to keep moving. I’m proud of our teamwork and problem solving skills that allowed us to deliver a completed app against all odds.`,
  },
  {
    id: "MyCows",
    title: "My Cows! mobile game",
    category: "Coding",
    description:
      "My Cows! is a mobile game developed at SpartaHack, Michigan State University’s annual hackathon. After spending too much time on phones during road trips, we wanted to create a competition to encourage passangers to look out the window and enjoy the scenery. ",
    image: "/projects/MyCows.png",
    technologies: ["React", "Node.js", "Convex"],
    link: "https://devpost.com/software/my-cows-roadtrip-wrapped?ref_content=my-projects-tab&ref_feature=my_projects",
    details: `For our project, we created an interface for fun road trip game called "My Cows!" In this game, different players keep track of how many cows they spot on the trip, and are able increase their cows, decrease other players' cows, and turn their cows into hamburgers. The goal is to have as many hamburgers as possible at the end of the road trip. We did not invent the road trip game but instead made a website for users to be able create and join games, making keeping track of everyone's cows much easier and more fun!
	On the technical side, we used next.js framework and used convex for our backend database. Our graphics and our database were set up by my teammates. 
	I really enjoyed taking the project from the ground up by deciding how the game would be translated to a mobile version, what features were required, and what we needed to do to ensure a good game. After outlining the specs, I spent most of my time creating the front end with React. `,
  },
  {
    id: "AfricanForestElephant",
    title: "African Forest Elephant Logo",
    category: "Graphic Design",
    description:
      "Logo design for the African Forest Elephant. The design incorporates earthy tones and natural elements to reflect the elephant's habitat and conservation efforts.",
    image: "/projects/AfricanForestElephant.png",
    technologies: ["Adobe Illustrator", "Adobe InDesign"],
    details: `To be finished`,
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
