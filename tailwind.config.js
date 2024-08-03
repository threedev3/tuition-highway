/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heroBg: "#F9F9FD",
        headingColor: "#383838",
        orangeHeading: "#F46322",
        blueHeading: "#008FBF",
        contactBg: "#F2F2F2",
        contactBg2: "#E1E1E1",
        borderColor: "#38383856",
        footerBg: "#00295B",
        footerText: "#A9A8A8",
        footerBorder: "#9B9B9B",
        startgrad: "#34ACD4",
        endGrad: "#1B596E",
        faqBg: "#F8F8F8",
        faqIcon: "#E55D20",
        chooseBg: "#F2F3FC",
        chooseText: "#212529",
        subjectBtn: "#37464F",
        blueArrows: "#309EC3",
      },

      backgroundPosition: {
        movedown: "0px 280px",
      },

      fontFamily: {
        MontserratBold: "Montserrat-bold",
      },
      dropShadow: {
        "3xl": "25px 25px 25px rgba(0, 0, 0, 0.15)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
