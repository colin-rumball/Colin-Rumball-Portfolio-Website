import Components, { Page, Button, SiteHeader } from "../definitions/Components";
import Variables from "../definitions/Variables";

const LegoThemeComponents = (VARIABLES: Variables): Components => {
   const { COLORS } = VARIABLES;

   const PAGE: Page = {
      BACKGROUND: `linear-gradient(180deg, #481180 0%, #680A60 100%)`,
      OVERLAYED_BACKGROUND: `url("/images/lego/lego-background.png")`,
      OVERLAYED_BG_BLEND: "multiply"
   };

   const BUTTON: Button = {
      FONT_COLOR: { DEFAULT: COLORS.SECONDARY.BASE, ALTERNATE: COLORS.SECONDARY.BASE },
      BACKGROUND: { DEFAULT: COLORS.PRIMARY.BASE, ALTERNATE: COLORS.PRIMARY.LIGHT }
   };

   const SITE_HEADER: SiteHeader = {
      BACKGROUND: `linear-gradient(90deg, #C6006B 20.31%, #471AA6 80.17%)`,
      TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#FF00FF" }
   };

   return {
      PAGE,
      BUTTON,
      SITE_HEADER
   };
};

export default LegoThemeComponents;
