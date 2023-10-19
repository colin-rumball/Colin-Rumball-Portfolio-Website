interface Props extends React.ComponentPropsWithoutRef<"header"> {}

const Header = (props: Props) => {
  return <header {...props}></header>;
};

export default Header;
