/** @type {import('tailwindcss').Config} */
export default { // Changed to ES module syntax, common for Vite
  content: [
    "./index.html", // Path to your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Paths to all relevant source files
  ],
  theme: {
    extend: {
      colors: {
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        labrada: ['Labrada', 'serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleInUp: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-10deg) scale(0.8)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        flipInX: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateX(90deg)' },
          '40%': { transform: 'perspective(400px) rotateX(-20deg)' },
          '60%': { transform: 'perspective(400px) rotateX(10deg)' },
          '80%': { transform: 'perspective(400px) rotateX(-5deg)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateX(0deg)' },
        },
        flipInY: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateY(90deg)' },
          '40%': { transform: 'perspective(400px) rotateY(-20deg)' },
          '60%': { transform: 'perspective(400px) rotateY(10deg)' },
          '80%': { transform: 'perspective(400px) rotateY(-5deg)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateY(0deg)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        rollIn: {
          '0%': { opacity: '0', transform: 'translateX(-100%) rotate(-120deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotate(0deg)' },
        },
        lightSpeedIn: {
          '0%': { opacity: '0', transform: 'translateX(100%) skewX(-30deg)' },
          '60%': { opacity: '1', transform: 'translateX(-20%) skewX(20deg)' },
          '80%': { opacity: '1', transform: 'translateX(0%) skewX(-5deg)' },
          '100%': { opacity: '1', transform: 'translateX(0%) skewX(0deg)' },
        },
        slideInBounce: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '60%': { opacity: '1', transform: 'translateY(-10px)' },
          '80%': { transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInDown: 'fadeInDown 0.8s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.8s ease-out forwards',
        fadeInRight: 'fadeInRight 0.8s ease-out forwards',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        scaleIn: 'scaleIn 0.6s ease-out forwards',
        scaleInUp: 'scaleInUp 0.8s ease-out forwards',
        slideInUp: 'slideInUp 1s ease-out forwards',
        slideInDown: 'slideInDown 1s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
        rotateIn: 'rotateIn 0.8s ease-out forwards',
        flipInX: 'flipInX 1s ease-out forwards',
        flipInY: 'flipInY 1s ease-out forwards',
        bounceIn: 'bounceIn 1s ease-out forwards',
        zoomIn: 'zoomIn 0.6s ease-out forwards',
        rollIn: 'rollIn 1s ease-out forwards',
        lightSpeedIn: 'lightSpeedIn 1s ease-out forwards',
        slideInBounce: 'slideInBounce 1s ease-out forwards',
        heartBeat: 'heartBeat 1.5s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [require("tailwindcss-animate")], // Added tailwindcss-animate based on keyframes
  darkMode: ["class"],
};
