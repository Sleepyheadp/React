function WithTheme(WrappedComponent) {
  return (props) => <WrappedComponent theme="dark" {...props} />;
}

export default WithTheme;
