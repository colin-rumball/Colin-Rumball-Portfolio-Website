import Components, { Page, Button, SiteHeader } from "../definitions/Components";
import { COLORS } from "./BaseThemeVariables";

export const PAGE: Page = {
   BACKGROUND: "#fff"
};

export const BUTTON: Button = {
   FONT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#fff" },
   BACKGROUND: { DEFAULT: COLORS.PRIMARY.BASE, ALTERNATE: COLORS.PRIMARY.DARK }
};

export const SITE_HEADER: SiteHeader = {
   BACKGROUND: `linear-gradient(90deg, ${COLORS.PRIMARY.BASE} 20.31%, ${COLORS.PRIMARY.DARK} 80.17%)`,
   TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#00FFFF" }
};
