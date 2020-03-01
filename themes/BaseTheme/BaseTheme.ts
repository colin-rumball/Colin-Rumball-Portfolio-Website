import Theme from "../definitions/Theme";
import * as BaseThemeAnimations from "./BaseThemeAnimations";
import * as BaseThemeVariables from "./BaseThemeVariables";
import * as BaseThemeComponents from "./BaseThemeComponents";

const BaseTheme: Theme = {
   ANIMATIONS: BaseThemeAnimations,
   VARIABLES: BaseThemeVariables,
   COMPONENTS: BaseThemeComponents
};

export default BaseTheme;
