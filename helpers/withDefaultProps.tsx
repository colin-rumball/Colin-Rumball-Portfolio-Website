import { defaultsDeep } from "lodash";
import { useMemo } from "react";

function withDefaultProps<T>(Component: React.FC, defaultProps: T) {
   return (props: T) => {
      const propsWithDefaults = useMemo(() => {
         const combinedProps = defaultsDeep({}, props, defaultProps);

         // replace children manually
         if (props.hasOwnProperty("children")) {
            combinedProps.children = props["children"];
         } else if (defaultProps.hasOwnProperty("children")) {
            combinedProps.children = defaultProps["children"];
         }

         return combinedProps;
      }, [defaultProps, props]);

      // DEBUG statements
      // if (propsWithDefaults.debug) {
      //    console.debug(`========== withDefaultProps ==========`);
      //    console.debug(`${Component.displayName} rendering with props:`);
      //    console.debug(propsWithDefaults);
      //    console.debug(`original props:`);
      //    console.debug(props);
      //    console.debug(`default props:`);
      //    console.debug(defaultProps);
      //    console.debug(`========== ================ ==========`);
      // }
      return <Component {...propsWithDefaults} />;
   };
}

export default withDefaultProps;
