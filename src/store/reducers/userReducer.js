import * as types from '../../constants/actionTypeConstants';

const initialState={
  employeeList: null,
}

export default function(state =initialState, action){
  switch(action.type){
    case types.STORE_EMPLOYEE_LIST:return{
      ...state,
      employeeList: action.payload
    };
    default: break;

}
return state;

}