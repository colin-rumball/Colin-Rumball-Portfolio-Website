import { createGlobalStyle } from "styled-components";
import { ThemeContainer } from "../themes/definitions/Theme";

const GlobalStyles = createGlobalStyle`
	html {
		font-size: 18px;
		font-family: "Roboto", sans-serif;
		scroll-behavior: smooth;
		webkit-font-smoothing: antialiased;
		font-display: swap;
		color: #555555;

		min-height: 100vh;

		overflow-x: hidden;

		.modal-open {
			overflow: hidden;
		}
	}

	body {
		margin: 0;
	}

	a {
		text-decoration: none;
	}

	*::-webkit-scrollbar {
		width: 0.5em;
	}

	*::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 5px;
	}

	*::-webkit-scrollbar-track {
		background-color: #fff;
		opacity: 0.3;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
	}

	p {
		margin: 0;
	}

	button {
		border: none;
	}
`;

export default GlobalStyles;
