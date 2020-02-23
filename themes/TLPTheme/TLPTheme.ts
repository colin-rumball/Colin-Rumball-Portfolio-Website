import DefaultTheme from "../DefaultTheme/DefaultTheme";
import Theme from "../definitions/Theme";

const TLPTheme: Theme = {
   ...DefaultTheme,
   GENERAL: {
      HEADER_COLOR: "#27405e",
      BACKGROUND_IMAGE: `url("/public/stars.png")`,
      FOOTER_LINKS_COLOR: { DEFAULT: "#e8d8b6", HOVER: "#fff" },
      SITE_BACKGROUND_COLOR: "#27405e",
      NAV_ITEMS_COLOR: { DEFAULT: "#e8d8b6", HOVER: "#fff" },
      LOGO_COLOR: { DEFAULT: "#e8d8b6", HOVER: "#fff" }
   }
};

export default TLPTheme;
