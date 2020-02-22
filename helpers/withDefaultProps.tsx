function withDefaultProps<T>(Component: React.FC, defaultProps: T) {
   return (props: T) => <Component {...defaultProps} {...props} />;
}

export default withDefaultProps;
