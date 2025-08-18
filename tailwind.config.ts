import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				terminal: {
					bg: 'hsl(var(--terminal-bg))',
					green: 'hsl(var(--terminal-green))',
					white: 'hsl(var(--terminal-white))',
					blue: 'hsl(var(--terminal-blue))',
					yellow: 'hsl(var(--terminal-yellow))',
					cyan: 'hsl(var(--terminal-cyan))',
					purple: 'hsl(var(--terminal-purple))'
				},
				'card-gradient': {
					start: 'hsl(var(--card-gradient-start))',
					end: 'hsl(var(--card-gradient-end))'
				},
				'card-shadow': 'hsl(var(--card-shadow))',
				'card-border': 'hsl(var(--card-border))',
				'card-glow': 'hsl(var(--card-glow))',
				neon: {
					cyan: 'hsl(var(--neon-cyan))',
					purple: 'hsl(var(--neon-purple))',
					pink: 'hsl(var(--neon-pink))'
				}
			},
			fontFamily: {
				mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace']
			},
			boxShadow: {
				'card-3d': '0 25px 50px -20px hsl(var(--card-shadow) / 0.8), 0 0 0 1px hsl(var(--card-border) / 0.3), 0 0 30px hsl(var(--card-glow) / 0.2)',
				'card-hover': '0 35px 60px -20px hsl(var(--card-shadow) / 0.9), 0 0 0 2px hsl(var(--card-glow) / 0.6), 0 0 50px hsl(var(--card-glow) / 0.4)',
				'terminal-glow': '0 0 30px hsl(var(--terminal-green) / 0.4), 0 0 60px hsl(var(--terminal-green) / 0.2)',
				'neon-glow': '0 0 20px hsl(var(--neon-cyan) / 0.5), 0 0 40px hsl(var(--neon-cyan) / 0.3), 0 0 60px hsl(var(--neon-cyan) / 0.1)',
				'inner-glow': 'inset 0 0 20px hsl(var(--neon-cyan) / 0.1)',
				'primary-glow': '0 0 30px hsl(var(--glow-primary) / 0.4)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
