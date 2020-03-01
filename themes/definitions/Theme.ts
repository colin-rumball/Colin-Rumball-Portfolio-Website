import Variables from "./Variables";
import Animations from "./Animations";
import Components from "./Components";

interface Theme {
   COMPONENTS: Components;
   ANIMATIONS: Animations;
   VARIABLES: Variables;
}

// Used for intellisense in styled components
export interface ThemeContainer {
   theme: Theme;
   [x: string]: any;
}

export default Theme;
