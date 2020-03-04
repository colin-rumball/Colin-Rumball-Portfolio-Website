import Components, { Page, Button, SiteHeader } from "../definitions/Components";
import Variables from "../definitions/Variables";

export default (VARIABLES: Variables): Components => {
   const { COLORS } = VARIABLES;

   const PAGE: Page = {
      BACKGROUND: "#fff"
   };

   const BUTTON: Button = {
      FONT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#fff" },
      BACKGROUND: { DEFAULT: COLORS.PRIMARY.BASE, ALTERNATE: COLORS.PRIMARY.DARK }
   };

   const SITE_HEADER: SiteHeader = {
      BACKGROUND: `linear-gradient(90deg, ${COLORS.PRIMARY.BASE} 20.31%, ${COLORS.PRIMARY.DARK} 80.17%)`,
      TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#00FFFF" }
   };

   return {
      PAGE,
      BUTTON,
      SITE_HEADER
   };
};
