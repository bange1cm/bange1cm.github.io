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
    category: "Coding, UX",
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
  // Add more projects as needed
];

export function getCategories(): string[] {
  const categories = new Set(projects.map((p) => p.category));
  return Array.from(categories).sort();
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}
