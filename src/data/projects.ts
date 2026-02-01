---
// Project data structure
export interface Project {
	id: string;
	title: string;
	category: string;
	description: string;
	image?: string;
	technologies?: string[];
	link?: string;
	details?: string;
}

export const projects: Project[] = [
	// Coding Projects
	{
		id: 'portfolio-website',
		title: 'Personal Portfolio Website',
		category: 'Coding',
		description: 'A responsive portfolio website built with Astro and Tailwind CSS',
		image: '/projects/portfolio.jpg',
		technologies: ['Astro', 'JavaScript', 'CSS'],
		link: 'https://github.com',
		details: 'Built a personal portfolio website showcasing my projects and skills. Features responsive design, dynamic routing, and optimized performance.'
	},
	{
		id: 'ecommerce-app',
		title: 'E-commerce Application',
		category: 'Coding',
		description: 'Full-stack e-commerce platform with product management and checkout',
		image: '/projects/ecommerce.jpg',
		technologies: ['React', 'Node.js', 'MongoDB'],
		link: 'https://github.com',
		details: 'Developed a full-featured e-commerce platform with user authentication, product catalog, shopping cart, and secure payment processing.'
	},

	// UX Projects
	{
		id: 'app-redesign',
		title: 'Mobile App Redesign',
		category: 'UX',
		description: 'UX redesign of a financial mobile application',
		image: '/projects/ux-redesign.jpg',
		technologies: ['Figma', 'User Research'],
		details: 'Conducted user research and created a comprehensive UX redesign for a financial app, improving user engagement by 40%.'
	},

	// Graphic Design Projects
	{
		id: 'brand-identity',
		title: 'Brand Identity Design',
		category: 'Graphic Design',
		description: 'Complete brand identity including logo, color palette, and guidelines',
		image: '/projects/branding.jpg',
		technologies: ['Adobe Creative Suite', 'Illustrator'],
		details: 'Designed a complete brand identity system including logo, typography, color palette, and brand guidelines for a tech startup.'
	},

	// Video Production Projects
	{
		id: 'product-video',
		title: 'Product Demo Video',
		category: 'Video Production',
		description: 'Professional product demonstration video',
		image: '/projects/video-demo.jpg',
		technologies: ['Premiere Pro', 'After Effects'],
		details: 'Produced a high-quality product demo video with animations and color grading for a software company.'
	},

	// Ceramics Projects
	{
		id: 'ceramic-series',
		title: 'Ceramic Pottery Series',
		category: 'Ceramics',
		description: 'Hand-thrown ceramic pieces exploring texture and form',
		image: '/projects/ceramics.jpg',
		details: 'A collection of hand-thrown ceramic pieces exploring various techniques and glazing methods.'
	}
];

export function getCategories(): string[] {
	const categories = new Set(projects.map(p => p.category));
	return Array.from(categories).sort();
}

export function getProjectsByCategory(category: string): Project[] {
	return projects.filter(p => p.category === category);
}
