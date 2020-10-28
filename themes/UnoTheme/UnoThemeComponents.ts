import Components, { Page, Button, SiteHeader } from "../definitions/Components";
import Variables from "../definitions/Variables";

const UnoThemeComponents = (VARIABLES: Variables): Components => {
   const { COLORS } = VARIABLES;

   const PAGE: Page = {
      BACKGROUND: `linear-gradient(180deg, #BE0245 0%, #F03E17 100%)`,
      OVERLAYED_BACKGROUND: `url("/images/uno/uno_background.png")`,
      OVERLAYED_BG_BLEND: "overlay"
   };
   //url("public/images/uno/uno-background.png")

   const BUTTON: Button = {
      FONT_COLOR: { DEFAULT: COLORS.SECONDARY.BASE, ALTERNATE: COLORS.SECONDARY.BASE },
      BACKGROUND: { DEFAULT: COLORS.PRIMARY.BASE, ALTERNATE: COLORS.PRIMARY.LIGHT }
   };

   const SITE_HEADER: SiteHeader = {
      BACKGROUND: `linear-gradient(90deg, #FB0069 20.31%, #DE4300 80.17%)`,
      TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#FF9900" }
   };

   return {
      PAGE,
      BUTTON,
      SITE_HEADER
   };
};

export default UnoThemeComponents;
