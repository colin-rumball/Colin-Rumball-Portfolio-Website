import Variables from "./Variables";
import Animations from "./Animations";
import General from "./General";
import Components from "./Components";

interface Theme {
   COMPONENTS: Components;
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
