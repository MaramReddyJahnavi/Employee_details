import { details } from '../../constants/employeeDetails';
import * as types from "../../constants/actionTypeConstants";

const getEmployeeListAction = () => {
  console.log("Entered action :",details);
  const { user } = details;
  return dispatch => {
        return dispatch({ type: types.STORE_EMPLOYEE_LIST, payload: user });
  };
};

const onLoginSuccessAction = () => {
  const { user } = details;
  console.log("user :",user);
  return dispatch => {
    return dispatch({
      type: types.STORE_EMPLOYEE_LIST,
      payload: user
    });
  };
};

export { onLoginSuccessAction, getEmployeeListAction } ;