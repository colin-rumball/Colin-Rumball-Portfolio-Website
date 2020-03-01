import Components, { Page, Button, SiteHeader } from "../definitions/Components";
import Variables from "../definitions/Variables";

export default (VARIABLES: Variables): Components => {
   const { COLORS } = VARIABLES;

   const PAGE: Page = {
      BACKGROUND: `url("public/images/lego/lego-background.png")`,
      OVERLAYED_BACKGROUND: `linear-gradient(180deg, #481180 0%, #680A60 100%)`
   };

   const BUTTON: Button = {
      FONT_COLOR: { DEFAULT: COLORS.SECONDARY.BASE, ALTERNATE: COLORS.SECONDARY.BASE },
      BACKGROUND: { DEFAULT: COLORS.PRIMARY.BASE, ALTERNATE: COLORS.PRIMARY.LIGHT }
   };

   const SITE_HEADER: SiteHeader = {
      BACKGROUND: `linear-gradient(90deg, #C6006B 20.31%, #471AA6 80.17%)`,
      DEFAULT_TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#FF00FF" },
      SCROLLED_TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#FF00FF" }
   };

   return {
      PAGE,
      BUTTON,
      SITE_HEADER
   };
};
