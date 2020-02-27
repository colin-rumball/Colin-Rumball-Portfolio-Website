import { createGlobalStyle } from "styled-components";
import { ThemeContainer } from "../themes/definitions/Theme";

const GlobalStyles = createGlobalStyle`
	html {
		font-size: 18px;
		font-family: "Montserrat", sans-serif;
		scroll-behavior: smooth;
		webkit-font-smoothing: antialiased;
		font-display: swap;

		min-height: 100vh;
		background-color: ${({ theme }: ThemeContainer) => theme.GENERAL.SITE_BACKGROUND_COLOR};

		overflow-x: hidden;
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
		background-color: #777;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
	}

	p {
		font-size: 18px;
	}

	button {
		border: none;
	}
`;

export default GlobalStyles;
