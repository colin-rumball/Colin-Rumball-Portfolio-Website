import Components, { Page, Button, SiteHeader } from "../definitions/Components";
import Variables from "../definitions/Variables";

export default (VARIABLES: Variables): Components => {
   const { COLORS } = VARIABLES;

   const PAGE: Page = {
      BACKGROUND: `url("public/images/uno/uno-background.png")`,
      OVERLAYED_BACKGROUND: `linear-gradient(180deg, #BE0245 0%, #F03E17 100%)`
   };

   const BUTTON: Button = {
      FONT_COLOR: { DEFAULT: COLORS.SECONDARY.BASE, ALTERNATE: COLORS.SECONDARY.BASE },
      BACKGROUND: { DEFAULT: COLORS.PRIMARY.BASE, ALTERNATE: COLORS.PRIMARY.LIGHT }
   };

   const SITE_HEADER: SiteHeader = {
      BACKGROUND: `linear-gradient(90deg, #FB0069 20.31%, #DE4300 80.17%)`,
      DEFAULT_TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "##FF990" },
      SCROLLED_TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "##FF990" }
   };

   return {
      PAGE,
      BUTTON,
      SITE_HEADER
   };
};