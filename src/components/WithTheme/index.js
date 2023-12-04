function WithTheme(WrappedComponent){
  return (props) => <WrappedComponent {...props}></WrappedComponent>
}
export default WithTheme
