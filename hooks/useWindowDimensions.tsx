import { useCallback, useState, useEffect } from "react";

const useWindowDimensions = () => {
   const [windowDimensions, setWindowDimensions] = useState({
      width: typeof window == "undefined" ? undefined : window.innerWidth,
      height: typeof window == "undefined" ? undefined : window.innerHeight
   });

   const onWindowResized = useCallback(() => {
      if (typeof window == "undefined") return;
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
   }, []);

   useEffect(() => {
      // Listen for window size changes
      if (typeof window == "undefined") return;
      window.addEventListener("resize", onWindowResized);
      return () => {
         window.removeEventListener("resize", onWindowResized);
      };
   }, []);

   return windowDimensions;
};

export default useWindowDimensions;
