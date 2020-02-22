import Variables from "./Variables";
import Animations from "./Animations";
import General from "./General";

interface Theme {
   ANIMATIONS: Animations;
   VARIABLES: Variables;
   GENERAL: General;
}

// Used for intellisense in styled components
export interface ThemeContainer {
   theme: Theme;
   [x: string]: any;
}

export default Theme;
