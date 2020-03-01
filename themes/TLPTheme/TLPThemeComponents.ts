import Components, { Page, Button, SiteHeader } from "../definitions/Components";
import Variables from "../definitions/Variables";

export default (VARIABLES: Variables): Components => {
   const { COLORS } = VARIABLES;

   const PAGE: Page = {
      BACKGROUND: 'url("public/images/tlp/stars.png")'
   };

   const BUTTON: Button = {
      FONT_COLOR: { DEFAULT: COLORS.NEUTRALS.GREY, ALTERNATE: COLORS.NEUTRALS.GREY },
      BACKGROUND: { DEFAULT: COLORS.PRIMARY.BASE, ALTERNATE: COLORS.PRIMARY.LIGHT }
   };

   const SITE_HEADER: SiteHeader = {
      BACKGROUND: `linear-gradient(90deg, #00C0DA 20.31%, #4600DA 80.17%)`,
      DEFAULT_TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#00F0FF" },
      SCROLLED_TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#00F0FF" }
   };

   return {
      PAGE,
      BUTTON,
      SITE_HEADER
   };
};