export const baseUrl = new URL('https://devinger.net')
export type ProjectType = {

	name: string,
	image: string
	tech: string[]
	link: string


}
export const projectsConfig = {
	blackjack: {
		name: "blackjack",
		image: '/projects_images/blackjack.webp',
		tech: ['next', 'react', 'tailwind'],
		link: 'https://blackjack.devinger.net',
	},
	timeTracker: {
		name: "timeTracker",
		image: '/projects_images/blackjack.webp',
		tech: ['next', 'react', 'tailwind', 'supabase'],
		link: 'https://blackjack.devinger.net',
	},
	chatgptYourFiles: {
		name: 'chatgptYourFiles',
		image: '/projects_images/chatgptYourFiles.webp',
		tech: ['supabase', 'next', 'tailwind',],
		link: 'https://chatgptYourFiles.devinger.net',
	},

}