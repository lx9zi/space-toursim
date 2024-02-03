/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        Header: "150px",
        subHeader: "100px",
        smallHeader: "56px",
        xsmallHeader: "32px",
        planetsHeader: "16px",
        travel: "28px",
        avgDis: "14px",
      },
      letterSpacing: {
        planetsHeader: "2.7px",
        distance: "2.35px",
      },
      colors: {
        BLACK: "#0B0D17",
        GRAY: "#D0D6F9",
        WHITE: "#FFFFFF",
      },

      backgroundColor: {
        line: "#979797",
      },
      backgroundImage: {
        space: "url('../src/assets/home/background-home-mobile.jpg')",
        "space-tablet": "url('../src/assets/home/background-home-tablet.jpg')",
        "space-desk": "url('../src/assets/home/background-home-desktop.jpg')",

        stars:
          "url('../src/assets/destination/background-destination-mobile.jpg')",
        "stars-tablet":
          "url('../src/assets/destination/background-destination-tablet.jpg')",
        "stars-desk":
          "url('../src/assets/destination/background-destination-desktop.jpg')",

        crew: "url('../src/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('../src/assets/crew/background-crew-tablet.jpg')",
        "crew-desk": "url('../src/assets/crew/background-crew-desktop.jpg')",

        technology:
          "url('../src/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('../src/assets/technology/background-technology-tablet.jpg')",
        "technology-desk":
          "url('../src/assets/technology/background-technology-desktop.jpg')",
      },
    },
    fontFamily: {
      Header: "Bellefair, serif",
      subHeader: "Barlow Condensed, sans-serif",
    },

    zIndex: {
      behind: "3",
      forBackgorund: "2",
    },
  },
  plugins: [],
};
