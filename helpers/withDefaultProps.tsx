import { defaultsDeep } from "lodash";
import { useMemo } from "react";
import { formatWithValidation } from "next/dist/next-server/lib/utils";
import GetComponentDisplayName from "./utils/GetComponentDisplayName";

function withDefaultProps<T>(Component: React.FC, defaultProps: T) {
   const withDefaultProps = (props: T) => {
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

      return <Component {...propsWithDefaults} />;
   };

   withDefaultProps.displayName = `withDefaultProps(${GetComponentDisplayName(Component)})`;

   return withDefaultProps;
}

export default withDefaultProps;
