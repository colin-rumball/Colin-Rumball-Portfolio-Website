import { ComponentStateColor } from "./common";

export interface Page {
   BACKGROUND?: string;
   OVERLAYED_BACKGROUND?: string;
   OVERLAYED_BG_BLEND?: string;
}

export interface Button {
   FONT_COLOR: ComponentStateColor;
   BACKGROUND: ComponentStateColor;
}

export interface SiteHeader {
   BACKGROUND: string;
   TEXT_COLOR: ComponentStateColor;
}

interface Components {
   PAGE: Page;
   BUTTON: Button;
   SITE_HEADER: SiteHeader;
}

export default Components;
