const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			// padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background)/<alpha-value>)",
				foreground: "hsl(var(--foreground)/<alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary)/<alpha-value>)",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary)/<alpha-value>)",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				ticker: {
					'0%': { transform: 'translateX(200%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				scale: {
					'0%': { transform: 'scale(1)', animationTimingFunction: 'ease-out' },
					'100%': { transform: 'scale(1.1)', animationTimingFunction: 'ease-in' },

				},
				lift: {

					'0%': { transform: 'translateY(0)', },
					'100%': { transform: 'translateY(-30%)' }

				},
				flameFlicker: {
					'0%, 100%': { transform: 'translateY(0) scaleX(1)' },
					'25%': { transform: 'translateY(-3%) scaleX(1.1)' },
					'50%': { transform: 'translateY(0) scaleX(0.9)' },
					'75%': { transform: 'translateY(-3%) scaleX(1.05)' },
				},
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"ticker": 'ticker 20s linear infinite',
				"lift": "lift 0.8s forwards",
				"scale": 'scale 1s ease-in-out both',
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				'reveal': 'opacity 1s ease-out',
				'flame-flicker': 'flameFlicker 3s ease-in-out infinite',
			},
			backgroundImage: {
				'light': "url('/light_theme_background.svg')",
				'blackjack': "url('/projects_images/blackjack.webp')",
				'chatgptYourFiles': "url('/projects_images/chatgptYourFiles.webp')",
				'square': "url('/reveal.svg')",
				'black_image': "url('/black.svg')",
				'gradient': "url('/gradient_1.svg')",
				'cards_bg': "url('/cards_bg.svg')",
				// 'craft': "url('/craft.svg')",
				// 'perfect': "url('/perfect.svg')",
				// 'launch': "url('/launch.svg')",
				'craft': "linear-gradient( to right, #87CEEB, #FFA07A)",

				'perfect': 'linear-gradient( to right, #D8BFD8,#4682B4)',
				'launch': 'linear-gradient(to right, #FFD700,#32CD32)'
			}
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		addVariablesForColors,
	],
}
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}