/* eslint-disable react/display-name */

const useWithAuth = WrapperComponent => (props) => {
    return <WrapperComponent {...props} />;
  };
  
  export default useWithAuth;
  