import Components, { Page, Button, SiteHeader } from "../definitions/Components";
import Variables from "../definitions/Variables";

export default (VARIABLES: Variables): Components => {
   const { COLORS } = VARIABLES;

   const PAGE: Page = {
      BACKGROUND: 'url("public/images/the-loneliness-project/stars.png")'
   };

   const BUTTON: Button = {
      FONT_COLOR: { DEFAULT: COLORS.NEUTRALS.DARK, ALTERNATE: COLORS.NEUTRALS.BLACK },
      BACKGROUND: { DEFAULT: COLORS.PRIMARY.BASE, ALTERNATE: COLORS.PRIMARY.LIGHT }
   };

   const SITE_HEADER: SiteHeader = {
      BACKGROUND: `linear-gradient(90deg, #009AF0 20.31%, #4900DA 80.17%)`,
      TEXT_COLOR: { DEFAULT: "#fff", ALTERNATE: "#00F0FF" }
   };

   return {
      PAGE,
      BUTTON,
      SITE_HEADER
   };
};
