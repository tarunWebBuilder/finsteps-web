import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Inter", "sans-serif"],
        montserrat: ["Montserrat", "-apple-system", "Roboto", "Helvetica", "sans-serif"],
      },
      colors: {
        "blush-bg": "hsl(var(--blush-bg))",
        "blush-purple": "hsl(var(--blush-purple))",
        "blush-purple-dark": "hsl(var(--blush-purple-dark))",
        "blush-beige": "hsl(var(--blush-beige))",
        "blush-mint": "hsl(var(--blush-mint))",
        "blush-peach": "hsl(var(--blush-peach))",
        "blush-lavender": "hsl(var(--blush-lavender))",
        "blush-yellow": "hsl(var(--blush-yellow))",
        "blush-coral": "hsl(var(--blush-coral))",
        "blush-cyan": "hsl(var(--blush-cyan))",
        "blush-teal": "hsl(var(--blush-teal))",
        "blush-dark": "hsl(var(--blush-dark))",
        "blush-gray": "hsl(var(--blush-gray))",
        "blush-white": "hsl(var(--blush-white))",
        "primary-purple": "hsl(var(--blush-purple))",
        "primary-green": "hsl(var(--blush-teal))",
        "primary-red": "hsl(var(--blush-coral))",
        "accent-purple": "hsl(var(--blush-lavender))",
        "accent-green": "hsl(var(--blush-mint))",
        "accent-red": "hsl(var(--blush-peach))",
        "text-dark": "hsl(var(--blush-dark))",
        "text-light": "hsl(var(--blush-white))",
        "border-light": "hsl(var(--border))",
        "ink-06": "hsl(var(--blush-peach))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
