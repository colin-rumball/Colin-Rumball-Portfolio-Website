const GetComponentDisplayName = Component => {
   return Component.displayName || Component.name || "Component";
};

export default GetComponentDisplayName;
