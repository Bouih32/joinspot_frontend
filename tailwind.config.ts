import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: "1200px",
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
        "26sm": [
          "26px",
          {
            lineHeight: "32px",
            fontWeight: "400",
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
        "12sm": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
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
      },
      boxShadow: {
        "8xl": "0px 8px 24px 0px rgba(149, 157, 165, 0.20)",
        "7xl": "0px 7px 29px 0px rgba(100, 100, 111, 0.20)",
        "5xl": "0px 5px 15px 0px rgba(0, 0, 0, 0.35)",
        "3xl": "0px 3px 8px 0px rgba(0, 0, 0, 0.24)",
        "1xl":
          "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
