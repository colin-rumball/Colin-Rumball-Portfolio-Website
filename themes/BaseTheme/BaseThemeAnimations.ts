import { keyframes, css } from "styled-components";
import Animations from "../definitions/Animations";

const FadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const FadeOut = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

export const STANDARD_FADE_IN = css`
   animation: ${FadeIn} 0.35s linear both;
`;

export const STANDARD_FADE_OUT = css`
   animation: ${FadeOut} 0.35s linear both;
`;