module.exports = {
	content: [
    "./views/*.ejs", 
    "./views/**/*.ejs"
  ],
	theme: {
		extend: {
			colors: {
				midnight_blue: "#083854",
				dark_blue: "#07324E",
				orange: "#E54C2F",
				gold_yellow: "#EE8933",
				light_blue: "#00B0FF",
				aquamarine_blue: "#47A8BD",
				orange_light: "#FF847A",
				gold_yellow_light: "rgba(238, 137, 51, 0.59)",
				blue_grey: "rgba(7, 50, 78, 0.72)",
				dark_grey: "#535461",
				light_grey: "#C4C4C4",
			},
			backgroundImage: {
				midnight_dark_blue: "linear-gradient(213.31deg, #052C48 11.43%, rgba(5, 44, 72, 0) 91.27%)",
				aquamarine_blue_light: "linear-gradient(180deg, #4DB6AC 0%, rgba(77, 182, 172, 0) 100%)",
			},
			fontFamily: {
				bahnscrift: ["Bahnschrift", "sans-serif"],
				raleway: ["Raleway", "sans-serif"],
			},
		},
	},
	plugins: [],
};
