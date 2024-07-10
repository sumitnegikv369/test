/* eslint-disable react/display-name */

import { useContext } from "react";
import { MyContext } from "../App";

const useWithAuth = WrapperComponent => (props) => {
    return <WrapperComponent {...props} userTypeData={useContext(MyContext)} />;
  };
  
  export default useWithAuth;
  