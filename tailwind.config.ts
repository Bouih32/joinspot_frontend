import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: "1224px",
        tablet: "900px",
      },
      fontFamily: {
        poppins: ["(var(--font-poppins))"],
        openSans: ["(var(--font-opensans))"],
      },
      fontSize: {
        "56xl": [
          "56px",
          {
            lineHeight: "72px",
            fontWeight: "700",
          },
        ],
        "40xl": [
          "40px",
          {
            lineHeight: "56px",
            fontWeight: "700",
          },
        ],
        "28lg": [
          "28px",
          {
            lineHeight: "40px",
            fontWeight: "500",
          },
        ],
        "28xxl": [
          "28px",
          {
            lineHeight: "40px",
            fontWeight: "600",
          },
        ],
        "28xl": [
          "28px",
          {
            lineHeight: "40px",
            fontWeight: "700",
          },
        ],
        "26sm": [
          "26px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],
        "26xxl": [
          "26px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        "26lg": [
          "26px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        "22sm": [
          "22px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],
        "22lg": [
          "22px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        "22xxl": [
          "22px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        "22xl": [
          "22px",
          {
            lineHeight: "32px",
            fontWeight: "700",
          },
        ],
        "20sm": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "20lg": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
        "20xxl": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        "20xl": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "700",
          },
        ],
        "16sm": [
          "16px",
          {
            lineHeight: "27px",
            fontWeight: "400",
          },
        ],
        "16xxl": [
          "16px",
          {
            lineHeight: "27px",
            fontWeight: "600",
          },
        ],
        "16lg": [
          "16px",
          {
            lineHeight: "27px",
            fontWeight: "500",
          },
        ],
        "14sm": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "14lg": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "14xl": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "700",
          },
        ],
        "14xxl": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "12sm": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        "12xxl": [
          "12px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "12lg": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
          },
        ],
        "12xl": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "700",
          },
        ],
        "16xl": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        "10xl": [
          "10px",
          {
            fontWeight: "700",
          },
        ],
        "10lg": [
          "10px",
          {
            fontWeight: "500",
          },
        ],
        "10sm": [
          "10px",
          {
            fontWeight: "400",
          },
        ],
        "10xxl": [
          "10px",
          {
            fontWeight: "600",
          },
        ],
      },
      backgroundImage: {
        loginBg: "url(/images/login.png)",
        loginBgMobile: "url(/images/loginMobile.png)",
        signupBg: "url(/images/signup1.png)",
        signupBgMobile: "url(/images/signup1Mobile.png)",
        signupBg2: "url(/images/signup2.png)",
        signupBgMobile2: "url(/images/signup2Mobile.png)",
        signupBg3: "url(/images/signup3.png)",
        signupBgMobile3: "url(/images/signup3Mobile.png)",
        activityImg: "url(/images/activityImg.jpg)",
        heroBg: "url(/images/hero.png)",
        resetBg: "url(/images/resetBg.png)",
        resetBgMobile: "url(/images/resetBgMobile.png)",
        footerBg: "url(/images/footerPattern.png)",
        story: "url(/images/story.png)",
        lines: "url(/images/lines.png)",
        linesLight: "url(/images/linesLight.png)",
        mobileNavBg: "url(/images/mobileBg.png)",
        resetGrad: "linear-gradient(60deg, #98F9FF, #FE5722)",
        activityGrad:
          "linear-gradient(90deg, rgba(255, 238, 233, 0.00) 0%, #F8F6F4 100%)",
      },
      colors: {
        main: "#FE5722",
        mainHover: "#E54E1F",
        mainActive: "#CB461B",
        mainDark: "#BF411A",
        mainLight: "#FFEEE9",
        mainLightHover: "#FFE6DE",
        mainLightActive: "#FFCBBA",
        second: "#B8A18F",
        secondHover: "#A69181",
        secondActive: "#938172",
        secondDark: "#8A796B",
        secondLight: "#F8F6F4",
        secondLightHover: "#F4F1EE",
        secondLightActive: "#E9E2DC",
        neutral: "#8F8F8F",
        neutralHover: "#818181",
        neutralActive: "#727272",
        neutralDark: "#6B6B6B",
        neutralDarkHover: "#565656",
        neutralDarkActive: "#404040",
        darker: "#323232",
        neutralLight: "#F4F4F4",
        neutralLightHover: "#EEE",
        neutralLightActive: "#DCDCDC",
        error: "#DA4453",
        errorHover: "#F9E3E5",
        errorActive: "#F4C5CA",
        info: "#3BAFDA",
        infoHover: "#E2F3F9",
        infoActive: "#C2E6F4",
        alert: "#FCBB42",
        alertHover: "#FFF5E3",
        alertActive: "#FEEAC4",
        success: "#8CC152",
        successHover: "#EEF6E5",
        successActive: "#DBECC9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        "8xl": "0px 8px 24px 0px rgba(149, 157, 165, 0.20)",
        "7xl": "0px 7px 29px 0px rgba(100, 100, 111, 0.20)",
        "5xl": "0px 5px 15px 0px rgba(0, 0, 0, 0.35)",
        "3xl": "0px 3px 8px 0px rgba(0, 0, 0, 0.24)",
        "1xl":
          "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        "33xl": "0px 8px 24px 0px rgba(149, 157, 165, 0.20)",
        "6xl": "0px 8px 24px 0px rgba(149, 157, 165, 0.20)",
        "22xl": " 0px 8px 24px -2px rgba(149, 157, 165, 0.20)",
        "23xl": "0px 8px 24px 0px rgba(149, 157, 165, 0.20)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
